import test from 'ava'

import { rgbHex } from './rgbHex'

test('[0,0,0] => #000000', t => {
  t.is(rgbHex([0, 0, 0]), '#000000')
})

test('[255,128,16] => #ff8010', t => {
  t.is(rgbHex([255, 128, 16]), '#ff8010')
})

test('[255,128,16,0] => #ff8010', t => {
  t.is(rgbHex([255, 128, 16, 0]), '#ff8010')
})

test('[255,128,16,0.8] => #ff8010', t => {
  t.is(rgbHex([255, 128, 16, 0.8]), '#ff8010')
})
