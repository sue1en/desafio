import { useState } from "react"
import {
  Button,
  Card,
  CardContent,
  TextField
} from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import { createPostCard } from "../../services/postcard";
import DialogLayout from "../dialog-layout/index"

const useStyle = makeStyles((theme) => ({
  card:{
    margin:"32px 16px",
    backgroundColor:"#ffffff",
    boxShadow:"0 4px 16px rgba(0,0,0, 0.15)",
    borderRadius: "8px",
    width:"100%",
  },
  cardContent:{
    padding:"16px",
  },
  sendButton:{
    position: "absolute",
    bottom:0,
    width:"100%",
    height:"56px",
    boxShadow:`0 8px 16px ${theme.palette.secondary.light}`,
    background:theme.palette.secondary.light,
    fontSize:"17px",
    fontStyle:"italic",
    textTransform:"uppercase",
    textAlign:"center",
    lineHeight: 1,
    color:"#fff",
    "&.MuiButton-root:hover":{
      background:theme.palette.secondary.main,
    }
  },
}));

export default function NewInsight ({close}) {
  const classes = useStyle();
  const [ postcard, setPostcard] = useState({});

  const handleChange = (e) => {
    setPostcard({
      ...postcard,
      [e.target.name]: e.target.value
    })
  };

  const submitForm = () => {
    const newPostcard = {
      ...postcard
    }
    createPostCard(newPostcard).then(res => {
      setPostcard({})
      alert("Post criado com sucesso!")
    }).catch(err => {
      console.log("Ops! Temos um problema.")
    })
  };
  
  return (
    <DialogLayout close={close}>
      <Card className={classes.card}>
        <CardContent className={classes.cardContent}>
        <TextField
          id="text"
          name="text"
          value={postcard.text}
          onChange={handleChange}
          label="INSIGHT"
          placeholder="Escreva aqui o seu insight…"
          helperText="limite de caracteres: 400"
          fullWidth
          margin="normal"
          multiline
          rows={10}
          InputLabelProps={{
            shrink: true,
          }}
          />
        
        <TextField
          id="tags"
          name="tags"
          value={postcard.tags}
          onChange={handleChange}
          label="CATEGORIA"
          placeholder="Adicione uma categoria (opcional)…"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
        />
        </CardContent>
      </Card>
      <Button onClick={submitForm} className={classes.sendButton}>
        Publicar  
      </Button>
    </DialogLayout>
  );
};