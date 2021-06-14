import React from 'react';
import './segment.css'

const AddSegment = (props) => {
    return (
        <div className="sideBar">
        <div className="segmentMain">
        <div className="segmentHeader">
            <h2>Prospectors</h2>
        </div>
            <input type="text" className="addsegemntInput" placeholder="Add segments here.." name="" id=""/>
            <span className="segmentTilte">Segments</span>
            <ul className="segmentList">
            {
                props.addSegmentItems.map((item,index)=>{
                    return <li key={index}><span>{item.icon}</span>{item.name}</li>
                })
            }
               
               
            </ul>
        </div>
        <div>
            <button className="addSegBtn" onClick={props.onchgFunction}> +  Add a segments</button>
        </div>
    </div>
    );
};

export default AddSegment;