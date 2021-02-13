import './App.css';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js'
import SearchBar from './components/layout/SearchBar'
import Logs from './components/logs/Logs'
import AddBtn from './components/layout/AddBtn'
import AddLogModal from "./components/logs/AddLogModal";
import EditLogModal from "./components/logs/EditLogModal";
import AddTechModal from "./components/techs/AddTechModal";
import TechListModal from "./components/techs/TechListModal";
import {Provider} from 'react-redux';
import store from './store';
import React, {useEffect, Fragment} from 'react';

const App = () => {
    useEffect(() => {
        M.AutoInit();
    })

    return (
        <Provider>
            <Fragment>
                <SearchBar/>
                <div className="container">
                    <AddBtn/>
                    <AddLogModal/>
                    <EditLogModal/>
                    <AddTechModal/>
                    <TechListModal/>
                    <Logs/>
                </div>
            </Fragment>
        </Provider>
    );
}

export default App;
