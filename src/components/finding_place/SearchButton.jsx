import React from "react";
import {Container, Button, Row} from "react-bootstrap";
import {BsArrowRight} from 'react-icons/bs';

function SearchButton() {
    return (
        <Container className="search-button">
            <Button variant="dark" type="submit">
                <Row className="bg-dark">
                    <h6 className="bg-dark">Search Places{' '}<BsArrowRight className="bg-dark"/></h6>
                </Row>                
            </Button>
        </Container>
    );
}

export default SearchButton;