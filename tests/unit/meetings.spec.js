import { mount } from '@vue/test-utils'
import Meetings from '@/components/Meetings.vue'

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

describe('meetings component test', () => {
  it('should not be empty when presented with data', async () => {
    const expected = mockMeetingsData.length
    const wrapper = mount(Meetings)
    await wrapper.setData({ meetings: mockMeetingsData })
    const actuall = wrapper.vm.meetings.length
    expect(expected).toBe(await actuall)
  })
})
