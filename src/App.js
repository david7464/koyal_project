import logo from "./logo.svg";
import "./App.css";
import {
  Container,
  Typography,
  Button,
  Paper,
  Box,
  TextField,
  InputAdornment,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100vw",
    height: "100vh",
    backgroundColor: theme.palette.grey[300],
    paddingTop: "50px",
  },
  sp: {
    backgroundColor: theme.palette.grey[200],
    width: "100%",
    height: "10vh",
  },
  wp: {
    width: "100%",
    height: "13vh",
  },
}));

function App() {
  const classes = useStyles();
  return (
    <>
      <Container className={classes.root}>
        <Paper component={Box} width="30%" mx="auto" p={4}>
          <Typography variant="h5">Create New Accout</Typography>
          <Box component="form" mt={2}>
            <Box variant="h1" mt={1}>
              Job
            </Box>
            <TextField
              fullWidth
              variant="outlined"
              margin="normal"
              color="secondary"
              label="First Name"
              InputProps={{
                endAdornment: (
                  <InputAdornment>
                    <ArrowForwardIosIcon fontSize="small" />
                  </InputAdornment>
                ),
              }}
            />
            <Box borderBottom={1}></Box>
            <Box variant="h1" mt={1}>
              User
            </Box>
            <TextField
              label="Last Name"
              fullWidth
              variant="outlined"
              margin="normal"
              color="secondary"
            />
            <Box borderBottom={1}></Box>
            <Box variant="h2" className={classes.sp}>
              <p style={{ paddingTop: "25px" }}>Time in/Time Out</p>
            </Box>
            <Box borderBottom={1}></Box>

            <Box variant="h2" className={classes.wp}>
              <p>Time in</p>
              <p>Time in/Time Out</p>
            </Box>
            <Box borderBottom={1}></Box>

            <Box borderBottom={1}></Box>
            <Box variant="h2" className={classes.sp}>
              <p style={{ paddingTop: "25px" }}>NEW SHIFT DETAILS</p>
            </Box>
            <Box borderBottom={1}></Box>

            <Box variant="h1" pt={2}>
              Cost Code
            </Box>
            <TextField
              label="Last Name"
              fullWidth
              variant="outlined"
              margin="normal"
              color="secondary"
            />
            <Box borderBottom={1}></Box>

            <Box variant="h1" pt={2}>
              Tages
            </Box>
            <Box borderBottom={1}></Box>
          </Box>
        </Paper>
      </Container>
    </>
  );
}

export default App;
