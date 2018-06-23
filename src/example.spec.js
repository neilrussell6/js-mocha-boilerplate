import {expect} from "chai";
import {add} from './example'

describe('example', () => {
  it('should add numbers together', () => {
    expect(add(1, 2)).to.equal(3)
  })
})
