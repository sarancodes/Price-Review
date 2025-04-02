import React, { useState, useEffect } from "react";
import { Spin,Typography} from "antd";
import { AgGridReact } from "ag-grid-react";

const { Text } = Typography;

const PriceReview = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const columnDefs = [
    { field: "name" },
    { field: "age" },
    { field: "country" },
  ];

  const rowData = [
    { name: "John", age: 30, country: "USA" },
    { name: "Anna", age: 25, country: "Germany" },
  ];

  return (
    <div style={{ position: "relative", height: "100vh", padding: "20px" }}>
      {loading && (
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1000,
          }}
        >
          <Spin size="large" />
          <Text style={{ marginTop: "10px", fontSize: "16px", color: "#555" }}>
            Loading Price Review...
          </Text>
        </div>
      )}

      {!loading && (
        <div className="ag-theme-alpine" style={{ height: 400, width: "100%" }}>
          <AgGridReact columnDefs={columnDefs} rowData={rowData} />
        </div>
      )}
    </div>
  );
};

export default PriceReview;
