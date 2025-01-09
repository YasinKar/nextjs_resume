'use client'

import React from 'react'
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@nextui-org/react";

type LanguagesProps = {
  languages: { id: number, language: string, status: string }[]
}

const Languages: React.FC<LanguagesProps> = ({ languages }) => {
  return (
    <div className='section' id='languages'>
      <h2 className='title'>Languages</h2>
      <div>
        <Table isStriped removeWrapper aria-label="Example static collection table">
          <TableHeader>
            <TableColumn>Language</TableColumn>
            <TableColumn>STATUS</TableColumn>
          </TableHeader>
          <TableBody>
            {languages.map(language => (
              <TableRow key={language.id}>
                <TableCell>{language.language}</TableCell>
                <TableCell>{language.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

export default Languages