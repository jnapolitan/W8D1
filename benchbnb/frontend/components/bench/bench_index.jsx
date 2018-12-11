import React from 'react';
import BenchIndexItem from './bench_index_item';

export default class BenchIndex extends React.Component {
    componentDidMount() {
        this.props.fetchBenches();
    }

    render() {

        if (!this.props.benches) {
            return (
                <div>Loading...</div>
            )
        }

        const benches = this.props.benches.map(bench => {
            return <BenchIndexItem key={bench.id} bench={bench} />
        });

        return (
            <div>
                <h1>All the benches</h1>
                <ul>{benches}</ul>
            </div>
        )
    }
}