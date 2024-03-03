import "./selected-task.styles.scss";
import { useState } from "react";
import { useParams } from "react-router-dom";
import TextInput from "../textInput/text-input.component";
import Button from "../button/button.components";

const SelectedTask = () => {
  const [inputValue, setInputValue] = useState<string>("");

  const handleChange = (value: string) => {
    setInputValue(value);
  };

  return (
    <div className="selectedTaskContainer">
      <p className="selectedTaskTitle">Task Name</p>
      <TextInput
        value={inputValue}
        placeholder="Wrecking the train"
        onChange={handleChange}
      />

      <div className="btnContainer">
        <div className="btnItem">
          <Button isDelete onPress={() => console.log("Delete")} />
        </div>
        <div className="btnItem">
          <Button isSave onPress={() => console.log("Save")} />
        </div>
      </div>
    </div>
  );
};

export default SelectedTask;
