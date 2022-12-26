import { BookPre } from '../cmps/book-pre.jsx'

export function BooksList({ books, onSelectedBook }) {


    return <table className="book-table">
        <thead>
            <tr>
                <td>Id</td>
                <td>Title</td>
                <td>Img</td>
                <td>Price</td>
            </tr>
        </thead>
        <tbody>

            {
                books.map(book => <BookPre book={book} key={book.id} onSelectedBook={onSelectedBook} />)
            }
        </tbody>
    </table>
}