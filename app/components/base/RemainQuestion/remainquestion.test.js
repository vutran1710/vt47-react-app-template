import RemainQuestion from '.'

describe('RemainQuestion unit test', () => {
  const props = {
    text: 'You have left 3 questions',
    position: 'top'
  }

  it('render without error', () => {
    const wrapper = shallow(<RemainQuestion {...props} />)
    expect(wrapper.length).toEqual(1)
  })

  it('renders no props without error', () => {
    const wrapper = shallow(<RemainQuestion />)
    expect(wrapper.length).toEqual(1)
  })

  it('render with the given attributes', () => {
    const wrapper = render(
      <div>
        <RemainQuestion text="You have left 3 questions" />
        <RemainQuestion position="top" />
      </div>
    )
    expect(wrapper.children().first().text()).toBe('You have left 3 questions')
    expect(wrapper.find('[position="top"]').length).toEqual(1)
  })
})
