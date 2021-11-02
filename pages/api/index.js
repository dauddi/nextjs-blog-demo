export default function handler(req, res) {
	res
		.status(200)
		.json([
			{ text: "welcome to our api" },
			{ endpoints: ["posts", "authors"] },
		]);
}
