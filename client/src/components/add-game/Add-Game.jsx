import { useNavigate } from "react-router";
import useControlledForm from "../../hooks/useControlledForm.js"
import request from "../../utils/requester.js";
import { useContext } from "react";
import UserContext from "../../contexts/userContext.js";

export default function AddGame() {
    const {user} = useContext(UserContext);
    const navigate = useNavigate();

    const initialValues = {
        title: '',
        developers: '',
        genre: '',
        relDate: '',
        platforms: '',
        description: '',
        imageUrl: ''
    }

    const onSubmit = async(values) => {
        const data = {...values, ownerId: user._id};

        request('/games', 'POST', data);

        navigate('/games')
    }

    const {values, changeHandler, submitHandler} = useControlledForm(initialValues, onSubmit)

    return (
        <section id="create-game">
            <div className="game-form">
                <h3 className="form-title">Add Game</h3>
                <form id="gameForm" method="POST" onSubmit={submitHandler}>
                    <div className="form-group">
                        <label htmlFor="title">Title</label>
                        <input type="text" id="title" name="title" value={values.title} onChange={changeHandler} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="developers">Developers</label>
                        <input type="text" id="developers" name="developers" value={values.developers} onChange={changeHandler} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="genre">Genre</label>
                        <select id="genre" name="genre" value={values.genre} onChange={changeHandler}>
                            <option value="">Select Category</option>
                            <option value="Action">Action</option>
                            <option value="Adventure">Adventure</option>
                            <option value="RPG">RPG</option>
                            <option value="Fighting">Fighting</option>
                            <option value="FPS">FPS</option>
                            <option value="Simulation">Simulation</option>
                            <option value="Strategy">Strategy</option>
                            <option value="Horror">Horror</option>
                            <option value="Sports">Sports</option>
                            <option value="Racing">Racing</option>
                            <option value="Tactical">Taactical</option>
                            <option value="MMO">MMO</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="relDate">Release Date</label>
                        <input type="date" id="relDate" name="relDate" value={values.relDate} onChange={changeHandler} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="platforms">Platforms</label>
                        <input type="text" id="platforms" name="platforms" value={values.platforms} onChange={changeHandler} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="description">Description</label>
                        <textarea id="description" name="description" onChange={changeHandler} value={values.description} required></textarea>
                    </div>
                    <div className="form-group">
                        <label htmlFor="imageUrl">Game Image</label>
                        <input type="text" id="imageUrl" name="imageUrl" value={values.imageUrl} onChange={changeHandler} required />
                    </div>
                    <button type="submit" className="submit-btn">Post</button>
                </form>
            </div>
        </section>
    )
}