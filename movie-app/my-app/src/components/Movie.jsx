import React from 'react'
import { Link } from 'react-router-dom'

export default function Movie( {id, coverImg, title, summary, genres} ) {
    return (
    <div>
        <img src={coverImg} alt="" />
        <h2>
            <Link to={`/movie/${id}`}>{title}</Link>
        </h2>
        <p>{summary}</p>
        <ul>
        {genres.map((genre) => (
            <li key={genre}>{genre}</li>
        ))}
        </ul>
    </div>
    )
}
