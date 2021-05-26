import { Container, Divider, Grid } from "@material-ui/core";
import "./App.css";
import Budget from "./components/Budget";
import Remaining from "./components/Remaining";
import ExpenseTotal from "./components/ExpenseTotal";
import ExpensesList from "./components/ExpensesList";
import AddExpense from "./components/AddExpense";
import { AppProvider } from "./context/AppContext";
import useStyles from "./styles";

// import { useState } from "react";
function App() {
  const classes = useStyles();
  return (
    <AppProvider>
      <Container className={classes.container}>
        <h3>My budget planner</h3>
        <Grid container spacing={3}>
          <Grid item sm>
            <Budget />
          </Grid>
          <Grid item sm>
            <Remaining />
          </Grid>
          <Grid item sm>
            <ExpenseTotal />
          </Grid>
        </Grid>
        <h3>Add Expense</h3>
        <Grid container spacing={3}>
          <Grid item xs>
            <AddExpense />
          </Grid>
        </Grid>{" "}
        <br />
        <Divider />
        <h3>Expenses</h3>
        <Grid container spacing={3}>
          <Grid item xs>
            <ExpensesList />
          </Grid>
        </Grid>
      </Container>
    </AppProvider>
  );
}

export default App;
