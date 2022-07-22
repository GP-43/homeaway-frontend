import React, { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form';

// The forwardRef is important!!
// Dropdown needs access to the DOM node in order to position the Menu
function CitySelecting() {
    const CustomToggle = React.forwardRef(({children, onClick}, ref) => (
        <a
            href=""
            ref={ref}
            onClick={(e) => {
                e.preventDefault();
                onClick(e);
            }}
        >
            {children}
            &#x25bc;
        </a>
    ));

// forwardRef again here!
// Dropdown needs access to the DOM of the Menu to measure it
    const CustomMenu = React.forwardRef(
        ({children, style, className, 'aria-labelledby': labeledBy}, ref) => {
            const [value, setValue] = useState('');

            return (
                <div
                    ref={ref}
                    style={style}
                    className={className}
                    aria-labelledby={labeledBy}
                >
                    <Form.Control
                        autoFocus
                        className="mx-3 my-2 w-auto"
                        placeholder="Type to filter..."
                        onChange={(e) => setValue(e.target.value)}
                        value={value}
                    />
                    <ul className="list-unstyled">
                        {React.Children.toArray(children).filter(
                            (child) =>
                                !value || child.props.children.toLowerCase().startsWith(value),
                        )}
                    </ul>
                </div>
            );
        },
    );
    const [dropDownValue, setDropDownValue] = useState("Nearest location")

    const handleSelect=(event)=>{
        setDropDownValue(event.target.innerHTML);
    }

    return(
        <Dropdown>
            <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components"  renderMenuOnMount={false}>
                <span>{dropDownValue}</span>
            </Dropdown.Toggle>

            <Dropdown.Menu as={CustomMenu}  >
                <Dropdown.Item eventKey='Colombo' onClick={handleSelect} className='bg-white'>Colombo</Dropdown.Item>
                <Dropdown.Item eventKey="Gampaha" onClick={handleSelect} className='bg-white'>Gampaha</Dropdown.Item>
                <Dropdown.Item eventKey="Kandy" onClick={handleSelect} className='bg-white'>Orange</Dropdown.Item>
                <Dropdown.Item eventKey="Galle" onClick={handleSelect} className='bg-white'>Galle</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
}
export default CitySelecting;