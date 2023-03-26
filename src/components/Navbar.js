import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar p-4 w-full align-bottom flex bg-[#353638]">
            <Link to="/" className="navbar-brand text-white font-semibold text-xl mr-10">ExerciseTracker</Link>
            <div className="">
                <ul className="navbar-nav flex gap-10">
                    <li className="navbar-item text-[#828385] font-medium hover:font-semibold">
                        <Link to="/" className="nav-link">Exercises</Link> 
                    </li>
                    <li className="navbar-item text-[#828385] font-medium hover:font-semibold">
                        <Link to="/create" className="nav-link">Create Exercise Log</Link>
                    </li>
                    <li className="navbar-item text-[#828385] font-medium hover:font-semibold">
                        <Link to="/user" className="nav-link">Create User</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;