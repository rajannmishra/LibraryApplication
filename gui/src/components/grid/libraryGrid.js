import React from 'react';
import { AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import ActionRenderer from '../renderer/ActionRenderer';

const columnDefs = [
    {
        headerName:"ISBN",
        field:'isbn'
    },
    {
        headerName:"Title",
        field:'title'
    },
    {
        headerName:"Publisher",
        field:'publisher'
    },
    {
        headerName:"Author",
        field:'author',
        cellRendererFramework:(params)=> params.value.map(author=>author.name).join(",")

    },
    {
        headerName:"Available",
        field:'copies',
        cellRendererFramework:(params)=>params.value>0?'true':'false'
    },
    {
        headerName:'Action',
        cellRendererFramework:ActionRenderer
        
    }

]

class LibraryGrid extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        
        rowData: [
          { ISBN: "TEST_ISBN", title: "Test_title", publisher:"Publisher", copies:10 },
          ]
      }
    }
  
    render() {
      return (
        <div className="ag-theme-alpine" style={ {height: '600px', width: '70%'} }>
          <AgGridReact
              columnDefs={columnDefs}
              rowData={this.props.bookList}>
                
          </AgGridReact>
        </div>
      );
    }
  }

  export default LibraryGrid;