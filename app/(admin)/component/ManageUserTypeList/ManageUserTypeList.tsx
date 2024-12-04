import Link from "next/link";
import React from "react";

const ManageUserTypeList = () => {
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
                <th className="text-sm text-center px-2">Type Name</th>
                <th className="text-sm text-center">Active User</th>
                <th className="text-sm text-center">Status</th>
                <th className="text-sm text-center">Options</th>
              </tr>
            </thead>
            <tbody className="[&>tr]:border-b [&>tr]:border-gray-200 [&>tr]:text-left [&>tr]:h-16 text-12 lg:text-16 ">
              <tr>
                <td className="px-3">
                  <span className="border border-gray-300 px-2 py-1 rounded-md">
                    1
                  </span>
                </td>
                <td  className="px-2 border-r border-gray-200">1</td>
                <td className="text-center border-r border-gray-200">1</td>
                <td className="text-center border-r border-gray-200">1</td>
                <td className="text-center border-r border-gray-200">1</td>
              </tr>

              {/* {services?.length > 0
                ? services?.map((item, index) => {
                    const paidStatus = JSON?.parse(item?.paid_status || "{}");
                    return (
                      <tr key={index}>
                        <td className="px-3">
                          <span className="border border-gray-300 px-2 py-1 rounded-md">
                            {index + 1}
                          </span>
                        </td>
                        <td className="px-2 border-r border-gray-200">
                          <Link
                            href={{
                              pathname: `/admin/services/${item?.id}`,
                            }}
                            className="flex items-center gap-2 text-14"
                            shallow
                          >
                            <span className="flex items-center gap-3">
                              <Image
                                className="w-10 h-10 rounded-md"
                                src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${item?.logo}`}
                                height={1000}
                                width={1000}
                                alt="Bangla"
                              />
                              {item?.name || " "}
                            </span>
                          </Link>
                        </td>
                        <td className="text-center border-r border-gray-200">
                          {JSON.parse(item?.type).toString()}
                        </td>

                        <td className="text-center border-r border-gray-200">
                          {item?.production_status || ""}
                        </td>
                        <td className="text-center border-r border-gray-200">
                          <div className="flex items-center gap-2">
                            {paidStatus?.free == 1 ? (
                              <button className="bg-[#2F93DF] px-1 py-1 lg:px-2 lg:py-1 text-sm text-white  rounded ">
                                Free
                              </button>
                            ) : (
                              ""
                            )}

                            {paidStatus?.pro == 1 && (
                              <button className="bg-[#1AB17A] px-1 py-1 lg:px-2 lg:py-1 text-sm text-white  rounded ">
                                Pro
                              </button>
                            )}
                          </div>
                        </td>
                        <td className="text-center border-r border-gray-200">
                          {item?.completion_status == 3 ? (
                            <button
                              onClick={() =>
                                UpdateServicePublishStatus(
                                  item?.id,
                                  item?.status == 1 ? 0 : 1
                                )
                              }
                              className={`text-white w-[6em] py-1 rounded transition-all duration-300 ${
                                item?.status == 1
                                  ? "bg-green-700"
                                  : "bg-yellow-500"
                              }`}
                            >
                              {item?.status == 1 ? "Publish" : "Unpublish"}
                            </button>
                          ) : (
                            <button className="bg-white border border-red-500 text-red-500 text-center text-sm w-[6em] py-1 rounded">
                              Incomplete
                            </button>
                          )}
                        </td>
                        <td className="">
                          <div className="w-full flex items-center justify-center gap-2">
                            <>
                              {item?.completion_status == 3 && (
                                <Link
                                  href={{
                                    pathname: `/admin/services/${item?.id}`,
                                  }}
                                  shallow
                                  className="px-2 py-1  bg-green-500 text-white active:scale-90 transition-all duration-400 rounded-md"
                                >
                                  View
                                </Link>
                              )}

                              <Link
                                href={{
                                  pathname: `/admin/services/edit/${item?.id}`,
                                }}
                                className="px-2 py-1  bg-blue-500 text-white active:scale-90 transition-all duration-400 rounded-md"
                              >
                                {item?.completion_status == 3
                                  ? "Edit"
                                  : "Update"}
                              </Link>

                              {item?.completion_status == 3 && (
                                <button
                                  onClick={() => handleDelete(item?.id)}
                                  className="p-1  bg-red-500 text-white active:scale-90 transition-all duration-400 rounded-md"
                                >
                                  <svg
                                    className="w-4 h-4 fill-current"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 448 512"
                                  >
                                    <path d="M135.2 17.7C140.6 6.8 151.7 0 163.8 0H284.2c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32h96l7.2-14.3zM32 128H416V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V128zm96 64c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16z" />
                                  </svg>
                                </button>
                              )}
                            </>
                          </div>
                        </td>
                      </tr>
                    );
                  })
                : ""} */}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};

export default ManageUserTypeList;