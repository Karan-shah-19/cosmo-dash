import axios from "axios";

// Base API URL (including /api prefix)
const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

// Create Axios instance
const api = axios.create({
  baseURL: API_URL,
  withCredentials: true, // Send cookies if needed
  headers: {
    "Content-Type": "application/json",
  },
});

// =======================
// AUTH ENDPOINTS
// =======================
export const registerUser = (data) => api.post("/auth/register", data);
export const loginUser = (data) => api.post("/auth/login", data);
export const logoutUser = () => api.post("/auth/logout");
export const getProfile = () => api.get("/auth/me");
export const forgotPassword = (data) => api.post("/auth/forgot-password", data);

// =======================
// PRODUCTS ENDPOINTS
// =======================
export const getProducts = () => api.get("/products");
export const getProductById = (id) => api.get(`/products/${id}`);
export const createProduct = (data) => api.post("/products", data);
export const updateProduct = (id, data) => api.put(`/products/${id}`, data);
export const deleteProduct = (id) => api.delete(`/products/${id}`);
export const toggleProductStatus = (id) => api.patch(`/products/${id}/toggle-status`);
export const getProductCategories = () => api.get("/products/categories");

// =======================
// ORDERS ENDPOINTS
// =======================
export const getOrders = () => api.get("/orders");
export const getOrderById = (id) => api.get(`/orders/${id}`);
export const createOrder = (data) => api.post("/orders", data);
export const updateOrderStatus = (id, data) => api.put(`/orders/${id}`, data);
export const deleteOrder = (id) => api.delete(`/orders/${id}`);
export const getOrderStats = () => api.get("/orders/stats");

// =======================
// RETAILER ENDPOINTS
// =======================
export const getRetailerSettings = () => api.get("/retailer/settings");
export const updateRetailerSettings = (data) => api.put("/retailer/settings", data);
export const getRetailerDashboard = () => api.get("/retailer/dashboard");
export const getRetailerThemes = () => api.get("/retailer/themes");
export const updateRetailerTheme = (data) => api.patch("/retailer/theme");
export const getPublicStore = (retailerId) => api.get(`/retailer/store/${retailerId}`);

export default api;
