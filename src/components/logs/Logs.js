import React, {useState, useEffect} from 'react'
import LogItem from "./LogItem";
import Preloader from   '../layout/Preloader'
const Logs = () => {
    const [logs, setLogs] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        getLogs(); // Logs 컴포넌트가 마운트될 때 getLogs()함수도 동작
    }, []);

    // 비동기 함수로 들어간다. await가 당연히 필요하다
    const getLogs = async () => {
        setLoading(true);
        const res = await fetch('/logs'); // 와방 기다리고 있는 await, json-server 덕분에 db.json바라본다.
        const data = await res.json();
        setLogs(data);
        setLoading(false);

    }
    if (loading) {
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

export default Logs;