import React from 'react'
import "../SwipeButtons/SwipeButtons.css"
import ReplyIcon from "@material-ui/icons/Reply";
import CloseIcon from "@material-ui/icons/Close";
import StarRateIcon from "@material-ui/icons/StarRate";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FlashOnIcon from "@material-ui/icons/FlashOn";
import IconButton from "@material-ui/core/IconButton";




function SwipeButtons() {
    return (
        <div className='SwipeButtons'>
            <IconButton className='SwipeButtons_repeat'>
                <ReplyIcon fontSize='large' />
            </IconButton>        <IconButton className='SwipeButtons_left'>
                <CloseIcon fontSize='large' />
            </IconButton>        <IconButton className='SwipeButtons_star'>
                <StarRateIcon fontSize='large' />
            </IconButton>        <IconButton className='SwipeButtons_right'>
                <FavoriteIcon fontSize='large' />
            </IconButton>        <IconButton className='SwipeButtons_lightning'>
                <FlashOnIcon fontSize='large' />
            </IconButton>
        </div>
    )
}

export default SwipeButtons