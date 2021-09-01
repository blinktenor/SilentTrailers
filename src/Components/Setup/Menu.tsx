import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import styled from 'styled-components';
import { PlayerControls } from './PlayerControls/PlayerControls';
import { GameControls } from './GameControls/GameControls';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  column: {
    flexBasis: '33.33%',
  }
}));

export const Menu = () => {
  const classes = useStyles();

  return (
    <MenuContainer>
      <PlayerControlAccordion>
        <AccordionSummary
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Game Setup</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div className={classes.column}>
            <PlayerControls />
          </div>
          <div className={classes.column}>
            <GameControls />
          </div>
        </AccordionDetails>
      </PlayerControlAccordion>
    </MenuContainer>
  );
}

const MenuContainer = styled.div`
  width: 100%;
  display: inline-flex;
  background-color: #000000;
`;

const PlayerControlAccordion = styled(Accordion)`
  width: 100%;
`;