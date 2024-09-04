"use client";

import Image from "next/image";
import { modelClose, modelOpen, relative_image_path } from "@/helper";
import Link from "next/link";
import Modal from "@/app/_components/Modal/Modal";
import { useRef } from "react";
import { useForm } from "react-hook-form";

const Home = () => {
  const addUserModal = useRef(null);
  const UpdateUser = useRef(null);
  const addUserForm = useRef(null);
  const updateUserForm = useRef(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  return (
    <>
      <div className="bg-white p-6">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 pb-10">
          <h3 className="text-24 font-bold">ব্যবহারকারী ব্যবস্থাপনা</h3>
          <button
            onClick={() => {
              modelOpen(addUserModal);
            }}
            className="bg-primary text-white px-4 py-2 rounded-md"
          >
            নতুন ইউজার এন্ট্রি
          </button>
        </div>
        <div>
          <div className="w-full overflow-x-auto">
            <table className="w-full text-center">
              <thead>
                <tr className="bg-[#E1F6F9] h-12">
                  <th>#</th>
                  <th>ছবি</th>
                  <th>নাম</th>
                  <th>ইমেইল</th>
                  {/* <th>ইউজার নেম</th> */}
                  <th> রোল</th>
                  {/* <th>ইউজার ধরন</th> */}
                  <th>ফোন</th>
                  <th>স্ট্যাটাস</th>
                  <th>ক্রিয়াকলাপ</th>
                </tr>
              </thead>
              <tbody>
                <tr className="h-16 border-b border-gray-300 hover:bg-gray-100">
                  <td>1</td>
                  <td>
                    <div className="flex items-center justify-center">
                      <Image
                        src={relative_image_path("user1.png")}
                        className="w-[2.125em] h-[2.125em] rounded-full"
                        width={1000}
                        height={1000}
                        alt="Bangla"
                      />
                    </div>
                  </td>
                  <td>Demo User</td>
                  <td>demo@demo.com</td>
                  {/* <td>00000000</td> */}
                  <td>
                    <span className="bg-yellow-500 text-white px-2 py-1 text-14 rounded-md">
                      Super Admin
                    </span>
                  </td>
                  {/* <td>
                    <span className="bg-indigo-500 text-white px-2 py-1 rounded-md">
                      PRP User
                    </span>
                  </td> */}
                  <td>0123456789</td>
                  <td>
                    <span className="bg-green-500 text-white px-2 py-1 rounded-md text-14">
                      সক্রিয়
                    </span>
                  </td>
                  <td className="flex items-center justify-center my-2">
                    <div className="flex flex-col gap-2">
                      {/* <Modal
                      id={"1"}
                      trigger={"সংশোধন"}
                      title={"ইউজার সংশোধন"}
                      subFunc={UpdateUser}
                      subFuncTitle={"Update"}
                    >
                      <div className="pt-3">
                        <fieldset className="flex flex-col border rounded-md px-2">
                          <legend>
                            <label htmlFor="name">Name</label>
                          </legend>
                          <input
                            type="text"
                            id="name"
                            className="w-full outline-none"
                            placeholder="User Name"
                          />
                        </fieldset>
                        <fieldset className="flex flex-col border rounded-md px-2">
                          <legend>
                            <label htmlFor="name">Email</label>
                          </legend>
                          <input
                            type="email"
                            id="name"
                            className="w-full outline-none"
                            placeholder="example@example.com"
                          />
                        </fieldset>
                        <fieldset className="flex flex-col border rounded-md px-2">
                          <legend>
                            <label htmlFor="name">Phone</label>
                          </legend>
                          <input
                            type="phone"
                            id="name"
                            className="w-full outline-none"
                            placeholder="+8801..."
                          />
                        </fieldset>
                        <fieldset className="flex flex-col border rounded-md px-2">
                          <legend>
                            <label htmlFor="name">Role</label>
                          </legend>
                          <select name="role" id="" className="bg-white py-1">
                            <option value="user">User</option>
                            <option value="admin">Admin</option>
                          </select>
                        </fieldset>
                        <fieldset className="flex flex-col border rounded-md px-2">
                          <legend>
                            <label htmlFor="name">Password</label>
                          </legend>
                          <input
                            type="password"
                            className="w-full outline-none"
                          />
                        </fieldset>
                        <fieldset className="flex flex-col border rounded-md px-2">
                          <legend>
                            <label htmlFor="name">Confirm Password</label>
                          </legend>
                          <input
                            type="password"
                            className="w-full outline-none"
                          />
                        </fieldset>
                      </div>
                    </Modal> */}

                      <button className="bg-green-500 text-white px-2 py-1 text-14 rounded-md">
                        সংশোধন
                      </button>

                      <div className="flex gap-2">
                        <Link
                          href={"/admin/manage-role"}
                          className="bg-yellow-500 text-white px-2 py-1 text-14 rounded-md"
                        >
                          ভুমিকা পরিচালনা
                        </Link>
                        <button
                          onClick={() => {
                            confirm("Are you sure?");
                          }}
                          className="bg-red-500 text-white px-2 py-1 text-14 rounded-md"
                        >
                          মুছে ফেলুন
                        </button>
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Modal
        modalForm={addUserForm}
        modalRef={addUserModal}
        title={" Add User"}
      >
        <form className="pt-3 space-y-3" ref={addUserForm}>
          <div>
            <fieldset className="flex flex-col border rounded-md px-2">
              <legend>
                <label htmlFor="name">Name</label>
              </legend>
              <input
                type="text"
                id="name"
                {...register("name", { required: true })}
                className="w-full outline-none"
                placeholder="User Name"
              />
            </fieldset>
            {errors.name && (
              <span className="text-red-500 text-12">
                This field is required
              </span>
            )}
          </div>
          <div>
            <fieldset className="flex flex-col border rounded-md px-2">
              <legend>
                <label htmlFor="email">Email</label>
              </legend>
              <input
                type="email"
                {...register("email", { required: true })}
                className="w-full outline-none"
                placeholder="example@example.com"
              />
            </fieldset>
            {errors.email && (
              <span className="text-red-500 text-12">
                This field is required
              </span>
            )}
          </div>
          <div>
            <fieldset className="flex flex-col border rounded-md px-2">
              <legend>
                <label htmlFor="name">Phone</label>
              </legend>
              <input
                type="phone"
                id="name"
                {...register("phone", { required: true })}
                className="w-full outline-none"
                placeholder="+8801..."
              />
            </fieldset>
            {errors.phone && (
              <span className="text-red-500 text-12">
                This field is required
              </span>
            )}
          </div>
          <div>
            <fieldset className="flex flex-col border rounded-md px-2">
              <legend>
                <label htmlFor="name">Role</label>
              </legend>
              <select
                {...register("role", { required: true })}
                className="bg-white py-1"
              >
                <option value="user">User</option>
                <option value="admin">Admin</option>
              </select>
            </fieldset>
            {errors.role && (
              <span className="text-red-500 text-12">
                This field is required
              </span>
            )}
          </div>
          <div>
            <fieldset className="flex flex-col border rounded-md px-2">
              <legend>
                <label htmlFor="name">Password</label>
              </legend>
              <input
                type="password"
                {...register("password", { required: true })}
                className="w-full outline-none"
              />
            </fieldset>
            {errors.password && (
              <span className="text-red-500 text-12">
                This field is required
              </span>
            )}
          </div>
          <div>
            <fieldset className="flex flex-col border rounded-md px-2">
              <legend>
                <label htmlFor="name">Confirm Password</label>
              </legend>
              <input
                type="password"
                {...register("c_password", { required: true })}
                className="w-full outline-none"
              />
            </fieldset>
            {errors.c_password && (
              <span className="text-red-500 text-12">
                This field is required
              </span>
            )}
          </div>
          <div className="pt-6 flex justify-end">
            <div className="flex items-center gap-4">
              <button
                type="button"
                className="btn"
                onClick={() => {
                  modelClose(addUserModal, addUserForm);
                }}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-3 rounded-md"
              >
                Create
              </button>
            </div>
          </div>
        </form>
      </Modal>
    </>
  );
};

export default Home;
