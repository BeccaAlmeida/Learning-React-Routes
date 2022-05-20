import './menu.css';
import React from "react";
import { Link } from 'react-router-dom';

export default function Menu() {
    return (
        <div className="menu">
            <nav>
                <ul>
                    <li>
                        <Link exact to="/">Início</Link>
                    </li>
                    <li>
                        <Link to="/param/1">Param #1</Link>
                    </li>
                    <li>
                        <Link to="/param/2">Param #2</Link>
                    </li>
                    <li>
                        <Link to="/about">Sobre</Link>
                    </li>

                    <li>
                        <Link to="/notFound">404 Not Found</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
} 