import React, { Component } from 'react'
import './../../assets/css/WorkshopDetails/WorkDashHome.css'

class AllCoordiantors extends Component {

    constructor(props){
        super(props)
        this.state={
            allCoords:[]
        }
    }

    componentDidMount(){
        this.fetchItems(); 
    }

    fetchItems(){
        fetch("url").then(res => res.json()).then(data => this.setState({allCoords:data})).catch(err => console.log(err))
    }
    

    render() {
        return (
            <div>
                <div className="nt-dcard-cont">
                    <div className="nt-approvedcard">

                        <div className="nt-div-head">
                            <h3 className="nt-div-head-text">
                                All Coordinators
                            </h3>
                        </div>

                        <table className="nt-table">
                            <thead>
                                <tr>
                                    <th className="nt-td">Coordinator Id</th>
                                    <th className="nt-td">Coordinator Name</th>
                                    <th className="nt-td">Study Feild</th>
                                </tr>
                            </thead>
                            <tbody>

                            {this.state.allCoords.map((coord) => {
                                return(
                                        <tr>
                                            <td className="nt-td">{coord._id}</td>
                                            <td className="nt-td">{coord.name}</td>
                                            <td className="nt-td">{coord.studyFeild}</td>
                                        </tr>
                                );
                            })}
                                <tr>
                                    <td className="nt-td">test id</td>
                                    <td className="nt-td">Test title</td>
                                    <td className="nt-td">Test conductor</td>
                                </tr>
                                <tr>
                                    <td className="nt-td">test id</td>
                                    <td className="nt-td">Test title</td>
                                    <td className="nt-td">Test conductor</td>
                                </tr>
                                <tr>
                                    <td className="nt-td">test id</td>
                                    <td className="nt-td">Test title</td>
                                    <td className="nt-td">Test conductor</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                </div>
                
            </div>
        )
    }
}

export default AllCoordiantors
