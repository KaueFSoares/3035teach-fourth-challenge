import axios from "axios"

export const UserAPI = axios.create({
  baseURL: "https://api.github.com/users",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
})

export const RepoAPI = axios.create({
  baseURL: "https://api.github.com/repos",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
})
