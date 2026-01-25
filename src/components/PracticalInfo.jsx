import "../styles/form.css"

export default function PracticalInfo({
	practicalEntries,
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
			{practicalEntries.map((entry) => (
				<form
					className="practical info-form"
					key={entry.id}
					onSubmit={(e) => handleSubmit(e, entry.id)}
				>
					<div className="input-wrap">
						<label htmlFor={entry.id + "company-name"}>
							Company Name:
						</label>
						<input
							type="text"
							name="company-name"
							id={entry.id + "company-name"}
							defaultValue={entry.companyName}
							required
						/>
					</div>

					<div className="input-wrap">
						<label htmlFor={entry.id + "position-title"}>
							Position:
						</label>
						<input
							type="text"
							name="position-title"
							id={entry.id + "position-title"}
							defaultValue={entry.positionTitle}
							required
						/>
					</div>

					<div className="input-wrap">
						<label htmlFor={entry.id + "responsibilities"}>
							Position Responsibilities:
						</label>
						<textarea
						name="responsibilities"
						id={entry.id + "responsibilities"}
						defaultValue={entry.responsibilities}
						required
						></textarea>
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
					>
						Delete Entry
					</button>
				</form>
			))}

			<button type="button" className="add" onClick={onAdd}>
				Add Practical Entry
			</button>
		</div>
	)
}
