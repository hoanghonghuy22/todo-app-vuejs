import todos from '../data/todos'

export function getAllTasks() {
  return todos
}

export function getTaskById(id) {
  return todos.find((todo) => todo.id === id)
}