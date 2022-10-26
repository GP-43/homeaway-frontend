import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap'
import { BsPlusLg, BsXLg } from 'react-icons/bs';

function FAQ_question() {
    const [isShown, setIsShown] = useState(false);

    const handleClick = event => {
        setIsShown(current => !current);
    };

    const faq = [
        {
            id: 1,
            question: "How to create an account in HomeAway?",
            answer: "Simply click Sign Up and provide necessary details and click register. Then you can login to your account easily.",
        },
        {
            id: 2,
            question: "How to post an advertiesment to sell/rent my property?",
            answer: "Once you create an account and become a registered member, you need to become a renter by filling renter form. \n" +
                "Then go to new rent and fill the form with necessary details and content.",
        },
        {
            id: 3,
            question: "How many pictures can i upload per advertiesment?",
            answer: "You can upload minimum 2 and up to 4 pictures per advertisement. The pictures can be JPG, GIF or TIFF format. \n " +
                "We recommend keeping the picture size to less than 1 MB. If the image upload is taking too long then it could be due \n" +
                "to the size of the pictures.",
        },
        {
            id: 4,
            question: "Can I contact HomeAway ?",
            answer: "You can contact us via contact@homeAway and if you need any assistance by our technical assistance agent\n "+ 
            "please mention your contact number and our team will contact you as soon as possible.",
        },
    ];
    //console.log(map1);

    return (
        faq.map((i) => {
            
            return <Row className='faq mx-lg-5 my-3'>
                <Col><h1 className='number my-2'>{i.id}</h1></Col>
                <Col xs={9}>
                    <div><h3 className='question my-3'>{i.question}</h3></div>
                    {isShown && (
                        <div>
                            <p className='answer'>{i.answer}</p>
                        </div>
                    )}
                </Col>
                <Col className='mt-lg-3'>
                    {isShown ?
                        <BsXLg className='icon-section' onClick={handleClick} /> : <BsPlusLg className='icon-section' onClick={handleClick} />
                    }
                </Col>
            </Row>
        })
    )

}
export default FAQ_question;