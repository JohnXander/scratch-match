import { Link, Outlet } from 'react-router-dom';

export default function Friends() {
    
    return (
        <div className="form-container">
            <div className="add-form">
                <h2>Friends</h2>
                <div className="nav-bar">
                    <Link to="/friends/list">My Friends</Link>
                    <Link to="/friends/suggested">Suggested Friends</Link>
                </div>
                <Outlet />
            </div>
        </div>
    )
}