import React from 'react'

export default function MovieDetail({coverImg, titleLong, download, like, genres, descriptionFull}) {
    return (
        <div>
        <img src={coverImg} alt="" />
        <h2>{titleLong}</h2>
        <div>{download}</div>
        <button>{like}</button>
        <ul>
        {genres.map((genre) => (
            <li key={genre}>{genre}</li>
        ))}
        </ul>
        <p>{descriptionFull}</p>
    </div>
    )
}

