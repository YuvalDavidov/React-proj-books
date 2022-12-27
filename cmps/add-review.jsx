const { useState, useEffect } = React
const { useNavigate } = ReactRouterDOM


import { utilService } from "../services/util.service.js"
import { eventBusService, showSuccessMsg } from '../services/event-bus.service.js'

export function AddReview({ book, onSaveReview }) {
    const [review, setReview] = useState(null)
    const navigate = useNavigate()

    function handleChange({ target }) {

        let { value, name: field, type } = target
        value = (type === 'number') ? +value : value
        setReview((prevRev) => ({ ...prevRev, [field]: value }))
    }

    function saveReview(ev) {
        ev.preventDefault()
        if (!book.reviews) book.reviews = []
        book.reviews.push({ ...review, id: utilService.makeId() })
        onSaveReview(book)
        showSuccessMsg('review saved')
    }



    return <section className="book-add-review">
        <h3>youre review</h3>
        <form onSubmit={saveReview}>
            <label htmlFor="fullName">full name: </label>
            <input type="text"
                name="fullName"
                id="fullName"
                placeholder="Enter youre name"
                onChange={handleChange} />
            <br />
            <label htmlFor="rate">rating: </label>
            <input type="number"
                name="rate"
                id="rate"
                max="5"
                min="1"
                onChange={handleChange}
            />
            <br />
            <label htmlFor="datetime">read at?</label>
            <input
                type="datetime-local"
                name="datetime"
                id="datetime"
                onChange={handleChange}
            />
            <button>save review</button>
        </form>

    </section>
}