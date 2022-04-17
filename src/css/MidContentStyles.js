import styled from "styled-components";
import interactivedesktop from "../images/desktop/image-interactive.jpg";


const MidContentStyles = styled.div`
.mid-content-div {
  width: 80%;
  margin: auto;
}

.interactive {
  width: 80vw;
}

.text-midcontent {
  padding-top: 30px;
  margin: auto;
  width: 76%;
  font-family: var(--Josefin);
  line-height: 25px;
  text-align: center;
  p{
    color: var(--Very-Dark-Gray);
    line-height: 30px;
  }
  
}

.text-midcontent > h5 {
  text-transform: uppercase;
  font-size: 25px;
  line-height: 35px;
}

@media (min-width: 830px) {
  .mid-content-div {
    display: grid;
    grid-template-columns: repeat(4, 200px);
    grid-template-rows: repeat(3, 200px);
  }

  .interactive-div {

    grid-column-start: 1;
    grid-column-end: 3;
    grid-row-start: 1;
    grid-row-end: 4;
    overflow: hidden;
  }
  .interactive {
    background-image: url(${interactivedesktop});
    object-fit: cover;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  .text-midcontent {
    grid-column-start: 3;
    grid-column-end: 5;
    grid-row-start: 2;
    grid-row-end: 3;
  }
}
`;

export default MidContentStyles;