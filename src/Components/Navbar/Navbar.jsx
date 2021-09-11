import Button from '@restart/ui/esm/Button'
import React, { useState } from 'react'
import { Container, Form, FormControl, Navbar, Offcanvas } from 'react-bootstrap'
import './navbar.css'

export default function NavbarRB() {
    const [show, setShow] = useState(false);
    
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    console.log("🚀 ~ file: Navbar.jsx ~ line 1 ~ NavbarRB ~ setShow", show)

    return (
        <>
            <Navbar bg="light" expand="lg" className="navbar">
                <Container>
                    <Navbar.Brand href="#home">Weather</Navbar.Brand>
                    <Button onClick={handleShow} className="btn-navbar">Serch for places</Button>
                </Container>
            </Navbar>
            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                <Form className="d-flex">
                            <FormControl
                                type="search"
                                placeholder="Search"
                                className="mr-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                </Offcanvas.Header>
            </Offcanvas>
        </>
    )
}
