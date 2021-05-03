export const saveUrlToCache = (urlType, url) => {

  const loggedUserJSON = window.localStorage.getItem('loggedRoverAppUser')
  
  if (loggedUserJSON) {
    const userLocal = JSON.parse(loggedUserJSON)
    userLocal.rovers[0][urlType] = url
    window.localStorage.setItem('loggedRoverAppUser', JSON.stringify(userLocal)
    )
  }
}

export const germanDateToUSDate = (germanDate) => {

  let germanDateSplit = germanDate.split('.')
  let usDate = germanDateSplit[1]+'-'+germanDateSplit[0]+'-'+germanDateSplit[2]
  
  return Date.parse(usDate)
}