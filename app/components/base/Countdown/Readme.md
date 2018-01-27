### Countdown

```js
const startTimer = () => this.timer.startTimer();
<div>
  <Countdown timeLimit={10} ref={el => {this.timer = el}} />
  <button onClick={startTimer}>Start</button>
</div>
```
