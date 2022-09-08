import React, {useState} from 'react';
import {Col,Row} from 'react-bootstrap'
import {BsPlusLg,BsXLg} from 'react-icons/bs';

function FAQ_question() {
    const [isShown, setIsShown] = useState(false);

    const handleClick = event => {
        setIsShown(current => !current);
    };
    return (
        <Row className='faq mx-lg-5 my-3'>
            <Col><h1 className='number my-2'>01</h1></Col>
            <Col xs={9}>
                <div><h3 className='question my-3'>Alright, but what exactly do you do?</h3></div>
                {isShown && (
                    <div>
                        <p className='answer'>As a creative agency we work with you to develop solutions to address your
                            brand needs. That includes various aspects of brand planning and strategy, marketing and design.
                        </p>
                    </div>
                    )}
            </Col>
            <Col className='mt-lg-3'>
                {isShown?
                    <BsXLg className='icon-section'onClick={handleClick}/>:<BsPlusLg className='icon-section'onClick={handleClick}/>
                }
            </Col>
        </Row>
    )
}
export default FAQ_question;