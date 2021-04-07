import React, {useState, useEffect} from 'react'
import TechItem from "./TechItem";

import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import { getTechs } from "../../actions/techActions";

const TechListModal = ({ getTechs, tech:{techs, loading} }) => {
    // const [techs, setTechs] = useState([]);
    // const [loading, setLoading] = useState(false);
    // 위의 코드는 redux를 쓰기에 주석 처리, state를 component level이 아닌 app level에서 관리한다.

    useEffect(() => {
        getTechs(); // Logs 컴포넌트가 마운트될 때 getLogs()함수도 동작
    }, []);

    // 비동기 함수로 들어간다. await가 당연히 필요하다 // redux에서 관리하므로 주석처리해준다.
    // const getTechs = async () => {
    //     setLoading(true);
    //     const res = await fetch('/techs'); // 와방 기다리고 있는 await, json-server 덕분에 db.json바라본다.
    //     const data = await res.json();
    //     setTechs(data); // techs라는 state를 data로 치환, data는 json-server를 통해 가져온 db.json의 data
    //     setLoading(false);
    // }

    return (
        <div id="tech-list-modal" className="modal">
            <div className="modal-content">
                Technician List
                <ul className="collection">
                    {!loading &&
                    techs !== null &&
                    techs.map(tech => (
                        <TechItem tech={tech} key = {tech.id}/>

                    ))}
                </ul>
            </div>
        </div>


    )
}

TechListModal.propTypes ={
    tech: PropTypes.object.isRequired,
    getTechs: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
    tech: state.tech
});

export default connect(mapStateToProps, {getTechs})(TechListModal);
