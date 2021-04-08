import React from "react";
import Moment from 'react-moment';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {deleteLog} from "../../actions/logActions";
import M from 'materialize-css/dist/js/materialize.min'
import {setCurrent} from "../../actions/logActions";

const LogItem = ({log, deleteLog, setCurrent}) => {
    const onDelete = () => {
        deleteLog(log.id);
        M.toast({html: "Log Deleted"})
    }

    return (
        <li className="collection-item">
            <div>
                <a href="#edit-log-modal"
                   className={`modal-trigger ${log.attention ? 'red-text' : 'blue-text'}`}
                   onClick={() => setCurrent(log)}>
                    {log.message}
                </a>
                <br/>

                <span className='grey-text'>
                <span className="black-text">ID #{log.id}</span> last updated by
                <span className="black-text"> {log.tech}</span> on {' '} <Moment
                    format="MMMM Do YYYY, h:mm:ss a">{log.date}</Moment>
                    {log.nested && <span>{log.nested.message.map(n =>

                        )}</span>}
            </span>
                <a href="!#" onClick={onDelete} className="secondary-content">
                    <i className="material-icons grey-text">delete</i>
                </a>
            </div>
        </li>
    )
}
LogItem.propTypes = {
    log: PropTypes.object.isRequired,
    deleteLog: PropTypes.func.isRequired,
    setCurrent: PropTypes.func.isRequired,
}

// export default LogItem
export default connect(null, {setCurrent, deleteLog})(LogItem)

