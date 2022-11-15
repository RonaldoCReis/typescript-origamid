interface cursoType {
  aulas: number;
  gratuito: boolean;
  horas: number;
  idAulas: number[];
  nivel: 'iniciante' | 'avançado';
  nome: string;
  tags: string[];
}

async function fetchCursos() {
  const response = await fetch('https://api.origamid.dev/json/cursos.json');
  const cursos: cursoType[] = await response.json();
  mostrarCursos(cursos);
}
fetchCursos();

function mostrarCursos(cursos: cursoType[]) {
  cursos.forEach((curso) => {
    document.body.innerHTML += `
      <h1 style="color: ${curso.nivel === 'iniciante' ? 'red' : 'blue'}">${
      curso.nome
    }</h1>
      <p>${curso.nivel}</p>
      <p>Aulas: ${curso.aulas}</p>
      <p>Horas: ${curso.horas}h</p>
      <p>Gratuito: ${curso.gratuito ? 'Sim' : 'Não'}</p>
      <p>Tags: ${curso.tags.join(', ')}</p>
      <p>Id Aulas: ${curso.idAulas.join(' | ')}</p>
    `;
  });
}
