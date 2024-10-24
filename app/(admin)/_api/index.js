import axios from "axios";
import Cookies from "js-cookie";


const token = Cookies.get("token");


export const updateServiceResource = async (payload, id) => {
  console.log('inside api call: ',payload, id);
  const res = await axios
    .post(
      `${process.env.NEXT_PUBLIC_API_URL}/service/${id}`,
      payload
    )
    .then((res) => {
      return res?.data;
    }).catch((err) => {
      console.log(err);
      return err;
    });
  return res;
};

export const getSingleServiceResource = async (id) => {
  try {
    const data = await axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}/service/${id}`)
      .then((res) => {
        return res?.data;
      }).catch((err) => {
        console.log(err);
        return err;
      });
    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const getUserFeedBacks = async () => {
  try {
    const data = await axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}/admin/feedbacks`)
      .then((res) => {
        return res?.data;
      }).catch((err) => {
        console.log(err);
        return err;
      });
    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
};


export const getSoldServices = async () => {
  try {
    const data = await axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}/admin/services`)
      .then((res) => {
        return res?.data;
      }).catch((err) => {
        console.log(err);
        return err;
      });
    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
};


export const deleteService = async (id) => {
  try {
    const data = await axios
      .delete(`${process.env.NEXT_PUBLIC_API_URL}/service-all/delete/${id}`)
      .then((res) => {
        return res;
      }).catch((err) => {
        console.log(err);
        return err;
      });
    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
};