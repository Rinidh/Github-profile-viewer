import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";

interface Props {
  onSearch: (searchText: string) => void;
}

const SearchInput = function ({ onSearch }: Props) {
  const ref = useRef<HTMLInputElement>(null);

  return (
    <form //wrapped Input in a form to be able to submit it
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current) onSearch(ref.current.value);
      }}
    >
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input
          ref={ref}
          borderRadius={10}
          placeholder="User name"
          variant={"filled"}
          fontFamily={"Courier New"}
          errorBorderColor={"purple"} //purple if error in validation
          size={"md"}
          maxWidth={"800px"}
          borderColor={"ActiveBorder"}
          focusBorderColor="green.400"
          _placeholder={{ opacity: 1, color: "gray" }}
        ></Input>
      </InputGroup>
    </form>
  );
};

export default SearchInput;
