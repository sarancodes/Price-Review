import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./dashboards/LandingPage";
import PriceReview from "./dashboards/PriceReview"; 

import { AllCommunityModule, ModuleRegistry } from "ag-grid-community";

// Register AG Grid modules
ModuleRegistry.registerModules([AllCommunityModule]);

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/price-review" element={<PriceReview />} />
        {/* <Route path="/promotion-events" element={<PromotionEvents />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
