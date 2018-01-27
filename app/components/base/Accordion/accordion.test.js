import Accordion from '.'

const props = {
  data: require(mock).accordion
}

it('render without error', () => {
  const wrapper = shallow(<Accordion {...props} />)
  expect(wrapper.length).toEqual(1)
})
