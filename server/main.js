/**
 *
 * Created by agliga on 3/28/16.
 */

"use strict";
import UserRoutes from './routes/user';
import express from 'express';

let app = express();

app.use(UserRoutes);
app.listen(9010, function () {
    console.log('Example app listening on port 9010!');
});
