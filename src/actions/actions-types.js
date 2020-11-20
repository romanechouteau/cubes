import { ADD_CUBE, SHUFFLE, CHANGE_ODD, STOP_ODD, RESET, EASTER_EGG } from '../constants/actions'

export const add_cube = () => {
  return {
    type: ADD_CUBE
  }
}

export const shuffle = () => {
  return {
    type: SHUFFLE
  }
}

export const change_odd = () => {
  return {
    type: CHANGE_ODD
  }
}

export const stop_odd = () => {
  return {
    type: STOP_ODD
  }
}

export const reset = () => {
  return {
    type: RESET
  }
}

export const easter_egg = () => {
  return {
    type: EASTER_EGG
  }
}