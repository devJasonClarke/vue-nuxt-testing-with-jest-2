import { mount } from '@vue/test-utils'
import ToDoApp from '@/components/ToDoApp.vue'

describe('ToDoApp.vue', () => {
  it('should render todo text', () => {
    const wrapper = mount(ToDoApp)

    const todo = wrapper.get('[data-test="todo"]')

    expect(todo.text()).toContain('Learn Vue Testing')
  })

  it('should add new todo', async () => {
    const wrapper = mount(ToDoApp)

    const newTodo = wrapper.get('[data-test="new-todo"]')

    expect(wrapper.findAll('[data-test="todo"]')).toHaveLength(1)

    await wrapper.get('[data-test="new-todo"]').setValue('New Todo')
    await wrapper.get('[data-test="form"]').trigger('submit')

 
  })
})
