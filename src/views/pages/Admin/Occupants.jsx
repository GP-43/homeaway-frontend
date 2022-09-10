import React from 'react';
import { useState, useEffect } from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import OccupantTable from "../../../components/admin/occupants/OccupantTable";
import HeaderCard from "../../../components/admin/occupants/HeaderCardOccupant";
import OccupantDetailCard from "../../../components/admin/OccupantDetailCard";
import NewOccupantDetailCard from "../../../components/admin/occupants/NewOccupantDetailCard";
import BookingsDetailCard from "../../../components/admin/BookingsDetailCard";
import UserDetails from '../../../components/admin/occupants/UserDetails';
import axois from "axios";
const base_url = process.env.REACT_APP_BASE_URL;

//images
// import p1 from "../../../assets/images/admin/occupant/p1.jpg";
// import p2 from "../../../assets/images/admin/occupant/p2.jpg";
// import p3 from "../../../assets/images/admin/occupant/p3.jpg";
// import p4 from "../../../assets/images/admin/occupant/p4.jpg";
// import p5 from "../../../assets/images/admin/occupant/p5.jpg";
// import p6 from "../../../assets/images/admin/occupant/p6.jpg";
// import p7 from "../../../assets/images/admin/occupant/p7.jpg";

function Occupants() {

	const [details, setDetails] = useState([]);

    const [selectedUser, setSelectedUser] = useState({});

	useEffect((event) => {
        axois
            .get(`${base_url}/admin/users`)
            .then((data) => {
                const detail = data.data;
                setDetails(detail);
                setSelectedUser(detail[0]);
                //setoccupantData(false)
                console.log(detail);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

	return (
		<Container>

			<Row className="mx-0">
				<Col className="px-0">
					<HeaderCard />
				</Col>
			</Row>

			<Row className="testing-2">
				<Col xs={8}>
					<Row className="testing-1">

						<Col >
							<OccupantDetailCard />
						</Col>

						<Col >
							<NewOccupantDetailCard />
						</Col>

						<Col >
							<BookingsDetailCard />
						</Col>

					</Row>

					<Row className="mx-0 user-list-card">
						<Col className="px-0 occupants-top-selling-products-part">
							<OccupantTable details_array={details} setSelectedUser={setSelectedUser} />
						</Col>
					</Row>
				</Col>
				<Col>
					<Row className="mx-0"><UserDetails userDetailsObj={selectedUser} /></Row>
				</Col>
			</Row>
		</Container>
	);
}

export default Occupants