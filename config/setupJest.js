/* eslint-disable */
import React from 'react'
import PropTypes from 'prop-types'
import Enzyme, { shallow, render, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import toJson from 'enzyme-to-json'

Enzyme.configure({ adapter: new Adapter() })

global.shallow = shallow
global.render = render
global.mount = mount
global.toJson = toJson
global.React = React
global.PropTypes = PropTypes
