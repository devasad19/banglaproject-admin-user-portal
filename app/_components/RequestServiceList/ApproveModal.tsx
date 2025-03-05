"use client";
import React, { useRef } from "react";
import Modal from "../Modal/Modal";
import { modelClose } from "@/helper";

type ApproveModalProps = {
  addModal: React.RefObject<HTMLFormElement>| any;
  // addModelForm: any;
  // setSubmitError: any;
  // handleRolePermission: any;
  // allParentPermissionList: any;
  // setPermission: any;
  // isLoading: boolean;
};

const ApproveModal: React.FC<ApproveModalProps> = ({
  addModal,
}) => {
  const addModalFromRef = useRef(null);
  const handleApprove = (e: any) => {
    e.preventDefault();
    console.log("submit");
  };

  return (
    <>
      <Modal
        modalRef={addModal}
        modalForm={addModalFromRef}
        // setServiceValidation={setSubmitError}
        title="Approve Service"
      >
        <>
          <form className="pt-3" ref={addModalFromRef} onSubmit={handleApprove}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 border-b border-gray-300 pb-5 mb-5">
            
              {/* Secret Key Field */}
              <div>
                <fieldset className="flex flex-col border rounded-md px-2">
                  <legend>
                    <label
                      htmlFor="secretKey"
                      className="after:content-['_*'] after:text-red-400"
                    >
                      Secret Key
                    </label>
                  </legend>
                  <input
                    type="text"
                    id="secretKey"
                    name="secretKey"
                    className="w-full outline-none text-14 py-1"
                    placeholder="Enter Secret Key"
                  />
                </fieldset>
              </div>

              {/* API Key Field */}
              <div>
                <fieldset className="flex flex-col border rounded-md px-2">
                  <legend>
                    <label
                      htmlFor="apiKey"
                      className="after:content-['_*'] after:text-red-400"
                    >
                      API Key
                    </label>
                  </legend>
                  <input
                    type="text"
                    id="apiKey"
                    name="apiKey"
                    className="w-full outline-none text-14 py-1"
                    placeholder="Enter API Key"
                  />
                </fieldset>
              </div>

              {/* API Documentation URL */}
              <div>
                <fieldset className="flex flex-col border rounded-md px-2">
                  <legend>
                    <label
                      htmlFor="apiDoc"
                      className="after:content-['_*'] after:text-red-400"
                    >
                      API Documentation URL
                    </label>
                  </legend>
                  <input
                    type="url"
                    id="apiDoc"
                    name="apiDoc"
                    className="w-full outline-none text-14 py-1"
                    placeholder="Enter API Documentation URL"
                  />
                </fieldset>
              </div>

              {/* Callback URL */}
              <div>
                <fieldset className="flex flex-col border rounded-md px-2">
                  <legend>
                    <label
                      htmlFor="callbackUrl"
                      className="after:content-['_*'] after:text-red-400"
                    >
                      Callback URL
                    </label>
                  </legend>
                  <input
                    type="url"
                    id="callbackUrl"
                    name="callbackUrl"
                    className="w-full outline-none text-14 py-1"
                    placeholder="Enter Callback URL"
                  />
                </fieldset>
              </div>
            </div>

            <div className="pt-6 flex justify-end">
              <div className="flex items-center gap-4">
                <button
                  type="button"
                  className="btn"
                  onClick={() => {
                    // setSubmitError(null);
                    modelClose(addModal, addModalFromRef);
                  }}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-3 rounded-md"
                >
                  Send
                </button>
              </div>
            </div>
          </form>
        </>
      </Modal>
    </>
  );
};

export default ApproveModal;
