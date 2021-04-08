import React from 'react'
import propTypes from 'prop-types';
import {connect} from "react-redux";
import {deleteTechs} from "../../actions/techActions";
import M from 'materialize-css/dist/js/materialize.min.js'

const TechItem = ({tech: {id, firstName, lastName}, deleteTechs}) => {

    const onDelete = () => {
        deleteTechs(id);
        M.toast({html: "Technicians deleted"})

    }
    return (
        <li className="collection-item">
            {firstName} {lastName}
            <a href="!#" className="secondary-content" onClick={onDelete}>
                <i className="material-icons grey-text">delete</i>
            </a>
        </li>
    )
}
TechItem.propTypes = {
    tech: propTypes.object.isRequired,
}
export default connect(null, {deleteTechs})(TechItem);