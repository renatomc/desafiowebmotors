import React from 'react';
import { FaCarSide, FaMotorcycle } from 'react-icons/fa';

export const city = [
  { id: 0, label: 'Todas' },
  { id: 1, label: 'Guarulhos' },
  { id: 2, label: 'São Paulo' },
];

export const radius = [
  { id: 0, label: 'Todos' },
  { id: 1, label: '100km' },
  { id: 2, label: '50km' },
  { id: 3, label: '40km' },
  { id: 4, label: '30km' },
];

export const years = [
  { id: 0, label: 'Todos' },
  { id: 1, label: '2021' },
  { id: 2, label: '2020' },
  { id: 3, label: '2019' },
  { id: 4, label: '2018' },
];

export const price = [
  { id: 1, label: 'R$10.000 à R$20.000' },
  { id: 2, label: 'R$20.000 à R$30.000' },
  { id: 3, label: 'R$30.000 à R$40.000' },
  { id: 4, label: 'R$40.000 à R$100.000' },
];

export const options = [
  {
    id: 1,
    title: 'Comprar',
    subtitle: 'Carros',
    Icon: <FaCarSide size={35} color="#f3123c" />,
  },
  {
    id: 2,
    title: 'Comprar',
    subtitle: 'Motos',
    Icon: <FaMotorcycle size={35} color="#f3123c" />,
  },
];
