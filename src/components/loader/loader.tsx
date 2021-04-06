import { Spinner } from "react-bootstrap";
import React from "react";

export const Loader = () => {
    return <div style={ {
        position: "fixed",
        top: '50%',
        left: '50%'
    } }>
        <Spinner animation="grow" variant="danger"/>
    </div>
}