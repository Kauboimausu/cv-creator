import "../styles/form.css"

export default function GeneralInfo({ personalInfo, onSubmit }) {
	const handleSubmit = (e) => {
		e.preventDefault()
		const formData = new FormData(e.target)
		onSubmit(formData)
	}

	return (
		<form className="general info-form" onSubmit={(e) => handleSubmit(e)}>
			<div className="input-wrap">
				<label htmlFor="name">Name:</label>
				<input
					type="text"
					name="name"
					id="name"
					defaultValue={personalInfo.name}
					required
				/>
			</div>

			<div className="input-wrap">
				<label htmlFor="email">Email:</label>
				<input
					type="email"
					name="email"
					id="email"
					defaultValue={personalInfo.email}
					required
				/>
			</div>

			<div className="input-wrap">
				<label htmlFor="phone-number">Phone Number:</label>
				<input
					type="tel"
					name="phone-number"
					id="phone-number"
					defaultValue={personalInfo.phone}
					required
				/>
			</div>

			<button type="submit">Submit</button>
		</form>
	)
}
