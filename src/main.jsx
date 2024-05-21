import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import Home from "./components/home/home.jsx";
import { QueryClient, QueryClientProvider } from "react-query";
import ProductsPage from "./components/products/index.jsx";

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
            <Route index element={<Home />} />
            <Route path="/products" element={<ProductsPage />}>
              <Route index element={<div>Type</div>} />
              <Route path=":invoiceId" element={<div>Type</div>} />
            </Route>
            <Route path="/*" element={<div>Não encontrado</div>} />
          </Routes>
        </App>
      </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>
);
