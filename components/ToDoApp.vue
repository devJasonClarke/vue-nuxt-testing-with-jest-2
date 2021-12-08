<template>
  <div>
    <li data-test="todo">Learn Vue Testing</li>
    <ul></ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      todos: [{ id: 1, text: 'Learn Vue Testing', completed: false }],
    }
  },
}
</script>

<style lang="scss" scoped></style>
