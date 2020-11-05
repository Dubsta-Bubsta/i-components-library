import React from 'react';
import { Table, TableHead, TableBody, TableRow, TableCell,  } from '../src'

export default {
  title: 'Table',
};

export const TableExample = ({ id, name }) => {
  return (
    <Table>
    <TableHead>
      <TableRow>
        <TableCell variant="head">Имя</TableCell>
        <TableCell variant="head">Почта</TableCell>
        <TableCell variant="head">Приоритет</TableCell>
          <TableCell variant="head">Принял / Дата</TableCell>
        <TableCell variant="head">Статус</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      <TableRow>
        <TableCell>Vladimir V Vitkin</TableCell>
        <TableCell>ex@m.com</TableCell>
        <TableCell>-</TableCell>
        <TableCell>25.06.2020</TableCell>
        <TableCell>В работе</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Vladimir V Vitkin</TableCell>
        <TableCell>ex@m.com</TableCell>
        <TableCell>-</TableCell>
        <TableCell>25.06.2020</TableCell>
        <TableCell>В работе</TableCell>
      </TableRow>
    </TableBody>
  </Table>
  );
};
