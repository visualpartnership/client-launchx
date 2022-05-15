import { createWebHistory, createRouter } from "vue-router";
const routes =  [
  {
    path: "/",
    name: "Inicio",
    component: () => import("./components/Inicio")
  },
  {
    path: "/Portada",
    name: "explorer-details",
    component: () => import("./components/Portada")
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
