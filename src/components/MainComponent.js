import React from 'react';
import {COMBINATIONS} from '../shared/combinations';
import Combination from './CombinationComponent';

function Main() {
    return (
<>
<div style={{color: "rgb(250, 142, 0)", backgroundColor: "black"}}>
<p style={{margin: "3em"}}>Hello Sinners!</p>
<p style={{margin: "3em"}}>This is a simple app to help you hunt for traits. Click on any of the traits to view it on jpg.store</p>
<Combination combinations={COMBINATIONS}/>
</div>
</>
    );
}

export default Main;