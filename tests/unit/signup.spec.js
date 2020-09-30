import { mount } from '@vue/test-utils'
import Signup from '@/views/Signup.vue'

const userMockObject = {
  firstName: 'mockFirst',
  lastName: 'mockLast',
  userID: 'mockID',
  emailAdress: 'mockEmail',
  password: 'mockPassword',
  meetingsToAttend: [],
  attendedMeetings: [],
}

describe('Sign up test', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(Signup)
    wrapper.setData({ user: userMockObject })
  })

  it('should rescive first name and save it to database', () => {
    let expected = userMockObject.firstName
    let actual = wrapper.vm.user.firstName
    expect(expected).toBe(actual)
  })

  it('should rescive last name and save it to database', () => {
    let expected = userMockObject.lastName
    let actual = wrapper.vm.user.lastName
    expect(expected).toBe(actual)
  })

  it('should rescive userID and save it to database', () => {
    let expected = userMockObject.userID
    let actual = wrapper.vm.user.userID
    expect(expected).toBe(actual)
  })

  it('should rescive email address and save it to database', () => {
    let expected = userMockObject.emailAdress
    let actual = wrapper.vm.user.emailAdress
    expect(expected).toBe(actual)
  })

  it('should rescive first name and save it to database', () => {
    let expected = userMockObject.password
    let actual = wrapper.vm.user.password
    expect(expected).toBe(actual)
  })
})
