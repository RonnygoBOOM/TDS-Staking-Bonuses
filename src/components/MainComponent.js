import React from 'react';
import {COMBINATIONS} from '../shared/combinations';
import Combination from './CombinationComponent';
import NFTScroll from './NFTScrollComponent';
// import Header from './HeaderComponent';

function Main() {
    return (
<>
<NFTScroll/>
{/* <Header combinations={COMBINATIONS}/> */}
<div style={{color: "rgb(250, 142, 0)", backgroundColor: "black"}}>
<p style={{margin: "3em"}}>Hello Sinners!</p>
<p style={{margin: "3em"}}>This is a simple app to help you hunt for traits. Click on any of the traits to view them on jpg.store</p>
<Combination combinations={COMBINATIONS}/>
<p style={{margin: "3em", textAlign: 'center'}}>Please contact me on twitter @RonnygoBOOM if you find any broken links or have suggestions for improvement!</p>
</div>
</>
    );
}

export default Main;