import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
} from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import backgroundImg from "../../assets/images/background.svg";

const useStyle = makeStyles((theme) => ({
  root:{
    background:"#F4F4F4",
    height:"100vh",
    
  },
  appBar:{
    width: "100%",
    height:"108px",
    justifyContent:"flex-end",
    position:"absolute",
    boxShadow: "none",
    backgroundColor: theme.palette.primary.main,
    backgroundImage: `url(${backgroundImg})`,
    backgroundSize: "inherit",
    backgroundRepeat:"no-repeat",
    backgroundPosition:"bottom",
    margin:0,
  },
  toolbar:{
    padding:"16px 16px",
    justifyContent:"center",
  },
  iconButton:{
    color:theme.palette.secondary.main,
    position: "absolute",
    left:0,
    paddingLeft: "20px",
  },
  title:{
    padding:"2px",
    width:"85px",
    
    "& p":{
      color: theme.palette.secondary.main,
      fontSize:"18px",
      fontStyle:"italic",
      textTransform:"uppercase",
      textAlign:"center",
      lineHeight: 1,
    }
  },
  content:{
    position: "relative",
    bottom:0,
    margin:"90px 16px 16px 16px",
    height:`calc(100% - 108px)`,
    display:"flex",
    flexDirection:"column",
    alignItems:"center",
  },
}));

export default function DialogLayout ({children, close}) {
  const classes = useStyle();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <IconButton edge="end" onClick={close} className={classes.iconButton}>
            <ArrowBackIcon/>
          </IconButton>
          <div className={classes.title}>
            <Typography>
              Criar <strong>Insight</strong>
            </Typography>
          </div>
        </Toolbar>
      </AppBar>
      <div className={classes.content}>
        {children}
      </div>
    </div>
  );
};
