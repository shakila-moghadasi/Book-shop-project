import React from 'react';
import TragedyBooks from './Cards/TragedyBooks';
import FantasyBooks from './Cards/FantasyBooks';
import NovelBooks from './Cards/NovelBooks';
import PoemBooks from './Cards/PoemBooks';
import ComedyBooks from './Cards/ComedyBooks';
import { Link as RouterLink } from 'react-router-dom';
import {Link as MaterialLink} from '@mui/material';



export default function Home() {

    return (
      <div> 
        <div>jj</div>
        <br/>
        <div>jj</div>
        <br/>
        <MaterialLink sx={{ ml:22, color: "#000000", fontSize: 50 }} component={RouterLink} to='/tragedy'>Tragedy</MaterialLink>
        <TragedyBooks/>
        <br/>
        <MaterialLink sx={{ ml:22, color: "#000000", fontSize: 50 }} component={RouterLink} to='/fantasy'>Fantasy</MaterialLink>
        <FantasyBooks/>
        <br/>
        <MaterialLink sx={{ ml:22, color: "#000000", fontSize: 50 }} component={RouterLink} to='/novel'>Novel</MaterialLink>
        <NovelBooks/>
        <br/>
        <MaterialLink sx={{ ml:22, color: "#000000", fontSize: 50 }} component={RouterLink} to='/poem'>Poem</MaterialLink>
        <PoemBooks/>
        <br/>
        <MaterialLink sx={{ ml:22, color: "#000000", fontSize: 50 }} component={RouterLink} to='/comedy'>Comedy</MaterialLink>
        <ComedyBooks/>
      </div> 
    );
  }