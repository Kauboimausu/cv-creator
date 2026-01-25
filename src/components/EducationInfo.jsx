import "../styles/form.css"

export default function EducationInfo({
	educationEntries,
	onSubmit,
	onDelete,
	onAdd,
}) {
	const handleSubmit = (e, id) => {
		e.preventDefault()
		const formData = new FormData(e.target)
		onSubmit(id, formData)
	}

	return (
		<div className="forms-wrap">
			{educationEntries.map((entry) => (
				<form
					className="education info-form"
					key={entry.id}
					onSubmit={(e) => handleSubmit(e, entry.id)}
				>
					<div className="input-wrap">
						<label htmlFor={entry.id + "school-name"}>
							School Name:
						</label>
						<input
							type="text"
							name="school-name"
							id={entry.id + "school-name"}
							defaultValue={entry.schoolName}
							required
						/>
					</div>

					<div className="input-wrap">
						<label htmlFor={entry.id + "study-title"}>
							Title of Study:
						</label>
						<input
							type="text"
							name="study-title"
							id={entry.id + "study-title"}
							defaultValue={entry.titleOfStudy}
							required
						/>
					</div>

					<div className="input-wrap">
						<label htmlFor={entry.id + "start-date"}>Start Date:</label>
						<input
							type="month"
							name="start-date"
							id={entry.id + "start-date"}
							defaultValue={entry.startDate}
							required
						/>
					</div>

					<div className="input-wrap">
						<label htmlFor={entry.id + "end-date"}>End Date:</label>
						<input
							type="month"
							name="end-date"
							id={entry.id + "end-date"}
							defaultValue={entry.endDate}
							required
						/>
					</div>

					<button type="submit" className="submit">
						Submit
					</button>

					<button
						type="button"
						onClick={() => {
							onDelete(entry.id)
						}}
						className="delete"
					>
						Delete Entry
					</button>
				</form>
			))}

			<button onClick={onAdd} className="add" type="button">
				Add Education Entry
			</button>
		</div>
	)
}
