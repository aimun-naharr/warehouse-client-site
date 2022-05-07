import React from 'react';

const Blogs = () => {
    return (
        <div>
            <div className="row container w-100 mx-auto mt-5">
                <div className="col-md-4">
                    <h5>Difference between javascript and nodejs</h5>
                    <p>Javascript is a non blocking programming language. Whereas nodejs is a interpreter for javascript with some specific useful libraries. Javascript basically runs in the browser. But with the help of nodejs javascript can run outside the browser. Javascript is used in client side development. And node js is used in server side development</p>
                </div>
                <div className="col-md-4">
                    <h5>When should you use nodejs and when should you use mongodb?</h5>
                    <p>Nodejs is used for build servers. And mongodb is used for storing data. They are not substitute for one another.</p>
                </div>
                <div className="col-md-4">
                    <h5>What is the purpose of jwt and how does it work?</h5>
                    <p>JWT is used for secure data. It secures data in a encrypted form. JWT contains a set of claims. The claims basically indicates who issued the token, how long it is valid for and what kind of permission the user has been granted</p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;