import { mount } from '@vue/test-utils'
import ToDoApp from '@/components/ToDoApp.vue'

describe('ToDoApp.vue', () => {
  it('should render todo text', () => {
    const wrapper = mount(ToDoApp)

    const todo = wrapper.get('[data-test="todo"]')

    expect(todo.text()).toContain('Learn Vue Testing')
  })
})
