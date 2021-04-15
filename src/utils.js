export const saveUrlToCache = (urlType, url) => {

  const loggedUserJSON = window.localStorage.getItem('loggedRoverAppUser')
  
  if (loggedUserJSON) {
    const userLocal = JSON.parse(loggedUserJSON)
    userLocal.rovers[0][urlType] = url
    window.localStorage.setItem('loggedRoverAppUser', JSON.stringify(userLocal)
    )
  }
}