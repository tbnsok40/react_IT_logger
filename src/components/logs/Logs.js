import React, {useState, useEffect} from 'react'
import LogItem from "./LogItem";
import Preloader from   '../layout/Preloader'
import {connect} from 'react-redux'; // 1. just bring the connect
import PropTypes from 'prop-types';
import {getLogs} from '../../actions/logActions'

const Logs = ({log: {logs, loading}, getLogs}) => {
    // const [logs, setLogs] = useState([]);
    // const [loading, setLoading] = useState(false);
    useEffect(() => {
        getLogs(); // eslint-disable-next-line
        // Logs 컴포넌트가 마운트될 때 getLogs()함수도 동작
        // 원래는 아래의 코드로 정의했다면, 리듀서에서는 logActions 에서 불러온다(as props)
    }, []);

    // 비동기 함수로 들어간다. await가 당연히 필요하다
    // const getLogs = async () => {
    //     setLoading(true);
    //     const res = await fetch('/logs'); // 와방 기다리고 있는 await, json-server 덕분에 db.json바라본다.
    //     const data = await res.json();
    //     setLogs(data);
    //     setLoading(false);
    // } // we gonna coll it from action now

    if (loading || logs === null) {
        return <Preloader />
    }
    return (
        <ul className="collection with-header">
            <li className="collection-header">
                <h4 className="center">System Logs</h4>
            </li>
            {!loading && logs.length === 0 ? (<p className="center"> No logs to show...</p>) :
                (logs.map(log => <LogItem log = {log} key = {log.id} />))
            }
        </ul>
    )
}


Logs.propTypes = {
    log: PropTypes.object.isRequired
}

// export default Logs;

// 3. anything i want to bring as state, put it in mapStateToProps
const mapStateToProps = state => ({
    // this log is prop
    log: state.log // this is from rootreducer (index.js)
})


// 2. export the connect down here
export default connect(mapStateToProps, {getLogs}) (Logs);
// 4. bring action too