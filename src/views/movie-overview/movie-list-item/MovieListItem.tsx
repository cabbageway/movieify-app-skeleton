import "./MovieListItem.styles.css"
import {BookmarkAdded, BookmarkBorder, Delete, Star, StarOutline} from "@mui/icons-material";

const MovieListItem: React.FC = () => {

    return (
        <div className="movie-list-item" onClick={() => {}}>
            <div className="movie-list-item-column" style={{ width: "40px" }}>
                <span className="movie-list-item-icon" onClick={() => {}}>
                </span>
            </div>
            <div className="movie-list-item-column" style={{ width: "40px"}}>
                <img className="movie-list-item-img" src={""} alt={"pic"} />
            </div>
            <div className="movie-list-item-column"  style={{ width: "400px" }}>
                <span>{`. `}</span>
            </div>
            <div className="movie-list-item-column"  style={{ width: "70px" }}>
                <span>{}</span>
            </div>
            <div className="movie-list-item-column" style={{ width: "110px" }}>
                <span className="movie-list-item-icon" onClick={e => {}}>
                </span>
            </div>
            <div className="movie-list-item-column" style={{ width: "40px" }}>
                <span className="movie-list-item-icon-delete" onClick={e => {}}>
                    <Delete />
                </span>
            </div>
        </div>
    )
}

export default MovieListItem