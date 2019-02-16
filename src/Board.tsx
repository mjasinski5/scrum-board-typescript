import { Sprint, Release, ReleaseGoal, Goal, IClasses } from "./interfaces";
import * as React from "react";
import Typography from "@material-ui/core/Typography/Typography";
import FormControl from "@material-ui/core/FormControl/FormControl";
import InputLabel from "@material-ui/core/InputLabel/InputLabel";
import FilledInput from "@material-ui/core/FilledInput/FilledInput";
import Grid from "@material-ui/core/Grid/Grid";
import Card from "@material-ui/core/Card/Card";
import Hidden from "@material-ui/core/Hidden/Hidden";
import CardMedia from "@material-ui/core/CardMedia/CardMedia";
import Divider from "@material-ui/core/Divider/Divider";
import CardContent from "@material-ui/core/CardContent/CardContent";
import CardHeader from "@material-ui/core/CardHeader/CardHeader";
import List from "@material-ui/core/List/List";
import ListItem from "@material-ui/core/ListItem/ListItem";
import Avatar from "@material-ui/core/Avatar/Avatar";
import CheckBoxEmpty from "@material-ui/icons/CheckBoxOutlineBlankRounded";
import ListItemText from "@material-ui/core/ListItemText/ListItemText";
import Paper from "@material-ui/core/Paper/Paper";

export interface IBanner extends IClasses {
  releaseName?: string;
  calculatedHours?: number;
}

interface ISprintEntry extends IClasses, Sprint {}

interface props extends IClasses, IBanner {
  sprints?: Sprint[] | 0 | undefined;
  currentRelease: Release | 0;
  teamReleaseGoals?: ReleaseGoal[];
}

const Banner: React.SFC<IBanner> = ({
  calculatedHours,
  releaseName,
  classes,
}) => {
  return (
    <Paper className={classes.mainFeaturedPost}>
      <div className={classes.mainFeaturedPostContent}>
        <Typography
          align="center"
          component="h1"
          variant="h3"
          color="inherit"
          gutterBottom
        >
          Release "{releaseName}"" Countdown
        </Typography>
        <Typography align="center" variant="h3" color="error" paragraph>
          {calculatedHours} hours
        </Typography>
      </div>
    </Paper>
  );
};
const GoalEntry: React.SFC<ReleaseGoal> = ({ name, done }) => {
  return (
    <ListItem key={name}>
      <Avatar>
        <CheckBoxEmpty onClick={() => {}} />
      </Avatar>
      <ListItemText primary={name} />
    </ListItem>
  );
};

const SprintEntry: React.SFC<ISprintEntry> = ({
  name,
  date,
  goals,
  classes,
}) => {
  return (
    <Grid item key={name} xs={12} md={6}>
      <Card className={classes.card}>
        <div className={classes.cardDetails}>
          <CardContent>
            <Typography component="h2" variant="h5">
              {name}
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              {date}
            </Typography>
            <Typography variant="subtitle1" paragraph>
              <List>
                {goals.map((g: any) => {
                  return (
                    <ListItem key={g.description}>
                      <Avatar>
                        <CheckBoxEmpty onClick={() => {}} />
                      </Avatar>
                      <ListItemText primary={g.description} />
                    </ListItem>
                  );
                })}
              </List>
            </Typography>
          </CardContent>
        </div>
        <Hidden xsDown>
          <CardMedia
            className={classes.cardMedia}
            image="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22288%22%20height%3D%22225%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20288%20225%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_164edaf95ee%20text%20%7B%20fill%3A%23eceeef%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A14pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_164edaf95ee%22%3E%3Crect%20width%3D%22288%22%20height%3D%22225%22%20fill%3D%22%2355595c%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2296.32500076293945%22%20y%3D%22118.8%22%3EThumbnail%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" // eslint-disable-line max-len
            title="Image title"
          />
        </Hidden>
      </Card>
    </Grid>
  );
};

const Board: React.SFC<props> = ({
  classes,
  sprints,
  releaseName,
  calculatedHours,
  teamReleaseGoals,
  currentRelease,
}) => {
  return (
    <React.Fragment>
      <Banner
        classes={classes}
        releaseName={releaseName}
        calculatedHours={calculatedHours}
      />
      <Grid container direction="row" spacing={40} className={classes.cardGrid}>
        <Grid container direction="column">
          {sprints &&
            sprints.map(post => (
              <SprintEntry
                name={post.name}
                date={post.date}
                goals={post.goals}
                classes={classes}
              />
            ))}
          {teamReleaseGoals && teamReleaseGoals.length && (
            <Grid container direction="column">
              <Grid item key="12345667" xs={12} md={6}>
                <Card className={classes.card}>
                  <div className={classes.cardDetails}>
                    <CardContent>
                      <Typography component="h2" variant="h5">
                        Release "{releaseName}"
                      </Typography>
                      <Typography variant="subtitle1" color="textSecondary">
                        {currentRelease && currentRelease.startDate}
                      </Typography>
                      <Typography variant="subtitle1" paragraph>
                        <List>
                          <Divider variant="middle" />

                          <CardHeader title="Team Goals" subheader="Wookiees" />
                          {teamReleaseGoals.map(g => (
                            <GoalEntry name={g.name} done={g.done} />
                          ))}
                          <Divider variant="middle" />
                          <CardHeader
                            subheader="234343 "
                            title="Release Themes"
                          />
                          {teamReleaseGoals.map(g => (
                            <GoalEntry name={g.name} done={g.done} />
                          ))}
                          <Divider variant="middle" />
                        </List>
                      </Typography>
                    </CardContent>
                  </div>
                  <Hidden xsDown>
                    <CardMedia
                      className={classes.cardMedia}
                      image="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22288%22%20height%3D%22225%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20288%20225%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_164edaf95ee%20text%20%7B%20fill%3A%23eceeef%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A14pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_164edaf95ee%22%3E%3Crect%20width%3D%22288%22%20height%3D%22225%22%20fill%3D%22%2355595c%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2296.32500076293945%22%20y%3D%22118.8%22%3EThumbnail%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" // eslint-disable-line max-len
                      title="Image title"
                    />
                  </Hidden>
                </Card>
              </Grid>
              <Divider variant="middle" />
            </Grid>
          )}
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default Board;
