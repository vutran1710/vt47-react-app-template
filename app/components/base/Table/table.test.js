import Table from '.'

describe('Table', () => {
  const mockProps = {
    data: require(mock).table.data,
    fields: require(mock).table.fields,
    sortBy: 'no',
    descending: false
  }

  it('render without error', () => {
    const wrapper = shallow(<Table {...mockProps} />)
    expect(wrapper.length).toEqual(1)
  })

  it('render HTML with enough rows & columns', () => {
    const wrapper = shallow(<Table {...mockProps} />)
    expect(wrapper.find('tr').length).toEqual(5)
    expect(wrapper.find('th').length).toEqual(4)
  })

  it('map values to their correct position', () => {
    const wrapper = shallow(<Table {...mockProps} />)
    expect(wrapper.find('td').at(4).text()).toBe('Messi')
  })

  it('has proper classes', () => {
    const wrapper = shallow(<Table {...mockProps} />)
    expect(wrapper.find('td').at(0).hasClass('primary')).toBe(true)
  })

  it('render descending properly', () => {
    const wrapper = shallow(<Table {...mockProps} descending />)
    expect(wrapper.find('td').at(4).text()).toBe('Zlatan')
  })
})
