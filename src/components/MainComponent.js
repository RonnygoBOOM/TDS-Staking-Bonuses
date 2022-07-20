import React from 'react';
import {COMBINATIONS} from '../shared/combinations';
import Combination from './CombinationComponent';
import NFTScroll from './NFTScrollComponent';
import Header from './HeaderComponent';

function Main() {
    return (
<>
<Header combinations={COMBINATIONS}/>
<div style={{color: "rgb(250, 142, 0)", backgroundColor: "black"}}>
<p className="main-text">Hello Sinners!</p>
<p className="main-text">This is a simple app to help you hunt for traits. Click on any of the traits to view them on jpg.store</p>
<NFTScroll/>
<Combination combinations={COMBINATIONS}/>
<p className="main-text" style={{ textAlign: 'center'}}>Please contact me on twitter @RonnygoBOOM if you find any broken links or have suggestions for improvement!</p>
</div>
</>
    );
}

export default Main;