import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button, Row, Col, Container } from 'react-bootstrap';

function Product() {

    let product = ["https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aGVhZHBob25lc3xlbnwwfHwwfHw%3D&w=1000&q=80.jpg", "https://images.unsplash.com/photo-1484704849700-f032a568e944?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aGVhZHBob25lc3xlbnwwfHwwfHw%3D&w=1000&q=80.jpg", "https://cpb-ap-se2.wpmucdn.com/blogs.unimelb.edu.au/dist/3/41/files/2019/08/IMG_20190815_233650_2-1024x768.jpg", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaiHTnusN9kX2sHQgWYtsGIjp_y-o-lRC7wA&usqp=CAU.jpg"]
    product = product.map((ele, index) => {
        return (
            <Col lg={4} key={index}>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={ele}/>
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
            </Col>

        )

    })

    return (
        <>
            <Container >
                <Row>
                    {product}
                </Row>
            </Container>

        </>
    );
}

export default Product;