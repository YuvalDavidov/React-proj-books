const { useState, useEffect } = React

import { BooksList } from '../cmps/book-list.jsx'
import { BookDetails } from '../cmps/book-details.jsx'
import { BooksFilter } from '../cmps/book-filter.jsx'

import { bookService } from '../services/book.service.js'

export function BookIndex() {

    const [filterBy, setFilterBy] = useState(bookService.getDefaultFilter())
    const [books, setBooks] = useState([])
    const [selectedBook, setSelectedBook] = useState(null)

    useEffect(() => {
        loadBooks()
    }, [filterBy])

    function loadBooks() {
        bookService.getBooks(filterBy).then(booksToUpdate => {
            setBooks(booksToUpdate)
        })
    }

    function onSelectedBook(bookId) {
        bookService.getBookById(bookId).then(book => setSelectedBook(book))
    }

    function onSetFilter(filterByFormFilter) {
        setFilterBy(filterByFormFilter)
    }

    return <section>
        <h2>Our Books</h2>
        {!selectedBook && <div>
            <BooksFilter onSetFilter={onSetFilter} />
            <BooksList books={books} onSelectedBook={onSelectedBook} />
        </div>}
        {selectedBook && <BookDetails book={selectedBook} onBack={() => setSelectedBook(null)} />}
    </section>
}