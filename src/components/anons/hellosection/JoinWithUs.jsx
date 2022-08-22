import React from "react";
import {Button} from "react-bootstrap";
import '../../../assets/styles/partials/anons/_joinwithbutton.scss';
import {Link} from "react-router-dom";

function JoinWithUs() {
    return(
        <Button className="join-button" variant="dark" as={Link} to='/login'>Join With Us</Button>
    );
}
export default JoinWithUs;