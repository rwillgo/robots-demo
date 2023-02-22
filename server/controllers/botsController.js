var express = require("express");
var config = require("dotenv").config();
var Bot = require("../models/botModel");
var httpStatus = require("../config/httpStatus");

/* List bots */
const list = (req, res, next) => {
  try {
    Bot.find((error, bots) => {
      if (error) {
        return res
          .status(httpStatus.INTERNAL_SERVER_ERROR)
          .json({ error: error.message });
      }
      res.status(httpStatus.OK).json({ bots: [...bots].reverse() });
    });
  } catch (error) {
    res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ error: error.message });
  }
};

/* Create bot */
const create = (req, res, next) => {
  try {
    const { name, purpose } = req.body;

    const aBot = Bot();
    aBot.name = name;
    aBot.purpose = purpose;

    aBot.save((error, bot) => {
      if (error) {
        res
          .status(httpStatus.INTERNAL_SERVER_ERROR)
          .json({ error: error.message });
      } else {
        res.status(httpStatus.OK).json({ bot });
      }
    });
  } catch (error) {
    res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ error: error.message });
  }
};

/** Fetch bot */
const fetch = (req, res, next) => {
  try {
    const { botId } = req.params;
    Bot.findOne({ _id: botId }, (error, bot) => {
      if (error) {
        res
          .status(httpStatus.INTERNAL_SERVER_ERROR)
          .json({ error: error.message });
      } else {
        res.status(httpStatus.OK).json({ bot });
      }
    });
  } catch (error) {
    res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ error: error.message });
  }
};

/** Update bot */
const update = (req, res, next) => {
  try {
    const { botId } = req.params;
    const { name, purpose } = req.body;

    Bot.findOneAndUpdate(
      { _id: botId },
      { name, purpose },
      null,
      (error, bot) => {
        if (error) {
          res
            .status(httpStatus.INTERNAL_SERVER_ERROR)
            .json({ error: error.message });
        } else {
          res.status(httpStatus.OK).json({ bot });
        }
      }
    );
  } catch (error) {
    res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ error: error.message });
  }
};

/** Delete bot */
const remove = (req, res, next) => {
  try {
    const { botId } = req.params;
    Bot.remove({ _id: botId }, (error, result) => {
      if (error) {
        res
          .status(httpStatus.INTERNAL_SERVER_ERROR)
          .json({ error: error.message });
      } else {
        res.sendStatus(httpStatus.OK);
      }
    });
  } catch (error) {
    res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ error: error.message });
  }
};

module.exports = { list, create, fetch, update, remove };
