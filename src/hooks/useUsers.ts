import { Octokit } from "@octokit/rest";
import { useState, useEffect } from "react"
//import { useSetStorage } from "./useSetStorage";

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
  
  const [dataSet, setDataSet] = useState<Set<User>>(new Set()); //uss useState instead of only dealing with the state, such that when you update the set, the comp RE-RENDERS

  useEffect(() => {
    
    if(searchText) { //only run the code below if the user searched sth
      const octokit = new Octokit({
        auth: "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",
      });
      setLoading(true)

      octokit
      .request(`GET /users/${searchText}`, { 
        owner: "abc",
      })
      .then((res) => {
        setUser(res.data);        
        setLoading(false)

        setDataSet(new Set([...dataSet, res.data]))
      })
      .catch((error) => {
        console.error("Error fetching user:", error);
        setLoading(false)
      })
    } else {
      setUser({} as User)
    }
  }, [searchText]);
  

  return {user, isLoading, dataSet};
}

export {useUsers} //a named export

