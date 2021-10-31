import React, { useEffect, useRef } from 'react';
import { Grid } from '@material-ui/core';
import { NavLink } from "react-router-dom";
import { SpeechState, useSpeechContext } from "@speechly/react-client";
import { PushToTalkButton, PushToTalkButtonContainer } from '@speechly/react-ui';

import { Details, Main } from './components';
import useStyles from './styles';

const App = () => {
  const classes = useStyles();
  const { speechState } = useSpeechContext();
  const main = useRef(null)

  const executeScroll = () => main.current.scrollIntoView()    

  useEffect(() => {
    if (speechState === SpeechState.Recording) {
      executeScroll();
    }
  }, [speechState]);

  return (
    <div>
        <div style={{textAlign:"center", padding:"10px", fontWeight:'700', position:"relative", top:"6px"}}><i className="fa fa-home fa-2x" style={{color:"#c9acc8"}}></i>&nbsp;<NavLink className="navbar-brand" to="/">Home</NavLink></div>
      <Grid className={classes.grid} container spacing={0} alignItems="center" justify="center" style={{ height: '100vh'}}>
        <Grid item xs={12} sm={4} className={classes.mobile}>
          <Details title="Income" />
        </Grid>
        <Grid ref={main} item xs={12} sm={3} className={classes.main}>
          <Main />
        </Grid>
        <Grid item xs={12} sm={4} className={classes.desktop}>
          <Details title="Income" />
        </Grid>
        <Grid item xs={12} sm={4} className={classes.last}>
          <Details title="Expense" />
        </Grid>
        <PushToTalkButtonContainer >
          <PushToTalkButton />
        </PushToTalkButtonContainer>
      </Grid>
    </div>
  );
};

export default App;
