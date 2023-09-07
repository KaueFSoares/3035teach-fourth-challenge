import { ResponseCode } from "../types/ResponseCode"
import { API } from "./api"

export interface ProfileData {
  name: string;
  bio: string;
  image: string;
  repoAmount: number;
}

export interface RepoData {
  id: number;
  name: string;
  description: string;
  link: string;
  language: string;
  private: boolean;
}

interface GitHubRepo {
  id: number;
  name: string;
  private: boolean;
  html_url: string;
  description: string | null;
  language: string | null;
}


export const getRepos = async (username: string, page: number): Promise<[ResponseCode, RepoData[]]> => {
  try {
    const response = await API.get(`/${username}/repos?per_page=3&&page=${page}`, {
      validateStatus: (status) => status === 200 || status === 404,
    })

    const data = response.data.map((repo: GitHubRepo) => {
      return {
        id: repo.id,
        name: repo.name,
        description: repo.description,
        link: repo.html_url,
        language: repo.language,
        private: repo.private,
      } as RepoData
    })

    if (response.status === 200) {
      return [ "ok", data ]
    }

    if (response.status === 404) {
      return [ "notfound", data ]
    }

    return [ "error", data ]
  } catch (error) {
    return [ "error", [] as RepoData[] ]
  }
}

export const getProfile = async (username: string): Promise<[ResponseCode, ProfileData]> => {
  try {
    const response = await API.get(`/${username}`, {
      validateStatus: (status) => status === 200 || status === 404,
    })

    const data = {
      name: response.data.name,
      bio: response.data.bio,
      image: response.data.avatar_url,
      repoAmount: response.data.public_repos,
    } as ProfileData

    if (response.status === 200) {
      return [ "ok", data ]
    }

    if (response.status === 404) {
      return [ "notfound", data ]
    }

    return [ "error", data ]
  } catch (error) {
    return [ "error", {} as ProfileData ]
  }
}
