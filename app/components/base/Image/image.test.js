import Image from '.'

describe('Image unit test', () => {
  const props = {
    content: 'this is content of situation',
    src: 'https://avatars2.githubusercontent.com/u/25725526?s=40&v=4',
    alt: 'logo'
  }

  it('render without error', () => {
    const wrapper = shallow(<Image {...props} />)
    expect(wrapper.length).toEqual(1)
  })

  it('render with the given attributes', () => {
    const wrapper = shallow(<Image {...props} />)
    const { alt, src } = wrapper.find('img').props()
    const text = wrapper.find('p')
    expect(wrapper.find('img').length).toEqual(1)
    expect(alt).toEqual('logo')
    expect(src).toEqual('https://avatars2.githubusercontent.com/u/25725526?s=40&v=4')
    expect(text.length).toEqual(1)
    expect(text.text()).toBe('Situation: this is content of situation')
  })
})
