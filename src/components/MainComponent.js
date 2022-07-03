import React from 'react';
import {COMBINATIONS} from '../shared/combinations';
import Combination from './CombinationComponent';

function Main() {
    return (
<>
<p>Hello Sinners!</p>
<p>This is a simple app to help you hunt for traits. Click on any of the traits to view it on jpg.store</p>
<Combination combinations={COMBINATIONS}/>
</>
    );
}

export default Main;