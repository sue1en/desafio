import {
  Toolbar,
  InputBase
} from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import SearchIcon from "@material-ui/icons/Search"

const useStyle = makeStyles((theme) => ({
  root:{
    position:"fixed",
    bottom:0,
    width:"100%",
  },
  toolbar:{
    padding: "0 16px 16px 16px",
    background: theme.palette.background.default,
  },
  inputInput: {
    flexGrow:1,
    backgroundColor:"#ffffff",
    padding: "20px 16px",
    boxShadow:"0 2px 8px rgba(0,0,0, 0.4)",
    borderRadius: "8px",
  },
  inputRoot: {
    // color: 'inherit',
  },
  searchIcon: {
    right:0,
    paddingRight: `calc(1em + ${theme.spacing(4)}px)`,
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color:"#666666",
  },
}))

export default function Footer () {
  const classes = useStyle();
  
  return (
    <div className={classes.root}>
      <Toolbar className={classes.toolbar}>
        <InputBase
          placeholder="Pesquise por termos ou categorias..."
          fullWidth
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput,
          }}
          // inputProps={{ 'aria-label': 'search' }}
        />
        <div className={classes.searchIcon}>
          <SearchIcon />
        </div>
      </Toolbar>
    </div>
  );
};
