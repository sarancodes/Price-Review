import React from "react";
import { Tabs, Typography } from "antd";
import { AgGridReact } from "ag-grid-react";
import { reviewColumnDefs, reviewRowData } from "../utils/gridUtils";

const { Text } = Typography;

const VerticalTabs = ({ selectedRow }) => {
  if (!selectedRow) {
    return (
      <div style={{ padding: "20px", borderTop: "1px solid #ddd" }}>
        <Text>Select a row to view details.</Text>
      </div>
    );
  }

  // Define the columns to display (up to UOM)
  const allowedColumns = [
    "UPC", "Product Desc", "Vendor Cost Zone Desc", "Vendor Id",
    "# of Stores", "Department", "Category", "Sub Category",
    "Zone Name", "Zone", "Scenario", "Job Id", "Brand", "UOM"
  ];

  const filteredData = Object.entries(selectedRow || {}).filter(([key]) =>
    allowedColumns.includes(key)
  );

  return (
    <div style={{ padding: "10px", borderTop: "1px solid #ddd" }}>
      <Tabs tabPosition="left">
        {/* Price Review Details */}
        <Tabs.TabPane tab="Price Review Details" key="1">
          <div style={{ 
            display: "grid", 
            gridTemplateColumns: "1fr 1fr", 
            gap: "5px",
            alignItems: "start",
            maxWidth: "100%"
          }}>
            {/* First Two Columns: Key-Value Pairs */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3px", maxWidth: "600px", maxHeight: "20vh" }}>
              {filteredData.map(([key, value]) => (
                <div key={key} style={{ display: "flex", alignItems: "center", gap: "8px", padding: "2px"}}>
                  <Text strong style={{ width: "40%" }}>{key}</Text>
                  <Text style={{ flex: 1, borderBottom: "1px solid #000", paddingBottom: "1px" }}>{value}</Text>
                </div>
              ))}
            </div>

            {/* Third Column: Grid Space*/}
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
        </Tabs.TabPane>

        {/* Other Tabs */}
        <Tabs.TabPane tab="Prices" key="2">
          <Text>No additional info available.</Text>
        </Tabs.TabPane>
        <Tabs.TabPane tab="Approval History" key="3">
          <Text>No additional info available.</Text>
        </Tabs.TabPane>
        <Tabs.TabPane tab="Rules" key="4">
          <Text>No additional info available.</Text>
        </Tabs.TabPane>
      </Tabs>
    </div>
  );
};

export default VerticalTabs;
