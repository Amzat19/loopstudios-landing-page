import styled from "styled-components";
import deepearthdesktop from "../images/desktop/image-deep-earth.jpg";
import nightarcadedesktop from "../images/desktop/image-night-arcade.jpg";
import soccerteamdesktop from "../images/desktop/image-soccer-team.jpg";
import thegriddesktop from "../images/desktop/image-grid.jpg";
import fromabovedesktop from "../images/desktop/image-from-above.jpg";
import pocketborealisdesktop from "../images/desktop/image-pocket-borealis.jpg";
import curiositydesktop from "../images/desktop/image-curiosity.jpg";
import fisheyedesktop from "../images/desktop/image-fisheye.jpg";
import deepearth from "../images/mobile/image-deep-earth.jpg";
import nightarcade from "../images/mobile/image-night-arcade.jpg";
import soccerteam from "../images/mobile/image-soccer-team.jpg";
import thegrid from "../images/mobile/image-grid.jpg";
import fromabove from "../images/mobile/image-from-above.jpg";
import pocketborealis from "../images/mobile/image-pocket-borealis.jpg";
import curiosity from "../images/mobile/image-curiosity.jpg";
import fisheye from "../images/mobile/image-fisheye.jpg";

const SecondContentStyles = styled.div`

.second-content-div {
  margin: auto;
  width: 80%;

  .creations {
    text-transform: uppercase;
    font-size: 35px;
    font-family: var(--Josefin);
    text-align: center;
    align-self: center;
  }

  .creations-grid {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(10, 150px);
    grid-gap: 20px;
    justify-content: center;

    .creation {
      position: relative;
      p {
        font-size: 20px;
        font-family: var(--Josefin);
        color: var(--White);
        text-transform: uppercase;
        position: absolute;
        top: 30%;
        left: 5%;
        width: 120px;
      }
    }

    .creation:hover::after {
      position: absolute;


    }

    .Night-arcade {
      position: relative;
      background-image: url(${nightarcade});
      background-repeat: no-repeat;
      background-size: contain;
    }
    .Deep-earth {
      background-image: url(${deepearth});
      background-repeat: no-repeat;
      background-size: contain;
    }
    .Soccer-team {
      background-image: url(${soccerteam});
      background-repeat: no-repeat;
      background-size: contain;
    }
    .The-grid {
      background-image: url(${thegrid});
      background-repeat: no-repeat;
      background-size: contain;
    }
    .From-above {
      background-image: url(${fromabove});
      background-repeat: no-repeat;
      background-size: contain;
    }
    .Pocket-borealis {
      background-image: url(${pocketborealis});
      background-repeat: no-repeat;
      background-size: contain;
    }
    .The-curiosity {
      background-image: url(${curiosity});
      background-repeat: no-repeat;
      background-size: contain;
    }
    .fisheye {
      background-image: url(${fisheye});
      background-repeat: no-repeat;
      background-size: contain;
    }
    .see-all-div {
      justify-self: center;
      border: 1px solid var(--Black);
      width: 200px;
      height: 50px;
      position: relative;
    }
    .see-all-div:hover {
      cursor: pointer;
      background-color: var(--Black);
      a {
              color: var(--White);
      }
    }
    a {
      text-transform: uppercase;
      font-size: 15px;
      color: var(--Black);
      text-decoration: none;
      font-family: var(--Alata);
      position: absolute;
      bottom: 15px;
      left: 55px;
      letter-spacing: 2px;
      font-family: var(--Josefin);
    }
  }

}

@media (min-width: 830px) {
  margin-top: 7rem;
  margin-bottom: 5rem;

  .second-content-div {

    .creations-grid {
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: none;
    grid-template-rows: 100px 280px 280px;

    .creation {
      p {
        padding-top: 150px;
      }
    }

   .creations {
      grid-column-start: 1;
      grid-column-end: 3;
      justify-self: start;
    }     

    .Deep-earth {
      background-image: url(${deepearthdesktop});
      background-repeat: no-repeat;
      background-size: contain;
    }

    .Deep-earth:hover {
      opacity: 0.1;
      p {
        color: var(--Black);
      }
    }
    .Night-arcade {
      background-image: url(${nightarcadedesktop});
      background-repeat: no-repeat;
      background-size: contain;
    }
    .Soccer-team {
      background-image: url(${soccerteamdesktop});
      background-repeat: no-repeat;
      background-size: contain;
    }
    .The-grid {
      background-image: url(${thegriddesktop});
      background-repeat: no-repeat;
      background-size: contain;
    }
    .From-above {
      background-image: url(${fromabovedesktop});
      background-repeat: no-repeat;
      background-size: contain;
    }
    .Pocket-borealis {
      background-image: url(${pocketborealisdesktop});
      background-repeat: no-repeat;
      background-size: contain;
    }
    .The-curiosity {
      background-image: url(${curiositydesktop});
      background-repeat: no-repeat;
      background-size: contain;
    }
    .fisheye {
      background-image: url(${fisheyedesktop});
      background-repeat: no-repeat;
      background-size: contain;
    }

  .see-all-div {
    grid-column-start: 3;
    grid-column-end: 5;
    grid-row-start: 1;
    justify-self: end;
    align-self: center;
  }
  }

  }
  
}

`;

export default SecondContentStyles;