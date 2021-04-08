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
<<<<<<< HEAD
            <a href="!#" className="secondary-content" onClick={onDelete}>
=======
            <a href="" className="secondary-content" onClick={onDelete}>
>>>>>>> f837053214e2c6873dd2f1c3d6fccd7643a6a0b9
                <i className="material-icons grey-text">delete</i>
            </a>
        </li>
    )
}
TechItem.propTypes = {
    tech: propTypes.object.isRequired,
}
export default connect(null, {deleteTechs})(TechItem);