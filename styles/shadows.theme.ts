import { THEME_DEFAULT } from './constants/constants.theme.default'

const [_none, _shadow1, ...rest] = THEME_DEFAULT.shadows
export const shadows = ['none', 'rgb(0, 0, 0, 0.08) 0px 2px 3px 0px', ...rest]
