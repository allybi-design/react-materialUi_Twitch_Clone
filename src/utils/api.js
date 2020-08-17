import axios from "axios"

const Api = axios.create({
  baseURL: "http://localhost:30001"
})

export default Api