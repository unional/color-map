import { RGBA } from './interfaces'

export function rgbaString(rgba: RGBA) {
  return 'rgba(' + rgba.join(',') + ')';
}
