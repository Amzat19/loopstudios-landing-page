import styled from 'styled-components';

const FooterStyles = styled.div`
background-color: var(--Black);
color: var(--White);

.footer-div {
  width: 80%;
  margin: auto;
  display: grid;
  justify-content: center;
  text-align: center;

  .LoopLogo {
    justify-self: center;
    padding-top: 30px;
    padding-bottom: 30px;
  }

  .Nav-footer {
    display: grid;
    grid-gap: 20px;
    font-family: var(--Josefin);
    margin-bottom: 30px;
  }

  .Nav-footer > p:hover::after {
    content: '';
    display: block;
    margin: 0 auto;
    width: 12%;
    padding-top: 5px;
    border-bottom: 2px solid var(--White);
    cursor: pointer;
  }

  .footer-icon {
    display: grid;
    grid-template-columns: repeat(4, 20px);
    grid-gap: 20px;
    justify-content: center;
    padding-bottom: 30px;
  }

  .footer-icon > div:hover {
    cursor: pointer;
  }

  .footer-icon > div:hover::after {
    content: '';
    display: block;
    width: 80%;
    border-bottom: 2px solid var(--White);
    cursor: pointer;
  }


  .copyright {
    font-family: var(--Josefin);
    color: var(--Dark-Gray);
    font-size: 15px;
    padding-bottom: 30px;
  }
}

@media (min-width: 830px) {

   .footer-div { 
    width: 80%;
    margin: auto;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 50px);
    grid-gap: 30px;

      .LoopLogo {
        justify-self: start;
      align-self: start;
      grid-column-start: 1;
      }

    .Nav-footer {
      grid-row-start: 2;
      grid-column-start: 1;
      grid-template-columns: repeat(5, 50px);
    }
    .Nav-footer > p:hover::after {
      width: 50%;
      cursor: pointer;
    }

    .footer-icon {
      padding-top: 35px;
      padding-left: 55px;
    }
    
}
}
`;

export default FooterStyles;