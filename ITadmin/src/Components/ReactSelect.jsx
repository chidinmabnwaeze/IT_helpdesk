import React from "react";
import Select from "react-select";

const ReactSelect = () => {
  const options = [
    {
      value: "user1",
      label: "User1",
    },
    {
      value: "user2",
      label: "User2",
    },
    {
      value: "user3",
      label: "User3",
    },
    {
      value: "user4",
      label: "User4",
    },
  ];
  const customStyles = () => {
    control: (provided) => ({
      ...provided,
      width: "200px",
      borderRadius: "8px",
      textAlign: "left",
    });
  };

  return (
    <div>
      <Select options={options} styles={customStyles} />
    </div>
  );
};

export default ReactSelect;
