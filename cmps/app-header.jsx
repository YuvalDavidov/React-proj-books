const { NavLink } = ReactRouterDOM

export function AppHeader() {

    return <header className="app-header">
        <div>
            <h1>My App</h1>
            <nav className="app-nav">
                <NavLink to="/">Home</NavLink> |
                <NavLink to="/about">About us</NavLink> |
                <NavLink to="/books">Books</NavLink>
            </nav>
        </div>
    </header>

}