'use client'

import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@nextui-org/react";
import React from 'react'

const Education = () => {
  return (
    <div className='text-center space-y-5' id='education'>
      <h2 className='title'>Education</h2>
      <div>
        <Table isStriped removeWrapper aria-label="Example static collection table">
          <TableHeader>
            <TableColumn>YEAR</TableColumn>
            <TableColumn>DEGREE</TableColumn>
            <TableColumn>FIELD</TableColumn>
          </TableHeader>
          <TableBody>
            <TableRow key="1">
              <TableCell>2015 - Now</TableCell>
              <TableCell>Diploma</TableCell>
              <TableCell>Mathematics</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

export default Education