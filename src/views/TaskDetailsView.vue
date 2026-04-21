<script setup>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { getTaskById } from '../services/taskService'

const route = useRoute() // lay doi tuong route hien tai
const todo = ref(null)

// onMounted chi chay 1 lan khi component duoc mount

// khi chuyen /tasks/:id sang cung route nhung khac param (ví dụ /tasks/1 -> /tasks/2),
// Vue Router tai su dung component instance => onMounted khong chay lai.
// Dùng watch để phản ứng khi route.params.id thay đổi.
watch(
  () => route.params.id,
  (newId) => {
    todo.value = getTaskById(newId)
  },
  { immediate: true },
)
</script>

<template>
  <section class="task-detail">
    <div class="task-detail__header">
      <RouterLink :to="{ name: 'tasks' }" class="back-link">← Quay lại</RouterLink>
    </div>

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

.task-detail__header {
  margin-bottom: 16px;
}

.back-link {
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  color: #42b883;
  font-weight: 600;
}

.back-link:hover {
  text-decoration: underline;
}

.task-detail h2 {
  margin-bottom: 12px;
}

.task-detail p {
  margin-bottom: 8px;
}
</style>
