import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <div className='blogs'>
            <h2 className='QandA'>Questions & Answers</h2>
            <h5>Q: What are the difference between authorization and authentication?</h5>
            <h5> Ans:</h5>Authentication is the act of validating that users are whom they claim to be.This is the first step in any security process.Usernames and passwords are the most common authentication factors.If a user enters the correct data ,the system assumees the identity is valid and grants access.<br></br>Authorization,in the form of permissions.Authorization in a system security is the process of giving the user permission to access a spacific resource or function .This terms is often used interchangeably with baccess control and client privilege.In secure environments,authorization must always follow authentication.Users should first prove that there identites are genuine before an organization's administretors grant them access to the requested resources.
            <h5>Q: Why are you using firebase? What other options do you have to implement authentication?</h5>
            <h5>Ans:</h5><p>Firebase is a complete backend solution that can manage authentication,real time database in iOS apps, android apps and even in web apps.<br></br>Options for authentication:5 Common Authentication Types -<br></br>
                Password-based authentication. Passwords are the most common methods of authentication. ...<br></br>
                Multi-factor authentication. ...<br></br>
                Certificate-based authentication. ...<br></br>
                Biometric authentication. ...<br></br>
                Token-based authentication.
            </p>
            <h5>Q:What other services does firebase provide other than authentication?</h5>
            <h5>Ans:</h5><p>
                There are many services which Firebase provides, Most useful of them are:
                Cloud Firestore.
                Cloud Functions.
                Authentication.
                Hosting.
                Cloud Storage.
                Google Analytics.
                Predictions.
                Cloud Messaging</p>
        </div>
    );
};

export default Blogs;