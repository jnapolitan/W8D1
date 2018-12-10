import { RECEIVE_BENCHES, RECEIVE_BENCH } from '../actions/bench_actions';

const benchesReducer = (state ={}, action) => {
    Object.freeze(state);

    switch(action.type) {
        case RECEIVE_BENCHES:
            return action.benches;
        case RECEIVE_BENCH:
            let nextState = Object.assign({}, state, {[action.bench.id]: action.bench});
            return nextState;
        default:
            return state;
    }
};

export default benchesReducer;