import { defineStore } from "pinia";
export const useProductsStore = defineStore("products", {
  state: () => ({
    products: [],
    loading: false,
  }),
  actions: {
    async fetchProducts() {
      this.loading = true;
      try {
        const response = await fetch(
          "https://dummyjson.com/products"
        );
        const data = await response.json();
        this.products = data.products;
        console.log(data.products);
        console.log("i am working or not");
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        this.loading = false;
      }
    },
  },
});
