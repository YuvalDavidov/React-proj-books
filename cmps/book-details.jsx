

export function BookDetails({ book, onBack }) {

    return <article className="book-details">
        <h2>{book.title}</h2>
        <div>ID: {book.id}</div>
        <div>Price: {book.listPrice.amount} {book.listPrice.currencyCode}</div>
        <img src={book.thumbnail} />
        <p>{book.description}</p>
        <button onClick={onBack}>Back to book-list</button>
    </article>
}