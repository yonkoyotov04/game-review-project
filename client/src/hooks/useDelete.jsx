import { useContext, useState } from "react";
import request from "../utils/requester.js";
import { useNavigate } from "react-router";
import UserContext from "../contexts/UserContext.js";

export default function useDelete(item, id, itemName) {
    const [showBox, setShowBox] = useState(false);
    const { logoutHandler } = useContext(UserContext)
    const navigate = useNavigate();

    const onDeleteClick = () => {
        setShowBox(true);
    }

    const onButtonNo = () => {
        setShowBox(false)
    }

    const onButtonYes = () => {
        switch (item) {
            case 'game': {
                request(`/games/${id}/delete`, 'DELETE');
                setShowBox(false);
                navigate('/games');
                break;
            }
            case 'review': {
                request(`/reviews/${id}/delete`, 'DELETE');
                setShowBox(false);
                navigate('/')
                break;
            }
            case 'profile': {
                request(`/auth/${id}/delete`, 'DELETE')
                setShowBox(false);
                logoutHandler();
                navigate('/');
                break;
            }
        }
    }

    const DeleteContainer = () => {
        return (
            <div className="delete-confirm-overlay">
                <div className="delete-confirm-box">
                    <h2>Confirm Deletion</h2>
                    <p>Are you sure you want to delete
                        {item === 'review' ? ' this review' : item === 'profile' ? ' your profile' : ` ${itemName}`}?
                        This action cannot be undone.</p>

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