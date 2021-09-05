import {
  Card,
  CardContent,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyle = makeStyles((theme) => ({
  card:{
    margin:"10px 16px",
    backgroundColor:"#ffffff",
    boxShadow:"0 4px 16px rgba(0,0,0, 0.2)",
    borderRadius: "8px",
  },
  cardContent:{
    padding:"16px",
    
  },
  postText:{
    textAlign:"center",
    color:"#000"
  },
  tagsBox:{
    display:"flex",
    justifyContent:"center",
    alignItems:"flex-end",
    paddingTop: "20px",
  },
  tags:{
    borderColor: theme.palette.secondary.light,
    border:"solid",
    borderWidth:"1px",
    padding:"6px",
    borderRadius: "4px",
    margin:"0 5px",
    textAlign:"center",
    "& p":{
      color:theme.palette.secondary.main,
      textTransform:"uppercase",
      fontSize:"10px",
      fontWeight:"bold"
    },
  }
}));

export default function Cards({data}) {
  const classes = useStyle();

  return(
    <>
      {data?.map((data, i) => (
          <Card key={i} className={classes.card}>
            <CardContent className={classes.cardContent}>
              <Typography className={classes.postText}>
                {data.text}
              </Typography>
              {/* <div className={classes.tagsBox}>
                {data.tags.map((tags, k) => (
                  <div key={k} className={classes.tags}>
                    <Typography>
                      {tags.name}
                    </Typography>
                  </div>
                ))}
              </div> */}
            </CardContent>
          </Card>
        ))
      }
    </>
  )
};