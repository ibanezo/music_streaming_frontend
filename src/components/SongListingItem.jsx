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
import './SongListingItem.css';

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
    const {items} = props;
    const classes = useStyles();
        return (
            <div className="song_listing_item">
                <List className={classes.root}>
                    {items.map(item => (
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
                                {/* <Typography
                                    component="span"
                                    variant="body2"
                                    className={classes.inline}
                                    color="textPrimary"
                                >
                                 {item.releaseDate}
                                </Typography> */}
                                </React.Fragment>
                            }
                            />
                            <ListItemSecondaryAction>
                            <IconButton edge="end" aria-label="play">
                                <PlayIcon />
                            </IconButton>
                            </ListItemSecondaryAction>
                        </ListItem>
                    ))}
                </List>
            </div>
        );
    }

export default SongListingItem;