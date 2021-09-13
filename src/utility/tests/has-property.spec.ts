import { hasProperty } from '../has-property'

describe('hasProperty', () => {
  it('should return true what an object has a property', () => {
    const sample = { 'dummy-data': 1 }
    const hasDummyData = hasProperty('dummy-data')
    expect(hasDummyData(sample)).toBeTruthy()
  })
})
