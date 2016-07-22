/**
 * Created by ericpeters on 1/1/16.
 */
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var path = require('path');

mongoose.connect('mongodb://localhost:27017/petra_french_bulldogs');


module.exports = router;