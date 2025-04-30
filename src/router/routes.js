import Nav from "../components/Nav.vue";
import Home from "../components/Home.vue";
import Company from "../components/Company.vue";
import Validation from "../components/Validation.vue";

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
      }
    ],
  },
];
export default routes;
