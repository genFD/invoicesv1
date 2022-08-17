import React from "react";
import Modal from "react-modal";
import { useNavigate, useParams } from "react-router-dom";
import { useGlobalContext } from "../context/context";
import { useModalContext } from "../context/modalcontext";
import { LoadingPost } from "../components";

const DeleteModal = () => {
  const { deleteInvoice, loadingDelete } = useGlobalContext();
  const { close, deleteModal } = useModalContext();
  const { id } = useParams();
  const navigate = useNavigate();
  const afterDelete = () => {
    setTimeout(() => {
      navigate("/");
      close("deleteModal");
    }, 3000);
  };
  return (
    <Modal
      isOpen={deleteModal}
      onRequestClose={() => close("deleteModal")}
      style={deleteModalStyles}
    >
      <div className={containerStyles}>
        <h3 className={h3Styles}>Confirm Deletion</h3>
        <p className="mt-2 text-body-1 text-888EB0 max-w-[285px]">
          Are you sure you want to delete invoice{" "}
          <span className="text-EC5757">{`${id}`}</span> ? This action cannot be
          undone.
        </p>
        {/* buttons section */}
        <div className="mt-6 flex gap-x-2 justify-end">
          <button
            onClick={() => close("deleteModal")}
            className={cancelButtonStyles}
          >
            Cancel
          </button>
          <button
            onClick={() => {
              deleteInvoice(id);
              afterDelete();
            }}
            className={deleteButtonStyles}
          >
            {loadingDelete ? <LoadingPost /> : "Delete"}
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default DeleteModal;

Modal.setAppElement("#root");

/* ------styles -----*/

const deleteModalStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    border: "transparent",
    backgroundColor: "transparent",
  },
};
const containerStyles =
  "bg-FFFF dark:bg-141625 w-327 h-[220px] tablet:w-[480px] tablet:h-[249px] shadow-lg rounded-md flex flex-col p-8 tablet:p-12";
const h3Styles = "text-heading-2 leading-6  dark:text-FFFF text-0C0E16";
const cancelButtonStyles =
  "w-96 h-48 bg-opacity-30 text-7E88C3 bg-252945 rounded-3xl grid place-content-center text-body-1 text-FFFF font-bold";
const deleteButtonStyles =
  "w-96 h-48 text-7E88C3 bg-EC5757 rounded-3xl flex flex-col items-center justify-center text-body-1 text-FFFF font-bold ";
