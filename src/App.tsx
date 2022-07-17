import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/client/Home";
import "antd/dist/antd.min.css"; // or 'antd/dist/antd.less'
import AdminLayout from "./layout/AdminLayout";
import Products from "./pages/admin/Products";
import FormProduct from "./pages/admin/Products/Form";

function App() {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<Home />} />
      </Route>
      <Route path="/admin" element={<AdminLayout />}>
        <Route path="products" element={<Products />} />
        <Route path="products/add" element={<FormProduct />} />
      </Route>
    </Routes>
  );
}

export default App;
