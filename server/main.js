/**
 *
 * Created by agliga on 3/28/16.
 */

import UserRoutes from './routes/user';
import express from 'express';

const app = express();

app.use(UserRoutes);
app.listen(9010, () => {
  console.log('Example app listening on port 9010!');
});
