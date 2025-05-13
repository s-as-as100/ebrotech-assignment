import React, { useState } from "react";
import SideBar from "../../layouts/SideBar/SideBar";
import Header from "../../layouts/Header/Header";
import "./singleInvite.scss";
import HeaderTabs from "../../layouts/HeaderTabs/HeaderTabs";
import Input from "../../uiKit/Input";
import DropDown from "../../uiKit/DropDown";
import Button from "../../uiKit/Button";
import Checkbox from "../../uiKit/Checkbox";
import { Modal } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import deleteicon from "../../assets/icons/delete.png";
import addIcon from "../../assets/icons/addIcon.svg";
import profileIcon from "../../assets/icons/profileIcon.svg";

const dropdownItems = [
  { label: "Option 1", key: "1" },
  { label: "Option 2", key: "2" },
  { label: "Option 3", key: "3" },
];

const defaultFormData = {
  mobile: "",
  name: "",
  email: "",
  purpose: null,
  entryPoint: null,
  host: null,
  branch: null,
  vehicle: null,
  vehicleNo: "",
  date: "",
  visitDay: "",
  time: "",
  room: "",
};

const SingleInvite = () => {
  const [formData, setFormData] = useState(defaultFormData);
  const [isRecurrence, setIsRecurrence] = useState(false);
  const [recurrenceRows, setRecurrenceRows] = useState([
    {
      date: "",
      visitDay: "",
      time: "",
      room: "",
    },
  ]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleReset = () => {
    setFormData(defaultFormData);
    setRecurrenceRows([
      {
        date: "",
        visitDay: "",
        time: "",
        room: "",
      },
    ]);
    setIsRecurrence(false);
    setIsModalOpen(false);
  };

  const handleInvite = () => {
    setIsModalOpen(true);
  };

  const addRecurrenceRow = () => {
    setRecurrenceRows([
      ...recurrenceRows,
      {
        date: "",
        visitDay: "",
        time: "",
        room: "",
      },
    ]);
  };

  const deleteRecurrenceRow = (index) => {
    const updatedRows = [...recurrenceRows];
    updatedRows.splice(index, 1);
    setRecurrenceRows(updatedRows);
  };

  return (
    <div className="single-invite-container">
      <SideBar />
      <div className="single-invite-content">
        <Header />
        <HeaderTabs />

        <div className="single-invite-form">
          <span className="poppins-font-family font-size-md">
            Please fill in these details.
          </span>

          <div className="row-spacing">
            <div>
              <span>Mobile Number</span>
              <Input
                value={formData.mobile}
                onChange={(e) => handleChange("mobile", e.target.value)}
              />
            </div>
            <div>
              <span>Full Name</span>
              <Input
                value={formData.name}
                onChange={(e) => handleChange("name", e.target.value)}
              />
            </div>
            <div>
              <span>Email ID</span>
              <Input
                value={formData.email}
                onChange={(e) => handleChange("email", e.target.value)}
              />
            </div>
          </div>

          <div className="row-spacing">
            <div>
              <span>Purpose</span>
              <DropDown
                items={dropdownItems}
                value={formData.purpose}
                onChange={(value) => handleChange("purpose", value)}
              />
            </div>
            <div>
              <span>Entry Point</span>
              <DropDown
                items={dropdownItems}
                value={formData.entryPoint}
                onChange={(value) => handleChange("entryPoint", value)}
              />
            </div>
            <div>
              <span>Host</span>
              <DropDown
                items={dropdownItems}
                value={formData.host}
                onChange={(value) => handleChange("host", value)}
              />
            </div>
          </div>

          <div className="row-spacing" style={{ width: "31.5%" }}>
            <div>
              <span>Branch</span>
              <DropDown
                items={dropdownItems}
                value={formData.branch}
                onChange={(value) => handleChange("branch", value)}
              />
            </div>
          </div>

          <div className="row-spacing">
            <div>
              <span>Vehicle</span>
              <DropDown
                items={dropdownItems}
                value={formData.vehicle}
                onChange={(value) => handleChange("vehicle", value)}
                placeholder="Select Vehicle"
              />
            </div>
            <div>
              <span>Vehicle Number</span>
              <Input
                value={formData.vehicleNo}
                onChange={(e) => handleChange("vehicleNo", e.target.value)}
              />
            </div>
          </div>

          <div className="row-spacing">
            <div>
              <span>Date</span>
              <Input
                value={formData.date}
                onChange={(e) => handleChange("date", e.target.value)}
              />
            </div>
            <div>
              <span>Visit Day</span>
              <Input
                value={formData.visitDay}
                onChange={(e) => handleChange("visitDay", e.target.value)}
              />
            </div>
            <div>
              <span>Time</span>
              <Input
                value={formData.time}
                onChange={(e) => handleChange("time", e.target.value)}
              />
            </div>
            <div>
              <span>Meeting Room</span>
              <Input
                value={formData.room}
                onChange={(e) => handleChange("room", e.target.value)}
              />
            </div>
          </div>

          <div className="margin-top-1">
            <Checkbox
              label="Recurrence"
              checked={isRecurrence}
              value={isRecurrence}
              onChange={(e) => setIsRecurrence(e.target.checked)}
            />
          </div>

          {isRecurrence && (
            <div className="recurrence-section">
              {recurrenceRows.map((row, index) => (
                <div className="row-spacing" key={index}>
                  <div>
                    <span>Date</span>
                    <Input
                      value={row.date}
                      onChange={(e) => {
                        const updatedRows = [...recurrenceRows];
                        updatedRows[index].date = e.target.value;
                        setRecurrenceRows(updatedRows);
                      }}
                    />
                  </div>
                  <div>
                    <span>Visit Day</span>
                    <Input
                      value={row.visitDay}
                      onChange={(e) => {
                        const updatedRows = [...recurrenceRows];
                        updatedRows[index].visitDay = e.target.value;
                        setRecurrenceRows(updatedRows);
                      }}
                    />
                  </div>
                  <div>
                    <span>Time</span>
                    <Input
                      value={row.time}
                      onChange={(e) => {
                        const updatedRows = [...recurrenceRows];
                        updatedRows[index].time = e.target.value;
                        setRecurrenceRows(updatedRows);
                      }}
                    />
                  </div>
                  <div>
                    <span>Meeting Room</span>
                    <Input
                      value={row.room}
                      onChange={(e) => {
                        const updatedRows = [...recurrenceRows];
                        updatedRows[index].room = e.target.value;
                        setRecurrenceRows(updatedRows);
                      }}
                    />
                  </div>
                  {recurrenceRows.length > 1 && (
                    <div className="delete-row-button">
                      <img
                        src={deleteicon}
                        alt="Delete row"
                        className="icon-small"
                        onClick={() => deleteRecurrenceRow(index)}
                      />
                    </div>
                  )}
                </div>
              ))}
              <span className="add-row-button" onClick={addRecurrenceRow}>
                <img src={addIcon} alt="Add row" className="icon-md" />
                Add Row
              </span>
            </div>
          )}

          <div className="single-invite-form-footer">
            <Button
              label="Invite"
              className="primary-button"
              handleClick={handleInvite}
            />
            <Button
              label="Reset"
              className="primary-button"
              handleClick={handleReset}
            />
          </div>
        </div>
      </div>

      <Modal open={isModalOpen} onCancel={handleReset} footer={null}>
        <div className="form-data">
          <div className="right-content">
            <div className="profile-card">
              <div>
                <img src={profileIcon} />
              </div>

              <div className="user-details">
                <span className="poppins-font-family font-size-lg">
                  {formData.name}
                </span>
                <span className="poppins-font-family font-size-md">
                  Visiting: {formData.visitDay}
                </span>
                <span className="poppins-font-family font-size-md">
                  Official Meeting : {formData.purpose}
                </span>
              </div>
            </div>

            <div className="invite-details">
              <span className="poppins-font-family font-size-md">
                Email ID: {formData.email}
              </span>
              <span className="poppins-font-family font-size-md">
                Mobile Number : {formData.mobile}
              </span>
              <span className="poppins-font-family font-size-md">
                Date of Meet : {formData.date}
              </span>

              <span className="poppins-font-family font-size-md">
                Time : {formData.time}
              </span>
              <span className="poppins-font-family font-size-md">
                Meeting Room : {formData.room}
              </span>
              <span className="poppins-font-family font-size-md">
                Company Name : {formData.entryPoint}
              </span>
              <span className="poppins-font-family font-size-md">
                Accessories Carried : {formData.purpose}
              </span>
            </div>
          </div>

          <div className="left-content">
            <div className="profile-status">
              <Button className="approved-btn primary-button" label="Approved" />
            </div>

            <div className="user-authentication-details invite-details">
              <span className="poppins-font-family font-size-md">
                Idenity Proof : {formData.host}
              </span>
              <span className="poppins-font-family font-size-md">
                Id number:{" "}
                {formData.host
                  ? `${formData.host.substring(0, 2)}${"*".repeat(
                      Math.max(0, formData.host.length - 4)
                    )}${formData.host.slice(-2)}`
                  : "N/A"}
              </span>

              <span className="poppins-font-family font-size-md">
                Visitor ID : {formData.host}
              </span>
            </div>
          </div>
        </div>

       </Modal>
    </div>
  );
};

export default SingleInvite;
