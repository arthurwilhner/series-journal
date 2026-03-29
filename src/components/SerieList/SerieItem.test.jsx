// src/components/SerieList/SerieItem.test.jsx
import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import axios from 'axios';
import SerieItem from './SerieItem';
import '@testing-library/jest-dom';

// 1. Dizemos ao Vitest para simular (mock) o funcionamento do axios
vi.mock('axios');

describe('Componente SerieItem', () => {
  // Criamos uma série de mentira para passar como propriedade (prop)
  const serieMock = {
    id: 1,
    titulo: 'Breaking Bad',
    numeroTemporadas: 5,
    dataLancamento: '2008-01-20',
    diretor: 'Vince Gilligan',
    produtora: 'AMC',
    categoria: 'Drama',
    dataAssistido: '2023-01-01'
  };

  it('deve exibir o poster retornado pela OMDb API', async () => {
    // 2. Configuramos a simulação para devolver um link de imagem com sucesso
    axios.get.mockResolvedValueOnce({
      data: { Poster: 'https://meu-poster-falso.jpg' }
    });

    // Renderizamos o componente
    render(<SerieItem serie={serieMock} onExcluir={vi.fn()} onEditar={vi.fn()} />);

    // 3. Usamos o findByAltText porque a chamada é assíncrona (ele espera a imagem aparecer no ecrã)
    const imagem = await screen.findByAltText('Poster de Breaking Bad');

    // 4. Verificamos se a imagem está presente e se tem o link correto (que simulámos)
    expect(imagem).toBeInTheDocument();
    expect(imagem).toHaveAttribute('src', 'https://meu-poster-falso.jpg');
  });

  it('deve exibir a imagem de fallback caso a API não encontre o poster', async () => {
    // 2. Configuramos a simulação para devolver 'N/A' (comportamento da OMDb quando não acha imagem)
    axios.get.mockResolvedValueOnce({
      data: { Poster: 'N/A' }
    });

    render(<SerieItem serie={serieMock} onExcluir={vi.fn()} onEditar={vi.fn()} />);

    const imagem = await screen.findByAltText('Poster de Breaking Bad');

    // 4. Verificamos se o componente assumiu a imagem de erro/placeholder
    expect(imagem).toBeInTheDocument();
    expect(imagem).toHaveAttribute('src', 'https://via.placeholder.com/100x150?text=Sem+Poster');
  });
});