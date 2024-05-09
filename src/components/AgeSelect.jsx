import { Select } from "antd";

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
    <Select
      defaultValue="21-65 ปี" // Set defaultValue to "ABC"
      style={{ width: 120 }}
      onChange={(value) => console.log(value)}
      className="text-center"
    >
      {options}
    </Select>
  );
};
export default AgeSelect;
