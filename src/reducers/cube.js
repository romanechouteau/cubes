import { shuffle } from 'lodash'
import { ADD_CUBE, SHUFFLE, CHANGE_ODD, STOP_ODD, RESET } from '../constants/actions'

const stateInit = []

const reducer = (state = stateInit, action = {}) => {
  switch (action.type) {
    case ADD_CUBE:
      return [...state, { id: state.length, specialAnim: false }]

    case SHUFFLE:
      return shuffle(state)

    case CHANGE_ODD:
      return state.map((cube) => cube.id % 2 === 0 ? cube : { ...cube, specialAnim: true })

    case STOP_ODD:
      return state.map((cube) => cube.id % 2 === 0 ? cube : { ...cube, specialAnim: false })

    // case EASTER_EGG:
    //   const cubes = [...state]
    //   cubes[cubes.length - 1] = { ...cubes[cubes.length - 1], square: true }
    //   return cubes

    case RESET:
      return stateInit

    default:
      return state;
  }
}

export default reducer