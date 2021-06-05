import Head from 'next/head';
import { useState, VFC } from 'react';

import styled from 'styled-components';

import { useLocale } from '~/hooks/useLocale';
import { InquiryType } from '~/domains/Inquiry';

const Index: VFC = () => {
  const { t } = useLocale();

  const [inquiryType, setInquiryType] = useState<InquiryType>();
  const [inquiryEmail, setInquiryEmail] = useState<string>();
  const [inquiryText, setInquiryText] = useState<string>();
  console.log(inquiryType);

  return (
    <>
      <Head>
        <title>Webev | {t.inquiry}</title>
      </Head>
      <div className="p-3">
        <h1 className="text-center">{t.inquiry}</h1>
        <StyledDiv className="mx-auto">
          <form className="mt-3 mt-lg-5">
            <div className="mb-3 mb-lg-4">
              <label className="col-form-label">{t.inquiry_type}</label>
              <div>
                <select className="form-select" defaultValue="default" onChange={(e) => setInquiryType(e.target.value as InquiryType)}>
                  <option value="default">{t.open_select}</option>
                  {Object.values(InquiryType).map((v) => {
                    return (
                      <option key={v} value={v}>
                        {t[v]}
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>
            <div className="mb-3 mb-lg-4">
              <label htmlFor="inputEmail" placeholder="hoge@example.com" className="col-form-label">
                {t.inquiry_email}
              </label>
              <div>
                <input type="email" value={inquiryEmail} className="form-control" id="inputEmail" onChange={(e) => setInquiryEmail(e.target.value)} />
              </div>
            </div>
            <div className="mb-3 mb-lg-4">
              <label htmlFor="inputText" placeholder="hoge@example.com" className="col-form-label">
                {t.inquiry_text}
              </label>
              <div>
                <textarea rows={5} value={inquiryText} className="form-control" id="inputText" onChange={(e) => setInquiryText(e.target.value)} />
              </div>
            </div>
          </form>
        </StyledDiv>
      </div>
    </>
  );
};

const StyledDiv = styled.div`
  max-width: 600px;
`;

export default Index;
