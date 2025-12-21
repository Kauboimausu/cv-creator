import { parseDate } from "./DateParser"

export default function CV({ personalInfo, educationInfo, practicalInfo }) {
	const educationalTrajectory = educationInfo.map((eduItem) => (
		<li key={"cv-educationItem" + eduItem.id} className="education-item">
			<h2 className="study-name">{eduItem.titleOfStudy}</h2>
			<h3 className="school-name">{eduItem.schoolName}</h3>
			<span className="duration-of-study">
				From {parseDate(eduItem.startDate)} to{" "}
				{parseDate(eduItem.endDate)}
			</span>
		</li>
	))

	const practicalTrajectory = practicalInfo.map((practicalItem) => (
		<li
			key={"cv-practicalItem" + practicalItem.id}
			className="practical-item"
		>
			<h2 className="company-name">{practicalItem.companyName}</h2>
			<h3 className="practical-position">
				{practicalItem.positionTitle}
			</h3>
			<span className="practical-responsibilities">
				Responsibilities:
			</span>
			<p className="responsibilities">{practicalItem.responsibilities}</p>
			<span className="duration-of-work">
				From {parseDate(practicalItem.startDate)} to{" "}
				{parseDate(practicalItem.endDate)}
			</span>
		</li>
	))

	return (
		<div className="curriculum">
			<div className="curriculum-info" id="personal-info">
				<h1 className="name">{personalInfo.name}</h1>
				<h3 className="contact-info">{personalInfo.email}</h3>
				<h3 className="contact-info">{personalInfo.phone}</h3>
			</div>

			<div className="curriculum-info" id="education-info">
				<ul className="education-history">{educationalTrajectory}</ul>
			</div>

			<div className="curriculum-info" id="practical-info">
				<ul className="practical-history">{practicalTrajectory}</ul>
			</div>
		</div>
	)
}
