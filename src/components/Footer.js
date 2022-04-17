import FooterStyles from '../css/FooterStyles';
import {ReactComponent as LoopLogo} from "../images/logo.svg";
import {ReactComponent as FaceBookIcon} from "../images/icon-facebook.svg";
import {ReactComponent as InstagramIcon} from "../images/icon-instagram.svg";
import {ReactComponent as PinterestIcon} from "../images/icon-pinterest.svg";
import {ReactComponent as TwitterIcon} from "../images/icon-twitter.svg";

const Footer = () => {
    return (
        <FooterStyles className='footer'>
       <div className='footer-div'>
       
         <LoopLogo className="LoopLogo"/>
         <div className='Nav-footer'>
           <p>About</p>
           <p>Careers</p>
           <p>Events</p>
           <p>Products</p>
           <p>Support</p>
         </div>
         <div className='footer-icon'>
           <div>
             <FaceBookIcon className="icon"/>
             </div>
           <div>
             <TwitterIcon className="icon"/>
           </div>
           <div>
             <PinterestIcon className="icon"/>
           </div>
           <div>
             <InstagramIcon className="icon"/>
           </div>
         </div>
         <p className='copyright'><strong>© 2021 Loopstudios. All rights reserved.</strong></p>
      
       </div>
     </FooterStyles>
    );
}

export default Footer;