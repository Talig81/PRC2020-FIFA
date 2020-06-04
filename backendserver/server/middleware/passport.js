const passport = require('passport');
const passportJWT = require("passport-jwt");
const passportFB = require("passport-facebook")
const Users = require('../controllers/users')
const ExtractJWT = passportJWT.ExtractJwt;
const bcrypt = require('bcryptjs')
const fs = require('fs')
const publicKey = fs.readFileSync('./keys/publickey.key','utf-8')

const LocalStrategy = require('passport-local').Strategy;
const JWTStrategy = passportJWT.Strategy;