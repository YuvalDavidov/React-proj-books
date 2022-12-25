import { BookPre } from '../cmps/book-pre.jsx'

export function BooksList({ books, onSelectedBook }) {


    return <table className="book-table">
        <tbody>
            {
                books.map(book => <BookPre book={book} key={book.id} onSelectedBook={onSelectedBook} />)
            }
        </tbody>
    </table>
}