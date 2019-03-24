console.log("Before");
function getUser(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Reading a user from a database...");
      resolve({ id: id, gitUser: "mf" });
    }, 2000);
  });
}
// const p = getUser(1);
// getUser(1)
//   .then(user => getRepositories(user.gitUser))
//   .then(repos => getCommits(repos[0]))
//   .then(commits => console.log("Commit", commits))
//   .catch(err => console.log("Error", err.message));

/////////Async and Await approach
async function displayCommits() {
  try {
    const user = await getUser(1);
    const repos = await getRepositories(user.gitUser);
    const commits = await getCommits(repos[0]);
    console.log(commits);
  } catch (err) {
    console.log("Error", err.message);
  }
}
displayCommits();
function getRepositories(username) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("call your repositories");
      // resolve(["repo1", "repo2", "repo3"]);
      reject(new Error("Could not get the repos."));
    }, 3000);
  });
}
function getCommits(repo) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("calling github Api");
      resolve(["commit"]);
    }, 4000);
  });
}
