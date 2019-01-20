import React, { Component } from 'react';

/** Components **/
import Header from './Components/Static_Components/Header';
import SignIn from './Components/SignIn';
import Main from './Components/Main';
import Table from './Components/Table';
import Test from './Components/Test';

/** Module **/
import {Route, HashRouter} from 'react-router-dom';

/** Store **/
import {observer} from 'mobx-react';
import mainStore from './Lib/Store/mainStore';

const App = observer(class extends Component {
    render() {
        return (
            <HashRouter>
                <div>
                    {mainStore.openPage !== "sign_in" ? <Header/> : ""}
                    <Route exact path="/" component={Main} />
                    <Route path="/sign_in" component={SignIn} />
                    <Route path="/test" component={Test} />
                    <Route path="/table" component={Table} />
                </div>
            </HashRouter>
        )
    }
});

export default App;
