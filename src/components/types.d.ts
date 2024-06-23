// header input props types
export interface InputHeaderProps {
  url: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (value: React.FormEvent<HTMLFormElement>) => void;
  error: string;
}