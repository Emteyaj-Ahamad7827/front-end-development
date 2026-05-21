import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
dotenv.config();

import { userModel } from '../model/User.model.js';

export const signup = async (req, res) => {
  try {
    if (req.body) {
      const find_User_In_DB = await userModel.findOne(req.body);
      if (find_User_In_DB) {
        res.send('user already exist in DB please login');
      } else {
        console.log(`🚀 ~ process.env.saltRounds:`, process.env.saltRounds);
        bcrypt.genSalt(+process.env.saltRounds, async function (err, salt) {
          if (err) {
            console.log(
              `this is error which i got in generate_salt method ${err}`,
            );
          }
          bcrypt.hash(req.body.password, salt, async function (err, hash) {
            console.log(`🚀 ~ hash:`, hash);
            // Store hash in your password DB.
            if (err) {
              console.log(`this is error which i got in has method ${err}`);
            }
            req.body.password = hash;
            const userCreted = await userModel.create(req.body);
            res.send(userCreted);
          });
        });
      }
    } else {
      res.send('please enter somthing to save in DB...');
    }
  } catch (error) {
    console.log(`🚀 ~ error:`, error);
  }
};

export const login = () => {};