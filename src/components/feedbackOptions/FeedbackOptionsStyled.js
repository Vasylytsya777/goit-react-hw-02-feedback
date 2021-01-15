import styled from "styled-components";

const Button = styled.button`
  display: inline-block;
  outline: none;
  border-radius: 20px;
  border-bottom: solid 1px #563456;
  min-width: 80px;
  height: 40px;
  padding: 10px;
  background-color: silver;
  color: black;
  font-weight: 700;
  font-size: 16px;
  &:not(:last-child) {
    margin-right: 15px;
  }
  &:hover {
    cursor: pointer;
  }
  &:active {
    transform: translateY(1px);
  }
`;

export default Button;
