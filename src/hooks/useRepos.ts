import { Octokit } from "@octokit/rest";
import { useEffect, useState } from "react";
import { filterObject } from "../filterObject";
import { demoRepos } from "../data/demoRepos";

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

//Check the filterObject() function used here. I copied the entire raw response array of objs (from console) and filtered it to get only those needed
function useRepos(searchedUser:string, githubMode: boolean) { 
  const [repos, setRepos] = useState<Repo[]>([{} as Repo]);

  const demoModeRepos: Repo[] = [];

  const getFilteredObjects = ( arrayOfObjs: { [key: string]: any }[] )=>{ //can also destructure from here
    const firstObj = arrayOfObjs[0];
    const secondObj = arrayOfObjs[1];
    const keysToInclude = ["id", "name", "avatar_url", "created_at", "default_branch", "description", "language", "updated_at", "license", "watchers", "html_url", "owner"];

    const firstFilteredObj = filterObject(firstObj, keysToInclude);
    const secondFilteredObj = filterObject(secondObj, keysToInclude);

    return [firstFilteredObj as Repo, secondFilteredObj as Repo]; //use "--- as Repo" to pass that obj in the shape of Repo (are extra props that are not in Repo eliminated??)
  }

  useEffect(() => {
    const octokit = new Octokit({
      auth: "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",
    });

    if(searchedUser) {
      if(githubMode) {
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
        setRepos(getFilteredObjects(demoRepos)) //if github mode is off ie if demo mode is on
      }
    } else {
      setRepos([{} as Repo]) //setting to empty repo obj
    }
  }, [searchedUser]);
  

  return {repos};
}

export {useRepos} //a named export
