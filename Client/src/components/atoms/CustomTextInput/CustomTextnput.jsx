import { styled } from "@mui/material";
import React from "react";
import {
  Container,
  Input,
  Label,
  OutlinedInput,
} from "./CustomTextInput.style";

const TextInput = ({
  label,
  placeholder,
  name,
  value,
  handelChange,
  textArea,
  rows,
  columns,
}) => {
  return (
    <Container>
      {label && <Label>{label}</Label>}
      <OutlinedInput>
        <Input
          as={textArea ? "textarea" : "input"}
          name={name}
          rows={rows}
          columns={columns}
          placeholder={placeholder}
          value={value}
          onChange={(e) => handelChange(e)}
        />
      </OutlinedInput>
    </Container>
  );
};

export default TextInput;
