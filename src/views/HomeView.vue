<template>
  <section class="home">
    <h2>Trang chủ</h2>
    <p>Đây là ứng dụng Todo App dùng để học Vue cơ bản.</p>
    <RouterLink to="/tasks">Đi tới danh sách công việc</RouterLink>
  </section>
</template>

<style scoped>
.home {
  padding: 16px 0;
}

.home h2 {
  margin-bottom: 12px;
}

.home p {
  margin-bottom: 16px;
  color: #555;
}

.home a {
  color: #42b883;
  font-weight: 600;
  text-decoration: none;
}
</style>