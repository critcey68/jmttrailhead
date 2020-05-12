import React, {Component} from 'react';
import { connect } from 'react-redux';

class HomePage extends Component {
    render() {
        return (
            <div>
                <h1>On Home Page</h1>
                <h2>Counter: {this.props.ctr}</h2>
                <button onClick={this.props.onIncrementCounter}>Increment</button>
                <button onClick={this.props.onDecrementCounter}>Decrement</button>
                <button onClick={this.props.onAddCounter}>Add 10</button>
                <button onClick={this.props.onSubtractCounter}>Subtract 10</button>
                <div>
                    <button onClick={this.props.onStoreResults}>Store Results</button>
                    <ul>
                        {this.props.storedResults.map((strResult) => (
                            <li key={strResult.id} onClick={this.props.onDeleteResults}>{strResult.value}</li>
                        ))}
                    </ul>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ctr: state.counter,
        storedResults: state.results
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch({type: 'INCREMENT'}),
        onDecrementCounter: () => dispatch({type: 'DECREMENT'}),
        onAddCounter: () => dispatch({type: 'ADD', value: 10}),
        onSubtractCounter: () => dispatch({type: 'SUBTRACT', value: 10}),
        onStoreResults: () => dispatch({type: 'STORE_RESULT'}),
        onDeleteResults: () => dispatch({type: 'DELETE_RESULT'}),
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);