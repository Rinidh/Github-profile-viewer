import { Octokit } from "@octokit/rest";
import axios from "axios";
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
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState<Error>()
  const [dataSet, setDataSet] = useState<Set<User>>(new Set()); //uss useState instead of only dealing with the state, such that when you update the set, the comp RE-RENDERS

  //const cancelTokenSource = axios.CancelToken.source() //by chatGPT; Use the axios lib to handle errors instead of new AbortController() class instance as in game-hub-rinidh 
  const controller = new AbortController()

  useEffect(() => {
    
    if(searchText) { //only run the code below if the user searched sth
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
        if (error instanceof Error && error.message.includes('Failed to fetch')) { //to see if it was a network error
          console.error('Network error (Internet unavailable):', error.message);
          setError(error);
          setLoading(false)
        //} else if(axios.isCancel(error)) {... //to check using axios lib if request was cancelled
        } else { //general meassage for all other errors
          console.error('Other or API error:', error);
          setError(error)
          setLoading(false)
        }
      })
    }
    //cancelTokenSource.cancel("test cancel from somewhere in app") //if using the axios lib
    return ()=>controller.abort("Request was aborted...")

  }, [searchText]);
  

  return {user, isLoading, error, dataSet};
}

export {useUsers} //a named export

