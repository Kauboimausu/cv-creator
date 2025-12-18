import { useState } from 'react'
import './styles/reset.css'
import CV from './components/CV'

function App() {

  const janeDoePersonalInfo = {
    name: "Jane Doe",
    email: "janedoe@gmail.com",
    phone: "123-456-7890"
  }

  const janeDoeEducationInfo = [
    {
      schoolName: "University of Springfield",
      titleOfStudy: "B.S. Computer Science",
      startDate: "January 2016",
      endDate: "December 2020"
    }
  ]

  const janeDoePracticalInfo = [
    {
      companyName: "Meta",
      positionTitle: "Jr. Software Engineer",
      responsibilities: ["Debugging", "Software Development"],
      startDate: "August 2018",
      endDate: "February 2019"
    }
  ]
  

  const [personalInfo, setPersonalInfo] = useState(janeDoePersonalInfo)
  const [educationInfo, setEducationInfo] = useState(janeDoeEducationInfo)
  const [practicalInfo, setPracticalInfo] = useState(janeDoePracticalInfo)





  return (
    <>
      Hola Mundo
      <CV
        personalInfo={personalInfo}
        educationInfo={educationInfo}
        practicalInfo={practicalInfo}
      ></CV>
    </>
  )
}

export default App
