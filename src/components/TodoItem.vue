<script setup>
// khong viet const props = defineProps({...}) vi chi dung props o template,
// khong can truy cap props trong script.
// https://stackoverflow.com/questions/72506997/does-defineprops-in-script-setup-automatically-create-a-local-property-of-the-de
const props = defineProps({
  todo: {
    type: Object,
    required: true,
  },
})

const emit = defineEmits(['delete-todo'])

function handleDelete() {
  emit('delete-todo', props.todo.id)
}
</script>

<template>
  <li class="task-item">
    <h3>{{ todo.title }}</h3>
    <p>{{ todo.description }}</p>
    <p>Trạng thái: {{ todo.completed ? 'Đã xong' : 'Chưa xong' }}</p>

    <div class="task-item__actions">
      <RouterLink :to="{ name: 'task-details', params: { id: todo.id } }">Xem chi tiết</RouterLink>
      <button type="button" class="delete-btn" @click="handleDelete">Xóa</button>
    </div>
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

.task-item__actions {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-top: 6px;
}

.task-item a {
  color: #42b883;
  text-decoration: none;
  font-weight: 600;
}

.delete-btn {
  border: none;
  border-radius: 6px;
  background: #dc2626;
  color: #fff;
  font-weight: 600;
  padding: 6px 12px;
  cursor: pointer;
}

.delete-btn:hover {
  background: #b91c1c;
}

.delete-btn:focus-visible {
  outline: 2px solid #111;
  outline-offset: 2px;
}
</style>
