// const { useState } = React
const Router = ReactRouterDOM.HashRouter
const { Route, Routes } = ReactRouterDOM

import { AppHeader } from './cmps/app-header.jsx'
import { UserMsg } from './cmps/user-msg.jsx'
import { HomePage } from './pages/home-page.jsx'
import { AboutUs } from './pages/about.jsx'
import { BookIndex } from './pages/book-index.jsx'
import { BookDetails } from './pages/book-details.jsx'
import { BookEdit } from './pages/book-edit.jsx'

export function App() {


    return <Router>

        <section className="app">

            <AppHeader />

            <main>
                <Routes>
                    <Route element={<HomePage />} path="/" />

                    <Route element={<AboutUs />} path="/about" />

                    <Route element={<BookIndex />} path="/books" />
                    <Route element={<BookEdit />} path="/books/edit/:bookId" />
                    <Route element={<BookEdit />} path="/books/edit" />
                    <Route element={<BookDetails />} path="/books/:bookId" />

                </Routes>
            </main>

            <UserMsg />
        </section>
    </Router>
}