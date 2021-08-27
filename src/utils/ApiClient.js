import axios from "axios"


const client = axios.create({
  baseURL: "https://udemy-utils.herokuapp.com/api/v1",
  params: {
    token: "token123"
  }
})

export default client