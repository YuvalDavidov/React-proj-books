const { useState } = React

import { HomePage } from './pages/home-page.jsx'
import { AboutUs } from './pages/about.jsx'
import { BookIndex } from './pages/book-index.jsx'

export function App() {
    const [page, setPage] = useState('bookIndex')

    return <section className="app">
        <header className="app-header">
            <h1>My App</h1>
            <nav>
                <a href="#" onClick={() => setPage('home')}>Home</a> |
                <a href="#" onClick={() => setPage('about')}>About us</a> |
                <a href="#" onClick={() => setPage('bookIndex')}>Books</a>
            </nav>
        </header>
        <main>
            {page === 'home' && <HomePage />}
            {page === 'about' && <AboutUs />}
            {page === 'bookIndex' && <BookIndex />}
        </main>
    </section>
}