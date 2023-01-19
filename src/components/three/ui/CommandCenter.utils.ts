
import { proxy } from 'valtio'
import { TCommandCenterState } from './ui.interfaces'

export const state:TCommandCenterState = proxy({
    clicked: null,
    urls: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 5, 7, 8, 2, 4, 9, 6].map((u) => `/assets/consoleImages/${u}.jpg`)
  })
  