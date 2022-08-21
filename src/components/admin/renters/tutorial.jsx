import React from 'react';
import { Row } from 'react-bootstrap';
import JSONDATA from "./MOCK_DATA.json";
import { useState } from 'react';


function tutorial() {

    const [searchTerm, setSearchTerm] = useState('')

    return (
            <div className='top-seeling-products-search'>
                <input type="text" placeholder='Search...' onChange={event => {setSearchTerm(event.target.value)}}/>
                {JSONDATA.filter((val) => {
                    if (searchTerm == ""){
                        return val
                    } else if (val.first_name.toLowerCase().includes(searchTerm.toLowerCase())) {
                        return val
                    }
                }).map((val, key) => {
                    return (<div className='data' key={key}> {val.first_name} </div>)
                })}
            </div>
    )
}

export default tutorial