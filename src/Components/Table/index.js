import React, { Component } from 'react';
import './style.css'
/** Module **/

/** Components **/

/** Store **/
import {observer} from 'mobx-react';
import mainStore from '../../Lib/Store/mainStore';

const Table = observer (class extends Component {

    componentWillMount() {
        mainStore.changeOpenPage("table");
    }


    render() {
        return (
            <main>
                <div id="table">
                    <div className="line_card">
                        <h1>Line #1</h1>
                    </div>

                    <div className="line_card">
                        <h1>Line #2</h1>
                    </div>
                </div>
            </main>

        )
    }
});

export default Table;


