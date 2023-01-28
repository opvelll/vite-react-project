import { assert, expect, test } from 'vitest'
import { hello } from './hello'

test('hello world test', () => {
    expect('hello', hello())
})
