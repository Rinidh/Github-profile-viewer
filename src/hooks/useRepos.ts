import { Octokit } from "@octokit/rest";
import { useEffect, useState } from "react";

export interface Repo {
    id: number;
    name: string;
    avatar_url: string
    created_at: string
    default_branch: string
    description: string
    language: string
    updated_at: string
    license: {name: string} | null
    watchers: number
    html_url: string
    owner: {login: string, html_url: string}
}

function useRepos(searchedUser:string) { 
  const [repos, setRepos] = useState<Repo[]>([{} as Repo]);

  useEffect(() => {
    const octokit = new Octokit({
      auth: "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",
    });

    if(searchedUser) {
      octokit.request(`GET /users/${searchedUser}/repos`, { // or use: octokit.repos.listForUser({username: searchedUser}) acc to chatgpt
        username: searchedUser,
      })
      .then((res) => {
        setRepos(res.data);
      })
      .catch((e: Error)=>{
        console.error("Error fetching repos:", e)
      })
    } else {
      setRepos([{} as Repo]) //setting to empty repo obj
    }
  }, [searchedUser]);
  

  return {repos};
}

export {useRepos} //a named export
