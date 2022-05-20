import React from "react";
import { useParams } from "react-router-dom";
import './params.css';

export default function Param() {
    const { id } = useParams();
    return (
        <div className="params">
            <h1>Param</h1>
            <p>Valor: { id }</p>
        </div>
    )
} 