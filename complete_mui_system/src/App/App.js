import './App.css';
import Sidemenu from "../components/SideMenu"
import Header from "../components/Header"
import PageHeader from "../components/PageHeader"

import { makeStyles } from "@material-ui/core"
import PeopleOutlineTwoToneIcon from '@material-ui/icons/PeopleOutlineTwoTone';

const useStyles = makeStyles({
  appMain:{
    paddingLeft:'320px',
    width:'100%'
  }
})

function App() {

  const classes = useStyles();

  return (
    <div>
      <Sidemenu />
      <div className={classes.appMain}>
        <Header />
        <PageHeader 
        title = "Page Header"
        subTitle = "Page Description"
        icon = {<PeopleOutlineTwoToneIcon fontSize="large"/>}
        />
      </div>
    </div>
  );
}

export default App;
