export default function GeneralInfo({ personalInfo, onSubmit }) {
	const handleSubmit = (e) => {
		e.preventDefault()
		const formData = new FormData(e.target)
		onSubmit(formData)
	}

	return (
		<form className="general-info-form" onSubmit={(e) => handleSubmit(e)}>
			<label htmlFor="name">Name:</label>
			<input
				type="text"
				name="name"
				id="name"
				defaultValue={personalInfo.name}
				required
			/>

			<label htmlFor="email">Email:</label>
			<input
				type="email"
				name="email"
				id="email"
				defaultValue={personalInfo.email}
				required
			/>

			<label htmlFor="phone-number">Phone Number:</label>
			<input
				type="tel"
				name="phone-number"
				id="phone-number"
				defaultValue={personalInfo.phone}
				required
			/>

			<button type="submit">Submit</button>
		</form>
	)
}
