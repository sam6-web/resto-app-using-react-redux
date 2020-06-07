import React, { Component } from 'react'
import { connect } from 'react-redux'
import {getItemsFromApi} from '../actions/actionCreator'

class ContainerItems extends Component {
    componentDidMount() {
        this.props.getAll();
      }
    render() {
        const {reducer} = this.props
        return (
            <div>
                {reducer.map((el) => (
                <h1>{el.title}</h1>
                ))}
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return { reducer: state.reducer };
  };

const mapDispatchToProps = (dispatch) => ({
    getAll: () => dispatch (getItemsFromApi())
})

export default connect(mapStateToProps, mapDispatchToProps)(ContainerItems)
