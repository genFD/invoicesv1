import React from 'react';
import { useParams } from 'react-router-dom';
import {
  ItemList,
  AddItem,
  Divider,
  FooterNewInvoice,
  FooterEditInvoice,
} from '../components';

const Form = () => {
  const { id } = useParams();
  return (
    <div className="mt-6">
      <form action="" className="w-full flex flex-col items-center">
        <div className="w-327">
          <h4 className="text-7C5DFA text-body-1 font-bold mb-6 ">Bill from</h4>
          <div className="flex flex-col mb-6">
            <label
              htmlFor="StreetAddress"
              className="text-body-1 text-7E88C3 dark:text-888EB0 pb-2 text-sm font-bold text-gray-800 dark:text-gray-100 mb-1"
            >
              Street Address
            </label>
            <input
              type="text"
              name="StreetAddress"
              required
              id="StreetAddress"
              className="border border-7E88C3 dark:border-252945 py-4 px-3 rounded text-body-1 text-0C0E16 font-bold dark:text-FFFF focus:outline-none dark:bg-252945  focus:border-9277FF caret-9277FF"
            />
          </div>

          <div className="flex gap-x-3 mb-6">
            <div className="flex flex-col basis-127">
              <label
                htmlFor="city"
                className="text-body-1 text-7E88C3 dark:text-888EB0 pb-2 text-sm font-bold text-gray-800 dark:text-gray-100 mb-1"
              >
                City
              </label>
              <input
                type="text"
                name="city"
                required
                id="city"
                className="border border-7E88C3 dark:border-252945 px-3 py-4  rounded text-body-1 text-0C0E16 font-bold dark:text-FFFF focus:outline-none bg-transparent dark:bg-252945  focus:border-9277FF caret-9277FF"
              />
            </div>

            <div className="flex flex-col basis-127">
              <label
                htmlFor="postCode"
                className="text-body-1 text-7E88C3 dark:text-888EB0 pb-2 text-sm font-bold text-gray-800 dark:text-gray-100 mb-1"
              >
                Post Code
              </label>
              <input
                type="text"
                name="postCode"
                required
                id="postCode"
                className="border border-7E88C3 dark:border-252945 px-3 py-4 rounded text-body-1 text-0C0E16 font-bold dark:text-FFFF focus:outline-none  dark:bg-252945  focus:border-9277FF caret-9277FF"
              />
            </div>
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="country"
              className="text-body-1 text-7E88C3 dark:text-888EB0 pb-2 text-sm font-bold text-gray-800 dark:text-gray-100 mb-1"
            >
              Country
            </label>
            <input
              type="text"
              name="country"
              required
              id="country"
              className="border border-7E88C3 dark:border-252945 py-4 px-3  rounded text-body-1 text-0C0E16 font-bold dark:text-FFFF focus:outline-none bg-transparent dark:bg-252945  focus:border-9277FF caret-9277FF"
            />
          </div>

          <div className="mt-10">
            <h4 className="text-7C5DFA text-body-1 font-bold mb-6">Bill to</h4>
            <div className="flex flex-col mb-6">
              <label
                htmlFor="clientName"
                className="text-body-1 text-7E88C3 dark:text-888EB0 pb-2 text-sm font-bold text-gray-800 dark:text-gray-100 mb-1"
              >
                Client's Name
              </label>
              <input
                type="text"
                name="clientName"
                required
                id="clientName"
                className="border border-7E88C3 dark:border-252945 py-4 px-3  rounded text-body-1 text-0C0E16 font-bold dark:text-FFFF focus:outline-none bg-transparent dark:bg-252945  focus:border-9277FF caret-9277FF"
              />
            </div>

            <div className="flex flex-col mb-6">
              <label
                htmlFor="clientEmail"
                className="text-body-1 text-7E88C3 dark:text-888EB0 pb-2 text-sm font-bold text-gray-800 dark:text-gray-100 mb-1"
              >
                Client's Email
              </label>
              <input
                type="text"
                name="clientName"
                required
                id="clientName"
                className="border border-7E88C3 dark:border-252945 py-4 px-3  rounded text-body-1 text-0C0E16 font-bold dark:text-FFFF focus:outline-none bg-transparent dark:bg-252945  focus:border-9277FF caret-9277FF"
              />
            </div>

            <div className="flex flex-col mb-6">
              <label
                htmlFor="StreetAddress"
                className="text-body-1 text-7E88C3 dark:text-888EB0 pb-2 text-sm font-bold text-gray-800 dark:text-gray-100 mb-1"
              >
                Street Address
              </label>
              <input
                type="text"
                name="StreetAddress"
                required
                id="StreetAddress"
                className="border border-7E88C3 dark:border-252945 py-4 px-3  rounded text-body-1 text-0C0E16 font-bold dark:text-FFFF focus:outline-none bg-transparent dark:bg-252945  focus:border-9277FF caret-9277FF"
              />
            </div>

            <div className="flex gap-x-3 mb-6 ">
              <div className="flex flex-col basis-127">
                <label
                  htmlFor="city"
                  className="text-body-1 text-7E88C3 dark:text-888EB0 pb-2 text-sm font-bold text-gray-800 dark:text-gray-100 mb-1"
                >
                  City
                </label>
                <input
                  type="text"
                  name="city"
                  required
                  id="city"
                  className="border border-7E88C3 dark:border-252945 px-3 py-4  rounded text-body-1 text-0C0E16 font-bold dark:text-FFFF focus:outline-none bg-transparent dark:bg-252945  focus:border-9277FF caret-9277FF"
                />
              </div>

              <div className="flex flex-col basis-127">
                <label
                  htmlFor="postCode"
                  className="text-body-1 text-7E88C3 dark:text-888EB0 pb-2 text-sm font-bold text-gray-800 dark:text-gray-100 mb-1"
                >
                  Post Code
                </label>
                <input
                  type="text"
                  name="postCode"
                  required
                  id="postCode"
                  className="border border-7E88C3 dark:border-252945 px-3 py-4  rounded text-body-1 text-0C0E16 font-bold dark:text-FFFF focus:outline-none bg-transparent dark:bg-252945  focus:border-9277FF caret-9277FF"
                />
              </div>
            </div>

            <div className="flex flex-col mb-6">
              <label
                htmlFor="country"
                className="text-body-1 text-7E88C3 dark:text-888EB0 pb-2 text-sm font-bold text-gray-800 dark:text-gray-100 mb-1"
              >
                Country
              </label>
              <input
                type="text"
                name="country"
                required
                id="country"
                className="border border-7E88C3 dark:border-252945 py-4 px-3  rounded text-body-1 text-0C0E16 font-bold dark:text-FFFF focus:outline-none bg-transparent dark:bg-252945  focus:border-9277FF caret-9277FF"
              />
            </div>
          </div>

          <div className="mt-10">
            <div className="flex flex-col mb-6">
              <label
                htmlFor="InvoiceDate"
                className="text-body-1 text-7E88C3 dark:text-888EB0 pb-2 text-sm font-bold text-gray-800 dark:text-gray-100 mb-1"
              >
                Invoice Date
              </label>
              <input
                type="date"
                name="InvoiceDate"
                required
                id="InvoiceDate"
                className="border border-7E88C3 dark:border-252945 py-4 px-3  rounded text-body-1 text-0C0E16 font-bold dark:text-FFFF focus:outline-none bg-transparent dark:bg-252945  focus:border-9277FF"
              />
            </div>

            <div className="flex flex-col mb-6">
              <label
                htmlFor="paymentTerms"
                className="text-body-1 text-7E88C3 dark:text-888EB0 pb-2 text-sm font-bold text-gray-800 dark:text-gray-100 mb-1"
              >
                Payment Terms
              </label>
              <select
                type="text"
                name="paymentTerms"
                required
                id="paymentTerms"
                className="border border-7E88C3 dark:border-252945 py-4 px-3  rounded text-body-1 text-0C0E16 font-bold dark:text-FFFF focus:outline-none bg-transparent dark:bg-252945  focus:border-9277FF caret-9277FF"
              >
                <option value="Net1Day">Net 1 Day</option>
                <option value="Net7Days">Net 7 Days</option>
                <option value="Net14Days">Net 14 Days</option>
                <option value="Net30Days">Net 30 Days</option>
              </select>
            </div>

            <div className="flex flex-col mb-6">
              <label
                htmlFor="projectDescription"
                className="text-body-1 text-7E88C3 dark:text-888EB0 pb-2 text-sm font-bold text-gray-800 dark:text-gray-100 mb-1"
              >
                Project Description
              </label>
              <input
                type="text"
                name="projectDescription"
                required
                id="projectDescription"
                className="border border-7E88C3 dark:border-252945 py-4 px-3  rounded text-body-1 text-0C0E16 font-bold dark:text-FFFF focus:outline-none bg-transparent dark:bg-252945  focus:border-9277FF caret-9277FF"
              />
            </div>
          </div>
          <h4 className="text-777F98 text-heading-7 font-bold mt-16">
            Item List
          </h4>
          <ItemList />
          <AddItem />
        </div>
        <Divider />

        {!id ? <FooterNewInvoice /> : <FooterEditInvoice />}
      </form>
    </div>
  );
};

export default Form;
