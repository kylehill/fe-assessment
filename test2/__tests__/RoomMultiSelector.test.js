import { shallow } from 'enzyme'
import React from 'react'
import renderer from 'react-test-renderer'

import RoomMultiSelector from '../pages/index'

describe("Smoketest", () => {
  it("renders the RoomMultiSelector component", () => {
    const component = shallow(<RoomMultiSelector rooms={4} />)
  })
})

describe("Snapshot", () => {
  it("matches the existing snapshot", () => {
    const component = renderer.create(<RoomMultiSelector rooms={4} />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  it("handles interactivity", () => {
    const component = renderer.create(<RoomMultiSelector rooms={4} />)
    const instance = component.root
    const checkbox = instance.findAllByType("li")[1]
      .findByType("header")
      .findByType("input")

    checkbox.props.onChange({ target: { checked: true } })

    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})