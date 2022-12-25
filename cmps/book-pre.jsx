

export function BookPre({ book, onSelectedBook }) {


    return <tr className="book" key={book.id} onClick={() => onSelectedBook(book.id)}>
        <td>{book.id}</td>
        <td>{book.title}</td>
        <td><img src={book.thumbnail} /></td>
        <td>{book.listPrice.amount} {book.listPrice.currencyCode}</td>

    </tr>
}