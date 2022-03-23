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
  CardContent,
  Card,
  Grid,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

function App() {
  return (
    <>
      <Card style={{ maxWidth: 450, margin: "0 auto", padding: "20px 5px" }}>
        <CardContent>
          <Typography gutterBottom variant="h5">
            Contect Us
          </Typography>
          <form>
            <Grid container spacing={1}>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="First Name"
                  placeholder="Enter Your Name"
                  fullWidth
                  required
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Last Name"
                  placeholder="Enter Your Last Name"
                  fullWidth
                  required
                />
              </Grid>
              <Grid xs={12} item>
                <TextField
                  lable="Email"
                  type="email"
                  placeholder="Enter Email"
                  fullWidth
                  required
                />
              </Grid>
              <Grid xs={12} item>
                <TextField
                  lable="Phone Number"
                  type="number"
                  placeholder="Enter Phone Number"
                  fullWidth
                  required
                />
              </Grid>
              <Grid xs={12} item>
                <TextField
                  lable="Message"
                  multiline
                  rows={4}
                  placeholder="Type Your Message"
                  fullWidth
                  required
                />
              </Grid>

              <Grid xs={12} sm={12} item>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullwidth
                >
                  Submit
                </Button>
              </Grid>
            </Grid>
          </form>
        </CardContent>
      </Card>
    </>
  );
}

export default App;
