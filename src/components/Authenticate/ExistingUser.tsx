import React from 'react';

const ExistingUser = () => {
    const formSubmit = (event: any) => {
        event.preventDefault();
        alert("under development");
    }
    return (
        <div className="App-header">
            <h1>Welcome</h1>
            <h1>Back</h1>
            <p>Fill this from and Lets Chat.</p>
            <form onSubmit={formSubmit}>
                <input type="text" placeholder="Username / ID" />
                <br />
                <input type="password" placeholder="Password" />
                <br />
                <input type="submit" value="Let's Chat" className="btn btn-danger" />
            </form>
        </div>
    );
};

export default ExistingUser;