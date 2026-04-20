const todos = [
  {
    id: '550e8400-e29b-41d4-a716-446655440000',
    title: 'Học cấu trúc project Vue',
    description: 'Tìm hiểu main.js, App.vue, router và cách các file liên kết với nhau.',
    completed: false
  },
  {
    id: '550e8400-e29b-41d4-a716-446655440001',
    title: 'Làm danh sách công việc',
    description: 'Hiển thị danh sách task bằng v-for và tách TodoItem thành component riêng.',
    completed: true
  },
  {
    id: '550e8400-e29b-41d4-a716-446655440002',
    title: 'Tạo trang chi tiết task',
    description: 'Dùng route param để xem chi tiết một task theo UUID.',
    completed: false
  }
]

export default todos