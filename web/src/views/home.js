import { useState, useEffect, useCallback } from "react";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { getAllPostCard } from "../services/postcard"

import backgroundImg from "../assets/images/background.svg";
import Cards from "../components/cards";
import cardsData from "../data/data.json"

const useStyle = makeStyles((theme) => ({
  root:{
  },
  background:{
    backgroundColor: theme.palette.primary.main,
    backgroundImage: `url(${backgroundImg})`,
    backgroundSize: "inherit",
    backgroundRepeat:"no-repeat",
    backgroundPosition: 'bottom',
    width: "100%",
    height: "317px",
  },
  body:{
    position:"absolute",
    top:0,
    paddingBottom:"150px",
  },
  headBox:{
    width: "100%",
    height: "317px",
    padding: "16px",
    position: "relative",
  },
  headBoxText:{
    position: "relative",
    marginTop:"90px",
    height:`calc(100% - 90px)`,
    display:"flex",
    flexDirection:"column",
    alignItems:"center",
  },
  author:{
    textAlign:"center",
    color:"#ffffff",
    fontStyle:"italic",
    "& p":{
      fontSize:"24px",
    },
    '& p:last-child':{
      fontSize:"12px",
    }
  },
  title:{
    fontStyle:"italic",
    fontSize:"20px",
    marginTop:"40px",
  },
  cards:{
    marginTop:"-85px",
  },
}));

export default function Home() {
  const classes = useStyle();
  const [cardsInfo, setCardsInfo] = useState([])
  
  const getCards = useCallback(() => {
    getAllPostCard().then(res => {
      setCardsInfo(res.data.data)
      console.log(getAllPostCard)
    }).catch(err => {
      console.log("Ops! Temos um erro.")
    })
  });

  useEffect(() => {
    getCards()
  }, []);


  return (
    <div className={classes.root}>
      <div className={classes.background}></div>
      <div className={classes.body}>
        <div className={classes.headBox}>
          <div className={classes.headBoxText}>
            <div className={classes.author}>
              <Typography>
                Olá, Suelen!
              </Typography>
              <Typography>
                suelen.batista@email.com
              </Typography>
            </div>
            <Typography variant="body2" color="secondary" className={classes.title}>
              Feed de <strong>Insights</strong>
            </Typography>
          </div>
        </div>
        <div className={classes.cards}>
          <Cards data={cardsInfo}/>
        </div>
      </div>
    </div>
  );
}

// export default Home;
