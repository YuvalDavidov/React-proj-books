const { useParams, useNavigate } = ReactRouterDOM
const { useState, useEffect } = React

import { bookService } from "../services/book.service.js"
import { BookReviews } from '../cmps/book-reviews.jsx'
import { LongTxt } from "../cmps/long-txt.jsx"
import { AddReview } from "../cmps/add-review.jsx"

export function BookDetails() {
    const [book, setBook] = useState(null)
    const { bookId } = useParams()
    const navigate = useNavigate()


    useEffect(() => {
        bookService.getBookById(bookId).then(book => setBook(book))

    }, [])



    if (!book) return <div>loading..</div>
    const onSale = <div>{(book.listPrice.isOnSale) ? 'on sale!!' : 'not on sale'}</div>


    function priceDisplay() {
        if (book.listPrice.amount > 150) return 'red'
        if (book.listPrice.amount < 20) return 'green'
    }

    function onGoBack() {
        navigate('/books')
    }

    function onEdit() {
        navigate(`/books/edit/${book.id}`)
    }

    function onSaveReview(bookToSave) {
        console.log(bookToSave);
        setBook(bookToSave)
        bookService.save(book)
    }

    function onRemoveRev(revId) {
        bookService.removeRev(book.id, revId).then(() => {
            const filteredReviews = book.reviews.filter((review) => review.id !== revId)
            setBook({ ...book, reviews: filteredReviews })
        })
    }

    return <article className="book-details">
        <h2>{book.title}</h2>
        <button onClick={onEdit}>Edit me</button>
        {onSale}
        <div>ID: {book.id}</div>
        <div>Price: <span className={priceDisplay()}>{book.listPrice.amount}</span>{bookService.getCurrencySymbol(book.listPrice.currencyCode)}</div>
        <img src={book.thumbnail} />
        <div>{book.authors}</div>
        <LongTxt txt={book.description} length={100} />
        <AddReview book={book} onSaveReview={onSaveReview} />
        <button onClick={onGoBack}>Back to book-list</button>

        <BookReviews book={book} onRemoveRev={onRemoveRev} />
    </article>
}