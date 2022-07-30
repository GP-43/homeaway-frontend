import React from "react";
import {Container, Button, Row} from "react-bootstrap";
import {BsArrowRight} from 'react-icons/bs';

function SearchButton() {
    return (
        <Container className="search-button">
            <Button variant="dark" type="submit">
                <Row className="bg-dark py-1">
                    <h6 className="bg-dark mb-0">Search Places{' '}<BsArrowRight className="bg-dark"/></h6>
                </Row>
            </Button>
        </Container>
    );
}

export default SearchButton;