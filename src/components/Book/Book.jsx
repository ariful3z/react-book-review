import { useState } from "react";

const Book = ({book, onClick, isSelected}) => {
    const { id, image_url, keywords, book_title, author_name, book_type, book_details, rating } = book;

    return (
        <div className={`card bg-base-100 shadow-xl ${isSelected ? 'border border-primary' : ''}`} onClick={() => onClick(id)}>
            <figure><img src={image_url} alt="Book" /></figure>
            <div className="card-body">
                <div className="flex">
                    <h2>{keywords}</h2>
                </div>
                <div className="mr-60">
                    <p className="text-2xl font-semibold">{book_title}</p>
                    <h3 className="font-medium">{author_name}</h3>
                </div>
                <div className="flex gap-52 text-2xl">
                    <h2>{book_type}</h2>
                    <h3 className="flex">{rating}</h3>
                </div>
                {isSelected && <p>{book_details}</p>}
            </div>
        </div>
    );
};

export default Book;
