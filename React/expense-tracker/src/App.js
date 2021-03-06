import React from 'react'
import { Grid } from '@material-ui/core'
import Details from './component/details/Details'
import useStyles from './styles.js'
import Main from './component/main/Main'
import { PushToTalkButton, PushToTalkButtonContainer,ErrorPanel } from '@speechly/react-ui'

const App=()=> {

    const classes = useStyles();

  return (
    <div>
        <Grid className={classes.grid} container spacing={0} alignItems='center' justifyContent='center' style={{height:'100vh', width:'100vw'}}>
            <Grid item xs={12} sm={3} className={classes.mobile}>
                <Details title='Income'/>
            </Grid>

            <Grid item xs={12} sm={4}  className={classes.main}>
                <Main />
            </Grid>
            <Grid item xs={12} sm={3}  className={classes.desktop}>
                <Details title='Income'/>
            </Grid>

            <Grid item xs={12} sm={3}  className={classes.last}>
                <Details title='Expense' />
            </Grid>
        </Grid>
        <PushToTalkButtonContainer>
            <PushToTalkButton />
            <ErrorPanel />
        </PushToTalkButtonContainer>

    </div>
  )
}

export default App