import React from 'react';
import { Discard, SaveAsDraft, SaveAndSend } from '../components';

const FooterNewInvoice = () => {
  return (
    <footer className="tablet:mt-12 flex items-center gap-x-2 h-91 tablet:h-fit tablet:pb-8 box-shadow-footer-invoice justify-center tablet:justify-start tablet:gap-x-32 w-full">
      <div>
        <Discard />
      </div>
      <div className="flex gap-x-2">
        <SaveAsDraft />
        <SaveAndSend />
      </div>
    </footer>
  );
};

export default FooterNewInvoice;
