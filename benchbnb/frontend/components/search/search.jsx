import React from 'react';
import BenchMap from '../bench/bench_map';
import BenchIndex from '../bench/bench_index';

const Search = props => (
    <div className="bench-content">
        <BenchMap benches={props.benches} />
        <BenchIndex benches={props.benches} fetchBenches={props.fetchBenches} />
    </div>
)

export default Search;