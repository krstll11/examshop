<template>
  <div class="product-card-container">
    <div class="product-card">
      <img class="product-image" :src="image" alt="Product" />
      <div class="product-details">
        <h2 class="product-title">{{ title }}</h2>
        <h2 class="product-category">{{ category }}</h2>
        <div class="product-price">{{ price * 100}}₽</div>
        <h2 class="product-rating">{{ rating }} ☆</h2>
        <button class="product-button">В корзину</button>
      </div>
    </div>
  </div>
</template>
<script >
export default {
  props: {
    id: {
      type: Number,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      required: true
    }
  },
}
</script>
<style scoped>
.product-card-container {
  display: flex;
  justify-content: center;
  gap: 30px; 
  flex-wrap: wrap;
  
}

.product-card {
  background-color: #2c2c2c; 
  width: 300px; 
  height: 453px;
  border-radius: 10px; 
  overflow: hidden; 
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0); 
  transition: transform 0.3s ease, box-shadow 0.3s ease; 
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.product-card:hover {
  transform: scale(1.05); 
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0); 
}
.product-rating {
  color:darkkhaki;
  font-weight: bolder;
  margin-bottom: 5px;
}

.product-image {
  width: 100%;
  height: 200px; 
  object-fit: cover; 
}

.product-details {
  padding: 20px;
  color: #ffffff; 
}

.product-title {
  font-size: 24px; 
  font-weight: bold;
  color: #ffffff; 
  margin-bottom: 10px;
  line-height: 1.2em;
  max-height: 2.4em;
  overflow: hidden;
  text-overflow: ellipsis;
}

.product-category{
  color:#4f4f4f
}
.product-price {
  margin-top: 5px;
  font-size: 20px; 
  font-weight: bold;
  color: #ffffff; 
  margin-bottom: 20px;
}

.product-button {
  background-color: #4f4f4f; 
  color: #ffffff; 
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  border-radius: 5px; 
  cursor: pointer;
  transition: background-color 0.3s ease; 
  align-self: center;
  margin-bottom: 20px;
}

.product-button:hover {
  background-color: #333333; 
}

</style>