<script setup lang="ts">
import router from '@/router';

</script>

<template>
  <div class="header-container">
    <div class="logo">
      <router-link :to="`/`">
      <img src="..//assets/logo.webp" alt="Logo" />
      </router-link>
    </div>
    <div class="navbar">
      <router-link :to="`/catalogue`">
  <h1 class="nav-item" >Каталог</h1>
</router-link>
      <h1 class="nav-item">Корзина</h1>
    </div>
  </div>
</template>

<style scoped>
.header-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 50px;
  background-color: #1c1c1c; 
  color: #ffffff; 
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0); 
  border-bottom: 4px solid #4f4f4f; 
}

.logo img {
  max-height: 80px; 
}

.navbar {
  display: flex;
  gap: 60px; 
}

.nav-item {
  font-size: 24px; 
  font-weight: bold;
  text-transform: uppercase; 
  position: relative;
  cursor: pointer;
  color: #cccccc; 
  transition: transform 0.3s ease, color 0.3s ease; 
}

.nav-item:hover {
  transform: scale(1.1); 
  color: #4f4f4f; 
}
@media screen and (max-width: 768px) {
  .header-container {
    
    display: flex;
    flex-direction: column;
  }
  .logo{padding-bottom: 25px;}
}

</style>
