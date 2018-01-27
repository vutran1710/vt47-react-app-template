import Heading from '.'

describe('Heading unit test', () => {
  const props = {
    src: 'https://avatars2.githubusercontent.com/u/25725526?s=40&v=4',
    alt: 'logo'
  }

  it('render without error', () => {
    const wrapper = shallow(<Heading {...props} />)
    expect(wrapper.length).toEqual(1)
  })

  it('renders no props without error', () => {
    const wrapper = shallow(<Heading />)
    expect(wrapper.length).toEqual(1)
  })

  it('render with the given attributes', () => {
    const wrapper = shallow(<Heading {...props} />)
    expect(wrapper.find('img').length).toEqual(1)
    const { alt, src } = wrapper.find('img').props()
    expect(alt).toEqual('logo')
    expect(src).toEqual('https://avatars2.githubusercontent.com/u/25725526?s=40&v=4')
  })
})
