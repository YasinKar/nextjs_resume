'use client'

import React from 'react'
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@nextui-org/react";

const Languages = () => {
  return (
      <div className='text-center space-y-5' id='languages'>
        <h2 className='title'>Languages</h2>
        <div>
          <Table isStriped removeWrapper aria-label="Example static collection table">
            <TableHeader>
              <TableColumn>Language</TableColumn>
              <TableColumn>STATUS</TableColumn>
            </TableHeader>
            <TableBody>
              <TableRow key="1">
                <TableCell>English</TableCell>
                <TableCell>Proficient</TableCell>
              </TableRow>
              <TableRow key="2">
                <TableCell>Persian</TableCell>
                <TableCell>Native</TableCell>
              </TableRow>
              <TableRow key="3">
                <TableCell>Turkish</TableCell>
                <TableCell>Native</TableCell>
              </TableRow>
              <TableRow key="4">
                <TableCell>Kurdish</TableCell>
                <TableCell>Native</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
    </div>
  )
}

export default Languages