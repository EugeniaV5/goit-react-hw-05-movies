import { Input, FormButton } from './SearchBar.styled';

export const SearchBar = ({ onSubmit }) => {
  return (
    <form onSubmit={onSubmit} autoComplete="off">
      <Input type="text" name="query" />
      <FormButton type="submit">Search</FormButton>
    </form>
  );
};
