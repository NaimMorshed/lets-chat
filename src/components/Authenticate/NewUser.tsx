import React from 'react';

const NewUser = () => {
    const formSubmit = (event: any) => {
        event.preventDefault();
        alert("under development");
    }
    return (
        <div className="App-header">
            <h1>Let's get</h1>
            <h1>Connected</h1>
            <p>fill this form and your account will</p>
            <p>be ready in few steps.</p>
            <br />
            <form onSubmit={formSubmit}>
                <input type="text" placeholder="Name" />
                <br />
                <input type="email" placeholder="Email" />
                <br />
                <input type="submit" value="Submit" className="btn btn-danger" />
            </form>
        </div>
    );
};

export default NewUser;