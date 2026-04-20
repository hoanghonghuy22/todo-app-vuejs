<script setup>
import { ref, onMounted } from 'vue'
import { getAllTasks } from '../services/taskService'

const todos = ref([])

onMounted(() => {
  todos.value = getAllTasks()
})
</script>

<template>
  <section class="tasks">
    <h2>Danh sách công việc</h2>

    <ul v-if="todos.length > 0" class="task-list">
      <li v-for="todo in todos" :key="todo.id" class="task-item">
        <h3>{{ todo.title }}</h3>
        <p>{{ todo.description }}</p>
        <p>Trạng thái: {{ todo.completed ? 'Đã xong' : 'Chưa xong' }}</p>

        <RouterLink :to="`/tasks/${todo.id}`">Xem chi tiết</RouterLink>
      </li>
    </ul>

    <p v-else>Chưa có công việc nào.</p>
  </section>
</template>

<style scoped>
.tasks {
  padding: 16px 0;
}

.task-list {
  list-style: none;
  padding: 0;
  margin: 16px 0 0;
}

.task-item {
  padding: 16px;
  border: 1px solid #ddd;
  border-radius: 8px;
  margin-bottom: 12px;
}

.task-item h3 {
  margin-bottom: 8px;
}

.task-item p {
  margin-bottom: 8px;
}

.task-item a {
  color: #42b883;
  text-decoration: none;
  font-weight: 600;
}
</style>