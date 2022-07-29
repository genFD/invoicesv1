import React from 'react';
import {
  EditTitle,
  BillFrom,
  BillTo,
  BillInformation,
  ItemList,
  AddItem,
} from '../components';

const EditForm = () => {
  return (
    <>
      <EditTitle />
      <BillFrom />
      <BillTo />
      <BillInformation />
      <ItemList />
      <AddItem />
    </>
  );
};

export default EditForm;
