"use client";
import Modal from "@/app/_components/Modal/Modal";
import { CountWords, modelClose, modelOpen } from "@/helper";
import Link from "next/link";
import React, { useRef, useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import { MdOutlineDelete } from "react-icons/md";
import {
  deleteUserType,
  getUserType,
  manageUserTypeUpdate,
} from "../../_api/MangeUserTypeApi";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

const ManageUserTypeList = ({ userType }: any) => {
  const [singleUserTypeInfo, setSingleUserTypeInfo] = useState<any>(null);
  const updateModal = useRef<any>(null);
  const updateModelForm = useRef<any>(null);
  const [error, setError] = useState<any>({
    bnName: "",
    enName: "",
  });

  const handleEdit = async (id: number) => {
    const singleUserType = await getUserType(id);
    setSingleUserTypeInfo(singleUserType?.data);
    modelOpen(updateModal, updateModelForm);
  };

  const handleUpdateUserType = async (e: any) => {
    e.preventDefault();
    const name_bn = e.target.bnName.value;
    const name_en = e.target.enName.value;
    const status = e.target.status.value;
    if (name_bn === "" || name_en === "") {
      setError({
        bnName: "Name is required",
        enName: "Name is required",
      });
      return;
    }

    if (CountWords(name_bn) > 5) {
      setError({
        bnName: "Name is 5 word only allow",
        enName: "",
      });
      return;
    }

    if (CountWords(name_en) > 5) {
      setError({
        bnName: "Name is 5 word only allow",
        enName: "",
      });
      return;
    }

    try {
      const data = {
        id: singleUserTypeInfo?.id,
        name_bn,
        name_en,
        status,
      };
      // console.log(data);

      const response = await manageUserTypeUpdate(data);
      console.log(response);

      if (response?.status) {
        setError({
          bnName: "",
          enName: "",
        });
        modelClose(updateModal, updateModelForm);
        toast.success(response?.message);
      }
    } catch (error) {
      toast.error("Failed to update user type");
    }
  };

  const handleDelete = async (id: number) => {
    if (id) {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          const serviceDeleteData = deleteUserType(id)
            .then((data) => {
              if (data) {
                Swal.fire("Deleted!", "Your file has been deleted.", "success");
              } else {
                Swal.fire("Error!", "Something went wrong.", "error");
              }
            })
            .catch((err) => {
              console.log(err);
            });
        }
      });
    }
  };

  return (
    <>
      <section>
        <div className="flex flex-wrap justify-between">
          <h3 className="text-32 font-mono font-bold text-[#151D48] pb-5">
            User Type List
          </h3>
          <div>
            <Link
              href={{
                pathname: "/admin/manage-user-type/create",
              }}
              shallow
              className="flex items-center gap-2 bg-primary hover:border hover:border-primary rounded-md text-white hover:text-primary hover:bg-white text-14 px-2 py-1 lg:px-4 lg:py-2"
            >
              <span>
                <svg
                  className="w-4 h-4 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" />
                </svg>
              </span>
              <span>Create User Type</span>
            </Link>
          </div>
        </div>
        <div className="w-full overflow-x-auto bg-white  rounded-md">
          <table className="w-full">
            <thead className="border-b border-gray-200  bg-primary text-white  h-10 text-12 md:text-15">
              <tr>
                <th className="text-sm text-center px-2">SL</th>
                <th className="text-sm text-center px-2">Name (Bangla)</th>
                <th className="text-sm text-center px-2">Name(English)</th>
                <th className="text-sm text-center">Active User</th>
                <th className="text-sm text-center">Status</th>
                <th className="text-sm text-center">Options</th>
              </tr>
            </thead>
            <tbody className="[&>tr]:border-b [&>tr]:border-gray-200 [&>tr]:text-left [&>tr]:h-16 text-12 lg:text-16 ">
              {userType?.map((item: any, index: number) => (
                <tr key={index}>
                  <td className="px-3">
                    <span className="border border-gray-300 px-2 py-1 rounded-md">
                      {index + 1}
                    </span>
                  </td>
                  <td className="px-2 border-r border-gray-200">
                    {item?.name_bn}
                  </td>
                  <td className="px-2 border-r border-gray-200">
                    {item?.name_en}
                  </td>
                  <td className="text-center border-r border-gray-200">1</td>
                  <td className="text-center border-r border-gray-200">
                    {item?.status === "1" ? (
                      <span className="bg-green-500 text-white px-2 py-1 rounded-md">
                        Active
                      </span>
                    ) : (
                      <span className="bg-red-500 text-white px-2 py-1 rounded-md">
                        Deractive
                      </span>
                    )}
                  </td>
                  <td className="flex justify-center items-center border- mt-4 border-gray-200">
                    <button
                      onClick={() => {
                        handleEdit(item?.id);
                      }}
                      className="p-1 active:scale-90 transition-all duration-400 rounded-md border border-gray-300"
                    >
                      <svg
                        className="w-5 h-5 fill-[#A4A4A4]"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                      >
                        <path d="M441 58.9L453.1 71c9.4 9.4 9.4 24.6 0 33.9L424 134.1 377.9 88 407 58.9c9.4-9.4 24.6-9.4 33.9 0zM209.8 256.2L344 121.9 390.1 168 255.8 302.2c-2.9 2.9-6.5 5-10.4 6.1l-58.5 16.7 16.7-58.5c1.1-3.9 3.2-7.5 6.1-10.4zM373.1 25L175.8 222.2c-8.7 8.7-15 19.4-18.3 31.1l-28.6 100c-2.4 8.4-.1 17.4 6.1 23.6s15.2 8.5 23.6 6.1l100-28.6c11.8-3.4 22.5-9.7 31.1-18.3L487 138.9c28.1-28.1 28.1-73.7 0-101.8L474.9 25C446.8-3.1 401.2-3.1 373.1 25zM88 64C39.4 64 0 103.4 0 152V424c0 48.6 39.4 88 88 88H360c48.6 0 88-39.4 88-88V312c0-13.3-10.7-24-24-24s-24 10.7-24 24V424c0 22.1-17.9 40-40 40H88c-22.1 0-40-17.9-40-40V152c0-22.1 17.9-40 40-40H200c13.3 0 24-10.7 24-24s-10.7-24-24-24H88z" />
                      </svg>
                    </button>
                    <button
                      onClick={() => {
                        handleDelete(item?.id);
                      }}
                      className="p-1 active:scale-90 transition-all duration-400 rounded-md border border-red-300 ml-2"
                    >
                      <svg
                        className="w-5 h-5 fill-[red]"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                      >
                        <path d="M170.5 51.6L151.5 80h145l-19-28.4c-1.5-2.2-4-3.6-6.7-3.6H177.1c-2.7 0-5.2 1.3-6.7 3.6zm147-26.6L354.2 80H368h48 8c13.3 0 24 10.7 24 24s-10.7 24-24 24h-8V432c0 44.2-35.8 80-80 80H112c-44.2 0-80-35.8-80-80V128H24c-13.3 0-24-10.7-24-24S10.7 80 24 80h8H80 93.8l36.7-55.1C140.9 9.4 158.4 0 177.1 0h93.7c18.7 0 36.2 9.4 46.6 24.9zM80 128V432c0 17.7 14.3 32 32 32H336c17.7 0 32-14.3 32-32V128H80zm80 64V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16zm80 0V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16zm80 0V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16z" />
                      </svg>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <Modal
        modalRef={updateModal}
        modalForm={updateModelForm}
        title="প্যারেন্ট অনুমতির নাম তৈরি করুন"
      >
        <form
          onSubmit={handleUpdateUserType}
          // onSubmit={handleSubmit(handleMangeUser)}
          className="flex flex-col gap-3 mt-3 "
        >
          <div className="w-full">
            <fieldset className="flex flex-col border rounded-md px-2">
              <legend>
                <label
                  htmlFor="ServiceName"
                  className="after:content-['_*'] after:text-red-500"
                >
                  Name (Bangle)
                </label>
              </legend>
              <input
                name="bnName"
                type="text"
                defaultValue={singleUserTypeInfo?.name_bn}
                placeholder="Name (Bangle)"
                className="outline-none p-1 mb-2"
              />
            </fieldset>
            {error.bnName && (
              <p className="text-red-500 text-12 px-2 pt-1">{error.bnName}</p>
            )}
          </div>

          <div className="w-full">
            <fieldset className="flex flex-col border rounded-md px-2">
              <legend>
                <label
                  htmlFor="ServiceName"
                  className="after:content-['_*'] after:text-red-500"
                >
                  Name (English)
                </label>
              </legend>
              <input
                defaultValue={singleUserTypeInfo?.name_en}
                name="enName"
                id="enName"
                type="text"
                placeholder="Name (English)"
                className="outline-none p-1 mb-2"
              />
            </fieldset>
            {error.enName && (
              <p className="text-red-500 text-12 px-2 pt-1">{error.enName}</p>
            )}
          </div>
          <div>
            <fieldset className="flex flex-col border rounded-md px-2">
              <legend>
                <label
                  htmlFor="ServiceName"
                  className="after:content-['_*'] after:text-red-500"
                >
                  Status
                </label>
              </legend>
              <select
                name="status"
                id="status"
                className="outline-none p-1 mb-2"
              >
                <option value="1" selected={singleUserTypeInfo?.status == 1}>
                  Active
                </option>
                <option value="0" selected={singleUserTypeInfo?.status == 0}>
                  Deactive
                </option>
              </select>
            </fieldset>
          </div>

          <div className="flex justify-end gap-3 mt-7">
            <button
              type="button"
              onClick={() => {
                modelClose(updateModal, updateModelForm);
              }}
              className="bg-red-500 text-white px-4 py-2 rounded-md"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md"
            >
              Update
            </button>
          </div>
        </form>
      </Modal>
    </>
  );
};

export default ManageUserTypeList;
