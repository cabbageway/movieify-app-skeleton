import MovieListItem from "./movie-list-item/MovieListItem";
import "./MovieOverview.styles.css"

const MovieOverview: React.FC = () => {

    return (
        <div className="movie-overview-root">
            <div className="movie-overview-button-container">
                <button onClick={() => {}}>Add movie</button>
            </div>

            <div className="movie-overview-item-container">
                <div className="movie-overview-header">
                    <div className="movie-overview-header-column" style={{ width: "40px" }} />
                    <div className="movie-overview-header-column" style={{ width: "40px"}} />
                    <div className="movie-overview-header-column"  style={{ width: "400px"}}>
                        Title
                    </div>
                    <div className="movie-overview-header-column"  style={{ width: "70px" }}>
                        Year
                    </div>
                    <div className="movie-overview-header-column" style={{ width: "110px" }}>
                        Watched
                    </div>
                    <div className="movie-overview-header-column" style={{ width: "40px" }} />
                </div>
            </div>
        </div>
    )
}

export default MovieOverview