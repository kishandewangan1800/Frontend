import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Button, Card } from 'react-bootstrap';
import axios from 'axios';

function Post() {

    var [posts, setPosts] = useState([]);

    useEffect(async () => {
        try {
            const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
            setPosts(res.data)
        } catch (err) {
            console.log(err)

        }

    }, [])




    return (
        <>
            <Row>


                {

                    posts.map((post) => (
                        <Card
                            className="post"
                            border="primary"
                            bg="dark"
                            text="light"
                            key={post.id}
                            style={{margin:'20px 0'}}
                        >
                            <Card.Header>
                                <small className="text-muted">User {post.userId}</small>
                            </Card.Header>
                            <Card.Body>
                                <Card.Title>{post.title}</Card.Title>
                                <Card.Text>{post.body}</Card.Text>
                                <Button variant="primary" style={{margin:'0 10px'}}>
                                    Like
                                </Button>
                                <Button variant="primary" className="post-buttons">
                                    Comment
                                </Button>
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">
                                    Uploaded {Math.floor(Math.random() * 60)} mins ago
                                </small>
                            </Card.Footer>
                        </Card>
                    ))

                }

            </Row>
        </>
    )

}

export default Post;