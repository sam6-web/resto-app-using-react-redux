import React, { Component } from 'react'
import { connect } from 'react-redux'

export class Collapse extends Component {
    render() {
        return (
            <div>
                <div class="accordion" id="accordionExample">
                    <div class="card">
                    <div class="card-header" id="headingOne">
                        <h2 class="mb-0">
                        <button class="btn btn-primary" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Pour modifier
                        </button>
                        </h2>
                    </div>

                    <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                        <div class="card-body col-2">
                        <input></input>
                        <input></input>
                        <input></input>
                        <button class=" btn-primary">sauvgarder</button>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Collapse)
