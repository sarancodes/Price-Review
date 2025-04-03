import React, { useState, useEffect, useMemo } from "react";
import { Spin, Typography } from "antd";
import { AgGridReact } from "ag-grid-react";
import { columnDefs, defaultColDef, rowData } from "../utils/gridUtils";
import Navbar from "../components/Navbar";
import VerticalTabs from "../components/VerticalTabs";
import "../styles/global.css";
import EditModal from "../components/EditModal";

const { Text } = Typography;

const PriceReview = () => {
  const [loading, setLoading] = useState(true);
  const [containerHeight, setContainerHeight] = useState(614); // Total area for both Grid & Tabs
  const [gridHeight, setGridHeight] = useState(300);
  const [selectedRow, setSelectedRow] = useState(null);
  const minGridHeight = 200;
  const minTabsHeight = 200; // Minimum height for VerticalTabs

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
  const tabsHeight = containerHeight - gridHeight; // Adjust VerticalTabs dynamically

  const handleMouseDown = (e) => {
    e.preventDefault();
    const startY = e.clientY;
    const startHeight = gridHeight;

    const onMouseMove = (event) => {
      const newHeight = Math.max(
        minGridHeight,
        Math.min(
          containerHeight - minTabsHeight,
          startHeight + (event.clientY - startY)
        )
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

  const onSelectionChanged = (event) => {
    const selectedNode = event.api.getSelectedNodes()[0];
    if (selectedNode) {
      setSelectedRow(selectedNode.data);
    }
  };

  return (
    <div style={{ height: "100vh", display: "flex", flexDirection: "column" }}>
      <Navbar />

      <div
        style={{
          flex: 1,
          position: "relative",
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          marginTop: "64px",
        }}
      >
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
            <EditModal selectedRow={selectedRow} />
            <div className="ag-theme-alpine" style={gridStyle}>
              <AgGridReact
                columnDefs={columnDefs}
                defaultColDef={defaultColDef}
                rowData={rowData}
                rowSelection="single"
                onSelectionChanged={onSelectionChanged}
                sideBar={{
                  toolPanels: [
                    {
                      id: "columns",
                      labelDefault: "Columns",
                      labelKey: "columns",
                      iconKey: "columns",
                      toolPanel: "agColumnsToolPanel",
                    },
                  ],
                  defaultToolPanel: "",
                }}
              />
            </div>

            <div className="resizable-bar" onMouseDown={handleMouseDown}>
              <div className="resizable-bar-handle" />
            </div>

            {/* Dynamic Height for VerticalTabs */}
            <div style={{ height: `${tabsHeight}px`, overflow: "auto" }}>
              <VerticalTabs selectedRow={selectedRow} />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default PriceReview;
