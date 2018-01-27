import Button from '.'

describe('Button Test Suite', () => {
  const mockProps = {
    onClick: jest.fn(),
    color: 'red',
    outline: 'red',
    textUpper: false,
    symbol: true,
    disabled: false
  }

  it('render without error', () => {
    const wrapper = shallow(<Button {...mockProps} />)
    expect(wrapper.length).toEqual(1)
  })

  it('handle click event', () => {
    const wrapper = shallow(<Button {...mockProps} />)
    wrapper.simulate('click')
    expect(mockProps.onClick).toHaveBeenCalled()
  })

  it('render HTML with the given attributes', () => {
    const wrapper = render(
      <div>
        <Button {...mockProps} color="green" />
        <Button {...mockProps} outline="green" textUpper />
        <Button {...mockProps} disabled textUpper />
        <Button {...mockProps} title="Foo" />
      </div>
    )
    expect(wrapper.find('[color="green"]').length).toEqual(1)
    expect(wrapper.find('[text-upper="true"]').length).toEqual(2)
    expect(wrapper.find('[outline="red"]').length).toEqual(3)
    expect(wrapper.find('[symbol="true"]').length).toEqual(4)
    expect(wrapper.find('button').last().text()).toBe('Foo')
  })
})
