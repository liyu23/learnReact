
import { combineReducers } from 'redux'
const addRow = (state = {len:0}, action) => {
    switch (action.type) {
        case 'ADD_ROW':
          return {
              len:action.len
          }
        default:
          return state
    }
}

const allReducers = combineReducers({
    addRow,
})
  
export default allReducers