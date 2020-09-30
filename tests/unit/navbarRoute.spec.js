import { shallowMount, createLocalVue } from '@vue/test-utils'
import VueRouter from 'vue-router'
import Navbar from '@/components/Navbar.vue'

const localVue = createLocalVue()
localVue.use(VueRouter)

shallowMount(Navbar, {
  localVue,
})

const router = new VueRouter()

describe('Router nav links test', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallowMount(Navbar, {
      localVue,
      router,
    })
  })
  it('Sould route to home if "main page" clicked', () => {
    let expected = true

    let mainPageBtn = wrapper.find('.mainPage')
    mainPageBtn.trigger('click')
    let path = wrapper.vm.$route.path
    let actuall = path.includes('home')
    expect(expected).toBe(actuall)
  })

  it('Sould route to my meetings if "My Meetings" clicked', () => {
    let expected = true

    let myMeetingsBtn = wrapper.find('.myMeetings')
    myMeetingsBtn.trigger('click')
    let path = wrapper.vm.$route.path
    let actuall = path.includes('mymeetings')
    expect(expected).toBe(actuall)
  })

  it('Sould route to log in page if "log out" clicked', () => {
    let expected = true
    let logoutBtn = wrapper.find('.logout')
    logoutBtn.trigger('click')
    let path = wrapper.vm.$route.path
    let actuall = path.includes('login')
    expect(expected).toBe(actuall)
  })
})
