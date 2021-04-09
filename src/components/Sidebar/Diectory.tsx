import { useState, VFC } from 'react';
import Link from 'next/link';
import styled from 'styled-components';

import { useTranslation } from 'react-i18next';
import { restClient } from '~/utils/rest-client';

import { toastError, toastSuccess } from '~/utils/toastr';

import { IconButton } from '~/components/Icons/IconButton';
import { BootstrapColor, BootstrapIcon } from '~/interfaces/variables';

import { Icon } from '~/components/Icons/Icon';

export const Diectory: VFC = () => {
  const [isCreatingNewDirectory, setIsCreatingNewDirectory] = useState(false);
  const [name, setName] = useState('');
  const { t } = useTranslation();

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();

    try {
      await restClient.apiPost('/directories', { name });
      toastSuccess(t('toastr.save', { target: 'Directory' }));
      setName('');
    } catch (err) {
      toastError(err);
    }

    setIsCreatingNewDirectory(false);
  };

  return (
    <>
      <h5 className="text-center">
        <Icon icon={BootstrapIcon.DIRECTORY} color={BootstrapColor.LIGHT} />
        <Link href="/directory">
          <span className="ms-2 c-pointer">Directory</span>
        </Link>
      </h5>
      <StyledDiv className="text-center mx-3">
        {isCreatingNewDirectory ? (
          <form className="input-group" onSubmit={onSubmit}>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="form-control bg-white" placeholder="...name" />
          </form>
        ) : (
          <IconButton
            icon={BootstrapIcon.PLUS_DOTTED}
            color={BootstrapColor.LIGHT}
            activeColor={BootstrapColor.LIGHT}
            onClickButton={() => setIsCreatingNewDirectory(true)}
          />
        )}
      </StyledDiv>
    </>
  );
};

const StyledDiv = styled.div`
  > .btn {
    width: 100%;
    border-radius: 3px;
    :hover {
      background-color: rgba(200, 200, 200, 0.2);
      transition: all 300ms linear;
    }
  }
`;