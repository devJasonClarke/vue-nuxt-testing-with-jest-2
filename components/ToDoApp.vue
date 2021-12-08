<template>
  <div>
    <h2>Learn Vue Testing</h2>
    <ul v-for="todo in todos" :key="todo.id" data-test="todo">
      <li>{{ todo.text }}</li>
    </ul>

    <form data-test="form" @submit.prevent="createTodo">
      <input type="text" data-test="new-todo" v-model="newTodo" />
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newTodo: '',
      todos: [{ id: 1, text: 'Learn Vue Testing', completed: false }],
    }
  },
  methods: {
    createTodo() {
      this.todos.push({
        id: this.todos.length + 1, 
        text: this.newTodo,
        completed: false,
      })
      this.newTodo = '';
    },
  },
}
</script>

<style lang="scss" scoped></style>
