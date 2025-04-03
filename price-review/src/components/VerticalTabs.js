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
    "UPC",
    "Product Desc",
    "Vendor Cost Zone Desc",
    "Vendor Id",
    "# of Stores",
    "Department",
    "Category",
    "Sub Category",
    "Zone Name",
    "Zone",
    "Scenario",
    "Job Id",
    "Brand",
    "UOM",
  ];

  const filteredData = Object.entries(selectedRow || {}).filter(([key]) =>
    allowedColumns.includes(key)
  );

  return (
    <div
      style={{
        border: "2px solid #ccc",
        borderRadius: "8px",
        margin: "10px",
        height: "100%",
      }}
    >
      <div
        style={{ display: "flex", borderTop: "1px solid #ddd", height: "100%" }}
      >
        {/* Left Side - Stacked Tab Buttons */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "5px",
            width: "200px",
            borderRight: "1px solid #ddd",
            padding: "10px",
          }}
        >
          {["1", "2", "3", "4"].map((tabKey) => (
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
              {tabKey === "1"
                ? "Price Review Details"
                : tabKey === "2"
                ? "Prices"
                : tabKey === "3"
                ? "Approval History"
                : "Rules"}
            </div>
          ))}
        </div>

        {/* Right Side - Tab Content */}
        <div style={{ flex: 1, padding: "10px" }}>
          {activeTab === "1" && (
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "15px",
                alignItems: "start",
              }}
            >
              {/* Scrollable Table for Key-Value Pairs */}
              <div
                style={{
                  width: "100%",
                  maxWidth: "600px",
                  height: "260px",
                  overflowY: "auto", 
                  border: "1px solid #ddd",
                  borderRadius: "8px",
                  backgroundColor: "#fff",
                  boxShadow: "0px 2px 5px rgba(0,0,0,0.1)",
                }}
              >
                <table style={{ width: "100%", borderCollapse: "collapse" }}>
                  <thead>
                    <tr
                      style={{
                        backgroundColor: "#f5f5f5",
                        textAlign: "left",
                        position: "sticky",
                        top: 0,
                      }}
                    >
                      <th
                        style={{
                          padding: "10px",
                          borderBottom: "1px solid #ddd",
                          width: "40%",
                        }}
                      >
                        Field
                      </th>
                      <th
                        style={{
                          padding: "10px",
                          borderBottom: "1px solid #ddd",
                          width: "60%",
                        }}
                      >
                        Value
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredData.map(([key, value], index) => (
                      <tr
                        key={index}
                        style={{
                          backgroundColor: index % 2 === 0 ? "#fafafa" : "#fff",
                        }}
                      >
                        <td
                          style={{
                            padding: "10px",
                            borderBottom: "1px solid #ddd",
                            whiteSpace: "nowrap",
                          }}
                        >
                          {key}
                        </td>
                        <td
                          style={{
                            padding: "10px",
                            borderBottom: "1px solid #ddd",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap",
                          }}
                        >
                          {value}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* AgGridReact Table with Fixed Height */}
              <div
                style={{
                  minHeight: "220px",
                  padding: "15px",
                  border: "1px solid #ddd",
                  borderRadius: "8px",
                  backgroundColor: "#fff",
                  boxShadow: "0px 2px 5px rgba(0,0,0,0.1)",
                  overflow: "hidden",
                }}
              >
                <div
                  className="ag-theme-alpine"
                  style={{ height: "20vh", width: "100%" }}
                >
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
