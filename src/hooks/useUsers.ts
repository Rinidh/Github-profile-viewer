import { Octokit } from "@octokit/rest";
import { useState, useEffect } from "react";

export interface User {
  id: number,
  avatar_url: string,
  bio: string,
  name: string,
  followers: number,
  following: number,
  public_repos: number,
  twitter_username: string | null,
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
  const controller = new AbortController();

  const demoModeUser: User = {
    login: "Rinidh",
    id: 128288243,
    avatar_url: "https://avatars.githubusercontent.com/u/128288243?v=4",
    html_url: "https://github.com/Rinidh",
    name: "Rinidh",
    bio: "I am student beginning my hike in the Software development industry",
    twitter_username: null,
    public_repos: 2,
    followers: 0,
    following: 1,
    created_at: "2023-03-19T09:40:12Z",
  };

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
          console.log(res.data);
          
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
              setLoading(false);
              break;
  
            default:
              console.error('Other or API error:', error);
              setError(error.message)
              setLoading(false)  
              break;
          }
        })

      } else {
        setUser(demoModeUser);
        setDataSet(new Set([demoModeUser]))
      }
    }
    //cancelTokenSource.cancel("test cancel from somewhere in app") //if using the axios lib
    return ()=>controller.abort("Request was aborted...")

  }, [searchText]);
  

  return {user, isLoading, error, dataSet};
}

export {useUsers} //a named export

