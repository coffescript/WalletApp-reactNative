/* eslint-disable no-undef */
import axios from "axios";
//const BASE_URL = process.env.REACT_APP_API_URL_DEV;
// const BASE_URL = "https://api.mibo.app/api/"
const BASE_URL = 'http://192.168.0.4/api'

const TIMEOUT = 50000;

const client = axios.create({
  baseURL: BASE_URL,
  timeout: TIMEOUT,
  withCredentials: false,
  responseType: JSON,
  headers: {
    Accept: "application/json",
    "Access-Control-Allow-Origin": "*",
  },
});

const UNAUTHORIZED = 401;

client.interceptors.response.use(
  response => response,
  error => {
    const { status } = error.response;
    if (status === UNAUTHORIZED) {
      localStorage.removeItem("token");
      history.push("/");
    }
    return Promise.reject(error);
  }
);

const get = (...args) => {
  getToken();
  return new Promise((resolve, reject) => {
    client
      .get(...args)
      .then((response) => resolve(response))
      .catch(reject);
  });
};

const post = (...args) => {
  getToken();
  return new Promise((resolve, reject) => {
    client
      .post(...args)
      .then((response) => resolve(response))
      .catch(reject);
  });
};

const remove = (url, data) => {
  getToken();
  return new Promise((resolve, reject) => {
    client
      .delete(url, {
        headers: {
          Authorization: client.defaults.headers.common["Authorization"],
        },
        data,
      })
      .then((response) => resolve(response))
      .catch(reject);
  });
};

const getToken = () => {
  const token = localStorage.getItem("token");
  token
    ? (client.defaults.headers.common["Authorization"] = `Bearer ${token}`)
    : null;
};

const addToken = (token) =>
  (client.defaults.headers.common["Authorization"] = `Bearer ${token}`);
const removeToken = () =>
  (client.defaults.headers.common["Authorization"] = "");

const storeToken = (token) => {
  localStorage.setItem("token", token);
  addToken(token);
};

const clearToken = () => {
  removeToken();
  localStorage.removeItem("token");
};

export default {
  BASE_URL,
  get,
  post,
  remove,
  storeToken,
  clearToken,
};
