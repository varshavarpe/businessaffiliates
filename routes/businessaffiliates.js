var express = require("express");
var Businessaffiliates = require("../models/Businessaffiliates");
const router = express.Router();

router.post("/save", async (req, res) => {
  let body = req.body;
  let businessaffiliates = new Businessaffiliates.Businessaffiliates();
  businessaffiliates.id = body.data.id;
  businessaffiliates.businessid = body.data.businessid;
  businessaffiliates.userid = body.data.userid;
  businessaffiliates.requestedon = body.data.requestedon;
  businessaffiliates.approvedon = body.data.approvedon;
  businessaffiliates.status = body.data.status;

  businessaffiliates.save().then(
    (result) => {
      let data = {
        data: {
          status: "success",
          data: result,
        },
      };
      res.end(JSON.stringify(data));
    },
    (err) => {
      let data = {
        data: {
          status: "fail",
        },
      };
      res.end(JSON.stringify(data));
    }
  );
});

router.post("/list", async (req, res) => {
  let body = req.body;
  let businessaffiliates = new Businessaffiliates.Businessaffiliates();
  businessaffiliates.businessid = body.data.businessid;

  businessaffiliates.list().then(
    (result) => {
      let data = {
        data: {
          status: "success",
          data: result,
        },
      };
      res.end(JSON.stringify(data));
    },
    (err) => {
      let data = {
        data: {
          status: "fail",
        },
      };
      res.end(JSON.stringify(data));
    }
  );
});

router.post("/delete", async (req, res) => {
  let body = req.body;
  let businessaffiliates = new Businessaffiliates.Businessaffiliates();
  businessaffiliates.id = body.data.id;

  businessaffiliates.delete().then(
    (result) => {
      let data = {
        data: {
          status: "success",
          data: result,
        },
      };
      res.end(JSON.stringify(data));
    },
    (err) => {
      let data = {
        data: {
          status: "fail",
        },
      };
      res.end(JSON.stringify(data));
    }
  );
});

router.post("/get", async (req, res) => {
  let body = req.body;
  let businessaffiliates = new Businessaffiliates.Businessaffiliates();
  businessaffiliates.id = body.data.id;
  businessaffiliates.get().then(
    (result) => {
      let data = {
        data: {
          status: "success",
          data: result,
        },
      };
      res.end(JSON.stringify(data));
    },
    (err) => {
      let data = {
        data: {
          status: "fail",
        },
      };
      res.end(JSON.stringify(data));
    }
  );
});

module.exports = router;
