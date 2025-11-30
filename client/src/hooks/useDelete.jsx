import { useState } from "react";
import request from "../utils/requester.js";
import { useNavigate } from "react-router";

export default function useDelete(itemName, id) {
    const [showBox, setShowBox] = useState(false);
    const navigate = useNavigate();

    const onDeleteClick = () => {
        setShowBox(true);
    }

    const onButtonNo = () => {
        setShowBox(false)
    }

    const onButtonYes = () => {
        let urlStart = 'games'

        if (itemName === 'review') {
            urlStart = 'reviews';
        }

        if (itemName === 'profile') {
            urlStart = 'auth';
        }

        request(`/${urlStart}/${id}/delete`, 'DELETE');
        setShowBox(false);
        navigate('/games');
    }

    const DeleteContainer = () => {
        return (
            <div className="delete-confirm-overlay">
                <div className="delete-confirm-box">
                    <h2>Confirm Deletion</h2>
                    <p>Are you sure you want to delete 
                        {itemName === 'review' ? 'this' : itemName === 'profile' ? 'your' : ''} 
                        {`${itemName}`}? This action cannot be undone.</p>

                    <div className="delete-buttons">
                        <button onClick={onButtonYes} className="btn-yes">Yes</button>
                        <button onClick={onButtonNo} className="btn-no">No</button>
                    </div>
                </div>
            </div>
        )
    };

    return {
        DeleteBox: showBox ? <DeleteContainer /> : '',
        onDeleteClick
    }
}