

export function BookReviews({ book, onRemoveRev }) {
    console.log(book);
    if (!book.reviews) return <div>no reviews yet</div>

    return <div className="book-reviews">
        {book.reviews.map(review => {
            return <div key={review.id}>
                <h4>Full name: <span>{review.fullName}</span></h4>
                <h4>Rating: <span>{'⭐'.repeat(review.rate)}</span></h4>
                <h4>Read at: <span>{review.datetime}</span></h4>
                <button onClick={() => onRemoveRev(review.id)}>Remove review</button>
            </div>
        })}
    </div>
}