import { Option } from './Option';

const Select = ({ categories }: { categories: Category[] }) => {
  return (
    <ul>
      {categories.map((category, index) => (
        <Option key={index} id={category.id} name={category.name} />
      ))}
    </ul>
  );
};

export default Select;
