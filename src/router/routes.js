import Nav from "../components/Nav.vue";
import Home from "../components/Home.vue";
import Company from "../components/Company.vue";

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
        path: "marketplace",
        name: "Marketplace",
        component: Company,
      },
    ],
  },
];
export default routes;
