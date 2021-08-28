import client from './client'

const ENDPOINT = "auth"

const login = (data: any) => {
  console.log('data', data);
  const url = `${client.BASE_URL}/${ENDPOINT}/login`;

  return new Promise((resolve, reject) => {
    return client.post(url, data)
      .then(response => {
        console.log('response', response)
        resolve(response)
      })
      .catch(reject)
  });
};

const register = (data: any) => {
  const url = `${client.BASE_URL}/${ENDPOINT}/register`;
  return new Promise((resolve, reject) => {
    return client.post(url, data)
      .then(response => resolve(response))
      .catch(reject)
  });
};

const get_data = () => {
  const url = `${client.BASE_URL}/${ENDPOINT}/me`;

  return new Promise((resolve, reject) => {
    return client.get(url)
      .then(response => resolve(response))
      .catch(reject)
  });
};



export default {
  login,
  register,
  get_data
}