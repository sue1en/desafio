import { useState, useEffect, useCallback, forwardRef } from "react";
import {
  Card,
  CardContent,
  Typography,
  IconButton,
  Modal
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { getTagById } from "../../services/tag"
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

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
  },
  iconButton: {
    margin:"2px",
    "&:hover":{
      "& span":{
        "& svg":{
          color:theme.palette.secondary.main,
        }
      }
    }
  },
  iconButtonSvg: {
    color:"#bdbdbd",
    fontSize:"20px",
  },
}));

export default function Cards({data, open}) {
  const classes = useStyle();

  return(
    <>
      {data?.map((val, i) => (
          <Card key={i} className={classes.card}>
            <CardContent className={classes.cardContent}>
              <Typography className={classes.postText}>
                {val.text}
              </Typography>
              <div className={classes.tagsBox}>
                {val.tags.map((tag, k) => (
                  <div key={k} className={classes.tags}>
                  <Typography>
                    {tag}
                  </Typography>
                  </div>
                  ))}
                </div>
              <IconButton onClick={() => open(val._id)} className={classes.iconButton}>
                <EditIcon className={classes.iconButtonSvg}/>
              </IconButton>
            </CardContent>
          </Card>
        ))
      }
    </>
  )
};