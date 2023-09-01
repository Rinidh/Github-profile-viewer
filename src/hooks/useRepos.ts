import { Octokit } from "@octokit/rest";
import { useEffect, useState } from "react";

export interface ResponseRepos {
    id: number;
    name: string;
}

function useRepos(searchedUser:string) { 
  const [repos, setRepos] = useState<ResponseRepos[]>([{id: 0, name: "sth"}]);
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
    } else {
      setRepos([{id: 0, name: "sth"}])
    }
  }, [searchedUser]);
  

  return {repos, isLoading};
}

export {useRepos} //a named export
