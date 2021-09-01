import axios from "axios";
import { BaseURL } from "../config";

export async function getData(url) {
  return await axios.get(`${BaseURL}${url}`).then((response) => response.data);
}

export async function postData(url, data) {
  const headers = {
    Accept: "application/json",
  };

  return await axios
    .post(`${BaseURL}${url}`, data, { headers })
    .then((response) => response.data);
}
