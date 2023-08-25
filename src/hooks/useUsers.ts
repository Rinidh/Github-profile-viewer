import { Octokit } from "@octokit/rest";
import { useState, useEffect } from "react"

export interface User {
  avatar_url: string,
  bio: string,
  name: string,
  followers: number,
  following: number,
  public_repos: number,
  twitter_username: string,
  html_url: string,
  created_at: string,
  login: string
}


function useUsers(searchText:string) {
  const [user, setUser] = useState<User>({} as User);
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    const octokit = new Octokit({
      auth: "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",
    });

    if(searchText) {
      setLoading(true)

      octokit
      .request(`GET /users/${searchText}`, { 
        owner: "abc",
      })
      .then((res) => {
        setUser(res.data);
        setLoading(false)
      })
      .catch((error) => {
        console.error("Error fetching user:", error);
        setLoading(false)
      })
    } else {
      setUser({} as User)
    }
  }, [searchText]);
  

  return {user, isLoading};
}

export {useUsers} //a named export

