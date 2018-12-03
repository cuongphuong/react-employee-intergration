import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ItemList from './Item';
import axios from 'axios';
import { connect } from 'react-redux';


class Drawer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lstFunction : [],
            lstModule: [], 
            customList: {}
        }
    }

    getFunction(){
        // var global = this;
        
    }
    

    componentDidMount(){
        var global = this;
        axios({
            url: this.props.SystemInfo.domain + '/home/get-all-mudule',
            method: 'GET',
            headers: {
                Authorization: 'Bearer ' + this.props.StateApp.token
            }
        }).then(res => {
            this.setState({
                lstModule : res.data
            });
            axios({
                url: this.props.SystemInfo.domain + '/home/get-function-true',
                method: 'GET',
                headers: {
                    Authorization: 'Bearer ' + this.props.StateApp.token
                }
            }).then(res => {
                global.setState({
                    lstFunction : res.data
                });

                global.state.lstModule.forEach(module => {
                    var as = global.state.lstFunction.filter(i => i.moduleId === parseInt(module.moduleID, 10));
                    if(as.length > 0){
                        global.setState({
                            customList: {...global.state.customList, [module.moduleName] : as}
                        });
                        
                    }
                });

            }).catch(err => {
                console.log(err)
            });
        }).catch(err => {
            console.log(err)
        });
    }
    // N2MRC-WFRVQ-GDMDG-9CMQ7-4C2JB
    render() {
        return (
            <div id="pg_id_app_drawer">
                <div className="pg_class_drawer_block">
                    <Link to="/">
                    <p id="pg_block_icon">
                        <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" className="style-scope yt-icon" style={{pointerEvents: 'none', display: 'block', width: '100%', height: '100%'}}>
                        <g className="style-scope yt-icon">
                            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8" className="style-scope yt-icon" />
                        </g>
                        </svg>
                    </p>
                    <p id="pg_block_name">Dashboard</p>
                    </Link>
                </div> {/* home */}

                <div className="pg_class_drawer_block">
                    <Link to="/dashboard/notifications">
                    <p id="pg_block_icon">
                        <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 55 55" style={{enableBackground: 'new 0 0 55 55'}} xmlSpace="preserve">
                        <g>
                            <path d="M51.376,45.291C46.716,40.66,44.354,35.179,44.354,29v-8.994c0.043-6.857-4.568-11.405-8.53-13.216
                                c-1.135-0.519-2.305-0.919-3.494-1.216V5c0-2.757-2.243-5-5-5s-5,2.243-5,5v0.661c-1.071,0.289-2.124,0.666-3.146,1.138
                                C14.805,8.817,10.369,13.681,10.329,20v9c0,6.388-2.256,11.869-6.705,16.291c-0.265,0.264-0.361,0.653-0.249,1.01
                                s0.415,0.621,0.784,0.685l9.491,1.639c1.768,0.305,3.396,0.555,4.945,0.761C20.341,52.806,23.768,55,27.512,55
                                c3.745,0,7.173-2.196,8.917-5.618c1.543-0.205,3.163-0.454,4.921-0.758l9.49-1.639c0.369-0.063,0.671-0.328,0.784-0.685
                                C51.737,45.944,51.641,45.555,51.376,45.291z M24.329,5c0-1.654,1.346-3,3-3s3,1.346,3,3v0.182c-1.993-0.286-4.015-0.274-6,0.047V5
                                z M27.512,53c-2.532,0-4.898-1.258-6.417-3.315c2.235,0.23,4.321,0.346,6.406,0.346c2.093,0,4.186-0.116,6.43-0.349
                                C32.411,51.741,30.044,53,27.512,53z M41.01,46.653c-1.919,0.331-3.678,0.6-5.34,0.812c-0.002,0-0.004,0-0.006,0
                                c-0.732,0.093-1.444,0.174-2.141,0.244c-0.007,0.001-0.015,0.001-0.022,0.002c-0.637,0.064-1.26,0.115-1.876,0.16
                                c-0.117,0.009-0.233,0.016-0.35,0.024c-0.534,0.035-1.062,0.063-1.587,0.083c-0.108,0.004-0.216,0.01-0.324,0.013
                                c-1.244,0.042-2.471,0.042-3.714,0.001c-0.11-0.004-0.222-0.009-0.332-0.014c-0.518-0.02-1.04-0.047-1.567-0.082
                                c-0.124-0.008-0.248-0.016-0.373-0.025c-0.6-0.043-1.207-0.094-1.828-0.155c-0.022-0.002-0.043-0.004-0.064-0.006
                                c-0.692-0.069-1.399-0.15-2.126-0.242c-0.003,0-0.006,0-0.009,0c-1.668-0.211-3.433-0.482-5.361-0.814L6.329,45.33
                                c3.983-4.554,6-10.038,6-16.33v-8.994c0.034-5.435,3.888-9.637,7.691-11.391c1.131-0.521,2.304-0.91,3.497-1.183
                                c0.01-0.002,0.021-0.001,0.031-0.003c2.464-0.554,5.087-0.579,7.58-0.068c0.013,0.003,0.026-0.003,0.039-0.001
                                c1.304,0.272,2.588,0.684,3.825,1.249c3.689,1.687,7.396,5.861,7.361,11.392v9c0,6.033,2.175,11.643,6.313,16.331L41.01,46.653z" />
                            <path d="M33.746,11.338c-3.875-1.771-8.62-1.773-12.469,0.002c-2.195,1.012-5.918,3.973-5.948,8.654
                                c-0.003,0.552,0.441,1.002,0.994,1.006c0.002,0,0.004,0,0.006,0c0.549,0,0.997-0.443,1-0.994c0.023-3.677,3.019-6.035,4.785-6.85
                                c3.331-1.537,7.446-1.533,10.799,0c0.502,0.23,1.096,0.009,1.326-0.493C34.469,12.16,34.248,11.567,33.746,11.338z" />
                        </g>
                        </svg>
                    </p>
                    <p id="pg_block_name">Notifications</p>
                    </Link>
                </div> {/* notificaiton */}

                {/* <ItemList idCategory="50" images='M 6.667969 4 C 5.207031 4 4 5.207031 4 6.667969 L 4 43.332031 C 4 44.792969 5.207031 46 6.667969 46 L 43.332031 46 C 44.792969 46 46 44.796875 46 43.332031 L 46 6.667969 C 46 5.207031 44.796875 4 43.332031 4 Z M 6.667969 6 L 43.332031 6 C 43.703125 6 44 6.296875 44 6.667969 L 44 43.332031 C 44 43.703125 43.703125 44 43.332031 44 L 6.667969 44 C 6.296875 44 6 43.703125 6 43.332031 L 6 6.667969 C 6 6.296875 6.296875 6 6.667969 6 Z M 23 23 L 23 35.574219 C 23 37.503906 22.269531 38 21 38 C 19.671875 38 18.75 37.171875 18.140625 36.097656 L 15 38 C 15.910156 39.925781 18.140625 42 21.234375 42 C 24.65625 42 27 40.179688 27 36.183594 L 27 23 Z M 35.453125 23 C 32.046875 23 29.863281 25.179688 29.863281 28.042969 C 29.863281 31.148438 31.695313 32.617188 34.449219 33.789063 L 35.402344 34.199219 C 37.140625 34.960938 38 35.425781 38 36.734375 C 38 37.824219 37.171875 38.613281 35.589844 38.613281 C 33.707031 38.613281 32.816406 37.335938 32 36 L 29 38 C 30.121094 40.214844 32.132813 42 35.675781 42 C 39.300781 42 42 40.117188 42 36.683594 C 42 33.496094 40.171875 32.078125 36.925781 30.6875 L 35.972656 30.28125 C 34.335938 29.570313 33.625 29.109375 33.625 27.964844 C 33.625 27.039063 34.335938 26.328125 35.453125 26.328125 C 36.550781 26.328125 37.253906 26.792969 37.90625 27.964844 L 40.878906 26.058594 C 39.625 23.84375 37.878906 23 35.453125 23 Z ' title="Tổng lương"></ItemList> */}
                {
                    this.mappingFunctionToView(this.state.lstFunction)
                }
            </div>
        );
    }

    mappingFunctionToView(){
        var res = null;
        res = Object.entries(this.state.customList).map((item, key) => {
            return (<div key={key}><div className="pg_class_drawer_title" style={{overflow: 'hidden'}}>{item[0]}</div>
                {
                    item[1].map((itemMapping, index) => {
                        return (
                            <ItemList 
                                key={index} 
                                url={itemMapping.url}
                                idCategory={itemMapping.functionID} 
                                images= {itemMapping.image}
                                title={itemMapping.functionName}>
                            </ItemList>
                        );
                    })
                }
            </div>);
        });
        return res;
    }
}

export default connect(function (state) {
    return { FunctionMapping: state.FunctionMapping, StateApp: state.StateApp, SystemInfo: state.SystemInfo, Roles: state.Roles }
})(Drawer);