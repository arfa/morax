import { DEFAULT_THEME } from './constants.theme'

const [_none, _shadow1, ...rest] = DEFAULT_THEME.shadows
export const shadows = ['none', 'rgb(0, 0, 0, 0.08) 0px 2px 3px 0px', ...rest]
