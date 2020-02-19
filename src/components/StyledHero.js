import styled from 'styled-components';
import defaultImg from '../images/house-1.jpg';

// using styled components that yu get on the internet
// it dynamically access the picture and places it to the singleroom (detail pages)
const StyledHero = styled.header`
  min-height: 60vh;
  // using props to acces the current image
  background: url(${props => (props.img ? props.img : defaultImg)}) center/cover
  no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default StyledHero;
