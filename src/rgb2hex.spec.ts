import test from 'ava'

import { rgba2hex } from './rgb2hex'

test('[0,0,0] => #000000', t => {
  t.is(rgba2hex([0, 0, 0]), '#000000')
})

test('[255,128,16] => #ff8010', t => {
  t.is(rgba2hex([255, 128, 16]), '#ff8010')
})

test('[255,128,16,0] => #ff8010', t => {
  t.is(rgba2hex([255, 128, 16, 0]), '#ff8010')
})

test('[255,128,16,128] => #ff8010', t => {
  t.is(rgba2hex([255, 128, 16, 128]), '#ff8010')
})
