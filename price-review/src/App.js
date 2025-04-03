import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./dashboards/LandingPage";
import PriceReview from "./dashboards/PriceReview"; 

import { ModuleRegistry } from "ag-grid-community";
import { AllEnterpriseModule, LicenseManager, IntegratedChartsModule } from "ag-grid-enterprise";
import { AgChartsEnterpriseModule } from "ag-charts-enterprise";
ModuleRegistry.registerModules([
  AllEnterpriseModule,
  IntegratedChartsModule.with(AgChartsEnterpriseModule)
]);

LicenseManager.setLicenseKey("[TRIAL]_this_{AG_Charts_and_AG_Grid}_Enterprise_key_{AG-078795}_is_granted_for_evaluation_only___Use_in_production_is_not_permitted___Please_report_misuse_to_legal@ag-grid.com___For_help_with_purchasing_a_production_key_please_contact_info@ag-grid.com___You_are_granted_a_{Single_Application}_Developer_License_for_one_application_only___All_Front-End_JavaScript_developers_working_on_the_application_would_need_to_be_licensed___This_key_will_deactivate_on_{30 April 2025}____[v3]_[0102]_MTc0NTk2NzYwMDAwMA==39b1546fe2d969966a31bbc6b46371db");

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
