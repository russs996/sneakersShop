import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { Grid, Paper, makeStyles, Button } from '@material-ui/core';
import { useContext, useState } from 'react';
import { clientContex } from '../../contexts/ClientContext';
import { useHistory } from 'react-router-dom';



const useStyles = makeStyles(theme => ({
    paper: {
        padding: theme.spacing(2),
        color: 'white',
        backgroundColor: '#1d1f21',
        width: '20vw',
        margin: '20px',
        marginTop: '-170px',
    }
}))

const Sidebar = () => {
    const history = useHistory()
    const classes = useStyles()
    const { getProducts } = useContext(clientContex)
    const [title, setTitle] = useState(getTitle)


    function getTitle() {
        const search = new URLSearchParams(history.location.search)
        return search.get('title')
    }
    console.log(getTitle);


    const handleChangeTitle = (event) => {
        if (event.target.value === 'all') {
            history.push(`${history.location.pathname.replace('title')}`)
            getProducts(history)
            setTitle(event.target.value)
            return
        }
        const search = new URLSearchParams(history.location.search)
        search.set('title', event.target.value)
        history.push(`${history.location.pathname}?${search.toString()}`)
        getProducts(history)
        setTitle(event.target.value)
    }

    const handleDrop = () => {
        history.push(`${history.location.pathname.replace('type')}`)
        history.push(`${history.location.pathname.replace('price_lte')}`)
        getProducts(history)
        setTitle(getTitle())
    }

    return (
        <Grid id="side1" item md={3}>
            <Paper elevation={2} className={classes.paper}>
                <FormControl component="fieldset">
                    <FormLabel component="legend" style={{ color: 'white' }}>Filter</FormLabel>
                    <RadioGroup aria-label="gender" name="gender1" value={title} onChange={handleChangeTitle} style={{
                        display: 'flex',
                        flexDirection: 'row'
                    }}>
                        <FormControlLabel value="Nike" control={<Radio id="nadp1" style={{ color: 'white' }} />} label="Nike" />
                        <FormControlLabel value="Adidas" control={<Radio id="nadp1" style={{ color: 'white' }} />} label="Adidas" />
                        <FormControlLabel value="Puma" control={<Radio id="nadp1" style={{ color: 'white' }} />} label="Puma" />
                        <FormControlLabel value="New Balance" control={<Radio id="nadp1" style={{ color: 'white' }} />} label="New Balance" />
                    </RadioGroup>
                </FormControl>
                <Grid>
                    <Button variant='outlined' onClick={handleDrop} style={{ color: 'white', border: 'white' }} >Сброс</Button>
                </Grid>
            </Paper>
        </Grid>
    );
};

export default Sidebar;