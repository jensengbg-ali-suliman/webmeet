import { mount } from '@vue/test-utils'
import Login from '@/views/Login.vue'

describe('Login.vue', () => {
  it('should rescive data and save it to send it to database', () => {
    let expected = '1'
    let actual = '2'
    expect(expected).toBe(actual)
  })
})
