import React from 'react'

function Registration() {
    return (
        <div id="register_div">
            <h2>REGISTER</h2>
            <form>
                <label htmlFor="fullname">Name:</label>
                <input type="text" id="fullname"></input>
                <br />
                <label htmlFor="email">E-mail:</label>
                <input type="text" id="email"></input>
                <br />
                <label htmlFor="address">Post Address:</label>
                <input type="text" id="address"></input>
                <br />
                <input id="register_submit_button" type="submit" value="Send"></input>
            </form>
        </div>
    )
}

export default Registration
