import React from "react";
import AccountsPage from "./components/AccountsPage/AccountsPage";
import AdminPage from "./components/AdminPage/AdminPage";
import CreatePage from "./components/CreatePage/CreatePage";
import NotFoundPage from "./components/NotFoundPage/NotFoundPage";
import SettingsPage from "./components/SettingsPage/SettingsPage";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import EditPage from "./components/EditPage/EditPage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<AccountsPage />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/admin/create" element={<CreatePage />} />
          <Route path="/admin/edit/:postId" element={<EditPage />} />
          <Route path="/admin/settings" element={<SettingsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
