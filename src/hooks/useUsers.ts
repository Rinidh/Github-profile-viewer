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


function useUsers(searchText:string, githubMode: boolean) {
  const [user, setUser] = useState<User>({} as User);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState("")
  const [dataSet, setDataSet] = useState<Set<User>>(new Set()); //uss useState instead of only dealing with the state, such that when you update the set, the comp RE-RENDERS

  //const cancelTokenSource = axios.CancelToken.source() //by chatGPT; Use the axios lib to handle errors instead of new AbortController() class instance as in game-hub-rinidh 
  const controller = new AbortController()

  useEffect(() => {    
    if(searchText ) { //only run the code below if the user searched sth
      if(githubMode) {
        const octokit = new Octokit({
          auth: "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",
        });
        setLoading(true)
  
        octokit
        .request(`GET /users/${searchText}`, { 
          owner: "abc",
          signal: controller.signal,
        })
        .then((res) => {
          setUser(res.data);        
          setLoading(false)
          setDataSet(new Set([...dataSet, res.data]))
        })
        .catch((error) => {
          switch (error.message) {
            case "Failed to fetch":
              console.error('Network error (Internet unavailable):', error.message);
              setError(error.message);
              setLoading(false)
              break;
  
            case "Not Found":
              console.error('No user found!:', error.message);
              setError(error.message);
              setLoading(false)  
              break;
  
            default:
              console.error('Other or API error:', error);
              setError(error.message)
              setLoading(false)  
              break;
          }
        })

      } else {
        
      }
    }
    //cancelTokenSource.cancel("test cancel from somewhere in app") //if using the axios lib
    return ()=>controller.abort("Request was aborted...")

  }, [searchText]);
  

  return {user, isLoading, error, dataSet};
}

export {useUsers} //a named export

