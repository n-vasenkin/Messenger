import React, { Component } from 'react';

/** Components **/
import Header from './Components/Static_Components/Header';
import SignIn from './Components/SignIn';
import Main from './Components/Main';
import Table from './Components/Table';

/** Module **/
import {Route, HashRouter} from 'react-router-dom';

/** Store **/
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {changeCurrentPage} from './Lib/Store/Actions/actionMain';

const App = class extends Component {
    render() {
        return (
            <HashRouter>
                <div>
                <Header/>
                    {/* {mainStore.openPage !== "sign_in" ? <Header/> : ""} */}
                    <Route exact path="/" component={Main} />
                    <Route path="/sign_in" component={SignIn} />
                    <Route path="/table" component={Table} />
                </div>
            </HashRouter>
        )
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        changeCurrentPage: bindActionCreators(changeCurrentPage, dispatch),
    }
}

// export default connect("", mapDispatchToProps)(App);
export default App;