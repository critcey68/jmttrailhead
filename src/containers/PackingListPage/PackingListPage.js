import React from "react";
import { Link } from "react-router-dom";

import Container from "@material-ui/core/Container";
import IconButton from '@material-ui/core/IconButton';
import PrintIcon from '@material-ui/icons/Print';

import PackingListComponent from "./components/PackingListComponent";
import {createStyles, makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(() =>
  createStyles({
    taskBar: {
      display: 'flex',
      'justify-content': 'flex-end',
    },
  }),
);

export default () => {
  const classes = useStyles();

  const print = () => {
    window.print();
  }
  return (
    <Container className="packing-list-page">
      <header>
        <Link to="/">Home</Link>
      </header>
      <main>
        <article className={classes.taskBar}>
          <IconButton
            color="primary"
            className='print-button'
            onClick={() => print()}
            aria-label="print">
            <PrintIcon />
          </IconButton>
        </article>
        <article>
          <PackingListComponent />
        </article>
      </main>
    </Container>
  );
}
