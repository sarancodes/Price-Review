import React from "react";
import { Row, Col, Card, Button } from "antd";
import { RightOutlined } from "@ant-design/icons";
import Navbar from "../components/Navbar";

const cardStyle = {
  backgroundColor: "#87A9DA", // Light Blue
  color: "#FFFFFF",
  borderRadius: "10px",
  minHeight: "180px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  padding: "20px",
  position: "relative",
};

const titleStyle = {
  fontSize: "20px",
  fontWeight: "bold",
  color: "#FFFFFF",
};

const buttonStyle = {
  width: "45px",
  height: "45px",
  borderRadius: "50%",
  backgroundColor: "#FFFFFF",
  color: "#87A9DA",
  border: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  position: "absolute",
  bottom: "15px",
  right: "15px",
  transition: "all 0.3s ease",
};

const buttonHoverStyle = {
  backgroundColor: "#5C81C4", // Darker Blue
  color: "#FFFFFF",
};

const modules = [
  { title: "Price Review", description: "View, manage, and export our price recommendations for regular and EDLP", link: "/price-review" },
  { title: "Promotion Events", description: "Manage promotional events, associated forecasts, and view informative reports", link: "/" },
  { title: "Rule Management", description: "Utilize our industry-leading rules system to ensure forecast and pricing accuracy", link: "/" },
  { title: "Rule Explorer", description: "View and evaluate your current rules and their impact on pricing recommendations", link: "/" },
  { title: "Science Status", description: "View current progress on science and other data processing tasks", link: "/" },
  { title: "Buydown Explorer", description: "View and validate your vendor buydown data to ensure accuracy and compliance", link: "/" },
];

const LandingPage = () => {
  return (
    <>
      <Navbar/>
      <div style={{ padding: "20px", marginTop: "64px" }}>
        <Row gutter={[16, 16]}>
          {modules.map((module, index) => (
            <Col span={8} key={index}>
              <Card title={<span style={titleStyle}>{module.title}</span>} style={cardStyle}>
                <p>{module.description}</p>
                <Button
                  style={buttonStyle}
                  href={module.link}
                  onMouseEnter={(e) => Object.assign(e.target.style, buttonHoverStyle)}
                  onMouseLeave={(e) => Object.assign(e.target.style, buttonStyle)}
                >
                  <RightOutlined />
                </Button>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </>
  );
};

export default LandingPage;
