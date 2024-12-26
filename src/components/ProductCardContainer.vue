<template>
  <div>
      <div class="category-buttons">
          <button 
              @click="filterProductsByCategory(null)"
          >
              Все товары
          </button>
          <button 
              v-for="category in categories" 
              :key="category" 
              @click="filterProductsByCategory(category)"
          >
              {{ categoriesToRussian(category) }}
          </button>
      </div>

      <div class="product-card-container">
        <router-link
        v-for="product in paginatedProducts"
        :key="product.id"
        :to="`/product/${product.id}`" 
        class="product-card-link" 
      >
          <ProductCard 
            :key="product.id"
            :id="product.id"
            :title="product.title"
            :price="product.price"
            :category="categoriesToRussian(product.category)"
            :description="product.description"
            :image="product.image"
            :rating="product.rating.rate"
            
            ></ProductCard>
          </router-link>
      </div>
      <div class="pagination">
      <button @click="changePage(nowPage - 1)" :disabled="nowPage === 1">Назад</button>
      <div class="page-number">Страница {{ nowPage }}</div>
      <button @click="changePage(nowPage + 1)" :disabled="nowPage === totalPages">Вперед</button>
    </div>
  </div>
</template>

<script>
import { ref, computed, onMounted } from "vue";
import ProductCard from './ProductCard.vue';
import Product from "@/views/ProductView.vue";

export default {
  components: {
    ProductCard,
    Product
  },

  setup() {
    const categories = ref([]);
    const products = ref([]);
    const selectedCategory = ref(null);
    const nowPage = ref(1);
    const itemsPage = 10;

    const RussianCategories = {
      "electronics": "Электроника",
      "jewelery": "Ювелирные изделия",
      "men's clothing": "Мужская одежда",
      "women's clothing": "Женская одежда"
    };

    const filteredProducts = computed(() => {
      
      if (selectedCategory.value) {
        return products.value.filter(product => product.category === selectedCategory.value);
      }
      return products.value;
    });

    
    const paginatedProducts = computed(() => {
      const start = (nowPage.value - 1) * itemsPage;
      const end = start + itemsPage;
      return filteredProducts.value.slice(start, end);
    });

    const totalPages = computed(() => {
      return Math.ceil(filteredProducts.value.length / itemsPage);
    });

    const changePage = (newPage) => {
      if (newPage >= 1 && newPage <= totalPages.value) {
        nowPage.value = newPage;
      }
    };

    const filterProductsByCategory = (category) => {
      selectedCategory.value = category;
      nowPage.value = 1; 
    };

    const categoriesToRussian = (category) => {
      return RussianCategories[category] || category;
    };

    onMounted(async () => {
      try {
        const categoryResponse = await fetch('https://fakestoreapi.com/products/categories');
        const categoryData = await categoryResponse.json();
        categories.value = categoryData;

        const productResponse = await fetch('https://fakestoreapi.com/products');
        const productData = await productResponse.json();
        products.value = productData;
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    });

    return {
      categories,
      products,
      filteredProducts,
      filterProductsByCategory,
      categoriesToRussian,
      nowPage,
      changePage,
      totalPages,
      paginatedProducts, 
    };
  }
};
</script>


<style scoped>
.category-buttons {
  margin-top: 20px;
display: flex;
flex-wrap: wrap;
gap: 10px;
}

.category-buttons button {
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

.category-buttons button:hover {
  background-color: #333333; 
}
.category-buttons button:focus {
  background-color: #000000; 
}
.product-card-container {
display: flex;
flex-wrap: wrap;
justify-content: space-between;
gap: 30px;
}
.pagination {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  gap: 10px;
}

.pagination button {
  width: 104px;
  background-color: #4f4f4f;
  color: #fff;
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  align-self: center;
}

.pagination button:hover {
  background-color: #333;
}

.pagination button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

.page-number {
  
  font-size: 16px;
  color: #333;
  align-self: center;
}
</style>
