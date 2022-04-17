// import interactivedesktop from "../images/desktop/image-interactive.jpg";
import interactive from "../images/mobile/image-interactive.jpg";
import MidContentStyles from "../css/MidContentStyles";

const MidContent = () => {

    return (
        <MidContentStyles className='mid-content'>
       <div className='mid-content-div'>
       <div className='interactive-div'>
         <img className='interactive' src={interactive} alt='Person wearing a VR'/>
         {/* <img className='interactive' src={interactivedesktop} alt='Person wearing a VR'/> */}
       </div>
       <div className='text-midcontent'>
         <h5>The leader in interactive VR</h5>
         <p><strong>Founded in 2011, Loopstudios has been producing world-class virtual reality 
  projects for some of the best companies around the globe. Our award-winning 
  creations have transformed businesses through digital experiences that bind 
  to their brand.</strong></p>
       </div>
       </div>
     </MidContentStyles>
    );
};

export default MidContent;
