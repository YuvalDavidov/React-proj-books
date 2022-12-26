import { bookService } from "../services/book.service.js"

import { LongTxt } from "./long-txt.jsx"

export function BookDetails({ book, onBack }) {
    console.log(book);
    const onSale = <div>{(book.listPrice.isOnSale) ? 'on sale!!' : 'not on sale'}</div>

    function txtDisplay() {
        let classes = ''
        let currYear = new Date().getFullYear()

        if (book.pageCount > 500) classes += ' serious'
        else if (book.pageCount > 200) classes += ' descent'
        else if (book.pageCount < 100) classes += ' light'

        if (book.publishedDate < currYear - 10) classes += ' vintage'

        return classes
    }

    function priceDisplay() {
        console.log(book.listPrice.amount);
        if (book.listPrice.amount > 150) return 'red'
        if (book.listPrice.amount < 20) return 'green'
    }

    return <article className="book-details">
        <h2>{book.title}</h2>
        {onSale}
        <div>ID: {book.id}</div>
        <div>Price: <span className={priceDisplay()}>{book.listPrice.amount}</span>{bookService.getCurrencySymbol(book.listPrice.currencyCode)}</div>
        <img src={book.thumbnail} />
        <div>{book.authors}</div>
        <LongTxt txt={book.description} length={100} />
        <button onClick={onBack}>Back to book-list</button>
    </article>
}