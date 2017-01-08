import test from 'ava'

import { rgbaString } from './rgbaString'

test('[255,128,16,0] => rgba(255,128,16,0)', t => {
  t.is(rgbaString([255, 128, 16, 0]), 'rgba(255,128,16,0)')
})

test('[255,128,16,0.3] => rgba(255,128,16,0.3)', t => {
  t.is(rgbaString([255, 128, 16, 128]), 'rgba(255,128,16,0.3)')
})
