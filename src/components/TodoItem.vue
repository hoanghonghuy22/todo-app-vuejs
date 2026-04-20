<script setup>
// khong viet const props = defineProps({...}) vi chi dung props o template,
// khong can truy cap props trong script. 
// https://stackoverflow.com/questions/72506997/does-defineprops-in-script-setup-automatically-create-a-local-property-of-the-de
defineProps({
  todo: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <li class="task-item">
    <h3>{{ todo.title }}</h3>
    <p>{{ todo.description }}</p>
    <p>Trạng thái: {{ todo.completed ? 'Đã xong' : 'Chưa xong' }}</p>

    <RouterLink :to="`/tasks/${todo.id}`">Xem chi tiết</RouterLink>
  </li>
</template>

<style scoped>
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