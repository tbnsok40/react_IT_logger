import React, {useState, useEffect} from 'react'
import propTypes from 'prop-types';

const TechItem = ({tech}) => {
    return (
        <li className="collection-item">
            {tech.firstName} {tech.lastName}
            <a href="" className="secondary-content">
                <i className="material-icons grey-text">delete</i>
            </a>
        </li>
    )
}
TechItem.propTypes = {
    tech: propTypes.object.isRequired,
}
export default TechItem;