<template>
    <div class="welcome-page">
      <div class="welcome-banner">
        <h1>Добро пожаловать на маркетплейс <span>Авангард</span></h1>
        <p>Откройте мир товаров: от электроники до модной одежды, все в одном месте.</p>
        <router-link to="/catalogue" class="explore-button">Исследовать каталог</router-link>
      </div>
      </div>
  </template>
  <style scoped>
  .welcome-page {
    text-align: center;
    padding: 20px;
    background-color: #f4f4f4;
  }
  
  .welcome-banner {
    padding: 40px 20px;
    background-color: #2c2c2c;
    color: #ffffff;
    border-radius: 10px;
  }
  
  .welcome-banner h1 {
    font-size: 36px;
    margin-bottom: 20px;
  }
  
  .welcome-banner h1 span {
    font-style:oblique;
    color: darkkhaki;
  }
  
  .welcome-banner p {
    font-size: 18px;
    margin-bottom: 30px;
  }
  
  .explore-button {
    display: inline-block;
    background-color: #4f4f4f;
    color: #ffffff;
    padding: 10px 20px;
    font-size: 16px;
    font-weight: bold;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    text-decoration: none;
    transition: background-color 0.3s ease;
  }
  
  .explore-button:hover {
    background-color: #333;
  }
  
  .highlight-sections {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 40px;
    gap: 20px;
  }
  
  .highlight-item {
    background-color: #ffffff;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    width: 300px;
    text-align: center;
  }
  
  .highlight-item img {
    width: 100%;
    height: auto;
    border-radius: 10px;
    margin-bottom: 15px;
  }
  
  .highlight-item h2 {
    font-size: 22px;
    margin-bottom: 10px;
  }
  
  .highlight-item p {
    font-size: 16px;
    color: #555;
  }
  </style>