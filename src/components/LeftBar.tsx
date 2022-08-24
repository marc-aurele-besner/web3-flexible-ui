import React from 'react'
import { styled } from '@mui/material/styles';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import CallIcon from '@mui/icons-material/Call';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import Drawer from '@mui/material/Drawer';

import useControls from '../states/controls'

const StyledListItem = styled(ListItem)`
    cursor: pointer;
`

const LeftBar: React.FC = () => {
    const leftBarOpen = useControls(state => state.leftBarOpen)
    const setAction = useControls(state => state.setAction)
    const setLeftBarOpen = useControls(state => state.setLeftBarOpen)
    const setTypeSelected = useControls(state => state.setTypeSelected)

  return (
    <>
        <Drawer
            anchor="left"
            open={leftBarOpen}
            onClose={() => setLeftBarOpen(false)}
        >
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            <ListItem>
                <ListItemText primary="Select a action" />
            </ListItem>
            <StyledListItem onClick={() => {
                setAction("deploy")
                setLeftBarOpen(false)
                }}>
                <ListItemAvatar>
                <Avatar>
                    <ArrowUpwardIcon />
                </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Deploy" secondary="Deploy contracts" />
            </StyledListItem>
            <StyledListItem onClick={() => {
                setTypeSelected("function")
                setAction("")
                setLeftBarOpen(false)
                }}>
                <ListItemAvatar>
                <Avatar>
                    <CallIcon />
                </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Call" secondary="Make simple calls to your contracts" />
            </StyledListItem>
            <StyledListItem onClick={() => {
                setAction("test")
                setLeftBarOpen(false)
                }}>
                <ListItemAvatar>
                <Avatar>
                    <BeachAccessIcon />
                </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Tests" secondary="Build & Run test against your contracts" />
            </StyledListItem>
            <StyledListItem onClick={() => {
                setAction("routine")
                setLeftBarOpen(false)
                }}>
                <ListItemAvatar>
                <Avatar>
                    <AutoAwesomeIcon />
                </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Routine" secondary="Build and use routines" />
            </StyledListItem>
        </List>
        </Drawer>
    </>
  )
}

export default LeftBar
