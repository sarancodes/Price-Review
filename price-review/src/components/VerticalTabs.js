import React, { useState } from "react";
import { Tabs, Typography } from "antd";
import { AgGridReact } from "ag-grid-react";
import { reviewColumnDefs, reviewRowData } from "../utils/gridUtils";

const { Text } = Typography;

const VerticalTabs = ({ selectedRow }) => {
  const [activeTab, setActiveTab] = useState("1");

  if (!selectedRow) {
    return (
      <div style={{ padding: "20px", borderTop: "1px solid #ddd" }}>
        <Text>Select a row to view details.</Text>
      </div>
    );
  }

  const allowedColumns = [
    "UPC", "Product Desc", "Vendor Cost Zone Desc", "Vendor Id",
    "# of Stores", "Department", "Category", "Sub Category",
    "Zone Name", "Zone", "Scenario", "Job Id", "Brand", "UOM"
  ];

  const filteredData = Object.entries(selectedRow || {}).filter(([key]) =>
    allowedColumns.includes(key)
  );

  return (
    <div style={{ border: "2px solid #ccc", borderRadius: "8px",margin: "10px", height: "100%" }}>
      <div style={{ display: "flex", borderTop: "1px solid #ddd", height: "100%" }}>
        {/* Left Side - Stacked Tab Buttons */}
        <div style={{
          display: "flex",
          flexDirection: "column",
          gap: "5px",
          width: "200px",
          borderRight: "1px solid #ddd",
          padding: "10px"
        }}>
          {["1", "2", "3", "4"].map(tabKey => (
            <div
              key={tabKey}
              onClick={() => setActiveTab(tabKey)}
              style={{
                padding: "10px",
                border: "1px solid #ccc",
                borderRadius: "5px",
                cursor: "pointer",
                backgroundColor: activeTab === tabKey ? "#1890ff" : "#f9f9f9",
                color: activeTab === tabKey ? "white" : "black",
                textAlign: "center",
              }}
            >
              {tabKey === "1" ? "Price Review Details" :
              tabKey === "2" ? "Prices" :
              tabKey === "3" ? "Approval History" : "Rules"}
            </div>
          ))}
        </div>

        {/* Right Side - Tab Content */}
        <div style={{ flex: 1, padding: "10px" }}>
          {activeTab === "1" && (
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5px", alignItems: "start" }}>
              {/* Key-Value Pairs */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3px", maxWidth: "600px", maxHeight: "20vh" }}>
                {filteredData.map(([key, value]) => (
                  <div key={key} style={{ display: "flex", alignItems: "center", gap: "8px", padding: "2px" }}>
                    <Text strong style={{ width: "40%" }}>{key}</Text>
                    <Text style={{ flex: 1, borderBottom: "1px solid #000", paddingBottom: "1px" }}>{value}</Text>
                  </div>
                ))}
              </div>

              {/* AgGridReact */}
              <div style={{ minHeight: "200px", display: "flex", alignItems: "flex-start" }}>
                <div className="ag-theme-alpine" style={{ height: "20vh", width: "100%" }}>
                  <AgGridReact
                    columnDefs={reviewColumnDefs}
                    defaultColDef={{
                      flex: 1,
                      minWidth: 100,
                      filter: true,
                      sortable: true,
                    }}
                    rowData={reviewRowData}
                  />
                </div>
              </div>
            </div>
          )}

          {activeTab === "2" && <Text>No additional info available.</Text>}
          {activeTab === "3" && <Text>No additional info available.</Text>}
          {activeTab === "4" && <Text>No additional info available.</Text>}
        </div>
      </div>
    </div>
  );
};

export default VerticalTabs;