import {ReactComponent as CloseIcon} from "../images/icon-close.svg";
import {ReactComponent as HamburgerIcon} from "../images/icon-hamburger.svg";
import {ReactComponent as LoopLogo} from "../images/logo.svg";
import HeaderStyles from "../css/HeaderStyles";

const Header = () => {
    const mobileMenuOpen = () => {
        const OpenBtn = document.querySelector('.hamburger');
        const Nav = document.querySelector('.Nav-header');
    
        OpenBtn.addEventListener("click", () => {
          Nav.classList.add('open');
        })
      };
    
      const mobileMenuClose = () => {
        const CloseBtn = document.querySelector('.closeicon');
        const Nav = document.querySelector('.Nav-header');
    
        CloseBtn.addEventListener("click", () => {
          Nav.classList.remove("open");
        })
      };
    
    return (
        <HeaderStyles className='header'>
       <div className='div-header'>
       <div className='top-content'>
         <LoopLogo/>
         <div className='Nav-header'>
           <HamburgerIcon className='hamburger' onClick={mobileMenuOpen}/>
           <LoopLogo className="logo"/>
           <CloseIcon className="closeicon" onClick={mobileMenuClose}/>
           <div className='Nav-p'>
             <p>About</p>
           <p>Careers</p>
           <p>Events</p>
           <p>Products</p>
           <p>Support</p>
           </div>
           
         </div>
       </div>
       <div className='header-text'>
         <p>Immersive experiences that deliver</p>
       </div>
       </div>
     </HeaderStyles>
    );
};

export default Header;