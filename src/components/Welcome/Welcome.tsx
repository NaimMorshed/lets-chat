import React from 'react';
import { useHistory } from 'react-router-dom';

const Welcome = () => {

    const history = useHistory();

    return (
        <div className="App-header">
            <h1>Friendship</h1>
            <h1>Made</h1>
            <h1>Easier</h1>
            <p>With LetsChat, it becomes easier to connect with friends and</p>
            <p>share thoughts all across platforms. No matter where you are,</p>
            <p>you are always connected.</p>
            <div>
                <button
                    onClick={() => history.push("/existingUser")}
                    className="m-2 btn btn-danger">
                    Already a user
                </button>
                <button
                    onClick={() => history.push("/newUser")}
                    className="m-2 btn btn-danger">
                    I'm new here
                </button>
            </div>
        </div>
    );
};

export default Welcome;