/* eslint-disable import/no-anonymous-default-export */
import React from 'react'
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import employees from './employees'


export default function Table() {
    <BootstrapTable data={employees} striped hover>
    <TableHeaderColumn isKey dataField='id'>Product ID</TableHeaderColumn>
    <TableHeaderColumn dataField='name'>Product Name</TableHeaderColumn>
    <TableHeaderColumn dataField='price'>Product Price</TableHeaderColumn>
</BootstrapTable>
}
