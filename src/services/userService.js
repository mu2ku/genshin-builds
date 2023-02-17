import * as tokenService from '../services/tokenService.js'
const BASE_URL = '/api/users'

function getAllUsers() {
  return fetch(BASE_URL, {
    headers: {Authorization: `Bearer ${tokenService.getToken()}`}
  })
  .then(res => res.json())
}

export {
  getAllUsers
}