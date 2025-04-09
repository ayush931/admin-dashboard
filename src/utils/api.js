import axios from "axios";

export async function postData(url, formData) {
  const response = await fetch(import.meta.env.VITE_APP_URL + url, {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${localStorage.getItem("accessToken")}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });
  if (response.ok) {
    const data = await response.json();
    return data;
  } else {
    const errorData = await response.json();
    return errorData;
  }
}

export async function fetchDataFromApi(url) {
  const params = {
    headers: {
      "Authorization": `Bearer ${localStorage.getItem("accessToken")}`,
      "Content-Type": "application/json",
    }
  }
  const { data } = await axios.get(import.meta.env.VITE_APP_URL + url, params)
  return data
}