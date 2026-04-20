<script setup>
import { ref } from 'vue'

const emit = defineEmits(['add-todo'])

const title = ref('')
const description = ref('')

function handleSubmit() {
  if (!title.value.trim() || !description.value.trim()) {
    return
  }

  emit('add-todo', {
    id: crypto.randomUUID(),
    title: title.value,
    description: description.value,
    completed: false
  })

  title.value = ''
  description.value = ''
}
</script>

<template>
  <form class="todo-form" @submit.prevent="handleSubmit">
    <div class="form-group">
      <label for="title">Tiêu đề</label>
      <input 
        id="title"
        v-model="title"
        type="text"
        placeholder="Nhập tiêu đề công việc"
      />
    </div>

    <div class="form-group">
      <label for="description">Mô tả</label>
      <textarea
        id="description"
        v-model="description"
        placeholder="Nhập mô tả công việc"
      ></textarea>
    </div>

    <button type="submit">Thêm công việc</button>
  </form>
</template>

<style scoped>
.todo-form {
  margin: 16px 0 24px;
  padding: 16px;
  border: 1px solid #ddd;
  border-radius: 8px;
}

.form-group {
  margin-bottom: 16px;
}

.form-group label {
  display: block;
  margin-bottom: 8px;
  font-weight: 600;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 10px 12px;
  border: 1px solid #ccc;
  border-radius: 6px;
  font: inherit;
}

.form-group textarea {
  min-height: 100px;
  resize: vertical;
}

button {
  background-color: #42b883;
  color: white;
  border: none;
  padding: 10px 16px;
  border-radius: 6px;
  cursor: pointer;
}
</style>