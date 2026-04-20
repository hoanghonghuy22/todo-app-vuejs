<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { getTaskById } from '../services/taskService'

const route = useRoute() // lay doi tuong route hien tai
const todo = ref(null)

onMounted(() => {
  todo.value = getTaskById(route.params.id)
})
</script>

<template>
  <section class="task-detail">
    <div v-if="todo">
      <h2>{{ todo.title }}</h2>
      <p>{{ todo.description }}</p>
      <p>Trạng thái: {{ todo.completed ? 'Đã xong' : 'Chưa xong' }}</p>
    </div>

    <p v-else>Không tìm thấy công việc.</p>
  </section>
</template>

<style scoped>
.task-detail {
  padding: 16px 0;
}

.task-detail h2 {
  margin-bottom: 12px;
}

.task-detail p {
  margin-bottom: 8px;
}
</style>