import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {


  // const [firstName,setFirstName]=useState("");
  // const [lastName,setLastName]=useState("");

  // console.log(firstName);
  // console.log(lastName);
  // function firstNameChangeHandler(event)
      // {
      //   //  console.log(event.target.value);
      //   // console.log(event.target); 
      //   setFirstName(event.target.value)
        
      // }

  //     function lastNameChangeHandler(event)
  //     {
  //     //  console.log(event.target.value)
  //     setLastName(event.target.value);
  //     }

  // HANDLING STATES USING THE STATE OBJECT
  // return (
  //   <div className="App">
  
  //     <form>
  //       {/* better control- controlled components */}
  //       <input
  //           type="text"
  //           placeholder='enter first name'
  //           value={firstName}
  //           onChange={firstNameChangeHandler}
  //         />

  //   <br></br>
  //   <br></br>

  //     <input
  //       type="text"
  //       placeholder="Enter your last Name"
  //       onChange={lastNameChangeHandler}
  //       />

  //     </form>

  //   </div>
  // );



const [formData, setFormData] = useState({
  firstName: "",
  lastName: ""
});

function changeHandler(event) {
  setFormData((prevFormData) => {
    return {
      ...prevFormData,
      [event.target.name]: event.target.value
    };
  });
}

return (
  <div className="App">
    <form>
      <input
        type="text"
        placeholder="Enter first name"
        value={formData.firstName}
        onChange={changeHandler}
        name="firstName"
      />

      <br /><br />

      <input
        type="text"
        placeholder="Enter last name"
        value={formData.lastName}
        onChange={changeHandler}
        name="lastName"
      />
    </form>
  </div>
);




}

export default App;
