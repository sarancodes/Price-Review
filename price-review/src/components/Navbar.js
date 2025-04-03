import React from "react";
import { Layout, Menu, Avatar, Dropdown, Button } from "antd";
import { DownOutlined, UserOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import Title from "../img/title.png";

const { Header } = Layout;

const menuItems = [
  { title: "Manage", options: ["Users", "Roles", "Permissions"] },
  { title: "Regular", options: ["Schedule", "Tasks", "Workflows"] },
  { title: "Promotions", options: ["Discounts", "Coupons", "Campaigns"] },
  { title: "Engine", options: ["Rules", "Automation", "Execution"] },
  { title: "Reports", options: ["Sales", "Performance", "Audit Logs"] },
  { title: "Admin", options: ["Dashboard", "Configurations", "Access"] },
  { title: "Settings", options: ["Profile", "Preferences", "Security"] },
  { title: "File Manager", options: ["Upload", "Storage", "Logs"] },
];

// Profile Dropdown Menu
const profileMenu = (
  <Menu>
    <Menu.Item key="profile">
      <Link to="/">Profile</Link>
    </Menu.Item>
    <Menu.Item key="logout">
      <Link to="/">Logout</Link>
    </Menu.Item>
  </Menu>
);

const Navbar = () => {
  return (
    <Header className="flex items-center justify-between bg-white px-6 shadow-md">
      {/* Left Section - Clickable Logo */}
      <div className="flex items-center gap-4">
        <Link to="/">
          {" "}
          {/* Wrap image inside Link */}
          <img
            src={Title}
            alt="ClearDemand Logo"
            className="h-10 w-auto cursor-pointer"
          />
        </Link>
      </div>

      {/* Center Section - Dropdown Menus */}
      <div className="flex gap-6">
        {menuItems.map((menu) => (
          <Dropdown
            key={menu.title}
            overlay={
              <Menu>
                {menu.options.map((option) => (
                  <Menu.Item key={option}>{option}</Menu.Item>
                ))}
              </Menu>
            }
            placement="bottom"
            trigger={["hover"]}
          >
            <Button className="text-gray-700 bg-transparent border-none shadow-none">
              {menu.title} <DownOutlined />
            </Button>
          </Dropdown>
        ))}
      </div>

      {/* Right Section - Profile Dropdown */}
      <div className="flex items-center gap-4">
        <Dropdown overlay={profileMenu} trigger={["click"]}>
          <Avatar
            size="large"
            src="https://as2.ftcdn.net/jpg/02/08/98/05/1000_F_208980504_njS12KTuZLQ3wQZaHLbKpSLFNu9rF6Hs.jpg"
            className="cursor-pointer hover:shadow-lg transition-all"
          />
        </Dropdown>
      </div>
    </Header>
  );
};

export default Navbar;
