import { Button } from "@/components/ui/button";
import { Field } from "@/components/ui/field";
import { Input } from "@/components/ui/input";

const SearchBar = () => {
  return (
    <div className="mb-8">
      <Field orientation="horizontal">
        <Input type="search" placeholder="Search..." />
        <Button>Search</Button>
      </Field>
    </div>
  );
};

export default SearchBar;
