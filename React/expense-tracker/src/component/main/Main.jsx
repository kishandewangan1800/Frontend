import React,{useContext} from 'react'
import {Card, CardHeader, CardContent, Typography, Grid, Divider} from '@material-ui/core'
import useStyle from './styles'
import Form from './form/Form';
import List from './list/List';
import { ExpenseTrackerContext } from '../../context/context';

const Main = () => {
  let flag = Math.round(Math.random());
  const classes = useStyle();
  const {balance} = useContext(ExpenseTrackerContext);
  return (
    <Card className={classes.root}>
        <CardHeader title='Expense Tracker' subtitle='Powered by Speechly' />
        <CardContent>
          <Typography align='center' variant='h5'> Total Balance ${balance}</Typography> 
          <Typography variant='subtitle1' style={{ lineHeight:'1.5em', margin:'20px 0'}}>
            Try Saying : 
            Add {flag ? 'Income ' : 'Expense '}
            for ${flag ? '100 ' : '50 '}
            in Category {flag ? 'Salary ' : 'House '}
            for {flag ? 'Monday' : 'Saturday'}...
          </Typography>
          <Divider />
          <Form />
          </CardContent>
          <CardContent className={classes.cardContent}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <List />

              </Grid>

            </Grid>

          </CardContent>

    </Card>
  )
}

export default Main