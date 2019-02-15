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
import { IDataProvider, Data, Team, IClasses } from "./interfaces";
import CardHeader from "@material-ui/core/CardHeader";
import FormControl from "@material-ui/core/FormControl/FormControl";
import InputLabel from "@material-ui/core/InputLabel/InputLabel";
import FilledInput from "@material-ui/core/FilledInput/FilledInput";
import Board from "./Board";
import queryString from "query-string";

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
  cardGrid: {
    padding: `${theme.spacing.unit * 8}px 0`,
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
  location: any;
  // releases: any;
}
interface IState {
  data: Data;
  currentRelease: string;
  dataUrl: string;
}

const Footer: React.SFC<IClasses> = ({ classes }) => {
  return (
    <footer className={classes.footer}>
      <Typography variant="h6" align="center" gutterBottom>
        Sprint Board
      </Typography>
      <Typography
        variant="subtitle1"
        align="center"
        color="textSecondary"
        component="p"
      >
        version 0.0.1
      </Typography>
    </footer>
  );
};

//https://stackoverflow.com/questions/5717093/check-if-a-javascript-string-is-a-url
function isURL(str: string) {
  var pattern = new RegExp(
    "^(https?:\\/\\/)?" + // protocol
    "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|" + // domain name
    "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
    "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
    "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
      "(\\#[-a-z\\d_]*)?$",
    "i"
  ); // fragment locator
  return pattern.test(str);
}

const DEFAULT_DATA_URL = "entries.json";

class Blog extends React.Component<PropType, IState> {
  constructor(props: PropType) {
    super(props);

    const outputParamsData = queryString.parse(this.props.location.search)
      .dataUrl;
    const dataUrl =
      typeof outputParamsData === "string"
        ? (outputParamsData as string)
        : undefined;

    this.state = {
      data: {} as Data,
      currentRelease: "",
      dataUrl: dataUrl || DEFAULT_DATA_URL,
    };
  }

  async componentDidMount() {
    const values = queryString.parse(this.props.location.search);
    const localState = await this.props.dataProvider.getData(
      this.state.dataUrl
    );

    this.setState({
      data: localState,
    });
  }

  async componentDidUpdate(prevProps: PropType, prevState: IState) {
    if (prevState.dataUrl != this.state.dataUrl) {
      const localState = await this.props.dataProvider.getData(
        this.state.dataUrl
      );
      this.setState({
        data: localState,
      });
    }
  }

  private getCurrentTeam(team: string): 0 | Team | undefined {
    return (
      this.state.data.releases &&
      this.state.data.releases.length &&
      this.state.data.releases[0].teams.find(el => el.name === team)
    );
  }

  render() {
    console.log("state", this.props.location.search);
    const currentTeam = this.props.match.params.team;
    const { classes } = this.props;
    const team = this.getCurrentTeam(currentTeam);
    const sprints = team && team.sprints;

    const { data } = this.state;
    const currentRelease =
      data.releases && data.releases.length && data.releases[0];
    const releaseName = (currentRelease && currentRelease.name) || "";
    const startReleaseDate =
      (data.releases &&
        data.releases.length &&
        new Date(data.releases[0].startDate).getTime()) ||
      new Date().getTime();
    const endReleaseDate =
      (data.releases &&
        data.releases.length &&
        new Date(data.releases[0].endDate).getTime()) ||
      new Date().getTime();
    const nowDate = new Date().getTime();
    const calculatedHours = Math.round(
      (startReleaseDate - nowDate) / (1000 * 60 * 60)
    );
    const calculatedDays = Math.round(calculatedHours / 24);
    const teamReleaseGoals = (team && team.releaseGoals) || [];

    return (
      <React.Fragment>
        <CssBaseline />
        <FormControl className={classes.formControl} variant="filled" />
        <InputLabel htmlFor="component-filled">Data URL</InputLabel>
        <FilledInput
          id="component-filled"
          value={this.state.dataUrl}
          onChange={event => this.setState({ dataUrl: event.target.value })}
        />
        <label htmlFor="contained-button-file">
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
          >
            Primary
          </Button>
        </label>
        <Board
          classes={classes}
          teamReleaseGoals={teamReleaseGoals}
          sprints={sprints}
          releaseName={releaseName}
          calculatedHours={calculatedHours}
          currentRelease={currentRelease}
        />
        <Footer classes={classes} />
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(Blog);
