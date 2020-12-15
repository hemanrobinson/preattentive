import React, { useState } from 'react';
import { Slider, Select, MenuItem } from '@material-ui/core';
import Plot from './Plot';
import './App.css';

// Application:  Side-by-side scatter plots.
const App = () => {
    
    // Create state.
    const [ dataSet, setDataSet ] = useState( "Iris" );
    const [ size, setSize ] = useState( 5 );
    
    // Return the App.
    return (
        <div className="Column">
            <div className="GridPlots">
                <label>Geometric Symbols</label>
                <label>Preattentive Symbols</label>
                <Plot symbolSet={"geometric"}    dataSet={dataSet} size={size} />
                <Plot symbolSet={"preattentive"} dataSet={dataSet} size={size} />
            </div>
            <div className="GridControls">
                <label>Size:</label>
                <Slider defaultValue={ 5 } step={ 1 } min={ 0 } max={ 10 }
                    valueLabelDisplay="auto" marks
                    onChangeCommitted={( event, value ) => setSize( value )} />
                <label>Data Set:</label>
                <Select value={ dataSet } style={{minWidth: 120}}
                    onChange={( event ) => { setDataSet( event.target.value )}}>
                    <MenuItem value="Iris">Iris</MenuItem>
                    <MenuItem value="Business">Business</MenuItem>
                    <MenuItem value="Diamonds">Diamonds</MenuItem>
                </Select>
            </div>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tempor tempor massa. Morbi congue mi augue, a vulputate augue molestie eget. Sed egestas eros elit, ut pretium tellus pretium ut. Donec volutpat leo et neque laoreet porttitor sit amet et quam. In hac habitasse platea dictumst. Etiam eu magna tortor. Cras vel dapibus ligula, ut rutrum nibh. Morbi blandit ac elit id volutpat. Nam ut tincidunt elit. Sed fermentum lacinia magna, eget commodo leo gravida in. Suspendisse sit amet nibh magna. Cras ullamcorper libero id fermentum tincidunt. Quisque hendrerit nisl purus, non fringilla tortor fermentum a. Phasellus eleifend felis at ante porttitor tempus. Pellentesque vulputate odio vel tortor elementum blandit.
            </p>
        </div>
    );
}

export default App;
