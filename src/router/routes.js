import Nav from "../components/Nav.vue";
import Home from "../pages/Home.vue";
import Company from "../pages/Company.vue";
import Validation from "../pages/Validation.vue";
import Products from "../pages/Products.vue";
import Cart from "../pages/Cart.vue";

const routes = [
   {
    path: "/",
    name: "Nav",
    component: Nav,
    children: [
      {
        path: "",
        name: "Home",
        component: Home,
      },
      {
        path: "company",
        name: "company",
        component: Company,
      },
      {
        path: "validation",
        name: "validation",
        component: Validation,
      },
      {
        path: "products",
        name: "products",
        component: Products,
      },
      {
        path: "cart",
        name: "cart",
        component: Cart,
      }
    ],
  },
];

export default routes;
