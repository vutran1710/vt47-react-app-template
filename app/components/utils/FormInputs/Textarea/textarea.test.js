import Textarea from '.'

describe('Textarea Test Suite', () => {
  const mockProps = {
    limit: 10,
    rows: 7,
    input: {
      value: 'text',
      onChange: jest.fn()
    }
  }

  it('should render without error', () => {
    const wrapper = shallow(<Textarea {...mockProps} />)
    expect(wrapper.length).toEqual(1)
  })

  it('handle on change event', () => {
    const wrapper = shallow(<Textarea {...mockProps} />)
    wrapper.find('textarea').at(0).simulate('change', { target: { value: 'My new value' } })
    expect(mockProps.input.onChange).toHaveBeenCalled()
  })

  it('render HTML with the given attributes', () => {
    const wrapper = render(
      <div>
        <Textarea {...mockProps} limit={10} />
        <Textarea {...mockProps} rows={7} />
        <Textarea limit={10} input={{ value: 'test', onChange: jest.fn() }} />
      </div>
    )
    expect(wrapper.find('[rows="7"]').length).toEqual(2)
    expect(wrapper.find('[rows="10"]').length).toEqual(1)
    expect(wrapper.find('textarea').html()).toEqual('text')
  })

  it('should handle multi space area', () => {
    const wrapper = shallow(<Textarea {...mockProps} />)
    wrapper.setProps({ input: { value: '          ' } })
    expect(wrapper.last().text()).toBe('Input words 0 / 10')
  })

  it('should handle onChange', () => {
    const wrapper = shallow(<Textarea {...mockProps} />)
    wrapper.setProps({ input: { value: '1 2 3 4 5 6 7 8 9' } })
    expect(wrapper.last().text()).toBe('Input words 9 / 10')
  })
})
