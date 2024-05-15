import { Select } from "antd";
import "../header/ageSelect.css";

const { Option } = Select;
const AgeSelect = () => {
  const options = [];

  options.push(
    <Option key="21-65 ปี" value="21-65 ปี">
      <p className="w-full text-center font-medium">21-65 ปี</p>
    </Option>
  );

  for (let age = 21; age <= 80; age++) {
    options.push(
      <Option key={age.toString()} value={age.toString()}>
        <p className="w-full text-center font-medium">{age} ปี</p>
      </Option>
    );
  }

  return (
    <div className="testContainer">
      <Select
        defaultValue="21-65 ปี"
        style={{ width: "fit-content" }}
        onChange={(value) => console.log(value)}
        className="custom-dropdown text-center z-0 p-0 m-0 w-fit"
      >
        {options}
        {/* <p className="test">TEST</p> */}
      </Select>
    </div>
  );
};
export default AgeSelect;
