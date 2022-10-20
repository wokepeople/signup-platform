import styled from "@suid/system/styled";

export const SelectableRow = styled("div")({
  padding: "1rem",
  fontFamily: "Roboto, Helvetica, Arial, sans-serif",
  cursor: 'pointer',
  transition: 'background-color 0.1s ease-out',
  '&:hover': {
    backgroundColor: '#EFEFEF'
  }
});