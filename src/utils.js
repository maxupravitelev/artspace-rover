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
  let usDate = germanDateSplit[1] + '-' + germanDateSplit[0] + '-' + germanDateSplit[2]

  return Date.parse(usDate)
}

export const removeProtocolFromUrl = (url) => {

  let tempArr = []
  let indexAfterDoubleSlash

  for (let i = 0; i < url.length; i++) {
    if ((url[i - 1] == '/') && (url[i - 2] == '/'))
      indexAfterDoubleSlash = i
  }

  for (let i = indexAfterDoubleSlash;i < url.length; i++) {
      tempArr.push(url[i])
  }

  if (indexAfterDoubleSlash) return tempArr.join('')
  else return url
}