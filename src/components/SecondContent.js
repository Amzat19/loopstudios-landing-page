import SecondContentStyles from "../css/SecondContentStyles";

const SecondContent = () => {

    const dontRefresh = (e) => {
        e.preventDefault();
      }

    return (
        <SecondContentStyles className='second-content'>
       <div className='second-content-div'>
       <div className='creations-grid'>
       <p className='creations'>Our creations</p>
         <div className='Deep-earth creation'>
           <p>Deep earth</p>
         </div>
         <div className='Night-arcade creation'>
           <p>Night arcade</p>
         </div>
         <div className='Soccer-team creation'>
           <p>Soccer team VR</p>
         </div>
         <div className='The-grid creation'>
           <p>The grid</p>
         </div>
         <div className='From-above creation'>
           <p>From up above VR</p>
         </div>
         <div className='Pocket-borealis creation'>
           <p>Pocket borealis</p>
         </div>
         <div className='The-curiosity creation'>
           <p>The curiosity</p>
         </div>
         <div className='fisheye creation'>
           <p>Make it fisheye</p>
         </div>
         <div className='see-all-div'>
         <a onClick={dontRefresh} href='/' className='see-all'><strong>See All</strong></a>
         </div>
       </div>
       </div>
     </SecondContentStyles>
    )
};

export default SecondContent;