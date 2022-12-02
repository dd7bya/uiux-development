import '../FilterSortBar.css';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';





export default function FilterSortBar(props) {

    const onChange = event => {
        //console.log(event.target.value, event.target.checked);
        props.handleEqFilterChange(event.target.value, event.target.checked);
        // update states to change which items are shown
    }

    return (
        <Navbar bg="blue" expand="lg">
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavDropdown className="fw-bold" title="Sort" id="basic-nav-dropdown">
                            <NavDropdown.ItemText className="fw-normal">
                                <Form.Check
                                    type='radio'
                                    name='sort'
                                    id='Popularity'
                                    label='Popularity'
                                    defaultChecked
                                    onClick={props.resetSort}
                                />
                            </NavDropdown.ItemText>

                            <NavDropdown.ItemText className="fw-normal">
                                <Form.Check
                                    type='radio'
                                    name='sort'
                                    id='Calorie burn'
                                    label='Calorie burn'
                                    onClick={props.sortData}
                                />
                            </NavDropdown.ItemText>
                        </NavDropdown>



                        <NavDropdown className="fw-bold" title="Filter" id="basic-nav-dropdown">
                            <NavDropdown.ItemText>Target:</NavDropdown.ItemText>

                            {['All', 'Legs', 'Arms', 'Back', 'Chest'].map((label) => {
                                return <NavDropdown.ItemText className="fw-normal"><Form.Check
                                    type='radio'
                                    name='bodyPart-sort'
                                    id={label}
                                    label={label}
                                    onClick={() => props.handleTargetFilterChange(label)}
                                />
                                </NavDropdown.ItemText>
                            }
                            )
                            }
                            <NavDropdown.Divider />

                            <NavDropdown.ItemText>Equipment:</NavDropdown.ItemText>
                            {['Not required', 'Weights', 'Yoga ball', 'Machine', 'Bench'].map((label) => (
                                <NavDropdown.ItemText className="fw-normal">
                                    <Form.Check
                                        type='checkbox'
                                        id={label}
                                        label={label}
                                        value={label}
                                        onChange={onChange}
                                    />
                                </NavDropdown.ItemText>
                            ))}



                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}