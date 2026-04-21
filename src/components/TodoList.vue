<script setup>
import { ref } from 'vue'
import TodoItem from './TodoItem.vue'
import TodoForm from './TodoForm.vue'

defineProps({
  todos: {
    type: Array,
    required: true,
  },
})

const emit = defineEmits(['add-todo', 'delete-todo'])

// state
const showModal = ref(false)

function openAddModal() {
  showModal.value = true
}

function closeAddModal() {
  showModal.value = false
}

function handleAddFromForm(newTodo) {
  emit('add-todo', newTodo)
  closeAddModal()
}

function handleDeleteTodo(id) {
  emit('delete-todo', id)
}
</script>

<template>
  <section class="todo-list">
    <div class="todo-list__controls">
      <button class="add-btn" v-on:click="openAddModal">Thêm công việc</button>
    </div>

    <h3>Danh sách nhiệm vụ</h3>

    <ul v-if="todos && todos.length">
      <TodoItem v-for="todo in todos" v-bind:key="todo.id" v-bind:todo="todo" v-on:delete-todo="handleDeleteTodo" />
    </ul>

    <p v-else class="empty">Chưa có công việc nào.</p>

    <!-- Modal -->
    <div v-if="showModal" class="modal-backdrop" v-on:click.self="closeAddModal">
      <div class="modal">
        <button class="modal-close" v-on:click="closeAddModal">✕</button>
        <TodoForm v-on:add-todo="handleAddFromForm" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.todo-list {
  margin-top: 24px;
}

.todo-list__controls {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 12px;
}

.add-btn {
  background-color: #42b883;
  color: #fff;
  border: none;
  padding: 8px 12px;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 600;
}

.add-btn:hover {
  opacity: 0.95;
}

.todo-list h3 {
  margin-bottom: 12px;
}

.todo-list ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.empty {
  color: #666;
}

/* Modal styles */
.modal-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.modal {
  background: white;
  padding: 16px;
  width: 90%;
  max-width: 600px;
  border-radius: 8px;
  position: relative;
}

.modal-close {
  position: absolute;
  right: 8px;
  top: 8px;
  background: transparent;
  border: none;
  font-size: 18px;
  cursor: pointer;
}
</style>
