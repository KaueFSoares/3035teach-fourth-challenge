import { ResponseCode } from "../types/ResponseCode"
import { RepoAPI, UserAPI } from "./api"

export interface ProfileData {
  name: string;
  bio: string;
  image: string;
  repoAmount: number;
}

export interface RepoMinData {
  id: number;
  name: string;
  description: string;
  link: string;
}

export interface RepoFullData {
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

export const getSingleRepo = async (username: string, repoName: string): Promise<[ResponseCode, RepoFullData]> => {
  try {
    const response = await RepoAPI.get(`/${username}/${repoName}`, {
      validateStatus: (status) => status === 200 || status === 404,
    })

    const data = {
      id: response.data.id,
      name: response.data.name,
      description: response.data.description,
      link: response.data.html_url,
      language: response.data.language,
      private: response.data.private,
    } as RepoFullData

    if (response.status === 200) {
      return [ "ok", data ]
    }

    if (response.status === 404) {
      return [ "notfound", data ]
    }

    return [ "error", data ]
  } catch (error) {
    return [ "error", {} as RepoFullData ]
  }
}

export const getRepoPage = async (username: string, page: number): Promise<[ResponseCode, RepoMinData[]]> => {
  try {
    const response = await UserAPI.get(`/${username}/repos?per_page=3&&page=${page}`, {
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
      } as RepoMinData
    })

    if (response.status === 200) {
      return [ "ok", data ]
    }

    if (response.status === 404) {
      return [ "notfound", data ]
    }

    return [ "error", data ]
  } catch (error) {
    return [ "error", [] as RepoMinData[] ]
  }
}

export const getProfile = async (username: string): Promise<[ResponseCode, ProfileData]> => {
  try {
    const response = await UserAPI.get(`/${username}`, {
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
