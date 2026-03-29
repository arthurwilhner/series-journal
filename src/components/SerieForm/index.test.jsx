import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import SerieForm from './index'; 


vi.mock('../../services/api');

describe('Componente SerieForm', () => {
  it('deve renderizar todos os campos do formulário corretamente', () => {
    render(
      <BrowserRouter>
        <SerieForm />
      </BrowserRouter>
    );
    
    
    expect(screen.getByText('Título')).toBeInTheDocument();
    expect(screen.getByText('Número de Temporadas')).toBeInTheDocument();
    expect(screen.getByText('Diretor')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Confirmar/i })).toBeInTheDocument();
  });
});