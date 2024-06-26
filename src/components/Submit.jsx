import React from 'react';
import submit from '../assets/submit.gif';
import './submit.css';

const Submit = () => {
    return (
        <div className="submit-overlay">
            <div className="submit-modal">
                <div className="modal-body">
                    <img src={submit} alt="Submitting" />
                </div>
            </div>
        </div>
    );
}

export default Submit;
