<template>
  <div class="footer-container">
    <div class="footer-logo">
      <img src="..//assets/logo.svg" alt="Logo" />
    </div>
    <div class="footer-nav">
      <h1 class="footer-nav-item">О нас</h1>
      <h1 class="footer-nav-item">Контакты</h1>
      <h1 class="footer-nav-item">Политика конфиденциальности</h1>
    </div>
    <div class="footer-copy">
      <p>&copy; 2024 <span>Avangard.</span> Все права защищены.</p>
    </div>
  </div>
</template>

<style scoped>
.footer-container {
  
  display: flex;
  justify-content: space-between;
  
  align-items: center;
  padding: 20px 50px;
  background-color: #1c1c1c; 
  color: #ffffff; 
  box-shadow: 0 -4px 15px rgba(0, 0, 0, 0.2); 
  border-top: 4px solid #4f4f4f; 
}

.footer-logo img {
  max-height: 60px; 
}

.footer-nav {
  display: flex;
  gap: 60px; 
}

.footer-nav-item {
  font-size: 20px; 
  font-weight: bold;
  text-transform: uppercase; 
  
  cursor: pointer;
  color: #cccccc; 
  transition: transform 0.3s ease, color 0.3s ease; 
}

.footer-nav-item:hover {
  transform: scale(1.1); 
  color: #4f4f4f; 
}

.footer-copy {
  font-size: 14px;
  color:darkkhaki
}
@media screen and (max-width: 768px) {
  .footer-nav{
    display: flex;
    flex-direction: column;
  }
  .footer-copy{
    display: none;}
}
</style>
