import styled from "styled-components"
import hero from "../images/mobile/image-hero.jpg";
import herodesktop from "../images/desktop/image-hero.jpg";

const HeaderStyles = styled.div`
background-image: url(${hero});
background-repeat: no-repeat;
background-size: cover;
width: 100vw;
min-height: 450px;
margin-bottom: 6rem;

.div-header {
  margin: auto;
  width: 80%;
}

.Nav-header > .Nav-p > p {
visibility: hidden;
}

.Nav-header {
  position: absolute;
  left: 80%;
  align-self: start;
}

.closeicon {
  visibility: hidden;
}

.logo {
  visibility: hidden;
  width:20px;
}

.open {
  position: absolute;
  left: 0;
   margin-top: -20px;
  height: 100vh;
  width: 100vw;
  background-color: var(--Black);

.hamburger {
  visibility: hidden;
}

.closeicon {
  position: absolute;
  left: 80%;
  top: 10%;
  visibility: visible;
}
.logo {
  position: absolute;
  top: 10%;
  left: 10%;
  visibility: visible;
  width: 192px;
}
.Nav-p {
  position: absolute;
  left: 10%;
  top: 30%;
}

.Nav-p > p {
  visibility: visible;
  color: var(--White);
  font-size: 35px;
  text-transform: uppercase;
  font-family: var(--Josefin);
  margin-bottom: 20px;
}

}

.top-content {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 50px;
  align-items: center;
  padding-top: 1rem;
}

.header-text {
  width: 300px;
  height: 170px;
  font-size: 35px;
  color: var(--White);
  margin-top: 60px;
  border: 1px solid var(--White);
  text-transform: uppercase;
  font-family: var(--Josefin);

  p {
    padding-top: 20px;
    width: 80%;
    margin: auto;
  }
}

@media (max-width: 720px) {
  .Nav-header {
    .hamburger {
      position: absolute;
      top: 10%;
  }
  }
  
}

@media (min-width: 830px) {
  background-image: url(${herodesktop});
  min-height: 500px;

  .Nav-header  {
    top: 8%;
    left: 56%;
    .Nav-p {
      display: grid;
      grid-template-columns: repeat(5,60px);
      grid-gap: 15px;

      p:hover {
        cursor: pointer;
      }
    }
   .Nav-p > p {
          justify-self: center;
          color: var(--White);
          font-family: var(--Alata);
          visibility: visible;
    }
    p:hover::after {
    content: '';
    display: block;
    margin: 0 auto;
    width: 40%;
    border-bottom: 2px solid var(--White);
    cursor: pointer;
    }
    .hamburger {
      display: none;
    }
    .closeicon {
      display: none;
    }
    .logo {
      display: none;
    }

  }

  .header-text {
    width: 400px;

  p {
    font-size: 40px;
  }

  }
}
`;

export default HeaderStyles;