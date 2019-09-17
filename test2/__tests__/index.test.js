import { shallow } from 'enzyme'
import React from 'react'
import renderer from 'react-test-renderer'

import Index from '../pages/index'

describe("Smoketest", () => {
  it("renders the Index page", () => {
    const component = shallow(<Index />)
  })
})

describe("Snapshot", () => {
  it("matches the existing snapshot", () => {
    const component = renderer.create(<Index />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})