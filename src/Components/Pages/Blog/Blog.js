import React from 'react';
import useTitle from '../../../Hook/useTitle';
import './Blog.css';

const Blog = () => {
    useTitle('blog');
    return (
        <div className='w-3/4 blog-div pl-40 pb-12'>
            <h1>Here are some important Questions:</h1>

            <h3><b>Q1:</b>What are the Difference between SQL and NoSQL?</h3>
            <p><b>Ans:</b> SQL is the programming language used to interface with relational databases. NoSQL is a class of DBMs that are non-relational and generally do not use SQL.</p>

            <br />

            <h3><b>Q2:</b>What is JWT, and how does it work?</h3>
            <p><b>Ans:</b> JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. This information can be verified and trusted because it is digitally signed. JWTs can be signed using a secret (with the HMAC algorithm) or a public/private key pair using RSA or ECDSA.</p>

            <br />


            <h3><b>Q3:</b>What is JWT, and how does it work?</h3>
            <p><b>Ans:</b> JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node.js, on the other hand, is an interpreter or execution environment for the JavaScript programming language. It requires libraries that can be conveniently accessed from JavaScript programming to be more helpful.</p>

            <br />

            <h3><b>Q4:</b>How does NodeJS handle multiple requests at the same time?</h3>
            <p><b>Ans:</b> NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them. EventLoop is the listener for the EventQueue. </p>
        </div>
    );
};

export default Blog;