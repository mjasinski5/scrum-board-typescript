import React from "react";
import { withStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Hidden from "@material-ui/core/Hidden";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText/ListItemText";
import CheckBoxEmpty from "@material-ui/icons/CheckBoxOutlineBlankRounded";
import CheckBoxRounded from "@material-ui/icons/CheckBoxRounded";
import Avatar from "@material-ui/core/Avatar";
import { IDataProvider, Data, Team } from "./interfaces";

const styles = (theme: any) => ({
  layout: {
    width: "auto",
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      width: 1100,
      marginLeft: "auto",
      marginRight: "auto",
    },
  },
  toolbarMain: {
    borderBottom: `1px solid ${theme.palette.grey[300]}`,
  },
  toolbarTitle: {
    flex: 1,
  },
  toolbarSecondary: {
    justifyContent: "space-between",
  },
  mainFeaturedPost: {
    backgroundColor: theme.palette.grey[800],
    // background: `url("./wokiees.jpg")`,
    color: theme.palette.common.white,
    marginBottom: theme.spacing.unit * 4,
  },
  mainFeaturedPostContent: {
    padding: `${theme.spacing.unit * 6}px`,
    [theme.breakpoints.up("md")]: {
      paddingRight: 0,
    },
  },
  mainGrid: {
    marginTop: theme.spacing.unit * 3,
  },
  card: {
    display: "flex",
  },
  cardDetails: {
    flex: 1,
  },
  cardMedia: {
    width: 160,
  },
  markdown: {
    padding: `${theme.spacing.unit * 3}px 0`,
  },
  sidebarAboutBox: {
    padding: theme.spacing.unit * 2,
    backgroundColor: theme.palette.grey[200],
  },
  sidebarSection: {
    marginTop: theme.spacing.unit * 3,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    marginTop: theme.spacing.unit * 8,
    padding: `${theme.spacing.unit * 6}px 0`,
  },
});

interface PropType {
  classes: any;
  dataProvider: IDataProvider;
  match: any;
  // releases: any;
}
interface IState {
  data: Data;
  currentRelease: string;
}

class Blog extends React.Component<PropType, IState> {
  constructor(props: PropType) {
    super(props);
    this.state = {
      data: {} as Data,
      currentRelease: ''
    };

  }

  async componentDidMount() {
    const localState = await this.props.dataProvider.getData();

    this.setState({
      data: localState,
    });
  }
  private getCurrentTeam(team: string): 0 | Team | undefined {
    return  this.state.data.releases &&
    this.state.data.releases.length &&
    this.state.data.releases[0].teams.find(el => el.name === team)
  }

  render() {
    console.log('props', this.props.match.params.team)
    const currentTeam = this.props.match.params.team;
    const classes = this.props.classes;
    const team = this.getCurrentTeam(currentTeam);
    const sprints = team && team.sprints;
    console.log('sprints', sprints)
    console.log('team', team)
    const data = this.state.data;
    const releaseName =
      (data.releases && data.releases.length && data.releases[0].name) || "";
    const releaseDate =
      (data.releases &&
        data.releases.length &&
        new Date(data.releases[0].date).getTime()) ||
      new Date().getTime();
    const nowDate = new Date().getTime();
    const calculatedHours = Math.round(
      (releaseDate - nowDate) / (1000 * 60 * 60)
    );
    const calculatedDays = Math.round(calculatedHours / 24);
    const teamReleaseGoals = team && team.releaseGoals || []
    console.log('teamReleaseGoals', teamReleaseGoals)
    return (
      <React.Fragment>
        <CssBaseline />
        <div className={classes.layout}>
          <main>
            {/* Main featured post */}
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
            <Grid
              container
              direction="row"
              spacing={40}
              className={classes.cardGrid}
            >
              <Grid container direction="column">
                {sprints &&
                  sprints.map((post: any) => (
                    <Grid item key={post.name} xs={12} md={6}>
                      <Card className={classes.card}>
                        <div className={classes.cardDetails}>
                          <CardContent>
                            <Typography component="h2" variant="h5">
                              {post.name}
                            </Typography>
                            <Typography
                              variant="subtitle1"
                              color="textSecondary"
                            >
                              {post.date}
                            </Typography>
                            <Typography variant="subtitle1" paragraph>
                              <List>
                                {post.goals.map((g: any) => {
                                  return (
                                    <ListItem key={g.description}>
                                      <Avatar>
                                        <CheckBoxEmpty
                                          onClick={() => {
                                            // const nReleases = this.state.releases.find((s) => s.)
                                            // this.setState({
                                            //   ...this.state,
                                            //   releases: releases
                                            // })
                                          }}
                                        />
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
                  ))}
                {teamReleaseGoals.length && (
                  <Grid container direction="column">
                    <Grid item key="12345667" xs={12} md={6}>
                      <Card className={classes.card}>
                        <div className={classes.cardDetails}>
                          <CardContent>
                            <Typography component="h2" variant="h5">
                              Release Goals
                            </Typography>
                            <Typography
                              variant="subtitle1"
                              color="textSecondary"
                            >
                              ---
                            </Typography>
                            <Typography variant="subtitle1" paragraph>
                              <List>
                                {teamReleaseGoals.map((g) => {
                                  return (
                                    <ListItem key={g.name}>
                                      <Avatar>
                                        <CheckBoxEmpty
                                          onClick={() => {
                                            // const nReleases = this.state.releases.find((s) => s.)
                                            // this.setState({
                                            //   ...this.state,
                                            //   releases: releases
                                            // })
                                          }}
                                        />
                                      </Avatar>
                                      <ListItemText primary={g.name} />
                                    </ListItem>
                                  );
                                })
                              }
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
          </main>
        </div>
        {/* Footer */}
        <footer className={classes.footer}>
          <Typography variant="h6" align="center" gutterBottom>
            Footer
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            color="textSecondary"
            component="p"
          >
            Something here to give the footer a purpose!
          </Typography>
        </footer>
        {/* End footer */}
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(Blog);
