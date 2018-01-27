import style from './countdown.scss'

export default class Countdown extends React.PureComponent {
  static propTypes = {
    onTick: PropTypes.func,
    timeLimit: PropTypes.number.isRequired,
    reverse: PropTypes.bool,
    start: PropTypes.bool,
    pause: PropTypes.bool
  }

  state = { time: 0 }

  componentWillReceiveProps(nextProps) {
    const { start, pause } = nextProps

    const timerShouldStart = !this.props.start && start
    const timerShouldPause = !this.props.pause && pause
    const timerShouldResume = this.props.pause && start && !pause
    const timerShouldAbort = this.props.start && !start

    if (timerShouldStart || timerShouldResume) this.startTimer(this.props.start)
    if (timerShouldPause) this.pauseTimer()
    if (timerShouldAbort) this.setState({ time: 0 }, this.pauseTimer)
  }

  timer = null

  pauseTimer = () => clearInterval(this.timer)

  startTimer = isResuming => {
    const { reverse, timeLimit, onTick } = this.props
    if (!isResuming && reverse) this.setState({ time: timeLimit })

    this.timer = setInterval(() => {
      const { time } = this.state
      const tick = reverse ? time - 1 : time + 1
      const timerShouldStop = reverse ? tick === 0 : tick === timeLimit
      this.setState(
        { time: timerShouldStop ? 0 : tick },
        () => {
          if (timerShouldStop) this.pauseTimer()
          return onTick && onTick(this.state.time)
        }
      )
    }, 1000)
  }

  renderTimeFormat = time => {
    const mins = Math.floor((time % 3600) / 60)
    const secs = time % 60
    let str = ''
    str += (mins < 10 ? '0' : '') + mins
    str += ':'
    str += (secs < 10 ? '0' : '') + secs
    return str
  }

  render() {
    return (
      <div className={style.timer}>
        <img className={style.icon} alt="icon" src="http://thumbs2.modthesims.info/img/4/3/2/4/7/1/MTS_Beo-929924-matrix.jpg" width="48" height="48" />
        <div className={style.text}>Timer</div>
        <div id="clock" className={style.clock}>
          {this.renderTimeFormat(this.state.time)}
        </div>
      </div>
    )
  }
}
