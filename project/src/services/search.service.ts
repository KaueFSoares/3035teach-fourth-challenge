import { SearchResponse } from "../types/SearchResponse"
import { API } from "./api"

export const search = async (username: string): Promise<SearchResponse> => {
  try {
    const response = await API.get(`/${username}`, { 
      validateStatus: (status) => status === 200 || status === 404, 
    })
  
    if (response.status === 200) {
      return "ok"
    }
  
    if (response.status === 404) {
      return "notfound"
    }

    return "error"
  } catch (error) {
    return "error"
  }
}
