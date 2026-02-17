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
  lastName: "",
  comments:"",
  checkk:false,
  gender:"",
  country:""
});

// console.log(formData.firstName);
console.log(formData);

function changeHandler(event) {
  // Destructuring for handling the checkbox
  const {name,value,checked,type}=event.target
  setFormData((prevFormData) => {
    return {
      ...prevFormData,
      [name]: type==='checkbox'?checked:value
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
          value={formData.lastName}
        onChange={changeHandler}
        name="lastName"
      />

      <br/>
      <br/>

      <textarea
      placeholder='enter your comments'
      onChange={changeHandler}
      name="comments"
      value={formData.comments }
      />

      <br/>
      <br/>
      
      <input
      type="checkbox"
      onChange={changeHandler}
      name="checkk"
      id="isVisible"
      checked= {formData.checkk}
      >
      </input>
    <label htmlFor='checkk'>AM I VISIBLE?</label>

    <br/>
    <br/>

   <fieldset>
          <legend>Select Gender</legend>

          {/* Radio 1 */}
          <input
            type="radio"
            id="male"
            name="gender"
            value="male"
            checked={formData.gender === "male"}
            onChange={changeHandler}
            required
          />
          <label htmlFor="male">Male</label>

          <br />

          {/* Radio 2 */}
          <input
            type="radio"
            id="female"
            name="gender"
            value="female"
            checked={formData.gender === "female"}
            onChange={changeHandler}
          />
          <label htmlFor="female">Female</label>

        </fieldset>



        <br />

        {/* DROPDOWN */}
        <label htmlFor="country">Select Country:</label>
        <br />

        <select
          id="country"
          name="country"
          value={formData.country}
          onChange={changeHandler}
          required
        >
          <option value="">--Choose Country--</option>
          <option value="india">India</option>
          <option value="usa">USA</option>
          <option value="uk">United Kingdom</option>
          <option value="canada">Canada</option>
        </select>






    </form>
  </div>
);




}

export default App;
