import styled from "styled-components";

export const FormContainer = styled.div`
  background: #F5F7FA;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    color: #1D3557;
    margin-bottom: 1.5rem;
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin: 8px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  transition: 0.3s;

  &:focus {
    border-color: #457B9D;
    outline: none;
    box-shadow: 0px 0px 8px rgba(69, 123, 157, 0.5);
  }
`;

export const Button = styled.button`
  background: #457B9D;
  color: white;
  font-size: 16px;
  font-weight: bold;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  width: 100%;
  margin-top: 10px;
  transition: 0.3s;

  &:hover {
    background: #1D3557;
  }
`;

export const NotaContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;

  input {
    width: 48%;
  }
`;
