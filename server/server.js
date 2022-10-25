import app from "./app.js";
import { connectDB } from "./config/database.js";

connectDB()

app.get('/', (req, res, next) => {
    res.send("Working")
})

app.listen(process.env.PORT, () => console.log('Server started running on port ' + process.env.PORT))
