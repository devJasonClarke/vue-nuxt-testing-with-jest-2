import { mount } from '@vue/test-utils'
import Message from '@/components/Message.vue'

describe('Message.Vue', () => {
  it('renders the props.msg when passed', () => {
    const wrapper = mount(Message, {
      propsData: {
        msg: 'Hello Friends',
      },
    })
    expect(wrapper.text()).toContain('Hello Friends')
  })
})
