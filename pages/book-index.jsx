const { useState, useEffect } = React
const { useNavigate } = ReactRouterDOM

import { BooksList } from '../cmps/book-list.jsx'
import { BookDetails } from './book-details.jsx'
import { BooksFilter } from '../cmps/book-filter.jsx'

import { bookService } from '../services/book.service.js'

export function BookIndex() {

    const [filterBy, setFilterBy] = useState(bookService.getDefaultFilter())
    const [books, setBooks] = useState([])
    const [selectedBook, setSelectedBook] = useState(null)
    const navugate = useNavigate()

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

    function onAddBook() {
        navugate('/books/edit')
    }

    return <section>
        <h2>Our Books</h2>
        {!selectedBook && <div>
            <BooksFilter onSetFilter={onSetFilter} />
            <button onClick={onAddBook}>add book</button>
            <BooksList books={books} onSelectedBook={onSelectedBook} />
        </div>}
        {selectedBook && <BookDetails book={selectedBook} onBack={() => setSelectedBook(null)} />}
    </section>
}