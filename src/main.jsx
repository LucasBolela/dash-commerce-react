import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import { QueryClient, QueryClientProvider } from "react-query";
import ProductsPage from "./pages/products/products-page.jsx";
import HomePage from "./pages/home-page.jsx";
import ProductDetailPage from "./pages/products/product-detail-page.jsx";
import NotFoundPage from "./pages/not-found-page.jsx";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      cacheTime: 60 * 1000,
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <App>
          <Routes>
            <Route index path="/home" element={<Navigate to="/" replace />} />
            <Route index element={<HomePage />} />
            <Route path="/products">
              <Route index element={<ProductsPage />} />
              <Route path=":productId" element={<ProductDetailPage />} />
            </Route>
            <Route path="/*" element={<NotFoundPage />} />
          </Routes>
        </App>
      </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>
);
