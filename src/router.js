import { createWebHistory, createRouter } from "vue-router";
const routes =  [
  {
    path: "/commanders",
    alias: "/commanders",
    name: "commanders",
    component: () => import("./components/CommandersList")
  },
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
    path: "/commander/:id",
    name: "commander-details",
    component: () => import("./components/Commander")
  },
  {
    path: "/addExplorer",
    name: "add-explorer",
    component: () => import("./components/AddExplorer")
  },
  {
    path: "/addCommander",
    name: "add-commander",
    component: () => import("./components/AddCommander")
  }
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
