/**
 * Created by agliga on 3/28/16.
 */

import express from 'express';
let router = express.Router();

router.route('/user')
  .all((req, res, next) => {
    next();
  })
  .get((req, res) => {
    res.json({
      userid: 1,
      username: 'Hello'
    });
  });

export default router;
