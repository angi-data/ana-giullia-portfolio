export const tools = ['Python', 'SQL', 'Power BI', 'Excel', 'Pandas', 'Numpy', 'Seaborn', 'PostgreSQL', 'Looker Studio']

export const techCopy = {
  pt: {
    heroEyebrow: 'Data analyst',
    heroTitleStart: 'Transformando dados em',
    heroTitleAccent: 'decisões',
    heroTitleEnd: 'estratégicas',
    heroDescription: 'Análises inteligentes que geram impacto real na saúde e nos negócios.',
    heroCta: 'Ver projetos',
    heroLink: 'Saiba mais sobre mim',
    imageAlt: 'Ana Giullia Calado em retrato profissional',
    aboutEyebrow: 'Sobre mim',
    aboutDescription:
      'Cirurgiã-dentista em transição para dados, com pós-graduação em andamento em Tecnologia e Dados em Saúde (PUC-PR). Construo e mantenho dashboards em Power BI com dados reais, da coleta e tratamento à definição de indicadores, e organizo bases seguindo a LGPD. Tenho experiência com tratamento de bases legadas e relatórios em Excel no Conselho Regional de Odontologia.',
    stackEyebrow: 'Stack & ferramentas',
    projectsEyebrow: 'Projetos em destaque',
    projectLabels: { context: 'Contexto', did: 'O que eu fiz', impact: 'Impacto', openGif: 'Abrir o dashboard em tamanho real' },
    projects: [
      {
        title: 'Análise de Capacidade e Fila de Teleconsultas',
        meta: 'Freelance · Clin · 2026',
        tagline: 'O problema não era falta de médicos. Era como a agenda estava distribuída.',
        gif: '/images/projects/portfolio_clin.gif',
        context:
          'A Clin, operadora de planos odontológicos do Norte/Nordeste com mais de 370 mil beneficiários, queria entender por que a satisfação dos pacientes com as teleconsultas estava baixa. Analisei cerca de 6 mil teleconsultas e a escala de 20 médicos ao longo de 2024. O dashboard continua em uso pela Clin.',
        did: [
          'Tratei e cruzei a base de teleconsultas com a escala médica no Power Query.',
          'Criei uma tabela calculada em DAX que reconstrói a jornada real de cada médico por dia: primeira e última consulta, janela usada, intervalo entre slots e sobrecarga.',
          'Montei o dashboard em formato de storytelling: o título de cada página é a conclusão daquela página.',
        ],
        pointsLabel: 'Insights',
        points: [
          ['A insatisfação acompanha a espera, não a duração da consulta.', 'A duração média fica estável em ~15 min o ano todo. A nota (média 3,15) cai quando a fila de espera sobe (média 15,6 min).'],
          ['A agenda reserva menos tempo do que a consulta dura.', 'Slots de 9 min em média para consultas de 15 min: déficit de 6 min por consulta e 78% de sobrecarga na agenda.'],
          ['A fila não vem da falta de tempo, vem da distribuição da agenda.', '76% dos pacientes esperaram mais de 5 min, mas as consultas ocupam só 25% da jornada disponível. Em dias cheios (16 consultas) a fila chega a ~30 min; em dias normais (9 consultas), ~10 min.'],
        ],
        impact:
          'A Clin parou de tratar o problema como falta de médicos ou de horas, que é a solução cara, e passou a ver que a correção está no agendamento: espaçar os slots ao longo da jornada que já existe.',
        tags: ['Power BI', 'DAX', 'Power Query'],
      },
      {
        title: 'Dashboard Financeiro e Operacional do Próprio Consultório',
        meta: 'Projeto próprio · 2025 – 2026',
        tagline: 'Uma dentista que trata a própria prática como produto de dados, com LGPD desde o primeiro dia.',
        gif: '/images/projects/portfolio_dentista.gif',
        context:
          'Atendo como autônoma, alugando consultórios, e precisava saber com números quais procedimentos realmente dão lucro depois de descontar material, aluguel de sala e locomoção. Ninguém pediu esse projeto: construí meu próprio sistema de BI para decidir meu próprio negócio, com os atendimentos reais de fevereiro de 2025 a janeiro de 2026.',
        did: [
          'Calculei o lucro real de cada atendimento: receita − material − aluguel − locomoção.',
          'Montei duas visões: resultados financeiros (lucro mês a mês, lucro e rendimento por procedimento) e pacientes e procedimentos (mais realizados, mais atendidos, lucro por paciente).',
          'Coloquei filtros por período, procedimento e paciente em todas as páginas.',
        ],
        pointsLabel: 'Diferenciais',
        points: [
          ['LGPD desde a modelagem.', 'O cadastro de pacientes (nome, contato, consentimento com data) fica em uma tabela restrita. As análises usam só um código anônimo (PAC-001, PAC-002…) como chave primária: o dashboard nunca expõe nome nem contato.'],
          ['Ciclo completo de BI.', 'Coleta → modelagem → governança → dashboard → decisão, feito por quem conhece o negócio por dentro.'],
        ],
        impact:
          'As decisões do consultório (quais procedimentos priorizar, onde cortar custo, como organizar a agenda entre os consultórios alugados) passaram a se basear em dados. Exemplo: o clareamento aparece como o procedimento de maior lucro.',
        tags: ['Power BI', 'DAX', 'Excel', 'Modelagem relacional', 'LGPD'],
      },
    ],
    experienceEyebrow: 'Experiência',
    experiences: [
      {
        role: 'Cirurgiã-dentista (autônoma) | Gestão orientada a dados',
        organization: 'Atendimento particular em consultórios alugados · Recife, PE',
        date: 'fev de 2025 - o momento',
        bullets: [
          'Desenvolvimento de dashboard em Power BI para monitorar a própria prática: receita, lucro e ROI por procedimento, gasto com materiais, aluguel de sala e locomoção, volume de pacientes e agendamentos.',
          'Modelagem dos dados seguindo a LGPD: cadastro de pacientes isolado em tabela restrita e análises feitas apenas com códigos anônimos (chave primária), sem expor nomes ou contatos.',
          'Uso dos indicadores para decidir quais procedimentos priorizar e como organizar a agenda entre os consultórios alugados.',
        ],
      },
      {
        role: 'Analista de Dados',
        organization: 'Conselho Regional de Odontologia de Pernambuco (CRO-PE) · Recife, PE',
        date: 'set de 2024 - dez de 2025',
        bullets: [
          'Coleta, tratamento e padronização de dados de planilhas legadas e desestruturadas, identificando e corrigindo inconsistências para análise.',
          'Construção de relatórios e dashboards em Excel (Power Query, Tabelas Dinâmicas) para apoiar as discussões e decisões da comissão.',
        ],
      },
      {
        role: 'Estagiária em Cirurgia e Traumatologia Bucomaxilofacial',
        organization: 'Hospital da Restauração · Setor de Traumatologia · Recife, PE',
        date: 'set de 2024 - dez de 2024',
        bullets: [
          'Atendimento em urgência e emergência em hospital de referência, com triagem e priorização de pacientes, em equipe multiprofissional com neurocirurgia e cirurgia geral.',
        ],
      },
    ],
    formationEyebrow: 'Formação',
    degree: 'Odontologia · 2020 - 2024',
    education: [
      {
        institution: 'Pontifícia Universidade Católica do Paraná (PUC-PR)',
        degree: 'Pós-graduação, Tecnologia e Dados em Saúde · Remoto',
        date: 'jan de 2026 - mar de 2027 (previsão)',
        description: 'Análise de dados, indicadores de desempenho, governança de dados e interoperabilidade de sistemas de saúde (HL7/FHIR).',
      },
      {
        institution: 'Universidade de Pernambuco (UPE)',
        degree: 'Bacharelado, Odontologia · Recife, PE',
        date: 'jan de 2020 - dez de 2024',
        description: 'Formação clínica com desenvolvimento em melhoria de processos, educação de pacientes e promoção da saúde.',
      },
    ],
    languagesEyebrow: 'Idiomas',
    languages: ['Português nativo', 'Inglês B2+'],
    competenciesEyebrow: 'Competências',
    competencies: ['Power BI', 'DAX', 'Power Query', 'Modelagem de dados', 'Looker Studio', 'SQL', 'PostgreSQL', 'MySQL', 'Python', 'Pandas', 'NumPy', 'Seaborn', 'Excel', 'Tabelas Dinâmicas', 'Limpeza de bases', 'Anonimização (LGPD)', 'KPIs'],
    coursesEyebrow: 'Cursos e certificações',
    courses: ['Python para Análise de Dados', 'SQL para Análise de Dados', 'Power BI Avançado', 'Análise de Dados com Pandas', 'Excel Avançado'],
    completed: 'Concluído',
    ctaTitle: 'Vamos transformar dados em decisões?',
    ctaDescription: 'Projetos, análises e dashboards que geram impacto de verdade.',
    ctaAction: 'Vamos conversar',
  },
  en: {
    heroEyebrow: 'Data analyst',
    heroTitleStart: 'Turning data into',
    heroTitleAccent: 'strategic',
    heroTitleEnd: 'decisions',
    heroDescription: 'Smart analyses that create real impact in healthcare and business.',
    heroCta: 'View projects',
    heroLink: 'Learn more about me',
    imageAlt: 'Professional portrait of Ana Giullia Calado',
    aboutEyebrow: 'About me',
    aboutDescription:
      'Dentist transitioning into data, currently pursuing a postgraduate degree in Health Technology and Data (PUC-PR). I build and maintain Power BI dashboards on real data, from collection and cleaning to KPI definition, and organize datasets in compliance with LGPD (Brazil’s data protection law). I have experience cleaning legacy datasets and building Excel reports at the Regional Dentistry Council.',
    stackEyebrow: 'Stack & tools',
    projectsEyebrow: 'Featured projects',
    projectLabels: { context: 'Context', did: 'What I did', impact: 'Impact', openGif: 'Open the dashboard at full size' },
    projects: [
      {
        title: 'Teleconsultation Capacity and Queue Analysis',
        meta: 'Freelance · Clin · 2026',
        tagline: 'The problem was not a shortage of doctors. It was how the schedule was distributed.',
        gif: '/images/projects/portfolio_clin.gif',
        context:
          'Clin, a dental plan operator in Brazil’s North/Northeast with more than 370,000 members, wanted to understand why patient satisfaction with teleconsultations was low. I analyzed about 6,000 teleconsultations and the roster of 20 doctors throughout 2024. The dashboard is still in use at Clin.',
        did: [
          'Cleaned and joined the teleconsultation dataset with the doctors’ roster in Power Query.',
          'Built a DAX calculated table that reconstructs each doctor’s actual workday: first and last appointment, window used, gap between slots, and overload.',
          'Designed the dashboard as a story: each page title is that page’s conclusion.',
        ],
        pointsLabel: 'Insights',
        points: [
          ['Dissatisfaction follows the wait, not the appointment length.', 'Average appointment length stays flat at ~15 min all year. The rating (3.15 average) drops when the waiting queue grows (15.6 min average).'],
          ['The schedule reserves less time than the appointment takes.', 'Slots average 9 min for 15-min appointments: a 6-min deficit per appointment and 78% schedule overload.'],
          ['The queue does not come from lack of time, but from how the schedule is distributed.', '76% of patients waited more than 5 min, yet appointments fill only 25% of the doctors’ available workday. On busy days (16 appointments) the queue reaches ~30 min; on normal days (9 appointments), ~10 min.'],
        ],
        impact:
          'Clin stopped treating the problem as a shortage of doctors or hours, which is the expensive fix, and saw that the correction lies in scheduling: spacing slots across the workday that already exists.',
        tags: ['Power BI', 'DAX', 'Power Query'],
      },
      {
        title: 'Financial and Operational Dashboard for My Own Practice',
        meta: 'Own project · 2025 – 2026',
        tagline: 'A dentist who treats her own practice as a data product, with LGPD from day one.',
        gif: '/images/projects/portfolio_dentista.gif',
        context:
          'I work as a self-employed dentist renting treatment rooms, and I needed to know, with numbers, which procedures are truly profitable after materials, room rental, and commuting. Nobody asked for this project: I built my own BI system to run my own business, on real appointments from February 2025 to January 2026.',
        did: [
          'Calculated the real profit of each appointment: revenue − materials − rent − commuting.',
          'Built two views: financial results (profit month by month, profit and revenue per procedure) and patients and procedures (most performed, most seen, profit per patient).',
          'Added filters by period, procedure, and patient on every page.',
        ],
        pointsLabel: 'Highlights',
        points: [
          ['LGPD by design.', 'The patient registry (name, contact, dated consent) lives in a restricted table. All analyses use only an anonymous code (PAC-001, PAC-002…) as the primary key: the dashboard never exposes a name or contact.'],
          ['The full BI cycle.', 'Collection → modeling → governance → dashboard → decision, done by someone who knows the business from the inside.'],
        ],
        impact:
          'Practice decisions (which procedures to prioritize, where to cut costs, how to organize the schedule across rented rooms) became data-based. Example: whitening shows up as the most profitable procedure.',
        tags: ['Power BI', 'DAX', 'Excel', 'Relational modeling', 'LGPD'],
      },
    ],
    experienceEyebrow: 'Experience',
    experiences: [
      {
        role: 'Dentist (self-employed) | Data-driven management',
        organization: 'Private practice in rented treatment rooms · Recife, PE',
        date: 'Feb 2025 - present',
        bullets: [
          'Built a Power BI dashboard to monitor my own practice: revenue, profit and ROI per procedure, spending on materials, room rental and commuting, patient volume, and scheduling.',
          'Modeled the data in compliance with LGPD: patient registry isolated in a restricted table and analyses run only on anonymous codes (primary key), never exposing names or contacts.',
          'Used the indicators to decide which procedures to prioritize and how to organize the schedule across rented rooms.',
        ],
      },
      {
        role: 'Data Analyst',
        organization: 'Regional Dentistry Council of Pernambuco (CRO-PE) · Recife, PE',
        date: 'Sep 2024 - Dec 2025',
        bullets: [
          'Collected, cleaned, and standardized data from legacy and unstructured spreadsheets, identifying and fixing inconsistencies for analysis.',
          'Built Excel reports and dashboards (Power Query, PivotTables) to support the committee’s discussions and decisions.',
        ],
      },
      {
        role: 'Intern in Oral and Maxillofacial Surgery and Traumatology',
        organization: 'Hospital da Restauração · Trauma unit · Recife, PE',
        date: 'Sep 2024 - Dec 2024',
        bullets: [
          'Urgent and emergency care at a reference hospital, with patient triage and prioritization, in a multidisciplinary team with neurosurgery and general surgery.',
        ],
      },
    ],
    formationEyebrow: 'Education',
    degree: 'Dentistry · 2020 - 2024',
    education: [
      {
        institution: 'Pontifícia Universidade Católica do Paraná (PUC-PR)',
        degree: 'Postgraduate Degree, Health Technology and Data · Remote',
        date: 'Jan 2026 - Mar 2027 (expected)',
        description: 'Data analysis, performance indicators, data governance, and health systems interoperability (HL7/FHIR).',
      },
      {
        institution: 'Universidade de Pernambuco (UPE)',
        degree: 'Bachelor degree, Dentistry · Recife, PE',
        date: 'Jan 2020 - Dec 2024',
        description: 'Clinical education with development in process improvement, patient education, and health promotion.',
      },
    ],
    languagesEyebrow: 'Languages',
    languages: ['Native Portuguese', 'English B2+'],
    competenciesEyebrow: 'Skills',
    competencies: ['Power BI', 'DAX', 'Power Query', 'Data modeling', 'Looker Studio', 'SQL', 'PostgreSQL', 'MySQL', 'Python', 'Pandas', 'NumPy', 'Seaborn', 'Excel', 'PivotTables', 'Data cleaning', 'Anonymization (LGPD)', 'KPIs'],
    coursesEyebrow: 'Courses and certifications',
    courses: ['Python for Data Analysis', 'SQL for Data Analysis', 'Advanced Power BI', 'Data Analysis with Pandas', 'Advanced Excel'],
    completed: 'Completed',
    ctaTitle: 'Shall we turn data into decisions?',
    ctaDescription: 'Projects, analyses, and dashboards that create real impact.',
    ctaAction: "Let's talk",
  },
} as const

export type TechCopy = (typeof techCopy)[keyof typeof techCopy]
