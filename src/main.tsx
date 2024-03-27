import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './index.css';
import Home from './Pages/Home/index.tsx';
import CRM from './Pages/Produto-CRM/index.tsx';
import Empresa from './Pages/Empresa/index.tsx';
import Cadastro from './Pages/Cadastro/index.tsx';
import Login from './Pages/Login/index.tsx';
import SC from './Pages/Produto-SC/index.tsx';
import Equipe from './Pages/Equipe/index.tsx';
import MC from './Pages/Produto-MC/index.tsx';

const App = () => {
  type ClickData = {
    timestamp: string;
    xPosition: number;
    yPosition: number;
    pageURL: string;
  }
  // Array para armazenar os dados
  const data: ClickData[] = [];

  // Função para coletar cliques, posição do mouse e URL da página atual
  const trackClickAndPosition = (event: MouseEvent) => {
    const clickData = {
      timestamp: new Date().toISOString(),
      xPosition: event.clientX,
      yPosition: event.clientY,
      pageURL: window.location.href // Obtém a URL da página atual
    };

    // Adiciona os dados ao array
    data.push(clickData);
  }

  // Função para salvar os dados em CSV
  const saveDataToCSV = () => {
    let csvContent = "data:text/csv;charset=utf-8,";
    csvContent += "Timestamp,X Position,Y Position,Page URL\n";

    data.forEach((click) => {
      csvContent += click.timestamp + "," + click.xPosition + "," + click.yPosition + "," + click.pageURL + "\n";
    });

    // Cria um link para download do CSV
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "click_data.csv");
    document.body.appendChild(link);

    // Simula um clique no link para iniciar o download
    link.click();
  }

  useEffect(() => {
    // Adiciona um ouvinte de eventos para o clique do mouse
    document.addEventListener('click', trackClickAndPosition);

    // Limpa o evento quando o componente é desmontado
    return () => {
      document.removeEventListener('click', trackClickAndPosition);
    }
  }, []); // Apenas executa o efeito uma vez, sem dependências

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/empresa" element={<Empresa />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/produto-servicecloud" element={<SC />} />
        <Route path="/equipe" element={<Equipe />} />
        <Route path="/login" element={<Login />} />
        <Route path="/produto-marketingcloud" element={<MC />} />
        <Route path="/produto-crm" element={<CRM />} />
      </Routes>

      <button onClick={saveDataToCSV}>Salvar em CSV</button>
    </Router>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
