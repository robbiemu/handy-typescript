/* eslint-disable @typescript-eslint/no-unused-vars */

import { After } from '@src/aop/after.decorator'
import { emitPropertyChange, Stateful } from '../stateful.decorator'

describe('Stateful', () => {
  it('should notify subscribers of state changes', done => {
    // declare a state graph we will watch
    interface ISpecimen {
      value: boolean
    }

    // type-hint our class to indicate it has state$ Observable<ISpecimen>
    interface Specimen extends Stateful<ISpecimen> {}

    // decorate the class
    @Stateful<ISpecimen>()
    class Specimen {
      value: boolean

      // now apply the state change update to our state
      @After(emitPropertyChange('value'))
      setValue(n) {
        this.value = n
      }
    }

    const s = new Specimen()
    // subscribe to state changes
    s.state$.subscribe((state: ISpecimen) => {
      expect(state.value).toBeTruthy()
      done()
    })

    // change state
    s.setValue(true)
  })
})
