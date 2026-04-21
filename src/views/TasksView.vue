<script setup>
import { ref, onMounted } from 'vue'
import TodoList from '../components/TodoList.vue'
import { getAllTasks } from '../services/taskService'

const todos = ref([])

onMounted(() => {
  todos.value = getAllTasks()
})

function handleAddTodo(newTodo) {
  todos.value.unshift(newTodo) // them moi vao dau danh sach
}

function handleDeleteTodo(id) {
  todos.value = todos.value.filter(todo => todo.id !== id)
}

</script>

<template>
  <section class="tasks">
    <h2>Danh sách công việc</h2>

    <TodoList v-bind:todos="todos" v-on:add-todo="handleAddTodo" v-on:delete-todo="handleDeleteTodo" />
  </section>
</template>

<style scoped>
.tasks {
  padding: 16px 0;
}
</style>
