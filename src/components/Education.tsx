'use client'

import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@nextui-org/react";
import React from 'react'

type EducationProps = {
  educations: { id: number, year: string, degree: string, field: string }[]
}

const Education: React.FC<EducationProps> = ({ educations }) => {
  return (
    <div className='section' id='education'>
      <h2 className='title'>Education</h2>
      <div>
        <Table isStriped removeWrapper aria-label="Example static collection table">
          <TableHeader>
            <TableColumn>YEAR</TableColumn>
            <TableColumn>DEGREE</TableColumn>
            <TableColumn>FIELD</TableColumn>
          </TableHeader>
          <TableBody>
            {
              educations.map(education => (
                <TableRow key={education.id}>
                  <TableCell>{education.year}</TableCell>
                  <TableCell>{education.degree}</TableCell>
                  <TableCell>{education.field}</TableCell>
                </TableRow>
              ))
            }
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

export default Education