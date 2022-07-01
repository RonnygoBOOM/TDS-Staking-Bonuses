import React from 'react';
import {COMBINATIONS} from '../shared/combinations';
import Combination from './CombinationComponent';

function Main() {
    return (
<>
<p>Hello Sinners</p>
<Combination combinations={COMBINATIONS}/>
</>
    );
}

export default Main;