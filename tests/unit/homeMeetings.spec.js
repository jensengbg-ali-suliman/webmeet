import { mount } from '@vue/test-utils'
import Home from '@/views/Home.vue/'

const mockMeetingsData = [
  {
    meetingName: 'lorem ipsum dolore moch data',
    meetingDescription:
      'Quasi, non libero in veritatis officia at repudiandae ipsam placeat laboriosam nobis',
    meetingTag: 'IT-tech',
    meetingDate: 'WED, SEP 20',
    meetingTime: '09:00 AM',
  },
  {
    meetingName: 'lorem ipsum dolore moch data',
    meetingDescription:
      'Quasi, non libero in veritatis officia at repudiandae ipsam placeat laboriosam nobis',
    meetingTag: 'IT-tech',
    meetingDate: 'WED, SEP 20',
    meetingTime: '09:00 AM',
  },
]

global.fetch = jest.fn(() => Promise.resolve(mockMeetingsData))

describe('Home page test', () => {
  it('should not be empty when presented with data', async () => {
    const expected = mockMeetingsData.length
    const wrapper = mount(Home)
    await wrapper.setData({ meetings: mockMeetingsData })
    const actuall = wrapper.vm.meetings.length
    await console.log(wrapper.vm.meetings)
    expect(expected).toBe(await actuall)
  })
})

/*

const localVue = createLocalVue()
localVue.use(Vuex)

const mockMeetingData = {
  meetingName: 'lorem ipsum dolore moch data',
  meetingDescription:
    'Quasi, non libero in veritatis officia at repudiandae ipsam placeat laboriosam nobis',
  meetingTag: 'IT-tech',
  meetingDate: 'WED, SEP 20',
  meetingTime: '09:00 AM',
}

it('Should display all the meetings', () => {
    
})

*/