import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { Grid } from "@material-ui/core";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Imagem from "./assets/Captura.png";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  table: {
    minWidth: 500,
  },
}));

function App() {
  const classes = useStyles();

  return (
    <div>
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit">
            Brasil Saude
          </Typography>
        </Toolbar>
      </AppBar>
      <Grid style={{ padding: 20 }} container direction="row" justify="left">
        <Grid item>
          <Typography variant="h6" gutterBottom>
            IDSS 2019 - ANO BASE 2018
          </Typography>
        </Grid>
        <hr style={{ width: "100%" }} />
      </Grid>
      <Grid container direction="row" justify="left" style={{ padding: 10 }}>
        <Typography>
          <a
            href="http://www.ans.gov.br/planos-de-saude-e-operadoras/informacoes-e-avaliacoes-de-operadoras/qualificacao-ans"
            target="_blank"
          >
            Clique aqui
          </a>{" "}
          e consulte a página do IDSS no site da ANS ou pesquise nosso índice
          logo abaixo.{" "}
        </Typography>
      </Grid>
      <Grid container direction="row" justify="center" alignItems="center">
        <Grid item md={5} style={{ paddingTop: 20 }}>
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
              <TableBody>
                <TableRow>
                  <TableCell component="th" scope="row">
                    Nome Fantasia
                  </TableCell>
                  <TableCell align="left">Brasil Saude</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th" scope="row">
                    Registro ANS
                  </TableCell>
                  <TableCell align="left">42115-4</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th" scope="row">
                    CNPJ
                  </TableCell>
                  <TableCell align="left">28.633.372/0001-74</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th" scope="row">
                    Razão Social
                  </TableCell>
                  <TableCell align="left">
                    LUNA CARE ASSISTÊNCIA MÉDICA LTDA
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th" scope="row">
                    Situação do Registro ANS
                  </TableCell>
                  <TableCell align="left">Ativa</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th" scope="row">
                    Total de Consumidores
                  </TableCell>
                  <TableCell align="left">3</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th" scope="row">
                    Tipo
                  </TableCell>
                  <TableCell align="left">
                    Operadora médico-hospitalar
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>

      <Grid
        container
        direction="row"
        justify="center"
        style={{ paddingTop: 25 }}
      >
        <Grid item>
          <img src={Imagem} alt="Imagem de indicação"></img>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
