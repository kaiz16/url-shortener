const loadEnv = require("./loadEnv");
loadEnv();
const Express = require("express");
const CORS = require("cors");
const ControllerUrl = require("./Controllers/ControllerUrl");
const App = Express();
App.use(Express.json());
App.use(CORS());
const PORT = process.env.PORT || 5000;
const start = async () => {
  App.get("/", (req, res) => {
    res.json({
      status: true,
      message: `🚀 Listening on port ${PORT}`,
    });
  });

  App.use("/", ControllerUrl);
  App.listen(PORT, () => {
    console.log(`🚀 Listening on port ${PORT}`);
  });
};

start();
