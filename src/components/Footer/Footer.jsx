import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import YouTubeIcon from '@material-ui/icons/YouTube';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';

const useStyles = makeStyles({
    root: {
        bottom: 0,
        width: '100%',
        height: '50px',
    },
    social: {
        display: 'flex',
    }
});

console.log('asd')

export default function SimpleBottomNavigation() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    return (
        <BottomNavigation
            value={value}
            onChange={(event, newValue) => {
                setValue(newValue);
            }}
            showLabels
            className={classes.root}
            style={{ backgroundColor: '#1d1f21' }}
        >
            <BottomNavigationAction className="social" label="Instagram" style={{ color: 'white' }} icon={<InstagramIcon style={{ color: 'white' }} />} />
            <BottomNavigationAction className="social" label="Youtube" style={{ color: 'white' }} icon={<YouTubeIcon style={{ color: 'white' }} />} />
            <BottomNavigationAction className="social" label="Twitter" style={{ color: 'white' }} icon={<TwitterIcon style={{ color: 'white' }} />} />
        </BottomNavigation>
    );
}