import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Add from './button';


  
  export default function LibraryHeader() {
   
  
    return (
      <div >
        <AppBar position="static">
          <Toolbar>
            
              Library Application
              <Add/>
          </Toolbar>
        </AppBar>
      </div>
    );
  }