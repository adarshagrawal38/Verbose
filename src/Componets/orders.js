import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import IconButton from "@material-ui/core/IconButton";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MailIcon from "@material-ui/icons/Mail";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import { Link } from "react-router-dom";
import { Container, Box } from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";
import Button from "@material-ui/core/Button";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

import {
  HomeRounded,
  AddRounded,
  ShoppingBasketRounded,
  HistoryRounded,
  PowerOffRounded,
  CardGiftcardRounded,
} from "@material-ui/icons";
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { TextField } from "@material-ui/core";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  table: {
    minWidth: 500,
  },
}));

function Orders(props) {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      <List>
        <ListItem button key="Home" component={Link} to="./dashboard">
          <ListItemIcon>
            <HomeRounded />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
      </List>
      <List>
        <ListItem button key="add_item" component={Link} to="./addItems">
          <ListItemIcon>
            <AddRounded />
          </ListItemIcon>
          <ListItemText primary="Add Item" />
        </ListItem>
      </List>
      <List>
        <ListItem button key="order" component={Link} to="./orders">
          <ListItemIcon>
            <ShoppingBasketRounded />
          </ListItemIcon>
          <ListItemText primary="Orders" />
        </ListItem>
      </List>
      <List>
        <ListItem button key="past_order" component={Link} to="./past_orders">
          <ListItemIcon>
            <HistoryRounded />
          </ListItemIcon>
          <ListItemText primary="Past Order" />
        </ListItem>
      </List>
      <List>
        <ListItem button key="offers" component={Link} to="./offers">
          <ListItemIcon>
            <CardGiftcardRounded />
          </ListItemIcon>
          <ListItemText primary="Offers" />
        </ListItem>
      </List>
      <Divider />

      <List>
        <ListItem button key="logout" component={Link} to="./logout">
          <ListItemIcon>
            <PowerOffRounded />
          </ListItemIcon>
          <ListItemText primary="Log Out" />
        </ListItem>
      </List>
    </div>
  );
  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Verbose
          </Typography>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Typography variant="h4"> Orders</Typography>
        <Container maxWidth="sm">
          <Box
            bgcolor="white"
            textAlig="center"
            p="24px"
            mt="50px"
            boxShadow="2"
            borderRadius="15px"
          >
            <Box display="flex" p="20px" mx="auto">
              <Box mx="4px">
                <Typography variant="h5" margin="normal" p="16px">
                  231232
                </Typography>
              </Box>
              <Box mx="20px">
                <Typography variant="h5" margin="normal" p="16px">
                  29th July 8:00 PM
                </Typography>
              </Box>
              <Box mx="20px">
                <Typography variant="h5" margin="normal" p="16px">
                  Dinning
                </Typography>
              </Box>
            </Box>
            <Box display="flex" p="20px" mx="auto">
              <Box mx="4px">
                <Typography variant="h5" margin="normal" p="16px">
                  Adars Agrawal
                </Typography>
              </Box>
              <Box mx="20px">
                <Typography variant="h5" margin="normal" p="16px">
                  8305648558
                </Typography>
              </Box>
              <Box mx="20px">
                <Typography variant="h5" margin="normal" p="16px">
                  Online
                </Typography>
              </Box>
            </Box>
            <TableContainer component={Paper}>
              <Table className={classes.table} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Items</TableCell>
                    <TableCell align="right">Qty</TableCell>
                    <TableCell align="right">Price</TableCell>
                    <TableCell align="right">Toatal</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow key={row.name}>
                      <TableCell align="left">{row.name}</TableCell>
                      <TableCell align="right">{row.calories}</TableCell>
                      <TableCell align="right">{row.fat}</TableCell>
                      <TableCell align="right">{row.carbs}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            <Box align="right">
              <Typography>Toatal: 500</Typography>
              <Typography>Discount: 50</Typography>
              <Typography>Tax: 50</Typography>
              <Typography>Grand Total: 500</Typography>
            </Box>
            <Button variant="contained" color="primary" fullWidth margin="20px">
              Delivered
            </Button>
          </Box>
          <Box
            bgcolor="white"
            textAlig="center"
            p="24px"
            mt="50px"
            boxShadow="2"
            borderRadius="15px"
          >
            <Box display="flex" p="20px" mx="auto">
              <Box mx="4px">
                <Typography variant="h5" margin="normal" p="16px">
                  231235
                </Typography>
              </Box>
              <Box mx="20px">
                <Typography variant="h5" margin="normal" p="16px">
                  30th July 7:00 PM
                </Typography>
              </Box>
              <Box mx="20px">
                <Typography variant="h5" margin="normal" p="16px">
                  Take Away
                </Typography>
              </Box>
            </Box>
            <Box display="flex" p="20px" mx="auto">
              <Box mx="4px">
                <Typography variant="h5" margin="normal" p="16px">
                  Gutam Sharma
                </Typography>
              </Box>
              <Box mx="20px">
                <Typography variant="h5" margin="normal" p="16px">
                  7014896409
                </Typography>
              </Box>
              <Box mx="20px">
                <Typography variant="h5" margin="normal" p="16px">
                  Cash
                </Typography>
              </Box>
            </Box>
            <TableContainer component={Paper}>
              <Table className={classes.table} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Items</TableCell>
                    <TableCell align="right">Qty</TableCell>
                    <TableCell align="right">Price</TableCell>
                    <TableCell align="right">Toatal</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow key={row.name}>
                      <TableCell align="left">{row.name}</TableCell>
                      <TableCell align="right">{row.calories}</TableCell>
                      <TableCell align="right">{row.fat}</TableCell>
                      <TableCell align="right">{row.carbs}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            <Box align="right">
              <Typography>Toatal: 500</Typography>
              <Typography>Discount: 50</Typography>
              <Typography>Tax: 50</Typography>
              <Typography>Grand Total: 500</Typography>
            </Box>
            <Button variant="contained" color="primary" fullWidth margin="20px">
              Delivered
            </Button>
          </Box>
        </Container>
      </main>
    </div>
  );
}

Orders.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}
export default Orders;
