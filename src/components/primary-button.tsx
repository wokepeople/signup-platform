import styled from "@suid/system/styled";

export type PrimaryButtonProps = {
  disabled: boolean;
};

export const PrimaryButton = styled("button")<PrimaryButtonProps>(({ props }) => ({
  border: "0",
  marginTop: "1rem",
  width: "100%",
  padding: "0rem 3rem",
  backgroundColor: "#000",
  fontWeight: "600",
  color: "white",
  fontSize: "16px",
  borderRadius: "999px",
  minHeight: "2.63rem",
  transition: "background-color 0.1s ease-out",
  filter: props.disabled ? 'opacity(50%)' : '',
  cursor: props.disabled ? "default" : "pointer",
  pointerEvents: props.disabled ? "none" : "all",
  userSelect: "none",
  "&:hover": {
    backgroundColor: "rgba(0, 0, 0, 0.801)",
  },
  "&:active": {
    backgroundColor: "rgba(0, 0, 0, 0.685)",
  },
}));
