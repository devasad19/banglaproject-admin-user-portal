"use server";
import axiosInstance from "@/lib/AxiosInstance";

// create user Type api

export const OrganizationRequestDataGet = async () => {
  try {
    const response = await axiosInstance.get("/admin/service-request-list", {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    return error;
  }
};


