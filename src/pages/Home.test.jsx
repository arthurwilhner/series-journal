import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import Home from './Home';

describe('Página Home', () => {
  it('deve renderizar o título principal e os botões de ação', () => {
    // Como a Home tem botões de <Link>, ela precisa estar dentro do BrowserRouter no teste
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );
    
    // Verifica se os textos vitais estão na tela
    expect(screen.getByText('Series Journal')).toBeInTheDocument();
    expect(screen.getByText('Cadastrar Nova Série')).toBeInTheDocument();
    expect(screen.getByText('Visualizar Minha Lista')).toBeInTheDocument();
  });
});