// -
// Fetch Github api with given path
// -
function fetchGitHubAPIWithPath(path) {
  let headers = new Headers({
    "Authorization": `token fbedabf134e561e8515b0c939d4f7b7b17f749ff`
  })
  return fetch(`https://api.github.com${path}`, { headers }).then( res => res.json() )
}


// -
// Public Export
//
// -
// Fetch Repository Info with scope (eg 'facebook/react')
// response would look like
// https://api.github.com/repos/facebookincubator/create-react-app
// also including `pull_requests_count` field
export function fetchRepository(scopeName) {
  return fetchGitHubAPIWithPath(`/repos/${scopeName}`)
}

