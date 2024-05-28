import React, { useState, useEffect } from "react";
import Book from "../Book/Book";

const Books = () => {
    const [books, setBooks] = useState([]);
    const [selectedBookId, setSelectedBookId] = useState(null);

    useEffect(() => {
        fetch('Books.json')
            .then(res => res.json())
            .then(data => setBooks(data));
    }, []);

    const handleBookClick = (id) => {
        setSelectedBookId(id === selectedBookId ? null : id);
    };

    return (
        <div className="text-center">
            <h2 className="text-5xl mt-20">Books: {books.length}</h2>
            <div className="grid grid-cols-3 gap-6">
                {books.map(book => (
                    <Book 
                        key={book.id} 
                        book={book} 
                        onClick={handleBookClick} 
                        isSelected={book.id === selectedBookId} 
                    />
                ))}
            </div>
        </div>
    );
};

export default Books;
