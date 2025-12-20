export default function GeneralInfo({ onSubmit }) {
	const handleSubmit = (e) => {
		e.preventDefault();
		onSubmit(e.currentTarget);
	};

	return (
		<form className="general-info-form" onSubmit={(e) => handleSubmit(e)}>
			<label htmlFor="name">Name: </label>
			<input
				type="text"
				name="name"
				id="name"
				placeholder="Jane Doe"
				required
			/>

			<label htmlFor="email">Email: </label>
			<input
				type="email"
				name="email"
				id="email"
				placeholder="janedoe@gmail.com"
				required
			/>

			<label htmlFor="phone-number">Phone Number: </label>
			<input
				type="tel"
				name="phone-number"
				id="phone-number"
				placeholder="1234567890"
				required
			/>

			<button type="submit">Submit</button>
		</form>
	);
}
