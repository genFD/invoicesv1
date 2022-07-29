import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Navbar, GoBack, Form, EditTitle } from '../components';
import { useGlobalContext } from '../context/context';

function EditInvoice() {
  const navigate = useNavigate();
  const editReroute = () => {
    if (window.innerWidth >= 768) {
      navigate('/');
    }
  };

  useEffect(() => {
    window.addEventListener('resize', () => {
      editReroute();
    });
    return () =>
      window.removeEventListener('resize', () => {
        editReroute();
      });
  }, []);
  return (
    <>
      <Navbar />
      <div className="flex flex-col">
        <GoBack />
        <EditTitle />
        <Form />
      </div>
    </>
  );
}

export default EditInvoice;
