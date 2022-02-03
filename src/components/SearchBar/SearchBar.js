
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';
import {useState} from "react";
import SearchButton from "../Buttons/SearchButton";
import styled from 'styled-components';

export default function CustomizedInputBase(props) {

    const [ searchedItem, setSearchedItem ] = useState()

    const searchIdHandler = (event) => {
        setSearchedItem(event.target.value)
    }

    return (
        <Container>
            <Paper
                component="form"
                sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
            >
                <InputBase
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="Search Superhero by ID"
                    inputProps={{ 'aria-label': 'search google maps' }}
                    onChange={searchIdHandler}
                />
                <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
                    <SearchIcon />
                </IconButton>
                <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />

            </Paper>
            <SearchButton onClick={
                () => props.setSearched(searchedItem)
            }/>
        </Container>
    );
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  background: #EFEFF4;
  padding: 30px 400px;
`