import React , {useState} from "react";
import Select from "react-select";

const ReactSelect = () => {
    const [optionPicked, setOptionPicked] = useState("")
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
  const customStyles =  {
    control: (provided) => ({
      ...provided,
      width: "120px",
      borderColor:"green",
      borderRadius: "8px",
      textAlign: "left",
      color: "green",
      text: "Assign"
    })
   
  };

  return (
    <div>
      <Select options={options} styles={customStyles} onChange={(options)=>setOptionPicked(options)} />
    <p> picked : {optionPicked?.label}</p> 
    </div>
  );
};

export default ReactSelect;
