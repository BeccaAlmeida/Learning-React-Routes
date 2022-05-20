import './content.css';
import React from 'react';
import Home from './../../../views/examples/home/Home';
import Params from './../../../views/examples/params/Params';
import About from './../../../views/examples/about/About';
import NotFound from '../../../views/examples/notFound/NotFound';
import { Routes, Route } from 'react-router-dom';


const Content = props => {
    return (
        <main className="content">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/param/:id" element={<Params />} />
                <Route path="/about" element={<About />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </main>
    )
}

export default Content;