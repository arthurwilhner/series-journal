import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import Lista from './List';
import api from '../services/api';

vi.mock('../services/api');

describe('Página de Listagem', () => {
  it('deve buscar os dados da API e exibi-los na tela', async () => {
    const mockSeries = [
      { 
        id: 1, titulo: 'Breaking Bad', numeroTemporadas: 5, 
        diretor: 'Vince Gilligan', produtora: 'AMC', 
        categoria: 'Drama', dataLancamento: '2008-01-20', dataAssistido: '2023-01-01' 
      }
    ];

    api.get.mockResolvedValueOnce({ data: mockSeries });

    render(
      <BrowserRouter>
        <Lista />
      </BrowserRouter>
    );

    expect(screen.getByText('Minhas Séries')).toBeInTheDocument();

    const serieTitulo = await screen.findByText('Breaking Bad');
    expect(serieTitulo).toBeInTheDocument();
  });
});