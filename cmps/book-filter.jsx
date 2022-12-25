const { useState, useEffect } = React

import { bookService } from "../services/book.service.js"

export function BooksFilter({ onSetFilter }) {

    const [filterByToEdit, setFilterByToEdit] = useState(bookService.getDefaultFilter())

    useEffect(() => {
        onSetFilter(filterByToEdit)
    }, [filterByToEdit])

    function handleChange({ target }) {
        let { value, name: field, type } = target
        value = (type === 'number') ? +value : value
        setFilterByToEdit((prevFilter) => {
            return { ...prevFilter, [field]: value }
        })
    }

    function onSubmitFilter(ev) {
        ev.preventDefault()
        onSetFilter(filterByToEdit)
    }

    return <section className="book-filter">
        <h3>Filter our books</h3>
        <form onSubmit={onSubmitFilter}>
            <label htmlFor="book">Book:</label>
            <input type="text"
                id="book"
                name="txt"
                placeholder="by book's name"
                value={filterByToEdit.txt}
                onChange={handleChange}
            />
            <label htmlFor="price">Price:</label>
            <input type="number"
                id="price"
                name="price"
                placeholder="By min price"
                value={filterByToEdit.price}
                onChange={handleChange} />

            <button>filter books!</button>
            <button onClick={() => setFilterByToEdit(bookService.getDefaultFilter())}>clear filter</button>
        </form>
    </section>
}