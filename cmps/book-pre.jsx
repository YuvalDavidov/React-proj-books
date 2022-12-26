const { Link } = ReactRouterDOM

import { bookService } from "../services/book.service.js"

export function BookPre({ book, onSelectedBook }) {


    return <tr className="book" key={book.id}>
        <td>{book.id}</td>
        <td>{book.title}</td>
        <td><img src={book.thumbnail} /></td>
        <td>{book.listPrice.amount}{bookService.getCurrencySymbol(book.listPrice.currencyCode)}</td>
        <td><Link to={`/books/${book.id}`}>Select book</Link></td>
    </tr>
}