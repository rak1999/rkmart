import React from 'react';
import ReactLoading from 'react-loading';
 
const Loading = ({ type, color }) => (
    <div id="loading">
        <ReactLoading type={"spinningBubbles"} color={"red"} height={'10%'} width={'10%'} />
    </div>
);
 
export default Loading;