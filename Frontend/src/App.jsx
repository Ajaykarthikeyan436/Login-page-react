import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./index.css"

function App()
{
  const [user,setuser] = useState("")
  const [pass,setpass] = useState("")

  const navigate = useNavigate()

  function handleuser(evt)
  {
    setuser(evt.target.value)
  }

  function handlepass(evt)
  {
    setpass(evt.target.value)
  }

  const check = () => {
    var logindetails = axios.post("https://backend-ajaykarthikeyan436-ajays-projects-8ce49744.vercel.app//login",
    {"username":user,"password":pass})

    logindetails.then(function(data){
      console.log(data)

      if(data.data == true)
      {
        navigate("/success")
      }
      else
      {
        navigate("/fail")
      }
    })
  }

  return(
    <div className="wrapper">
      <h1>Login</h1>
      <input onChange={handleuser} type="text" placeholder="Enter Your Name" name="username"></input>
      <input onChange={handlepass} type="password" placeholder="Enter Your Password" name="password"></input>
      <button type="submit" onClick={check}>Submit</button>
    </div>
  )
}

export default App