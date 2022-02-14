const express = require("express");
const app = express();
const port = 5001;

app.use("/static", express.static("public"));

app.use("/craig", express.static("public/pages/three.html"));

app.use("/barry", express.static("public/pages/two.html"));

app.listen(port, () => {
    console.log(`Listening on port ${port}`);

})
