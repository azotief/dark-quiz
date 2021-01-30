import { InputBase } from './styles';

interface InputProps {
  name: string;
  onChange: Function;
  placeholder: string;
  value: string;
  autoComplete: 'on' | 'off';
}

export default function Input({
  name,
  placeholder,
  onChange,
  value,
  autoComplete,
  ...props
}: InputProps) {
  return (
    <div>
      <InputBase
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        autoComplete={autoComplete}
        {...props}
      />
    </div>
  );
}
