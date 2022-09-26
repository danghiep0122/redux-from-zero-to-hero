import { combineReducer } from '@reduxjs/toolkit'

import reducer1 from './reducer1'
import reducer2 from './reducer2'
import reducer3 from './reducer3'
import reducer4 from './reducer4'


const allreducers = combineReducer({
  reducer1
})

export default allReducers
