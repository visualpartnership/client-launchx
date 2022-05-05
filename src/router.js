import { createWebHistory, createRouter } from "vue-router";
const routes =  [
  {
    path: "/",
    alias: "/explorers",
    name: "explorers",
    component: () => import("./components/ExplorersList")
  },
  {
    path: "/explorer/:id",
    name: "explorer-details",
    component: () => import("./components/Explorer")
  },
  {
    path: "/add",
    name: "add-explorer",
    component: () => import("./components/AddExplorer")
  },
  {
    path: "/mc",
    name: "mc-all",
    component: () => import("./components/MCList")
  },
  {
    path: "/mc/:id",
    name: "mc-details",
    component: () => import("./components/MC")
  },
  {
    path: "/mc/add",
    name: "add-MC",
    component: () => import("./components/AddMC")
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
