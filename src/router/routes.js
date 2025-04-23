import Nav from "../components/Nav.vue";
import Home from "../components/Home.vue";

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
    ],
  },
];
export default routes;
