
import { Octokit } from "https://esm.sh/octokit";
//https://cdn.skypack.dev/octokit
//https://cdnjs.cloudflare.com/ajax/libs/rest.js/15.2.6/octokit-rest.min.js

const button = document.getElementById("button")
const user = document.getElementById("user")

//accesing the "output" html tags
const name = document.getElementById("name")
const created_at = document.getElementById("created-at")
const bio = document.getElementById("bio")
const followers = document.getElementById("followers")
const following = document.getElementById("following")
const public_repos = document.getElementById("public-repos")
const twitter_username = document.getElementById("twitter")
const html_url = document.getElementById("html-url")
const img = document.getElementById("img")


const octoki = new Octokit({ 
  auth: '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',
});

async function fetcher(username) {
  let {data} = await octoki.request(`GET /users/${username}`, {
    owner: "github",
    repo: "docs",
    per_page: 2 //all these params don't matter much in this case
  });
  console.log(data)
  // await octoki.request("GET /repos/Rinidh/Gen-and-Itr", {  //Gen-and-Itr //making request to the "repos" instead of "users"
  //   owner: "github",
  //   repo: "docs",
  //   per_page: 2
  // }).then((res)=>{console.log(res.data)}); //also works

  //re-assigning all the "output" html tags
  name.innerHTML = (data.name) ? data.name : "Looks like this user has no name";
  bio.innerHTML = (data.bio) ? data.bio : "Sorry, this guy did not put any biography";
  followers.innerHTML = data.followers;
  following.innerHTML = data.following;
  public_repos.innerHTML = (data.public_repos) ? data.public_repos : "No public repositories yet";;
  twitter_username.innerHTML = (data.twitter_username) ? data.twitter_username : "This dude might not like showing off with twitter (No twitter ID)";;

  html_url.href = `${data.html_url}`
  html_url.innerHTML = data.html_url;

  const created_at_date = new Date(data.created_at)
  created_at.innerHTML = `${created_at_date.getDate()}/${created_at_date.getMonth()}/${created_at_date.getFullYear()}`;
  
  img.innerHTML = `<img src = "${data.avatar_url}">`

}


button.addEventListener("click", ()=>{fetcher(user.value)})

//axios.get("https://api.github.com/repos/Rinidh/Pomodoro-timer").then((res)=>console.log(res.data))
//the above method doesn't work any longer, use the oktokit library now

