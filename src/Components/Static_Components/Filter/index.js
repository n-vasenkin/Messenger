import React, {Component} from 'react';
import './style.css';

/** Module **/

/** Components **/

/** IMG **/

/** Store **/

export default class Filter extends Component{
    render() {
        return (
            <div className="filter_panel align_center">
                <a href="#">Messenger</a>
                <div className="align_center">
                    <i>Filter messages:</i>
                    <div>
                        <select name="filter" className="filter_select">
                            <option value="">All</option>
                            <option value="">2</option>
                            <option value="">3</option>
                        </select>
                    </div>
                </div>
            </div>
        );
    }
}
