import React from 'react';
import { Edit, Delete, MarkAsPaid } from '../components';

const Status = ({ status }) => {
  return (
    <article className="mt-8 flex justify-center">
      <div className="w-327 tablet:w-[688px] h-91 bg-FFFF dark:bg-1E2139 header-detail flex items-center justify-between px-6">
        <p className="text-7E88C3 font-medium dark:text-DFE3FA">Status</p>
        <div
          className={`${
            status === 'paid'
              ? 'bg-33D69F'
              : status === 'pending'
              ? 'bg-FF8F00'
              : 'bg-373B53'
          } flex justify-center items-center rounded-md w-104 h-10 mix-blend-normal bg-opacity-5`}
        >
          <div className="w-fit h-4 flex items-center gap-2">
            <span
              className={`${
                status === 'paid'
                  ? 'bg-33D69F'
                  : status === 'pending'
                  ? 'bg-FF8F00'
                  : 'bg-373B53 dark:bg-DFE3FA'
              } rounded-full h-2 w-2`}
            ></span>
            <p
              className={`${
                status === 'paid'
                  ? 'text-33D69F'
                  : status === 'pending'
                  ? 'text-FF8F00'
                  : 'text-373B53 dark:text-DFE3FA'
              } font-bold text-heading-4`}
            >
              {status ? status.toUpperCase() : 'status'}
            </p>
          </div>
        </div>
        <div className="hidden tablet:flex gap-x-2">
          <Edit />
          <Delete />
          <MarkAsPaid />
        </div>
      </div>
    </article>
  );
};

export default Status;
