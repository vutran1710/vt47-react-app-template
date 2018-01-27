/* eslint-disable import/no-extraneous-dependencies */
import sinon from 'sinon'
import Countdown from '.'

describe('Countdown Test Suite', () => {
  it('render without breaking', () => {
    const wrapper = shallow(<Countdown timeLimit={5} />)
    expect(wrapper.length).toEqual(1)
  })

  it('should start couting when requested, and reset when time has exceeded', () => {
    const onTick = sinon.spy()
    const clock = sinon.useFakeTimers()
    const wrapper = mount(<Countdown timeLimit={10} onTick={onTick} />)

    wrapper.setProps({ start: true })
    clock.tick(2000)
    expect(wrapper.find('#clock').text()).toBe('00:02')

    wrapper.setProps({ pause: true })
    clock.tick(3000)
    expect(wrapper.find('#clock').text()).toBe('00:02')

    wrapper.setProps({ pause: false })
    clock.tick(2000)
    expect(wrapper.find('#clock').text()).toBe('00:04')

    clock.tick(7000)
    expect(onTick.callCount).toBe(10)
    expect(wrapper.find('#clock').text()).toBe('00:00')
  })

  it('can count backward and get aborted', () => {
    const onTick = sinon.spy()
    const clock = sinon.useFakeTimers()
    const wrapper = mount(<Countdown timeLimit={10} onTick={onTick} reverse />)

    wrapper.setProps({ start: true })
    clock.tick(2000)
    expect(wrapper.find('#clock').text()).toBe('00:08')

    wrapper.setProps({ start: false })
    expect(wrapper.find('#clock').text()).toBe('00:00')
  })

  it('render correctly with time longer than 10min', () => {
    const clock = sinon.useFakeTimers()
    const wrapper = mount(<Countdown timeLimit={2100} />)

    wrapper.setProps({ start: true })
    clock.tick(1000 * 60 * 30)
    expect(wrapper.find('#clock').text()).toBe('30:00')
  })
})
