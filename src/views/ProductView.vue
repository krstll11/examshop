<template>
    <div class="product-page" v-if="product">
      <div class="product-details">
        <h1 class="product-title">{{ product.title }}</h1>
        <img class="product-image" :src="product.image" alt="product image" />
        <p class="product-description">{{ product.description }}</p>
        <p class="product-price">Цена: {{ product.price*100 }} Р</p>
        <p class="product-rating">Рейтинг: {{ product.rating.rate }} ★</p>
        <p class="product-rating">{{ product.rating.count }} пользователей оценили этот товар</p>
        <button class="product-btn">В корзину</button>
      </div>
    </div>
  </template>
  
  <script>
  import { ref, onMounted } from 'vue';
  
  export default {
    props: {
    id: {
      type: Number,
      required: true,
    },
  },
  
    setup(props) {
        
      const product = ref(null);
  
      onMounted(async () => {
        try {
          const response = await fetch(`https://fakestoreapi.com/products/${props.id}`);
          product.value = await response.json();
        } catch (error) {
          console.error('Error fetching product details:', error);
        }
      });
  
      return {
        product
      };
    }
  };
  </script>
  <style scoped>
  .product-details {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    font-family: 'Arial', sans-serif;
    background-color: #2c2c2c;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    text-align: center;
  }
  .product-image{
    max-width: 640px;
  }
  .product-title {
    font-size: 2rem;
    font-weight: bold;
    color: #cccccc;
    margin-bottom: 20px;
  }
  
  .product-image {
    max-width: 100%;
    height: auto;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    margin-bottom: 20px;
  }
  
  .product-description {
    font-size: 1rem;
    color: #888;
    margin-bottom: 20px;
    line-height: 1.5;
  }
  
  .product-price {
    font-size: 1.25rem;
    font-weight: bold;
    color: #cccccc;
    margin-bottom: 20px;
  }
  
  .product-rating {
    font-size: 1rem;
    color: darkkhaki;
    margin-bottom: 20px;
  }
  
  .product-btn {
    padding: 12px 20px;
    background-color: #4f4f4f; 
    color: #ffffff; 
    font-size: 1rem;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  .product-btn:hover {
    background-color: #333333; 
  }
  
  .product-btn:focus {
    outline: none;
  }
  </style>