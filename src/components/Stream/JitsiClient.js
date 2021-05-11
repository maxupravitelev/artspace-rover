import React, { useState } from 'react'
import { Jutsu } from 'react-jutsu'
import { useSelector } from 'react-redux'
import { removeProtocolFromUrl } from '../../utils'

// import material ui components & styles
import { makeStyles } from "@material-ui/styles"
import { styles } from '../../styles'

const useStyles = makeStyles(styles)


const JitsiClient = () => {
  // const [call, setCall] = useState(false)
  const [password, setPassword] = useState('')

  const classes = useStyles()

  let user = useSelector((state) => state.user)
  let jitsiUrl = user.rovers[0].jitsiUrl

  jitsiUrl = removeProtocolFromUrl(jitsiUrl)

  const handleClick = event => {
    event.preventDefault()
    setCall(true)
  }

  let roomName = "test"
  let displayName = "rover0"

  console.log(styles)

  return (
    <div className={classes.jitsiSession}>
      <Jutsu
        domain={jitsiUrl}
        roomName={roomName}
        displayName={displayName}
        password={password}
        onMeetingEnd={() => console.log('Meeting has ended')}
        loadingComponent={<p>loading ...</p>}
        errorComponent={<p>Oops, something went wrong</p>} />

    </div>
  )

  // return call ? (
  //   <Jutsu
  //     domain={jitsiUrl}
  //     roomName={roomName}
  //     displayName={displayName}
  //     password={password}
  //     onMeetingEnd={() => console.log('Meeting has ended')}
  //     loadingComponent={<p>loading ...</p>}
  //     errorComponent={<p>Oops, something went wrong</p>} />
  // ) : (
  //   <form>
  //     <Button 
  //       variant="outlined"
  //       onClick={handleClick} 
  //       // type='submit'
  //       >
  //       start stream
  //     </Button>
  //   </form>
  // )
}

export default JitsiClient