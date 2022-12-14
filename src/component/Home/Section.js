import { Paper, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";

const Heading = ({ heading }) => {
  return (
    <div className="heading-container">
      <div className="section-name">{heading}</div>
      <div className="heading-seperator">
        <div className="seperator-line">
          <div className="seperator-knob">
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

function Section({ heading, Children, setState }) {
  return (
    <Paper sx={{ marginTop: "24px" }} elevation={5}>
      <Grid
        sx={{ width: "100%" }}
        container
        justifyContent="center"
        spacing={2}
      >
        <Grid justifyContent="center" item xs={12}>
          <Heading heading={heading}></Heading>
          {Children && (
            <Children setState={setState} className="section-children" />
          )}
        </Grid>
      </Grid>
    </Paper>
  );
}
export default Section;

{
}
