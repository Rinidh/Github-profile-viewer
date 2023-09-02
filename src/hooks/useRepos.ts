import { Octokit } from "@octokit/rest";
import { useEffect, useState } from "react";

export interface Repo {
    id: number;
    name: string;
    avatar_url: string
}

function useRepos(searchedUser:string) { 
  const [repos, setRepos] = useState<Repo[]>([{} as Repo]);
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    const octokit = new Octokit({
      auth: "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",
    });

    if(searchedUser) {
      setLoading(true)

      octokit.request(`GET /users/${searchedUser}/repos`, { // or use: octokit.repos.listForUser({username: searchedUser}) acc to chatgpt
        username: searchedUser,
      })
      .then((res) => {
        console.log(res)
        setRepos(res.data);
        setLoading(false)
      })
      .catch((e)=>{
        console.error("Error fetching repos:", e)
        setLoading(false)
      })
    } else {
      setRepos([{} as Repo]) //setting to empty repo obj
    }
  }, [searchedUser]);
  

  return {repos, isLoading};
}

export {useRepos} //a named export
