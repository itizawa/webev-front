import { VFC } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styled from 'styled-components';

import { BootstrapColor, BootstrapIcon } from '~/interfaces/variables';
import { useLocale } from '~/hooks/useLocale';

import { SidebarDirectory } from '~/components/Sidebar/SidebarDirectory';
import { Icon } from '~/components/Icons/Icon';

export const Sidebar: VFC = () => {
  const router = useRouter();
  const { t } = useLocale();

  const navbarItemMappings = [
    { text: t.home, url: '/home', icon: BootstrapIcon.HOME },
    { text: t.read, url: '/read', icon: BootstrapIcon.OUTLINE_CHECK },
    { text: t.directory, url: '/directory', icon: BootstrapIcon.DIRECTORY },
  ];

  return (
    <div className="sticky-top">
      <ul className="list-group gap-3 py-3">
        {navbarItemMappings.map((v) => {
          return (
            <Link key={v.text} href={v.url}>
              <StyledList className="list-group-item mx-3 border-0" isActive={v.url === router.pathname} role="button">
                {v.icon != null && <Icon icon={v.icon} color={BootstrapColor.LIGHT} />}
                <span className="ms-3">{v.text}</span>
              </StyledList>
            </Link>
          );
        })}
      </ul>
      <hr className="mt-0" />
      <SidebarDirectory />
    </div>
  );
};

const StyledList = styled.li<{ isActive: boolean }>`
  padding: 10px;
  color: #eee;
  background-color: inherit;
  border-radius: 3px;

  ${({ isActive }) =>
    isActive
      ? `
    margin-top: 0px;
    background-color: #00acc1;
    box-shadow: 0 12px 20px -10px rgba(0, 172, 193, 0.28), 0 4px 20px 0 rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(0, 172, 193, 0.2);
  `
      : `:hover {
    background-color: rgba(200, 200, 200, 0.2);
    transition: all 300ms linear;
  }`}
`;
