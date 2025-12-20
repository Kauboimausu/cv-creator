import { useState } from 'react'
import './styles/reset.css'
import CV from './components/CV'
import GeneralInfo from './components/GeneralInfo'
import { janeDoePersonalInfo, janeDoeEducationInfo, janeDoePracticalInfo } from './defaultInfo' 

function App() {

  const [personalInfo, setPersonalInfo] = useState(janeDoePersonalInfo)
  const [educationInfo, setEducationInfo] = useState(janeDoeEducationInfo)
  const [practicalInfo, setPracticalInfo] = useState(janeDoePracticalInfo)

  function handlePersonalInfoChange(formData){
    setPersonalInfo({
      name: formData[0].value,
      email: formData[1].value,
      phone: formData[2].value
    })
  }



  return (
    <>

      <GeneralInfo onSubmit={handlePersonalInfoChange}/>

      <CV
        personalInfo={personalInfo}
        educationInfo={educationInfo}
        practicalInfo={practicalInfo}
      ></CV>
    </>
  )
}

export default App
