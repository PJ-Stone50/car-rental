import { Select } from "antd";

const { Option } = Select;
const AgeSelect = () => {
  const options = [];

  for (let age = 21; age <= 80; age++) {
    options.push(
      <Option key={age} value={age}>
        {age} years
      </Option>
    );
  }

  return (
    <Select
      defaultValue={21}
      style={{ width: 120 }}
      onChange={(value) => console.log(value)}
    >
      {options}
    </Select>
  );
};
export default AgeSelect;
