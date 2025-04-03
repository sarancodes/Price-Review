import React, { useState, useEffect, useMemo } from "react";
import { Spin, Typography } from "antd";
import { AgGridReact } from "ag-grid-react";
import { columnDefs, defaultColDef, rowData } from "../utils/gridUtils";
import Navbar from "../components/Navbar";
import "../styles/global.css"; 


const { Text } = Typography;

const PriceReview = () => {
  const [loading, setLoading] = useState(true);
  const [gridHeight, setGridHeight] = useState(400); 
  const minGridHeight = 200; 

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const gridStyle = useMemo(
    () => ({ width: "100%", height: `${gridHeight}px` }),
    [gridHeight]
  );

  // Handle Drag to Resize
  const handleMouseDown = (e) => {
    e.preventDefault();
    const startY = e.clientY;
    const startHeight = gridHeight;

    const onMouseMove = (event) => {
      const newHeight = Math.max(
        minGridHeight,
        startHeight + (event.clientY - startY)
      );
      setGridHeight(newHeight);
    };

    const onMouseUp = () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
    };

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
  };

  return (
    <div style={{ height: "100vh", display: "flex", flexDirection: "column" }}>
      <Navbar />

      <div style={{ flex: 1, position: "relative", padding: "20px" }}>
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
            <Text
              style={{ marginTop: "10px", fontSize: "16px", color: "#555" }}
            >
              Loading Price Review...
            </Text>
          </div>
        )}

        {!loading && (
          <>
            <div className="ag-theme-alpine" style={gridStyle}>
              <AgGridReact
                columnDefs={columnDefs}
                defaultColDef={defaultColDef}
                rowData={rowData}
                sideBar={{
                  toolPanels: [
                    {
                      id: "columns",
                      labelDefault: "Columns",
                      labelKey: "columns",
                      iconKey: "columns",
                      toolPanel: "agColumnsToolPanel",
                    },
                    // {
                    //   id: "filters",
                    //   labelDefault: "Filters",
                    //   labelKey: "filters",
                    //   iconKey: "filter",
                    //   toolPanel: "agFiltersToolPanel",
                    // },
                  ],
                  defaultToolPanel: "",
                }}
              />
            </div>

            {/* Resizable Bar */}
            <div className="resizable-bar" onMouseDown={handleMouseDown}>
              <div className="resizable-bar-handle" />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default PriceReview;
