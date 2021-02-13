import './App.css';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js'
import SearchBar from './components/layout/SearchBar'
import Logs from './components/logs/Logs'
import AddBtn from './components/layout/AddBtn'
import AddLogModal from "./components/logs/AddLogModal";
<<<<<<< HEAD
import EditLogModal from "./components/logs/EditLogModal";
import AddTechModal from "./components/techs/AddTechModal";
import TechListModal from "./components/techs/TechListModal";
=======

>>>>>>> 1adf7c26875f87c8779654258f70c987b96f711d
import React, {useEffect, Fragment} from 'react';

const App = () => {
    useEffect(() => {
        M.AutoInit();
    })

    return (
        <Fragment>
            <SearchBar />
            <div className="container">
                <AddBtn/>
                <AddLogModal/>
<<<<<<< HEAD
                <EditLogModal/>
                <AddTechModal/>
                <TechListModal/>
=======
>>>>>>> 1adf7c26875f87c8779654258f70c987b96f711d
                <Logs/>
            </div>
        </Fragment>
    );
}

export default App;
