import styled from "styled-components";

const SearchButton = (props) => {
    return (
        <Button onClick = {props.onClick}> Go </Button>
    )
}

const Button = styled.button`
  font-weight: bold;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: #FFFFFF;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 12px 24px;
  background: #4310AE;
  &:hover {
    transform: scale(1.05);
  }
  border: 1px solid #000000;
  box-sizing: border-box;
  box-shadow: 0px 6px 15px rgba(67, 16, 174, 0.12), inset 0px -1px 0px rgba(14, 14, 44, 0.4);
  border-radius: 8px;
`
export default SearchButton