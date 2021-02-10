import React, {useState, useEffect} from 'react'
import TechItem from "./TechItem";
const TechListModal = () => {
    const [techs, setTechs] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        getTechs(); // Logs 컴포넌트가 마운트될 때 getLogs()함수도 동작
    }, []);

    // 비동기 함수로 들어간다. await가 당연히 필요하다
    const getTechs = async () => {
        setLoading(true);
        const res = await fetch('/techs'); // 와방 기다리고 있는 await, json-server 덕분에 db.json바라본다.
        const data = await res.json();
        setTechs(data); // techs라는 state를 data로 치환, data는 json-server를 통해 가져온 db.json의 data
        setLoading(false);

    }
    return (
        <div id="tech-list-modal" className="modal">
            <div className="modal-content">
                Technician List
                <ul className="collection">
                    {!loading && techs.map(tech => (
                        <TechItem tech={tech} key = {tech.id}/>

                    ))}
                </ul>
            </div>
        </div>


    )
}

export default TechListModal;