const express = require("express");
const path = require("path");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const { error } = require("console");
const app = express();
const port = 4000;
dotenv.config();

app.use(cors());
app.use(express.json());

/**몽구스 연결 */
mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
        console.log("mongoDB 연결확인");
    })
    .catch((err) => {
        console.log(err);
    });

/**서버연결 완료 */
app.get("/", (req, res, next) => {
    res.send("안녕");
    setTimeout(() => {
        next(new Error("에러 발생"));
    }, 2000);
});

/**클라이언트에서 데이터 보낼때 */
app.post("/", (req, res) => {
    console.log(req.body);
    res.json(req.body);
});

/**에러 처리기 */
app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.send(err.message || "서버 에러");
});

/**이미지처리 코드 */
app.use(express.static(path.join(__dirname, "../uploads")));

/**서버연결 */
app.listen(port, () => {
    console.log(`${port}번에서 실행이 되었습니다.`);
});
