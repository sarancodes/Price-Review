import React from "react";
import { Layout, Menu, Avatar, Typography, Dropdown, Button } from "antd";
import { DownOutlined, UserOutlined } from "@ant-design/icons";

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

const Navbar = () => {
  return (
    <Header className="flex items-center justify-between bg-white px-6 shadow-md">
      {/* Left Section - Logo and Title */}
      <div className="flex items-center gap-4">
        <img
          src="https://mms.businesswire.com/media/20240115269111/en/1992831/5/ClearDemand_Logo_-_Transparent_Background.jpg?download=1"
          alt="ClearDemand Logo"
          className="h-10 w-auto"
        />
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

      {/* Right Section - Profile */}
      <div className="flex items-center gap-4">
        <Avatar size="large" icon={<UserOutlined />} />
      </div>
    </Header>
  );
};

export default Navbar;
