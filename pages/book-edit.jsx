const { useParams, useNavigate } = ReactRouterDOM
const { useState, useEffect } = React

import { bookService } from "../services/book.service.js"
import { eventBusService, showSuccessMsg } from '../services/event-bus.service.js'

export function BookEdit() {
    const [bookToEdit, setBookToEdit] = useState(bookService.getEmptyBook())
    const [listPriceToEdit, setListPriceToEdit] = useState(null)
    const navigate = useNavigate()
    const { bookId } = useParams()

    useEffect(() => {
        if (!bookId) return
        loadBook()
    }, [])

    useEffect(() => {
        if (!bookId) return
        setListPriceToEdit(bookToEdit.listPrice)
    }, [bookToEdit])

    function loadBook() {
        bookService.getBookById(bookId)
            .then((book) => { setBookToEdit(book) })
            .catch((err) => {
                console.log('Had a problem with book details', err)
                navigate('/books')
            })
    }

    function handleChange({ target }) {

        let { value, name: field, type } = target
        value = (type === 'number') ? +value : value
        setBookToEdit((prevBook) => {
            if (field === 'amount') return ({ ...prevBook, listPrice: { ...prevBook.listPrice, [field]: value } })
            else return ({ ...prevBook, [field]: value })
        })
    }


    function onSaveBook(ev) {
        ev.preventDefault()
        bookService.save(bookToEdit).then((book) => {
            // console.log('book saved', book);
            showSuccessMsg('Book saved!')
            navigate(`/books/${book.id}`)
        })
    }
    console.log(bookToEdit);

    return <section className="book-edit">
        <h2>{bookToEdit.id ? 'Edit this book' : 'Add a new book'}</h2>

        <form onSubmit={onSaveBook}>
            <label htmlFor="">Book name: </label>
            <input type="text"
                name="title"
                id="title"
                placeholder="Enter Book's name"
                value={bookToEdit.title}
                onChange={handleChange}
            />

            <label htmlFor="">Book price: </label>
            <input type="number"
                name="amount"
                id="amount"
                placeholder="Enter Book's price"
                value={bookToEdit.listPrice.amount}
                onChange={handleChange}
            />
            <button>{bookToEdit.id ? 'Save' : 'Add'}</button>
        </form>


    </section>
}