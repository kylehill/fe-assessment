import { shallow } from 'enzyme'
import React from 'react'
import renderer from 'react-test-renderer'

import MultiSelectRoom from '../components/MultiSelectRoom'

describe("Smoketest", () => {
  it("renders the MultiSelectRoom component", () => {
    const component = shallow(
        <MultiSelectRoom 
            number={0}
            room={{ enabled: true, adults: 1, children: 0 }} />
    )
  })
})

describe("Snapshot", () => {
  it("matches the existing snapshot", () => {
    const component = renderer.create(<MultiSelectRoom number={0} />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})