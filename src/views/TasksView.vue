<script setup>
import { ref, onMounted } from 'vue'
import TodoForm from '../components/TodoForm.vue'
import TodoList from '../components/TodoList.vue'
import { getAllTasks } from '../services/taskService'

const todos = ref([])

onMounted(() => {
  todos.value = getAllTasks()
})

function handleAddTodo(newTodo) {
  todos.value.unshift(newTodo) // them moi vao dau danh sach
}
</script>

<template>
  <section class="tasks">
    <h2>Danh sách công việc</h2>

    <TodoForm @add-todo="handleAddTodo" />

    <TodoList v-if="todos.length > 0" :todos="todos" />

    <p v-else>Chưa có công việc nào.</p>
  </section>
</template>

<style scoped>
.tasks {
  padding: 16px 0;
}
</style>