import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Pageheader from '../../Global/Pageheader/Pageheader';

import './Blog.css'

const Blog = () => {
    return (
        <div id='page-blog'>
            <Pageheader title={"Blog"} subtitle={"The Blog Page"} ></Pageheader>
            <div className="page-content py-5">
                <Container>
                    <Row>
                        <Col md={12}>
                            <div className="question-body my-3 p-3">
                                <h4>Difference between authorization and authentication ?</h4>
                                <p>Authentication is a process of verifying who is user. authentication is the process of proving something to be true.It Verifies the identity of a user. Authorization is a process of verifying the access a user save. what functionality and what access a user have is verified by authorization. this is a security mechanism to determine access level of a user.</p>
                            </div>
                        </Col>
                        <Col md={12}>
                            <div className="question-body my-3 p-3">
                                <h4>Why are you using firebase? What other options do you have to implement authentication?</h4>
                                <p>Authentication is a process of verifying who is user. authentication is the process of proving something to be true.It Verifies the identity of a user. Authorization is a process of verifying the access a user save. what functionality and what access a user have is verified by authorization. this is a security mechanism to determine access level of a user.</p>
                            </div>
                        </Col>
                        <Col md={12}>
                            <div className="question-body my-3 p-3">
                                <h4>What other services does firebase provide other than authentication?</h4>
                                <p>These are some services that firebase provides us except authentication</p>
                                <ul>
                                    <li>Cloud Firestore</li><li>Cloud Functions</li><li>Cloud Messaging</li><li>Hosting</li><li>Cloud Storage</li><li>Google Analytics</li><li>Predictions</li><li>Dynamic Links</li><li>Remote Config</li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

        </div>
    );
};

export default Blog;