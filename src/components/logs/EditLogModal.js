import React, {useState} from 'react';
import M from 'materialize-css/dist/js/materialize.min.js'

<<<<<<< HEAD
const EditLogModal = () => {
=======
const AddLogModal = () => {
>>>>>>> 1adf7c26875f87c8779654258f70c987b96f711d
    const [message, setMessage] = useState('');
    const [attention, setAttention] = useState(false);
    const [tech, setTech] = useState('');

    const onSubmit = () => {
        if (message === '' || tech === '') {
            M.toast({html: "please enter a message and tech"})
        } else {
            console.log({message, tech})
<<<<<<< HEAD
            // clear fields
            setMessage('');
            setTech('');
            setAttention(false)
        }

    }

    return (
        <div id="edit-log-modal" className="modal bottom-sheet" style={modalStyle}>
=======
        }
    }

    return (
        <div id="add-log-modal" className="modal bottom-sheet" style={modalStyle}>
>>>>>>> 1adf7c26875f87c8779654258f70c987b96f711d

            <div className="modal-content">
                <h4>Enter System log</h4>
                <div className="row">
                    <div className="input-field">
                        <input type="text" name="message" value={message} onChange={e => setMessage(e.target.value)}/>
                        <label htmlFor="message" className='active'>Log Message</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field">
                        <select name="tech" value={tech} className='browser-default'
                                onChange={e => setTech(e.target.value)}>
                            <option value="John Doe">John Doe</option>
                            <option value="Sam Smith">Sam Smith</option>
                            <option value="Sara Wilson">Sara Wilson</option>
                        </select>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field">
                        <p>
                            <label>
                                <input type="checkbox"
                                       className="filled-in"
                                       checked={attention}
                                       value={attention}
                                       onChange={e => setAttention(!attention)}
                                />
                                <span>Needs Attention</span>
                            </label>
                        </p>
                    </div>
                </div>
            </div>

            <div className="modal-footer">
                <a href="!#" onClick={onSubmit}
                   className="modal-close waves-effect waves-blue waves-green btn">Enter</a>
            </div>

        </div>
    )
}

const modalStyle = {
    // width: '75%',
    // height: '75%'
}

<<<<<<< HEAD
export default EditLogModal;
=======
export default AddLogModal;
>>>>>>> 1adf7c26875f87c8779654258f70c987b96f711d
