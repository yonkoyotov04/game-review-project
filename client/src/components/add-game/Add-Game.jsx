export default function AddGame() {
    return (
        <section id="create-game">
            <div className="game-form">
                <h3 className="form-title">Add Game</h3>
                <form id="gameForm" method="POST">
                    <div className="form-group">
                        <label for="title">Title</label>
                        <input type="text" id="title" name="title" value="" required />
                    </div>
                    <div className="form-group">
                        <label for="developers">Developers</label>
                        <input type="text" id="developers" name="developers" value="" required />
                    </div>
                    <div className="form-group">
                        <label for="genre">Genre</label>
                        <select id="genre" name="genre">
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
                        <label for="relDate">Release Date</label>
                        <input type="date" id="relDate" name="relDate" value="" required />
                    </div>
                    <div className="form-group">
                        <label for="platforms">Platforms</label>
                        <input type="text" id="platforms" name="platforms" value="" required />
                    </div>
                    <div className="form-group">
                        <label for="description">Description</label>
                        <textarea id="description" name="description" required>{}</textarea>
                    </div>
                    <div className="form-group">
                        <label for="imageUrl">Game Image</label>
                        <input type="text" id="imageUrl" name="imageUrl" value="" required />
                    </div>
                    <button type="submit" className="submit-btn">Post</button>
                </form>
            </div>
        </section>
    )
}