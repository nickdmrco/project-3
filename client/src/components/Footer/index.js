import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid'

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary">
      {'Copyright © '}
      <Link color="inherit" href="/privacy">
        Sayaka Japanese Restaurant
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  // root: {
  //   display: 'flex',
  //   flexDirection: 'column',
  //   minHeight: '100vh',
  // },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
  },
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: 'auto',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
  },
}));

export default function StickyFooter() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <footer className={classes.footer}>
        <Container maxWidth="sm">
          <Grid container spacing={1}>
            <Grid item xs={4}>
              <Typography align="center">Hours</Typography>
              <p align="center">
                Mon - Sat:
                11am-8:30pm
              </p>
              <p align="center">
                Sun: Closed
              </p>
            </Grid>
            <Grid item xs={4}>
              <Typography align="center">Contact Us!</Typography>
              <p align="center">
                <a className={classes.link} href="tel:562-924-8289">(562)924-8289</a>
              </p>
              <p align="center">
                <a className={classes.link} target="_blank" rel="noreferrer" href="https://www.yelp.com/biz/soy-tofu-la-palma"><i align="center" class="fab fa-yelp"></i></a>
              </p>
            </Grid>
            <Grid item xs={4}>
              <Typography align="center">Location</Typography>
              <p align="center">
                <a className={classes.link} target="_blank" rel="noreferrer" href="https://www.google.com/maps/place/4961+La+Palma+Ave,+La+Palma,+CA+90623/@33.8472895,-118.048716,17z/data=!3m1!4b1!4m5!3m4!1s0x80dd2c3ee07490a9:0xea2e77b1d60cc412!8m2!3d33.8472895!4d-118.046522">4961 La Palma Ave, La Palma, CA, 90623</a>
              </p>
            </Grid>
          </Grid>
          <Copyright className={classes.copyright} />
        </Container>

      </footer>
    </div>
  );
}