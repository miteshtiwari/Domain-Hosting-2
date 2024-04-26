const express = require("express");
const app = express();

const PORT = process.env.PORT || 6000;

//database connect

//middlewares
app.use(express.json());

app.get("/", (req, res) => {
	return res.json({
		success:true,
		message:'Your server is up and running sparsh bro....'
	});
});

app.listen(PORT, () => {
	console.log(`App is running at ${PORT}`)
})

