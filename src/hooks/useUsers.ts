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
}


function useUsers(searchText:string) {
  const [user, setUser] = useState<User>({} as User);

  useEffect(() => {
    const octokit = new Octokit({
      auth: "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",
    });

    if(searchText) {
      octokit
      .request(`GET /users/rinidh`, { //`GET /users/${searchText}`
        owner: "abc",
      })
      .then((res) => {
        setUser(res.data);
      })
      .catch((error) => {
        console.error("Error fetching user:", error);
      })
    } else {
      setUser({} as User)
    }
  }, []);
  

  return user;
}

export {useUsers} //a named export

