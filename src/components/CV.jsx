export default function CV({ personalInfo, educationInfo, practicalInfo }) {

    const educationalTrajectory = educationInfo.map(eduItem => 
        <li key={eduItem.schoolName + eduItem.titleOfStudy} className="education-item">
            <h2 className="study-name">{eduItem.titleOfStudy}</h2>
            <h3 className="school-name">{eduItem.schoolName}</h3>
            <span className="duration-of-study">From {eduItem.startDate} to {eduItem.endDate}</span>
        </li>
    )

    const practicalTrajectory = practicalInfo.map(practicalItem =>
        <li key={practicalItem.companyName + practicalItem.positionTitle} className="practical-item">
            <h2 className="company-name">{practicalItem.companyName}</h2>
            <h3 className="practical-position">{practicalItem.positionTitle}</h3>
            <span className="practical-responsibilities">Responsibilities:</span>
            <ul className="responsibilities-list">
                {practicalItem.responsibilities.map(responsibility => 
                <li key={practicalItem.companyName + practicalItem.positionTitle + responsibility} className="responsibility">
                    {responsibility}
                </li>
                )}
            </ul>
            <span className="duration-of-work">From {practicalItem.startDate} to {practicalItem.endDate}</span>
        </li>
    )

    return (
        <div className="curriculum">
            <div className="curriculum-info" id="personal-info">
                <h1 className="name">{personalInfo.name}</h1>
                <h3 className="contact-info">{personalInfo.email}</h3>
                <h3 className="contact-info">{personalInfo.phoneNumber}</h3>
            </div>

            <div className="curriculum-info" id="education-info">
                <ul className="education-history">
                    {educationalTrajectory}
                </ul>
            </div>

            <div className="curriculum-info" id="practical-info">
                <ul className="practical-history">
                    {practicalTrajectory}
                </ul>
            </div>
        </div>
    )
}