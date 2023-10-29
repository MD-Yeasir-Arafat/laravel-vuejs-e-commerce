import { createRouter, createWebHistory } from "vue-router";
import { useAuth } from "@/stores";
import {
  Index,
  ShopPage,
  SingleProduct,
  CheckOut,
} from "@/views/pages/index.js";
import { SellerList, SellerStore, SellerApply } from "@/views/pages/seller/";
import { UserLogin, UserRegister } from "@/views/auth/index.js";
import { MyProfile, MyOrders, MyWishlist } from "@/views/user/index.js";

const routes = [
  {
    path: "/",
    name: "index",
    component: Index,
    meta: { title: "Home" },
  },
  {
    path: "/auth/login",
    name: "user.login",
    component: UserLogin,
    meta: { title: "Login", guest: true },
  },
  {
    path: "/auth/register",
    name: "user.register",
    component: UserRegister,
    meta: { title: "Register", guest: true },
  },

  {
    path: "/shop",
    name: "shop",
    component: ShopPage,
    meta: { title: "Shop" },
  },
  {
    path: "/seller-list",
    name: "seller.list",
    component: SellerList,
    meta: { title: "Seller List" },
  },
  {
    path: "/seller-store",
    name: "seller.store",
    component: SellerStore,
    meta: { title: "Seller Store" },
  },
  {
    path: "/seller-apply",
    name: "seller.apply",
    component: SellerApply,
    meta: { title: "Seller Apply" },
  },
  {
    path: "/My-profile",
    name: "user.profile",
    component: MyProfile,
    meta: { title: "My Profile", requiresAuth: true },
  },
  {
    path: "/My-oders",
    name: "user.orders",
    component: MyOrders,
    meta: { title: "My Orders", requiresAuth: true },
  },
  {
    path: "/My-wishlist",
    name: "user.wishlist",
    component: MyWishlist,
    meta: { title: "My Wishlist", requiresAuth: true },
  },
  {
    path: "/single-product",
    name: "single.product",
    component: SingleProduct,
    meta: { title: "Single Product" },
  },
  {
    path: "/Checkout",
    name: "checkout",
    component: CheckOut,
    meta: { title: "Checkout" },
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

const default_title = "404";

router.beforeEach((to, from, next) => {
  document.title = to.meta.title || default_title;
  const loggedIn = useAuth();

  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (!loggedIn.user.meta) {
      next({ name: "user.login" });
    } else {
      next();
    }
  } else if (to.matched.some((record) => record.meta.guest)) {
    if (loggedIn.user.meta) {
      next({ name: "user.profile" });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
