const ModelURL = require("../Models/ModelURL");
const router = require("express").Router();

// Shorten
router.post("/create", async (req, res) => {
  const { url } = req.body;
  try {
    if (!url) {
      throw "URL is needed.";
    }
    const URL = new ModelURL(url);
    URL.save();
    res.status(200).json(URL);
  } catch (e) {
    console.error(e);
    res.status(400).json(e);
  }
});

// Redirect
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    if (!id) {
      throw "ID is needed.";
    }
    const URL = ModelURL.findOne(id);
    if (!URL) {
      throw "No URL Found.";
    }
    res.redirect(URL.url);
  } catch (e) {
    console.error(e);
    res.status(400).json(e);
  }
});

module.exports = router;
