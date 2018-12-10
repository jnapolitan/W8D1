import React from 'react';

const BenchIndexItem = props => (
    <div>
        <h4>Description</h4>
        <p>{props.bench.description}</p>
        <p><strong>Lat/lng:</strong> {props.bench.lat}, {props.bench.lat}</p>
    </div>
)

export default BenchIndexItem;