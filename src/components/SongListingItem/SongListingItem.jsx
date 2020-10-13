import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import PlayIcon from '@material-ui/icons/PlayCircleFilled';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
// import AudioPlayer from '../AudioPlayer/AudioPlayer';
import './SongListingItem.css';

import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: '36ch',
        backgroundColor: theme.palette.background.paper,
    },
    inline: {
        display: 'inline',
    },
}));

const SongListingItem = (props) => {
    const { items } = props;
    const classes = useStyles();
    const [song, setSong] = React.useState(null);
    const [showComponent, setShowComponentFlag] = React.useState(false); // set this default state to null instead of false

    function handleClick(item) {
        setShowComponentFlag(true);
        setSong(item);
    }

    // function playSong(item) {
    //     console.log("play sound path", "http://localhost:8080/playSong/" + item.id);
    //     console.log("play sound item", item);
    //     console.log("play sound props", props);
    //     const url = "http://localhost:8080/playSong/" + item.id;
    //     // const response = fetch(url);
    //     console.log("resp", url);
    //     // fetch("http://localhost:8080/playSong/" + item.id)
    //     //     .then(res => {
    //     //         console.log("res 1 ", res);
    //     //         // res.json();
    //     //         // console.log("res", res.json());
    //     //     });
    //     return <audio>
    //         <source src={url} type="audio/mpeg" />
    //     </audio>;
    // };

    return (
        <div className="song_listing_item">
            <List className={classes.root}>
                {items && items.length > 0 ?
                    items.map(item => (
                        <ListItem alignItems="flex-start" key={item.id}>
                            <ListItemAvatar>
                                <Avatar alt="M" src={item.image} />
                            </ListItemAvatar>
                            <ListItemText
                                primary={item.title}
                                secondary={
                                    <React.Fragment>
                                        <Typography
                                            component="span"
                                            variant="body2"
                                            className={classes.inline}
                                            color="textPrimary"
                                        >
                                            {item.name}
                                        </Typography>
                                    </React.Fragment>
                                }
                            />
                            <ListItemSecondaryAction>
                                <IconButton edge="end" aria-label="play" onClick={() => handleClick(item)}>
                                    <PlayIcon />
                                </IconButton>
                            </ListItemSecondaryAction>
                        </ListItem>
                    )) :
                    <ListItem alignItems="flex-start" key={items.id}>
                        <ListItemAvatar>
                            <Avatar alt="M" src={items.image} />
                        </ListItemAvatar>
                        <ListItemText
                            primary={items.title}
                            secondary={
                                <React.Fragment>
                                    <Typography
                                        component="span"
                                        variant="body2"
                                        className={classes.inline}
                                        color="textPrimary"
                                    >
                                        {items.name}
                                    </Typography>
                                </React.Fragment>
                            }
                        />
                        <ListItemSecondaryAction>
                            <IconButton edge="end" aria-label="play" onClick={() => handleClick(items)}>
                                <PlayIcon />
                            </IconButton>
                        </ListItemSecondaryAction>
                    </ListItem>
                }
                {showComponent && song ?
                    <div className="audio-player">
                        <AudioPlayer
                            autoPlay
                            src="http://humanhighway.github.io/react-audio-player/assets/acadia.mp3"
                            // src="http://localhost:8080/playSong/ + { song.id }"
                            onPlay={e => console.log("onPlay")}
                        />
                    </div>
                    : null}
            </List>
        </div>
    );
}

export default SongListingItem;