import { useState } from "react"
import "./styles/reset.css"
import CV from "./components/CV"
import GeneralInfo from "./components/GeneralInfo"
import EducationInfo from "./components/EducationInfo"
import PracticalInfo from "./components/PracticalInfo"
import Card from "./components/Card"

import {
	janeDoePersonalInfo,
	janeDoeEducationInfo,
	janeDoePracticalInfo,
} from "./assets/defaultInfo"

function App() {
	const [personalInfo, setPersonalInfo] = useState(janeDoePersonalInfo)
	const [educationInfo, setEducationInfo] = useState(janeDoeEducationInfo)
	// const [nextEducationID, setNextEducationID] = useState(educationInfo.length)
	let nextEducationID = educationInfo.length
	const [practicalInfo, setPracticalInfo] = useState(janeDoePracticalInfo)
	let nextPracticalID = practicalInfo.length
	// const [nextPracticalID, setNextPracticalID] = useState(practicalInfo.length)

	function handlePersonalInfoEdit(formData) {
		setPersonalInfo({
			name: formData.get("name"),
			email: formData.get("email"),
			phone: formData.get("phone-number"),
		})
	}

	function handleEducationEntryEdit(id, formData) {
		setEducationInfo(
			educationInfo.map((educationEntry) => {
				if (educationEntry.id === id) {
					return {
						id: educationEntry.id,
						schoolName: formData.get("school-name"),
						titleOfStudy: formData.get("study-title"),
						startDate: formData.get("start-date"),
						endDate: formData.get("end-date"),
					}
				} else {
					return educationEntry
				}
			})
		)
	}

	function handlePracticalEntryEdit(id, formData) {
		setPracticalInfo(
			practicalInfo.map((practicalEntry) => {
				if (practicalEntry.id === id) {
					return {
						id: practicalEntry.id,
						companyName: formData.get("company-name"),
						positionTitle: formData.get("position-title"),
						responsibilities: formData.get("responsibilities"),
						startDate: formData.get("start-date"),
						endDate: formData.get("end-date"),
					}
				} else {
					return practicalEntry
				}
			})
		)
	}

	function handleDeleteEducationEntry(deleteID) {
		setEducationInfo(
			educationInfo.filter(
				(educationItem) => educationItem.id != deleteID
			)
		)
	}

	function handleDeletePracticalEntry(deleteID) {
		setPracticalInfo(
			practicalInfo.filter(
				(practicalItem) => practicalItem.id != deleteID
			)
		)
	}

	function handleAddEducationEntry() {
		setEducationInfo([
			...educationInfo,
			{
				id: nextEducationID,
				schoolName: "",
				titleOfStudy: "",
				startDate: "",
				endDate: "",
			},
		])
		nextEducationID++
	}

	function handleAddPracticalEntry() {
		setPracticalInfo([
			...practicalInfo,
			{
				id: nextPracticalID,
				companyName: "",
				positionTitle: "",
				responsibilities: "",
				startDate: "",
				endDate: "",
			},
		])
		nextPracticalID++
	}

	return (
		<>
			<div className="info-input">
				<Card>
					<GeneralInfo
					personalInfo={personalInfo}
					onSubmit={handlePersonalInfoEdit}
					/>
				</Card>
				
				<Card>
					<EducationInfo
						educationEntries={educationInfo}
						onSubmit={handleEducationEntryEdit}
						onDelete={handleDeleteEducationEntry}
						onAdd={handleAddEducationEntry}
					/>
				</Card>
				<Card>
					<PracticalInfo
						practicalEntries={practicalInfo}
						onSubmit={handlePracticalEntryEdit}
						onDelete={handleDeletePracticalEntry}
						onAdd={handleAddPracticalEntry}
					/>
				</Card>
			</div>

			<CV
				personalInfo={personalInfo}
				educationInfo={educationInfo}
				practicalInfo={practicalInfo}
			></CV>
		</>
	)
}

export default App
