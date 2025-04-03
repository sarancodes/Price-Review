export const defaultColDef = {
  flex: 1,
  minWidth: 150,
  filter: "agTextColumnFilter",
  suppressHeaderMenuButton: true,
  suppressHeaderContextMenu: true,
};

export const columnDefs = [
  { field: "UPC", filter: "agTextColumnFilter", pinned: "left" },
  { field: "Product Desc", filter: "agTextColumnFilter", pinned: "left" },
  { field: "Vendor Cost Zone Desc", filter: "agTextColumnFilter" },
  { field: "Vendor Id", filter: "agTextColumnFilter" },
  { field: "# of Stores", filter: "agNumberColumnFilter" },
  { field: "Department", filter: "agTextColumnFilter" },
  { field: "Category", filter: "agTextColumnFilter" },
  { field: "Sub Category", filter: "agTextColumnFilter" },
  { field: "Zone Name", filter: "agTextColumnFilter" },
  { field: "Zone", filter: "agTextColumnFilter" },
  { field:"Scenario",filter:"agTextColumnFilter"},
  { field:"Job Id",filter:"agTextColumnFilter",
    cellRenderer:(params) => {
      return (
        <div style={{color:"#0000FF"}}>{params?.value}</div>
      );
    }
  },
  { field:"Brand",filter:"agTextColumnFilter"},
  {field:"UOM",filter:"agTextColumnFilter"},
  { field:'Cur Price',filter:"agNumberColumnFilter"},

  { field:'Rec Price',filter:"agNumberColumnFilter",
    cellRenderer: (params) => {
      const value = params?.value;
      const isDown = value === 0;
    
      return (
        <div style={{ color: isDown ? "red" : "#32CD32", display: "flex", alignItems: "center", gap: "5px" }}>
          <i 
            className={`fa-solid ${isDown ? "fa-arrow-down" : "fa-arrow-up"}`} 
            style={{ color: isDown ? "red" : "#32CD32" }}
          ></i>
          ${value}
        </div>
      );
    },
  },
  { field:"Rec Mult",filter:"agNumberColumnFilter"},
  { field:'Export Price',filter:"agNumberColumnFilter",
    cellRenderer: (params) => {
      const value = params?.value;
      const isDown = value === 0;
    
      return (
        <div style={{ color: isDown ? "red" : "#32CD32", display: "flex", alignItems: "center", gap: "5px" }}>
          <i 
            className={`fa-solid ${isDown ? "fa-arrow-down" : "fa-arrow-up"}`} 
            style={{ color: isDown ? "red" : "#32CD32" }}
          ></i>
          ${value}
        </div>
      );
    },
  },
  { field:"Export Mult",filter:"agNumberColumnFilter",},
  
  {
    field: "Status",
    filter: "agTextColumnFilter",
    cellStyle: { display: "flex", alignItems: "center", justifyContent: "center" },
    cellRenderer: (params) => {
      const value = params?.value
      const isApproved = value === "Approved";
  
      return (
        <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
          <i className={isApproved ? "fa-solid fa-check-circle" : "fa-solid fa-times-circle"} style={{ color: isApproved ? "#32CD32" : "red" }}></i>
          {/* {value} */}
        </div>
      );
    },
  },
  
  
  { field:"Run Mode",filter:"agTextColumnFilter"},
  { field: "Price Fam id", filter: "agTextColumnFilter" },
  { field: "# of products", filter: "agNumberColumnFilter" },
  { field: "Export Rev", filter: "agNumberColumnFilter" },
  { field: "Rec Profit Elast Chg", filter: "agNumberColumnFilter" },
  { field: "Markdown Amount", filter: "agNumberColumnFilter" },
  { field: "End Date", filter: "agDateColumnFilter" },
  { field: "Capture Rate", filter: "agNumberColumnFilter" },
  { field: "Exit Date", filter: "agDateColumnFilter" },
  { field: "Markdown Budget", filter: "agNumberColumnFilter" },
  { field: "Markdown Variance", filter: "agNumberColumnFilter" },
  { field: "Item Add Date", filter: "agDateColumnFilter" },
  // { field: "Competitor Impactful1", filter: "agTextColumnFilter" },
  // { field: "Competitor Price Impactful1", filter: "agNumberColumnFilter" },
  // { field: "Competitor Impactful2", filter: "agTextColumnFilter" },
  // { field: "Competitor Price Impactful2", filter: "agNumberColumnFilter" },
  // { field: "Competitor Priority1", filter: "agTextColumnFilter" },
  // { field: "Competitor Price Priority1", filter: "agNumberColumnFilter" },
  // { field: "Competitor Priority2", filter: "agTextColumnFilter" },
  // { field: "Competitor Price Priority2", filter: "agNumberColumnFilter" },
  // { field: "Competitor Priority3", filter: "agTextColumnFilter" },
  // { field: "Competitor Price Priority3", filter: "agNumberColumnFilter" },
  { field: "Rev Change +5%", filter: "agNumberColumnFilter",
    cellRenderer: (params) => {
      const value = params?.value
      const isHigher = value > 100;
  
      return (
        <div style={{ display: "flex", color: isHigher ? "#32CD32" : "red", alignItems: "center", gap: "5px" }}>
          ${value}
        </div>
      );
    },
   },
  { field: "Profit Change +5%", filter: "agNumberColumnFilter",
    cellRenderer: (params) => {
      const value = params?.value
      const isHigher = value > 100;
  
      return (
        <div style={{ display: "flex", color: isHigher ? "#32CD32" : "red", alignItems: "center", gap: "5px" }}>
          ${value}
        </div>
      );
    },
   },
  { field: "Rev Change -5%", filter: "agNumberColumnFilter",
    cellRenderer: (params) => {
      const value = params?.value
      const isHigher = value > 100;
  
      return (
        <div style={{ display: "flex", color: isHigher ? "#32CD32" : "red", alignItems: "center", gap: "5px" }}>
          ${value}
        </div>
      );
    },
   },
  { field: "Profit Change -5%", filter: "agNumberColumnFilter",
    cellRenderer: (params) => {
      const value = params?.value
      const isHigher = value > 100;
  
      return (
        <div style={{ display: "flex", color: isHigher ? "#32CD32" : "red", alignItems: "center", gap: "5px" }}>
          ${value}
        </div>
      );
    },
   },
  { field: "Val Chg 5% Decrease", filter: "agNumberColumnFilter", },
  { field: "Wkly Bskt Ct", filter: "agNumberColumnFilter" },
  { field: "Ela Price", filter: "agNumberColumnFilter" },
];


export const rowData = [
  {
    UPC: "111111111111",
    "Product Desc": "Gaming Laptop",
    "Vendor Cost Zone Desc": "North America",
    "Vendor Id": "V3001",
    "# of Stores": 200,
    Department: "Electronics",
    Category: "Computers",
    "Sub Category": "Laptops",
    "Zone Name": "West Zone",
    Zone: "WZ-01",
    "Scenario": "Base",
    "Job Id": "J56789",
    Brand: "XYZTech",
    UOM: "Each",
    "Cur Price": 999.99,
    "Rec Price": 0, // Will show red down arrow
    "Rec Mult": 1.2,
    "Export Price": 1200.5, // Will show green up arrow
    "Export Mult": 1.5,
    Status: "Approved", // Green check icon
    "Run Mode": "Auto",
    "Price Fam id": "PF789",
    "# of products": 500,
    "Export Rev": 150000,
    "Rec Profit Elast Chg": 3.5,
    "Markdown Amount": 20,
    "End Date": "2025-09-30",
    "Capture Rate": 95.2,
    "Exit Date": "2025-10-15",
    "Markdown Budget": 5000,
    "Markdown Variance": 250,
    "Item Add Date": "2024-11-01",
    "Rev Change +5%": 200, // Green
    "Profit Change +5%": 50, // Red
    "Rev Change -5%": 80, // Red
    "Profit Change -5%": 120, // Green
    "Val Chg 5% Decrease": -5,
    "Wkly Bskt Ct": 1500,
    "Ela Price": 2.1,
  },
  {
    UPC: "222222222222",
    "Product Desc": "Smartphone",
    "Vendor Cost Zone Desc": "Europe",
    "Vendor Id": "V4002",
    "# of Stores": 150,
    Department: "Electronics",
    Category: "Mobiles",
    "Sub Category": "Smartphones",
    "Zone Name": "East Zone",
    Zone: "EZ-02",
    "Scenario": "New Launch",
    "Job Id": "J67890",
    Brand: "ABC Mobile",
    UOM: "Each",
    "Cur Price": 799.99,
    "Rec Price": 999.99, // Green up arrow
    "Rec Mult": 1.3,
    "Export Price": 0, // Red down arrow
    "Export Mult": 1.6,
    Status: "Rejected", // Red cross icon
    "Run Mode": "Manual",
    "Price Fam id": "PF456",
    "# of products": 300,
    "Export Rev": 95000,
    "Rec Profit Elast Chg": 4.0,
    "Markdown Amount": 15,
    "End Date": "2025-07-20",
    "Capture Rate": 89.7,
    "Exit Date": "2025-08-05",
    "Markdown Budget": 4000,
    "Markdown Variance": 180,
    "Item Add Date": "2024-10-15",
    "Rev Change +5%": 50, // Red
    "Profit Change +5%": 200, // Green
    "Rev Change -5%": 110, // Green
    "Profit Change -5%": 60, // Red
    "Val Chg 5% Decrease": -10,
    "Wkly Bskt Ct": 1200,
    "Ela Price": 1.9,
  },
  {
    UPC: "333333333333",
    "Product Desc": "Bluetooth Headphones",
    "Vendor Cost Zone Desc": "Asia",
    "Vendor Id": "V5003",
    "# of Stores": 180,
    Department: "Electronics",
    Category: "Accessories",
    "Sub Category": "Audio",
    "Zone Name": "South Zone",
    Zone: "SZ-03",
    "Scenario": "Discount",
    "Job Id": "J78901",
    Brand: "SoundTech",
    UOM: "Each",
    "Cur Price": 199.99,
    "Rec Price": 210.99, // Green up arrow
    "Rec Mult": 1.1,
    "Export Price": 0, // Red down arrow
    "Export Mult": 1.4,
    Status: "Approved", // Green check icon
    "Run Mode": "Auto",
    "Price Fam id": "PF123",
    "# of products": 400,
    "Export Rev": 80000,
    "Rec Profit Elast Chg": 2.8,
    "Markdown Amount": 12,
    "End Date": "2025-05-10",
    "Capture Rate": 82.5,
    "Exit Date": "2025-05-25",
    "Markdown Budget": 3000,
    "Markdown Variance": 160,
    "Item Add Date": "2025-02-01",
    "Rev Change +5%": 120, // Green
    "Profit Change +5%": 90, // Red
    "Rev Change -5%": 95, // Red
    "Profit Change -5%": 140, // Green
    "Val Chg 5% Decrease": -7,
    "Wkly Bskt Ct": 1100,
    "Ela Price": 1.7,
  },
  {
    UPC: "444444444444",
    "Product Desc": "Smartwatch",
    "Vendor Cost Zone Desc": "Australia",
    "Vendor Id": "V6004",
    "# of Stores": 90,
    Department: "Electronics",
    Category: "Wearables",
    "Sub Category": "Smartwatches",
    "Zone Name": "North Zone",
    Zone: "NZ-04",
    "Scenario": "Clearance",
    "Job Id": "J89012",
    Brand: "WearTech",
    UOM: "Each",
    "Cur Price": 249.99,
    "Rec Price": 0, // Red down arrow
    "Rec Mult": 1.25,
    "Export Price": 275.99, // Green up arrow
    "Export Mult": 1.55,
    Status: "Rejected", // Red cross icon
    "Run Mode": "Manual",
    "Price Fam id": "PF789",
    "# of products": 250,
    "Export Rev": 60000,
    "Rec Profit Elast Chg": 3.2,
    "Markdown Amount": 8,
    "End Date": "2025-08-15",
    "Capture Rate": 88.1,
    "Exit Date": "2025-08-30",
    "Markdown Budget": 3500,
    "Markdown Variance": 140,
    "Item Add Date": "2024-09-20",
    "Rev Change +5%": 75, // Red
    "Profit Change +5%": 190, // Green
    "Rev Change -5%": 115, // Green
    "Profit Change -5%": 85, // Red
    "Val Chg 5% Decrease": -9,
    "Wkly Bskt Ct": 1300,
    "Ela Price": 1.6,
  }
];

