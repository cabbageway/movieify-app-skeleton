import {Movie} from "../../common/models/movie.model";
import "./MovieDetails.styles.css"

const MovieDetails: React.FC = (
) => {

    return (
        <div className={"movie-details-root"}>
            <div className="movie-details-header">
                <span>{"Add movie"}</span>
            </div>

            <div className="movie-details-content">
                <div className="movie-details-img-container">
                    <img src={
                        ""
                    } alt="None"/>
                </div>
                <div className="movie-details-form-container">
                    <div className="movie-details-from-field">
                        <label>Title</label>
                        <input
                            type="text"
                            maxLength={50}
                            value={""}
                            onChange={e => {}}
                        />
                    </div>
                    <div className="movie-details-from-field">
                        <label>Genre</label>
                    </div>
                    <div className="movie-details-from-field">
                        <label>Year</label>
                        <input
                            type="number"
                            min={1900}
                            max={2023}
                            value={0}
                            onChange={e => {}}
                        />
                    </div>
                    <div className="movie-details-from-field">
                        <label>Description</label>
                        <input
                            type="text"
                            maxLength={200}
                            value={""}
                            onChange={e => {}}
                        />
                    </div>
                    <div className="movie-details-from-field">
                        <label>Image url</label>
                        <input
                            type="text"
                            value={""}
                            onChange={e => {}}
                        />
                    </div>
                </div>
            </div>

            <div className="movie-details-button-container">
                <button className="movie-details-cancel-button" onClick={() => {}}>Cancel</button>
                <button
                    className="movie-details-save-button"
                    onClick={() => {}}
                    disabled={true}
                >Save
                </button>
            </div>
        </div>
    )
}

export default MovieDetails