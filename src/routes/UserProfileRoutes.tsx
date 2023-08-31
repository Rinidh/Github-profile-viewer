import React from "react";
import { Route, Routes } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";

import MainApp from "../MainApp";
import MainAndFooter from "../components/grid parts/MainAndFooter";

const UserProfileRoutes: React.FC = () => {
  return (
    <Router>
      <Routes /* <Switch> not working?? */>
        <Route path="/" element={<MainApp />}>
          <Route path="main-and-footer" element={<MainAndFooter />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default UserProfileRoutes;
