
export interface Course {
  code: string;
  name: string;
  duration?: string;
  notes?: string;
}

export interface University {
  id: string;
  name: string;
  shortName: string;
  type: string;
  city: string;
  summary: string;
  courses: Course[];
  curriculum: string;
}

export const UNIVERSITIES: University[] = [
  {
    id: 'unex',
    shortName: 'UNEX',
    name: 'UNEX — Centro Universitário de Excelência (Itabuna)',
    type: 'Privada',
    city: 'Itabuna',
    summary: 'A UNEX (Centro Universitário de Excelência) possui campus em Itabuna com foco em cursos das áreas de Saúde, Direito, Administração e Tecnologia. Oferece estrutura moderna e cursos profissionais voltados ao mercado regional.',
    courses: [
      {code:'med', name:'Medicina', duration:'6 anos', notes:'Curso com laboratórios e estágios clínicos'},
      {code:'odonto', name:'Odontologia', duration:'5 anos', notes:'Clínica-escola e estágios supervisados'},
      {code:'vet', name:'Medicina Veterinária', duration:'5 anos', notes:'Laboratórios e fazenda escola em algumas unidades'},
      {code:'enf', name:'Enfermagem', duration:'4 anos', notes:'Estágios em hospitais parceiros'},
      {code:'bio', name:'Biomedicina', duration:'4 anos'},
      {code:'farm', name:'Farmácia', duration:'4 anos'},
      {code:'nut', name:'Nutrição', duration:'4 anos'},
      {code:'fisio', name:'Fisioterapia', duration:'4-5 anos'},
      {code:'psic', name:'Psicologia', duration:'5 anos'},
      {code:'dir', name:'Direito', duration:'5 anos'},
      {code:'si', name:'Sistemas de Informação', duration:'4-5 anos'}
    ],
    curriculum: 'Geralmente organizado por semestres, com disciplinas obrigatórias, optativas, práticas e estágio/TCC conforme o curso. Consulte PPCs oficiais para grades detalhadas.'
  },
  {
    id: 'unime',
    shortName: 'UNIME',
    name: 'UNIME (campus Itabuna)',
    type: 'Privada',
    city: 'Itabuna',
    summary: 'A UNIME possui ampla oferta de cursos presenciais e EAD; preços e modalidades variam por campus e curso. Foco em cursos profissionais e tecnológicos.',
    courses: [
      {code:'adm', name:'Administração'},
      {code:'agr', name:'Agronomia'},
      {code:'arq', name:'Arquitetura e Urbanismo'},
      {code:'biom', name:'Biomedicina'},
      {code:'cc', name:'Ciências Contábeis'},
      {code:'eco', name:'Ciências Econômicas'},
      {code:'dir', name:'Direito'},
      {code:'ads', name:'Análise e Desenvolvimento de Sistemas'},
      {code:'si', name:'Sistemas de Informação'},
      {code:'enf', name:'Enfermagem'},
      {code:'vet', name:'Medicina Veterinária'},
      {code:'nut', name:'Nutrição'},
      {code:'psic', name:'Psicologia'},
      {code:'jrn', name:'Jornalismo'},
      {code:'log', name:'Logística'},
      {code:'md', name:'Marketing Digital'},
      {code:'gd', name:'Gestão de RH'}
    ],
    curriculum: 'Semestral; muitos cursos possuem estágios supervisionados (saúde, educação, engenharia) e TCC/projecto integrador em cursos de tecnologia.'
  },
  {
    id: 'ftc',
    shortName: 'UniFTC',
    name: 'UniFTC / FTC Itabuna',
    type: 'Privada',
    city: 'Itabuna',
    summary: 'A rede UniFTC (FTC) possui campus em Itabuna com cursos em saúde, tecnologia e engenharias; costuma oferecer estágios e laboratórios práticos.',
    courses: [
      {code:'engc', name:'Engenharia Civil'},
      {code:'engm', name:'Engenharia Mecânica'},
      {code:'si', name:'Sistemas da Informação'},
      {code:'enf', name:'Enfermagem'},
      {code:'nut', name:'Nutrição'},
      {code:'psic', name:'Psicologia'},
      {code:'odont', name:'Odontologia'},
      {code:'vet', name:'Medicina Veterinária'},
      {code:'farm', name:'Farmácia'},
      {code:'fisi', name:'Fisioterapia'}
    ],
    curriculum: 'Grade semestral com ênfase em práticas laboratoriais e estágios para cursos da área da saúde.'
  },
  {
    id: 'uesc',
    shortName: 'UESC',
    name: 'UESC — Universidade Estadual de Santa Cruz',
    type: 'Pública',
    city: 'Ilhéus / atende Itabuna',
    summary: 'Universidade pública estadual com ampla oferta de cursos de graduação e programas de pós-graduação. Também tem oferta EaD em cursos como Letras, Pedagogia, Matemática e Biologia.',
    courses: [
      {code:'adm', name:'Administração'},
      {code:'cc', name:'Ciências Contábeis'},
      {code:'comp', name:'Ciência da Computação'},
      {code:'eco', name:'Economia'},
      {code:'dir', name:'Direito'},
      {code:'engc', name:'Engenharia Civil'},
      {code:'engmec', name:'Engenharia Mecânica'},
      {code:'engel', name:'Engenharia Elétrica'},
      {code:'med', name:'Medicina'},
      {code:'enf', name:'Enfermagem'},
      {code:'bio', name:'Biologia (EaD e presencial)'},
      {code:'mat', name:'Matemática (EaD)'},
      {code:'let', name:'Letras (EaD)'},
      {code:'ped', name:'Pedagogia (EaD)'}
    ],
    curriculum: 'Organização por semestres; disciplinas obrigatórias, optativas, estágios e TCC quando aplicável. Conferir páginas oficiais para matrizes completas.'
  }
];

export const TRANSPORT_METRICS = {
    ITABUNA: {
        fare: 3.70,
        company: 'Atlântico Transportes',
        mainLines: ['BB06 (Centro/Hosp. Base)', 'BB23 (Jorge Amado)', 'BC03 (Califórnia)', 'BC16 (Maria Pinheiro)'],
        description: 'Tarifa única municipal (R$ 3,70). Integração disponível em terminais.'
    },
    ILHEUS: {
        fare: 4.80,
        company: 'Viametro / São Miguel',
        mainLines: ['28 (Salobrinho)', 'Olivença', 'Zona Sul', 'Teotônio Vilela', 'Centro'],
        description: 'Sistema municipal (R$ 4,80). Linhas para Salobrinho atendem diretamente a UESC e UFSB.'
    }
};

export const CUSTOS = {
  // Mantidos para referência, mas o cálculo dinâmico usará TRANSPORT_METRICS
  TRANSPORTE_ITABUNA: 162.80, // Aprox 3.70 * 44
  TRANSPORTE_ILHEUS_OUTROS: 211.20, // Aprox 4.80 * 44
  ALIMENTACAO_PADRAO: 300,
  ALIMENTACAO_UNEX: 350,
  CUSTO_RU: 44,
  TRANSPORTE_SALOBRINHO: 0,
};

export const BAIRROS_POR_CIDADE: Record<string, string[]> = {
  Itabuna: ['Centro', 'Santo Antônio', 'São Caetano', 'Nova Itabuna', 'Ferradas', 'Califórnia', 'Fátima'],
  Ilhéus: ['Salobrinho', 'Centro', 'Pontal', 'Barra', 'Teotônio Vilela', 'Nelson Costa', 'Malhado', 'Olivença'],
};
