import axios from 'axios';
const HOST = "http://localhost/"

export const auth = async (data: any) => {        
    const email = data.email
    const username = data.username
    const password = data.password
    axios.post(`${HOST}auth/users/`, {email, username, password})
  .then(response => { 
    console.log(response);
    return response.data
  }) 
  .catch(err => { 
    console.log(err.response.data); 
  })
    
};

export const getToken = async (data: any) => {        
  const username = data.username
  const password = data.password

  const resp = await axios.post(`${HOST}auth/jwt/create/`, {username, password})
  .then(response => { 
    console.log(response);
    return response.data
  }) 
  .catch(err => { 
    console.log('7777',err.response.data); 
  })
  return resp
};

export const getId = async () => {
  const config = { headers: {'Authorization': `Bearer ${localStorage.getItem('access_token')}`,} } 
  const response = await axios.get(`${HOST}auth/users/me/`, config);
  return response.data
};

export const getUuid = async () => {
  const id = Number(localStorage.getItem('id'))
  const config = { headers: {'Authorization': `Bearer ${localStorage.getItem('access_token')}`,} } 
  const response = await axios.post(`${HOST}accounts/`, {id: id}, config);
  return response.data
};   

export const getMe = async () => {
  const config = { headers: {'Authorization': `Bearer ${localStorage.getItem('access_token')}`,} } 
  const response = await axios.get(`${HOST}auth/users/me/`, config);
  return response.data
};

export const getCard = async () => {
  const config = { headers: {'Authorization': `Bearer ${localStorage.getItem('access_token')}`,} } 
  const response = await axios.get(`${HOST}cards/`, config);  
  return response.data
};

export const createCard1 = async (data:any) => {
  const config = { headers: {'Authorization': `Bearer ${localStorage.getItem('access_token')}`,} } 
  const response = await axios.post(`${HOST}cards/`, data, config);  
  return response.data
};

export const getOperations1 = async () => {
  const config = { headers: {'Authorization': `Bearer ${localStorage.getItem('access_token')}`,} } 
  const response = await axios.get(`${HOST}transactions/`, config);
  return response.data
};

export const creatOperations1 = async (data: any) => {
  const config = { headers: {'Authorization': `Bearer ${localStorage.getItem('access_token')}`,} } 
  const response = await axios.post(`${HOST}transactions/`, data, config);
  return response.data
};

export const deleteCard1 = async (id: string) => {
  const config = { headers: {'Authorization': `Bearer ${localStorage.getItem('access_token')}`,} } 
  const response = await axios.delete(`${HOST}cards/${id}/`, config);
  return response.data
};

export const changePassword1 = async (data: any) => {
  const config = { headers: {'Authorization': `Bearer ${localStorage.getItem('access_token')}`,} } 
  const response = await axios.post(`${HOST}auth/users/set_password/`, data, config);
  console.log(response);
  return response.data
};

export const changeUsername1 = async (data: any) => {
  const config = { headers: {'Authorization': `Bearer ${localStorage.getItem('access_token')}`,} } 
  const response = await axios.post(`${HOST}auth/users/set_username/`, data, config);
  console.log(response);
  return response.data
};
