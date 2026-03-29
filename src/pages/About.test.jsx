import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import '@testing-library/jest-dom';
import Sobre from './About'; 

describe('Página Sobre', () => {
  it('deve renderizar as informações do projeto e o nome do desenvolvedor', () => {
    render(<Sobre />);
    
    expect(screen.getByText('Sobre o Projeto')).toBeInTheDocument();
    expect(screen.getByText('Guilherme Arthur Wilhner')).toBeInTheDocument();
  });
});