import { useState, forwardRef } from "react"
import {
  AppBar,
  Toolbar,
  IconButton,
  Avatar,
  Icon,
  Typography,
  Slide,
  Dialog
} from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import AddIcon from '@material-ui/icons/Add';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import BrandLogo from "../../assets/images/logo/brand-insights@3x.svg";
import backgroundImg from "../../assets/images/background.svg"
import NewInsight from "../insights/new-insight"

const useStyle = makeStyles((theme) => ({
  appBar:{
    width: "100%",
    height:"108px",
    justifyContent:"flex-end",
    position:"fixed",
    boxShadow: "none",
    backgroundColor: theme.palette.primary.main,
    backgroundImage: `url(${backgroundImg})`,
    backgroundSize: "inherit",
    backgroundRepeat:"no-repeat",
    backgroundPosition: "center -85px",
    margin:0,
  },
  toolbar:{
    padding:"0 16px 5px 16px",
    justifyContent:"space-between",
  },
  svgIcon:{
    width:"50px",
    height:"32px",
  },
  logoImg:{
    height:"100%"
  },
  avatarBox:{
    borderColor: theme.palette.secondary.main,
    border:"solid",
    borderWidth:"2px",
    borderRadius: "50%",
    padding:"2px",
  },
  avatar:{
    width:"56px",
    height:"56px",
  },
  iconButton:{
    color:theme.palette.secondary.main,
    padding:"20px",
  },
}))

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="left" ref={ref} {...props} timeout={500}/>;
});

export default function Header () {
  const classes = useStyle();
  const [ drawer, setDrawer ] = useState(false);
  
  const handleDrawerOpen = () => {
    setDrawer(true);
  };

  const handleDrawerClose = () => {
    setDrawer(false);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <Icon className={classes.svgIcon}>
            <img src={BrandLogo} alt="InsightLogo" className={classes.logoImg}/>
          </Icon>
          <div className={classes.avatarBox}>
            <Avatar src={AccountCircleIcon} className={classes.avatar}/>
          </div>
          <IconButton className={classes.iconButton} onClick={handleDrawerOpen}>
            <AddIcon className={classes.iconButtonSvg}/>
          </IconButton>
        </Toolbar>
      </AppBar>
      <Dialog fullScreen open={drawer} onClose={handleDrawerClose} TransitionComponent={Transition}>
        <NewInsight close={handleDrawerClose}/>
      </Dialog>
    </div>
  );
};