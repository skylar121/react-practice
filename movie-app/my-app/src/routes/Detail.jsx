import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieDetail from '../components/MovieDetail';

function Detail() {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState({});
    const { id } = useParams();
    const getMovie = async () => {
        const json = await (
        await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
        setMovies(json.data.movie);
        setLoading(false);
    };
    useEffect(() => {
        getMovie();
    }, []);

    return (
        <div>
            {loading ? (<h1>loading</h1> 
            ) : (
                <div>
                    <MovieDetail
                    key={movies.id}
                    id={movies.id}
                    coverImg={movies.medium_cover_image}
                    titleLong={movies.title_long}
                    download={movies.download_count}
                    like={movies.like_count}
                    genres={movies.genres}
                    descriptionFull={movies.description_full} 
                    />
                </div>
            )         
            }
        </div>
    )
}
export default Detail;