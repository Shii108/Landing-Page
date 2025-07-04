// useProductsStore.js
import { defineStore } from "pinia";
import { ref } from "vue";
import { useToast } from "vue-toastification";
import "vue-toastification/dist/index.css";
import Cookies from "js-cookie";
export const useProductsStore = defineStore("products", () => {
  // state (reactive variables)
  const products = ref([]);
  const loading = ref(false);
  const itemIncart = ref(0);
  const cart = ref([]);
  const toast = useToast();
  const sortBy = ref("Auto")
  // const disabled = ref(false);

  // actions (methods to mutate the state)
  const fetchProducts = async () => {
    loading.value = true;
    try {
      const response = await fetch("https://dummyjson.com/products?limit=100");
      const data = await response.json();
      products.value = data.products;
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      loading.value = false;
    }
  };

  const addToCart = (title, price, id) => {
    const exists = cart.value.some((item) => item.title === title);

    if (exists) {
      showEroor();
    } else {
      cart.value.push({ title, price, id });
      toast.success("Item added to cart", {
        timeout: 1500,
        pauseOnHover: false,
      });
      itemIncart.value++;
      updateCookies();
    }
  };

  const showEroor = () => {
    toast.error("nuh uh , u cant add more then one item", {
      timeout: 1500,
      pauseOnHover: false,
    });
    // console.log("nuh uh , u cant add more then one item");
  };

  const updateCookies = () => {
    Cookies.set("cartItems", JSON.stringify(cart.value), { expires: 7 });
    Cookies.set("itemsInCart", itemsInCart.value, { expires: 7 });
  };

  const sortMin = () => {
    products.value.sort((a, b) => a.price - b.price);
    window.top.scrollTo(0, 0);
    sortBy.value = "Min"
  };

  const sortMax = () => {
    products.value.sort((a, b) => b.price - a.price);
    window.top.scrollTo(0, 0);
    sortBy.value = "Max"
  };

  const deleteItem = (id) => {
    const index = cart.value.findIndex((item) => item.id === id);
    cart.value.splice(index, 1);
    itemIncart.value--;
    updateCookies();
  };

  const getCookie = () => {
    const savedCart = Cookies.get("cartItems");
    if (savedCart) {
      cart.value = JSON.parse(savedCart);
    }
    const savedItemInCart = Cookies.get("itemIncart");
    if (savedItemInCart) {
      itemIncart.value = parseInt(savedItemInCart);
    }
  };
  // return the state and actions for the store
  return {
    products,
    loading,
    fetchProducts,
    itemIncart,
    addToCart,
    sortMin,
    sortMax,
    cart,
    deleteItem,
    getCookie,
    sortBy,
  };
});
