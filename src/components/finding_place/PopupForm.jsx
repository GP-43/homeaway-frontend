import React from "react";
import {Form} from "react-bootstrap";

function PopupForm(props) {
    return (
        <Form className='row'>
            <Form.Group className="mb-1 col-12" controlId="exampleForm.ControlInput1">
                <Form.Label className='mb-1'>Guest {props.value} username</Form.Label>
                <Form.Control
                    type="email"
                    placeholder="email"
                    autoFocus
                />
            </Form.Group>
            {/*<Form.Group*/}
            {/*    className="mb-3 col-6"*/}
            {/*    controlId="exampleForm.ControlTextarea1"*/}
            {/*>*/}
            {/*    <Form.Label>Example textarea</Form.Label>*/}
            {/*    <Form.Control as="textarea" rows={1} />*/}
            {/*</Form.Group>*/}
        </Form>
    );
}

export default PopupForm;