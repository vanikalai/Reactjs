import React from 'react';

function Login(){
 
    return(
        <div>
            <form>
        <h5>Login </h5>
        <label for="fname">User name: </label>
        <input style= {{marginLeft:10}} type="text" id="fname" name="fname"/>
        <label style= {{marginLeft:10}} for="pswd">Password: </label>
        <input style= {{marginLeft:10}} type="text" id="pswd" name="pswd"/>
        <button  style = {{marginLeft:20}}type="button">Submit</button>
        </form>
        </div>
        
    );
}
export default Login;