import { useState, useEffect, forwardRef } from "react"
import {
  Button,
  Card,
  CardContent,
  TextField,
} from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import { editPostCard, removePostCard } from "../../services/postcard";
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
  buttonsBox:{
    position: "absolute",
    bottom:0,
    width:"100%",
    display:"flex",
    justifyContent:"center",
  },
  buttons:{
    margin:"1em",
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

export default function EditInsight ({close, data}) {
  const classes = useStyle();
  const [ postcard, setPostcard] = useState({});

  const handleChange = (e) => {
    setPostcard({
      [e.target.name]: e.target.value
    })
  };

  useEffect(() => {
    setPostcard(data)
  }, [])

  const submitForm = () => {
    const newPostcard = {
      ...postcard
    }
    editPostCard(data._id, newPostcard).then(res => {
      alert("Post editado com sucesso!")
    }).catch(err => {
      console.log("Ops! Temos um problema.")
    })
  };
  
  const submitRemove = () => {
    removePostCard(data._id)
    .then(() => {
      alert("Post removido com sucesso!")
    })
    .catch(err => {
      console.log("Ops! Temos um problema.")
    })
  }

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
      <div className={classes.buttonsBox}>
        <Button onClick={submitForm} className={classes.buttons}>
          Salvar Alteração
        </Button>
        <Button onClick={submitRemove} className={classes.buttons}>
          Excluir Card
        </Button>
      </div>
    </DialogLayout>
  );
};