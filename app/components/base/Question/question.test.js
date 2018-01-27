import Question from '.'

describe('question unit test', () => {
  it('renders with attributes', () => {
    const wrapper = render(<Question text="Question number 1 is" />)
    expect(wrapper.children().last().text()).toBe('Question number 1 is')
    expect(wrapper.length).toEqual(1)
  })
})
