import React, { useState } from "react";
import { Modal, Checkbox, Button, Typography } from "antd";
import { EditOutlined } from "@ant-design/icons";

const { Text } = Typography;

const EditModal = ({ visible, onClose }) => {
  return (
    <Modal
      title="Edit Selected"
      open={visible}
      onCancel={onClose}
      footer={null}
      width={600}
    >
      <div
        style={{ padding: "10px", background: "#f5f5f5", borderRadius: "5px" }}
      >
        <div>
          <Text strong style={{ color: "#555" }}>
            Edit Selected will apply to the currently selected record.
          </Text>
        </div>
        <div>
          <Text strong style={{ color: "#555" }}>
            Actions such as "Set Status" need to be marked as checked.
          </Text>
        </div>
      </div>

      <div
        style={{
          marginTop: "10px",
          padding: "10px",
          background: "#e3effc",
          borderRadius: "5px",
        }}
      >
        <Checkbox>Update ALL Records in Filter</Checkbox>
      </div>

      <div
        style={{
          marginTop: "15px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "10px",
        }}
      >
        <Checkbox>Set Status</Checkbox>
        <Checkbox>Set Export Price</Checkbox>
        <Checkbox>Revert Prices</Checkbox>
        <Checkbox>Lock/Unlock Prices</Checkbox>
        <Checkbox>Set Price Change Date</Checkbox>
        <Checkbox>Set Unlock Date</Checkbox>
        <Checkbox>Set Comment</Checkbox>
        <Checkbox>Refresh Forecast</Checkbox>
      </div>

      <div style={{ marginTop: "20px", textAlign: "right" }}>
        <Button type="primary" style={{ marginRight: "10px" }}>
          Update
        </Button>
        <Button onClick={onClose}>Close</Button>
      </div>
    </Modal>
  );
};

const EditButton = () => {
  const [isModalVisible, setModalVisible] = useState(false);

  return (
    <>
        <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: "10px" }}>
        <Button
          icon={<EditOutlined />}
          onClick={() => setModalVisible(true)}
        >
          Edit
        </Button>
      </div>

      <EditModal
        visible={isModalVisible}
        onClose={() => setModalVisible(false)}
      />
    </>
  );
};

export default EditButton;
