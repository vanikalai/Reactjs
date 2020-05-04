import React from 'react';



function Employee(){

     return(
        <div>
        <h5>Employee Details</h5>
        <table border = '1' >
        <tr style= {{width : 200 , height : 40}}>
    <th>Id</th>
    <th>Name</th>
    <th>Designation</th>
  </tr>
  <tr style= {{width : 200, height : 30}}>
    <td>1214</td>
    <td>Kalaivani</td>
    <td>React Developer</td>
  </tr>
        </table>
        </div>
    
   
);
}
export default Employee;