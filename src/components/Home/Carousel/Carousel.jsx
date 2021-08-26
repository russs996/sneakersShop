import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import { Grid } from '@material-ui/core';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
const tutorialSteps = [
    {
        label: 'NIKE Jordan',
        imgPath:
            'https://cdn-images.farfetch-contents.com/16/44/31/35/16443135_31828392_600.jpg',
    },
    {
        label: 'PUMA',
        imgPath:
            'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa/global/369122/01/sv01/fnd/RUS/w/1000/h/1000/bg/255,255,255.jpg'
    },
    {
        label: 'NIKE',
        imgPath:
            'https://www.thenextsole.com/storage/images/BQ3177-100.png',
    },
    {
        label: 'LEBRON 17',
        imgPath:
            'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUWFRgWFRYZGRgZHBoaGhgcHB4jHhoaHB4aGR4cGh4cIy4mHB4rHxwYJjgnLC8xNTU2HSQ+QDszPy43NTEBDAwMEA8QHhISHjEnJCs0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ2NDQ0NDQ0NDQ0NDQ0NP/AABEIAL4BCgMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAABAECAwYHBQj/xABGEAABAwIDAwkFBQYEBQUAAAABAAIRAyEEMUESUWEFBgciMnGBkaETscHR8EJSktLhFCNTYoKyFRZy8RczosLTQ0RVY/L/xAAZAQEBAQEBAQAAAAAAAAAAAAAAAQIDBAX/xAAjEQEBAAICAgIDAQEBAAAAAAAAAQIREiEDMUFRBBMiMmEU/9oADAMBAAIRAxEAPwDsyIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAixOqAEAkAusATckCYG+wJWVAREQFSVQmM1wznXzu2cacRg9um0w17w4EVHCzXFhFrAWMggCwOdxx5DuqLROaPP6niC2lXhlUwA4diodI+6TuNtx0W9JcbjdUVREUBERAREQEREBERAREQEREBERAREQEREBERAREQEREGk9KGN9lhqbm2f7amWOGbS3acXA6WBHitl5Cx3t8PSq6vY1xjLai8eMrS+mN4GGon/7f+x/15L1ui+uX8nUp+yajfDbcfit2fzKvw25eJzh5y4fBs2qzusR1abbud3DQcTAXhc9OfTMLtUaMPxEQfu0ydXbz/L58eLY3FPqPc+o4ue4y5zjcn5egWsPFcu76JG38v9JeKrBzabW0mOBBDRtOLTYhziLW3ALUGYym9pD2b/1gBRHsGt/j9bliLDcGJGnuXpkmPUVNwxEQwkgXg3Ma3AXYejznl7YDD13fvABsOJ7Yy2SfvDfr358Uwz4MqdTqlrg5hLSDNjcEaAjcVnPCZTQ+oFVaFzG58txEUcQ5ra2TXZCpw4O4a6blvi8mWNxuqyqiIoCIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiKFytVcyhVc1wa5tN5aTkCGkgngDCDj/AEvYqo/EmntyxrWbDAbNJEuLv5ifTZUDk3nnWw+BGFo9V204msNGOAMNnJ21tdbQRF7jXcRULnEuJc4klxJkkm5JO8mSsT3wROV7xuGl16+GMx7+GtKOcTJceJnMnO/qsVKoTNrR6yfkPNZnONiQMtUvnvn9F113KrC5o3eqG5uZPHPer3AQRHWMQ7d8/JWkxpfuTq30MThBVaT+tGhHqLfJVe4Exu9VSo9rQRl3Z2yMaqUSmOiNCuncxOfLtpmHxLgWu6rKrjBB+y1xPak2Bznfpy1jw4NJ1+ivQoYdr29R3X1a7suG6NI3jxWMsZlNJX0si5RzJ5+FjWYfEyWhxa2s49YMtsB/3oO0C6cozzPVl5MsbjdVlVERQEREBERAREQEREBERAREQEREBERAREQUXJemLlGs11OltFtHZ2y0fbdLmja3gGLb77l1TEVgxjnESGtLoGsCbL5351crYivVqHEujZdZjTLGNsQ0bx781vCbqx5mHbth5kANFpzceCjOrGHdU2cGtOkzBm11IpP2mjYYIZcuy43k3zJ8VWi3aJEkAXOZuRNhvXp7vy0F1stVUPAYezPW3yLmCD5cFJZh6MbRL3GdNkbpF941UWsRtuIbstmwJmLan60W7d9DHtkZSZjJAd4PjHwVQLTO/wCvRXNac/l5rQx4nAljtoiCRw+gogZfifivQqVXO7TyQJtGuWfgo1XRw4n0U0MoYNLEm1/P671ex5abyD5FRmPvG4R46/XBZPaD/cfNNCR7Q/Z0+pXQeZ/SE6i1lDENL2NAa147TQMgR9poEcRxXOWv4q173i4c0jWReOEZrOeEs7TT6cwWNp1Wh1N7XtOrTPnuPAqUvm/B8tVaEOY/YezrMeASLZgjUXgtvIK6nzG5/DGOFCu1tOuRtMLT+7rACSac3DhclpmwnfHlzw4ppvyIi5oIiICIiAiIgIiICIiAiIgIiICIiDWufPK7MPhKm1JfUa5jGtPWcSIMbgJuV8+im5xPtgWXuBpaRv1hdO6WeUNiswN7Zphsm4Ac5xhugcSJJ3NC5u2g94DnFzidIP0V38WO41jFmxTDSBJMZ7vks+HFUiWABp1JAy7ut6LBUpxIIAtEAAegtopH7cxoDQyfEySc7RmuvqKwYnbbcuY4EjsvJg6SDluVjcpOe8kqSxr3gkUxoZysL2E/UJicG5jA+QZzH3TfwnL6CuNk9i1lQiWgmDoDaDFiO8epWHYt2hbMTfSff6qofaJV4fm0RfORlYA+i1ZruexhexpuSe4ZK2vTmImd0d3FXu2dq4mMpy8RkfVXdqIIBuBujwWhhoxeZEHUXJOt8lla4HOw47viscXIdE6FVY0uF4iLcdfAJBVrmmcrb/qyqWMyABOUR4o1smSwCIGn0fJXV7knZNzaPQQE336FgLm3mwt3jcp/JGMNGo19OAGua9o0a9pkEcDuUBhaTDSdxG48RmCgs4cTPlc96lko7hyDz/o1GE1/3bmxJEuaRGdhLbzYz3rbMFj6VVu1SqMeN7XAx3xkvmTFYioxrXUyQ4HQ6QpWB561muDqhL3C20S4PAmf+Ywh2emS8ueEl66ZsfTaquU81eksODWV3F+hcQA7v6vVd6fBdJ5P5SpVm7VJ7XjgbjvBuFzywuKJqIiyCIiAiIgIiICIiAiIgKNjcSKdN9R3ZY1zjGcNE24qSvF52YhrMHXLzALHNB12nDZbFxeSFYOIc4eVnYqua2IcZaSGMbGyxs2bO/LieK8mpjHvOyxoaDuECOPqbrJVpBzyGzE2nwAHHyvKlNaGjrEiBqCL+IiV68cZjG5EV+CkD94SZg9WABrF93cvTo4Ck3ZcTIaIkiMzYnxPqoNOo93YY53fp52VxwL3jrv2dwFwO+4WpLfUNyM9bG0mydkPv2ZdeNSbTO4LCRVxEEMDWidkmwto0D9Vgr8kvaNpjg8ax2h4ajNX0OVSwNBO0RkB7zaFLLj7N7Y30DTf1s2kEgZEJUp+0eXMmCZ2iIBORubbkp4hr3zVJjcPO/Fe1X5RZEE7LW/ZGc6EAjdOSm+59jza/I72NkuaXHNouRpnrF/BQsRWDmtbk5udvLvg+8rLjuUHVDAHVGVh8PBZMPii1hA2S09oFo2jlYHW91buTdDkrD0ngmsHOvADIEcb/Xqq4bkdr6r2CrsMbcuMcIA4k9yhvbd3WJEnrC1uIByWSi/YENMzk0ib7wBmfNJL7GXF4JjHBu1t74zgd+/uUdrodNwLgbWenw1U+vgnMO094Jd90+kRYC3dKjVibgskZza3nkt499jHRBdLiRmAN+t/gsFZ7QWgcZm0fLVTiDID2bJzkgi2f6rDiAXBoMOBi85DTTduVmxFNQO2Y3E+CwVOTA8k7UHdCmjDNB6pzy+XDRWk6EQfGUuMv+k0qzk8N6r2gOAB2m2kaHv4KdgsfiKJDmva6MuvsPHiNVGxGKfssBMhluIEAZm9oBVadYXs0zv7iPipxhpumH6SsYGbGwNvR7m7X9jhPfmvY5F6T3SG4qk0b3UyfPZdn5rmjntOTWh1+sBGs90qO+qZDgOo310JHAeqxfFj9Gn07hcSyoxr2ODmuEtcMiFmXzzyPzqr0WbFKu9jJ2gG7JAnOzmmx8FtvIPSe8OLcSzabsg7bQGuB4iYIz0C4ZeDKeu006yi8PkjnRhcSdmnUAfE7Bs7wGTvCV7i42WXVRVERAREQEREBaD0n4tppCg5xAltR5EbQbLmtgGzpcDZb6uTdJbS/FhuQDGA8bvPxXTxTeSxz8tJPUBA36+Yy7s+Kz0sILF5J4Ek+ZUt7A3IAKPVfAJXvnjk7payOrhotDQsD8TkRkcideI3jjkvGr8qBtQFzQ+L7JMDhK9SlWNRxqOjadoMgMgBwATHyzK6xZqUyoQj2MdpB146+CpCscdy6ZYzKapKi1qJa6GjOwgQc87a9yxHCmevtzuFj3naC9WhUIzVKr7dY9xAv5jJcb4uMbljyQwsJkyD4+ZFpGqyYTDOrOhsxNysrGNfVDAbGxPdmvep0/Zz2Wg5ACWkaXF5WJbxVhbyO1rSNgE265c4bIE3Fh8dF41Fwa91xnAffTWxU/HYr2rxSD+rEvub/wAolQsThWM+yQYMGZmPTVS0XPe6o5rQ4usGtJzJOt/DPcr6tN1OoGvHWBAIN8znn4hRKVYtJgSN9wQRuIWaq8OcNlr7wALuM522dBfNWzsS+VMS5z2veQLQ6DY2naFgct6iYnDhhgvBFiIMgidCEq1C4BriCAYuBNuOepVj6MZGTmB3Z6bvgtYzKCtSk0EwDlP+0LA9wFto5ZmPksoxQLgQCYzHz9Uw4d2oDQXxJFyIPxVtm9QY/YGJM8M9eHj6qxuHiIEd5v8AXmpznv24zzMDM6GPrer6NN0OLxs3tv4/7K6nq+x5r6c2AJOpyHgM3aLIDcgZ32oyHCdXA34KS+mzaAZM669xMaK2rRcwXcGtG879B32ud6uhHaIMNAmROzHa3T3XnSEpRmNBd+8DUONxJtvlZCLQQRqMx2s5nesT39kTlvNhB6oP1dTWhKZUjIkCwAsL7jMmYjKItnpPw3LdZrQW1HtgyA17xOkl0iRa54ZFeRtSbyYDraD7xabTPxIVWG5NnOkRmG2EtbHDONfBBueA594ymb1PaTfYcA4ACL7UBwEnee5bDhekeoRDqLXOtIaXCJ0+1eLxn3Ll9OYEEk/fOTSe06JuYy4KWKobYam+4AbgIBJzlT9WF9xNOv4Hn7Qc4NqNcyTG0Os2e9t/SAtrw9dj2hzHBzTcOBBB7iF83Va5iJORkDQHQefmvR5H5x18Of3Ty0SCWZttpsm3Cc87rln+PL/nosfQyLUuZ3PBmMAa5obVDSXAdkwRMTees0xxW3LyZY3G6rKi5r0nYYtqU6oyc3Z8Wmfc4eS6UuPc/wB9SpiXNqFoDLMaHWDTeQDEk5k/JdfBLc+laxUqAphmse9rX9k67jp6rE7Bkb1Q4U6FfQuNs0ztZzo5qkxUoDatDmTe2rZz7lr+ExjqPVqMc3dIIPkYWxHlDEstZzRv+axv5bcRD6XxHkQvLfHljlvHpreNRafK9N32h4298KUys0iZ8f1UKtiqLp2qDROuy0HzF1CLKGjHN7ifiStzyZz3Npxn299rxvVHXXgtIb2XP8dl3vaszMW4ZuJ/pIP9xHotfu+5WbHpvwQNxY71VmKqthj5M2DjeB9aqGzlLeSO4OdPm1sLM3lBv329zg4H3EeqluGXfpZuJ+CwlMTe8ztcePnksfKrw1oAIN7xpwHp9FRhimHcDva4fAyPFUdQYYkutx+acdz+WuUR2ucDHkpGBqEPBBgiY75HwlSiGR1SO42v6qJ+ykkkHugj/dLMtasXavKT3Oe5ziNoiZGsWkxqRmo7C7NwIMEidZyI3hXvoP1ncbH4hZ8RVY8A2Dm2idI0GixLYbYqJkXeNp32YNiPgR9FZNtxsdmJFwdx4RCwU6eTgLzb492am4HGQ1zXQ4biAYF8p4k3Csz1NKxMpsM3dIB6ro7MXIKrSpsYdo7Rm4l3VHgNYKxYmiQcxN3NLTNp7JWZ2LLhBBLrS47rzIsNfepLu9zcFrqznE7D9luZsDlmAbXzSqWyNk9aNSdfrOEGMd2XRs6FoaHeeXnuVA85s2eILc92WS1jl3brsWNFxtOEjNsT6k/BWuOew3xnPKJnIQsrAY6wH5d9/FYxY2YIysYNzxsVvl1vQxPokNgkSRBF4PDeFRzvCJPeTaY3QszmNi4uLkDL9T3LDUIzbp3p8bFzCJ4CABwb3Kpf8/fHzWEu8u/d9HyVHOV2Mm3u4Kyfriqspud2Wk+FvNSmYA/aIHAfE5Aeae029/mRVNPFYYt7T6hBEjsu2WO9A6y70uG8w+T/AGmMpuE7LHAtn7retPp6ruS8f5GuSV5fOHlIYfD1K33QInKSQ0T4kLl/+I0ahLn1A9xzO1tHyGQ8FtvSVh6jqLA0/uySHsPZcbObPGxjdC47i+TgLERfv8jmPGV1/Gsxm3t/E8+Phl6ltbo1uDeYDmA8HQfetUxmI9niXUnVi2kCIqhm2ACAYcA4ExMSL2yUBmFjsvc3xke8e5Y6mDqTIqA94/Rds89zrpfyfLh5MZqSVszsDtf8vHYGpOjnmm78J2vernch4kjqsw9T/RiGGe4O2VqL8JV12D9cVFqcnvOg9Fy55fbx8Y3B3IONP/sqh/0lh9zl59bknEgw7AYkcRScR5tELXGYKs0y0EHe1wHuKlMxmOb2atcd1R/wcpzyTjEypRLLPw9dn+qm4e8KM7E0RY7QO4tKk0uc3KbLDEYjxJd/dKkf525UGdd5H8zGH3tTnl/xOMeaMRRP2vQrICw5Pnuv7lP/AM8Y6IeKbxqHYemZ74aFhdzuee1g8CTxwzPhCvO/UOLC3Yz2yBxB+SkNa09l8+KxHnQD2sDgfCi5v9rwq/5kpf8Ax+FHd7Ue56s8lnwcIkMwjjk9Smcnv0eD4FQKnOemWkNwbGOP2mVKsjwe5wPksmH5XY4DaGw7iQR7pHjZdsM8b76S4X4eh+yvH2m+qsJeNR5qM57s7xvFx6K52GfPxlder6Y9JPtTFwD3gH3hYzsm5a2cpAg/9MKTTZ1RMEqmwNynGX3E5IzqDDntDXOw9EZhGavPCAPiVLFAHIx6q52Fdvae8FTjivKsIwNM/wDqHx//ACsNXCCCAXQd2wZ8AQfRSThTub5kfBU/ZHcB/UpxxXlUB+EGj3jvYT6yrW4a93jyMr0Dh3DULGdrROMXkhHCbnA9/wAouhwQz2/+n9VLex0TAKwj/S3yTjDkxNwbNdo8JEeglZQxjcmgccz5lXCdI4xEeJyCxPcNTPdl55nw81LJFl2v9qDrMccvkq06ZeQNNToraNEvIaATJADRqTYAAZkrqfM3mTsAVMS0T9mn67T+P8vnuHLPyTCdqn8wuQfY0xVcIc9rQ0ahvak8SSPADetyVEXgyyuV2iNjcI2qxzHiWuF/gRuIXKOdvNWvQJe1hq089tolzf8AUwX8RI7sl18rwOU+bzqsluIeyeE/ELWGdxqxwV9ds7j6q0VBvXVMf0avqGTiWuO9zDPntFePV6JcR9mvS8Q8fArvPPPk20T2vE+isfUJ1Hl+q3U9E+MGVTDn+qoP+woOi7GjXDn+t/xYr+zCrtpHtHcFQ1Xbh5/ot9b0a4wfYw343fkV3/DfGfcw343fkTlj9w258a7t3qnt3bvVdAPRtjPuYb8TvyK13RljTphR/W/8icsPs5NCGId931Cu/aDuPp81uzuivHH7WFH9dT/xoOijHfxMN+Op/wCNOeH2cmk+3P3XeTfzJ7X+U/hb+Zbv/wAKsd/Gw/nU/IqHoox38bD/AIn/AJFP2YLyaU2p/KR4D8yznEWiIOpt8lth6KMf/Gw/4n/kWM9FXKP8TD/if+ROeKcq1Jr3Ay10fW6yk08c4CDB45el/etkHRXyh/Eo/jd+RXjopxxzfR/G78is82OPpm9+2rHlGNyDlEzpHettZ0T4oZuoHve/8ix1OijFaex7g93uLU/9F37TjGus5SaNR5rO3lJv3h5mfcvRqcwOUWdnDMfxa9nxdKsHNvlRtv2Nx7jTK6zzY35OMRP8Rbvb4H5hXf4g36Kzu5tY458nuJ3xT+BCx/5Ix7ssE8f1sHven7Z9nGIWIx7RoVCHK4udlxAsSMgdxOUrY6XRpyg/NjWD+ao0/wBsr0cN0ZY1rS0uo7JEFpcYI/CueXn1f5OMadT5SLrgCPP5Kr8VOg8b/ILaz0UYtvYfSAOm24+9iyt6LsYe0+n+M/Bis/Imu1kkaU6pvP6eC97kTmzWrlpIFNhze/4M7TvQcVtuA6Oa7DO1Rad4LyfMtXu4fmfVHarjwaT7yFjLz79Kkc3OQsHhQCzr1NajhLr57MWaO6/ErZmYlpycF4uH5u7OdVx8APmvSo8mMbvPeV5rd3dp0nIrQ2MlcogiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiIP/9k=',
    },
    {
        label: 'NIKE Jordan',
        imgPath:
            'https://cdn.shopify.com/s/files/1/0245/0866/1806/products/Puma-main.jpg?v=1596690160',
    },
];

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 400,
        flexGrow: 1,
        margin: '0px auto',
        backgroundColor: 'white',
    },
    header: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: 30,
        paddingLeft: '0',
        backgroundColor: 'white',
    },
    img: {
        height: 200,
        display: 'block',
        maxWidth: 600,
        overflow: 'hidden',
        width: '100%',
        borderRadius: '10px',
    },
}));


const Carousel = () => {
    const classes = useStyles();
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = tutorialSteps.length;

    const handleStepChange = (step) => {
        setActiveStep(step);
    };

    return (
        <div className={classes.root}>
            <Grid id="caros1" container justify='center'>
                <Paper square elevation={0} className={classes.header}>
                    <Typography style={{ color: 'black' }}>{tutorialSteps[activeStep].label}</Typography>
                </Paper>
                <AutoPlaySwipeableViews
                    axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                    index={activeStep}
                    onChangeIndex={handleStepChange}
                    enableMouseEvents
                >
                    {tutorialSteps.map((step, index) => (
                        <div key={step.label}>
                            {Math.abs(activeStep - index) <= 2 ? (
                                <img className={classes.img} src={step.imgPath} alt={step.label} />
                            ) : null}
                        </div>
                    ))}
                </AutoPlaySwipeableViews>
            </Grid>
        </div>
    );
};

export default Carousel;