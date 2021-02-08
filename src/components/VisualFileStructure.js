import styled from 'styled-components';


const StyledDiv = styled.div`
	color: green;
`

const VisualFileStructure = (props) => {
  const input = props.data;

  return <StyledDiv>{input}</StyledDiv>;
};

export default VisualFileStructure;
