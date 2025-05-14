import { ref } from "vue";

export function useCartInfo() {
  const itemInCart = ref(0);

  const inceaseItemInCart = () => {
    itemInCart.value++;
    console.log(`did i increase by 1 or not`);
  }

  return{
    itemInCart,
    inceaseItemInCart
  }
}