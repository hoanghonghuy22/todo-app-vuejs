<script setup></script>

<template>
  <div class="app">
    <header class="app-header">
      <h1>Todo App</h1>

      <nav class="app-nav">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/tasks">Tasks</RouterLink>
      </nav>
    </header>

    <main class="app-main">
      <RouterView />
    </main>
  </div>
</template>

<style scoped>
.app {
  max-width: 900px;
  margin: 0 auto;
  padding: 24px;
  font-family: Arial, sans-serif;
}

.app-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
}

.app-nav {
  display: flex;
  gap: 12px;
}

.app-nav a {
  color: #333;
  text-decoration: none;
  font-weight: 600;
}

.app-nav a.router-link-active {
  color: #42b883;
}

.app-main {
  padding: 16px 0;
}
</style>
