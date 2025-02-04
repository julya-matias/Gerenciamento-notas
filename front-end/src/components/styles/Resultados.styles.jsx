import styled from "styled-components";

export const ResultsContainer = styled.div`
  padding: 16px;
  background-color: #f8f9fa;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const Title = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 16px;
  color: #333;
`;

export const Card = styled.div`
  background-color: #fff;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 16px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const CardHeader = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 8px;
  color: #555;
`;

export const CardBody = styled.div`
  font-size: 14px;
  color: #666;
`;

export const List = styled.ul`
  list-style-type: none;
  padding: 0;
`;

export const ListItem = styled.li`
  margin-bottom: 8px;
`;

export const Highlight = styled.span`
  color: #007bff;
  font-weight: bold;
`;

export const DeleteButton = styled.button`
  background-color: #dc3545;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  font-size: 14px;
  cursor: pointer;
  &:hover {
    background-color: #c82333;
  }
`;
