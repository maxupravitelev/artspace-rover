import StopOutlinedIcon from '@material-ui/icons/StopOutlined'
import ArrowUpwardOutlinedIcon from '@material-ui/icons/ArrowUpwardOutlined'
import ArrowDownwardOutlinedIcon from '@material-ui/icons/ArrowDownwardOutlined'
import ArrowBackOutlinedIcon from '@material-ui/icons/ArrowBackOutlined'
import ArrowForwardOutlinedIcon from '@material-ui/icons/ArrowForwardOutlined'

const DirectionDispay = ({ up, down, left, right }) => {
  // const [motorDirection, setMotorDirection] = useState(null)

  let direction

  if (!up && !down && !left && !right) {
    return (
      <div className="dashboard">
        <StopOutlinedIcon />
      </div>
    )
  }

  if (up) {
    direction = 'forward'
  }

  return (
    <div className="dashboard">
      {left && <ArrowBackOutlinedIcon />}
      {up && <ArrowUpwardOutlinedIcon />}
      {down && <ArrowDownwardOutlinedIcon />}
      {right && <ArrowForwardOutlinedIcon />}
    </div>
  )
}

export default DirectionDispay
