import React from "react";

const EditTitle = ({ invoiceId }) => {
  return (
    <div className="flex justify-center">
      <div className="NewTitle mt-6 w-327">
        <h2 className="text-0C0E16 dark:text-FFFF text-heading-2">
          Edit <span className="text-7E88C3">#</span>
          {invoiceId}
        </h2>
      </div>
    </div>
  );
};

export default EditTitle;
