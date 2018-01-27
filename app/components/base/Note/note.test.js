import Note from '.'

describe('Note unit test', () => {
  const props = {
    content: 'this is a content',
    color: 'red'
  }

  it('render without error', () => {
    const wrapper = shallow(<Note {...props} />)
    expect(wrapper.length).toEqual(1)
  })

  it('render with the given attributes', () => {
    const wrapper = shallow(<Note {...props} />)
    expect(wrapper.find('p').length).toEqual(1)
    expect(wrapper.find('[color="red"]').length).toEqual(1)
    expect(wrapper.children().first().text()).toBe('this is a content')
  })
})
