import { 
  Layout, 
  Users, 
  Heart, 
  Activity, 
  Shield, 
  Clock, 
  FileText, 
  Database, 
  Globe, 
  Smartphone, 
  Zap,
  CheckCircle,
  Vote,
  School,
  BarChart,
  CheckSquare,
  Layers,
  Eye,
  Search,
  Folder,
  Cloud,
  Lock,
  Mail,
  MessageSquare,
  FileCheck,
  Building,
  Megaphone
} from 'lucide-react';

export interface Project {
  slug: string;
  title: string;
  category: string;
  description: string;
  fullDescription: string;
  image: string;
  link: string;
  features: { title: string; description: string }[];
  benefits: { title: string; description: string }[];
  heroCards?: { icon: string; title: string; description: string }[];
  detailedFeatures?: { title: string; description: string; image: string; checkList: string[] }[];
  structuredBenefits?: { icon: string; title: string; description: string }[];
  logo?: string;
}

export const blogPosts = [
  {
    id: 4,
    title: "Por que o ecommerce é essencial para o crescimento e expansão dos negócios",
    image: "https://d.storage.plugwin.net/plugwin/371713612.png",
    content: `O comércio eletrônico, ou ecommerce, tem sido uma das indústrias de crescimento mais rápido nos últimos anos. Com o aumento das compras online, cada vez mais empresas estão adotando o ecommerce como uma forma de alcançar novos clientes e expandir seus negócios.

Aqui estão algumas das principais razões pelas quais as empresas devem considerar a implementação do ecommerce:

**Maior alcance:** O ecommerce permite que as empresas alcancem um público global, em vez de ficarem limitadas a uma localidade específica. Isso significa que empresas de qualquer tamanho podem competir em um mercado global, sem ter que estabelecer uma presença física em diferentes lugares.

**Maior conveniência:** O ecommerce oferece aos consumidores a conveniência de fazer compras a qualquer hora do dia, de qualquer lugar do mundo. Isso é particularmente útil para consumidores que têm horários ocupados ou que não têm acesso fácil a lojas físicas.

**Redução de custos:** O ecommerce pode reduzir os custos de uma empresa, eliminando a necessidade de uma loja física e a equipe necessária para mantê-la. Além disso, muitas das tarefas de atendimento ao cliente podem ser automatizadas, reduzindo ainda mais os custos operacionais.

**Análise de dados:** O ecommerce permite que as empresas rastreiem e analisem o comportamento de compra dos consumidores. Isso pode ser usado para personalizar a experiência de compra do cliente e oferecer recomendações de produtos com base em suas compras anteriores.

**Integração com outras plataformas:** As plataformas de ecommerce podem ser facilmente integradas com outras plataformas de software, como sistemas de gerenciamento de estoque e contabilidade, para criar um sistema de gerenciamento de negócios mais eficiente.

**Possibilidade de crescimento:** O ecommerce oferece às empresas uma oportunidade de crescimento que não é possível com uma loja física. Com a expansão do público-alvo e a facilidade de atender aos pedidos online, as empresas podem escalar seus negócios rapidamente e com eficiência.

Em resumo, o ecommerce oferece às empresas uma oportunidade de alcançar novos mercados, reduzir custos e melhorar a experiência do cliente. Se você ainda não implementou o ecommerce em sua empresa, agora é o momento de considerar essa opção para expandir seus negócios e permanecer competitivo em um mercado em constante mudança.`
  },
  {
    id: 3,
    title: "Por que ter um site é essencial para empresas e indivíduos em um mundo cada vez mais digital",
    image: "https://d.storage.plugwin.net/plugwin/593172240.png",
    content: `Se você é uma pessoa ou empresa que ainda não tem um site, é importante considerar os benefícios que ter uma presença online pode trazer. Aqui estão algumas razões pelas quais você deve ter um site:

**Maior alcance:** Um site permite que você alcance um público muito maior do que seria possível por meio de métodos tradicionais, como publicidade em jornais ou panfletos. Com um site, você pode alcançar pessoas em qualquer lugar do mundo, a qualquer hora do dia.

**Maior visibilidade:** Com um site, você pode ser encontrado facilmente nos resultados de pesquisa do Google e de outros mecanismos de busca. Isso pode ajudar a aumentar sua visibilidade e, consequentemente, sua base de clientes.

**Maior credibilidade:** Ter um site pode aumentar sua credibilidade aos olhos dos clientes em potencial. Se alguém estiver procurando informações sobre sua empresa e não encontrar um site, isso pode levantar questões sobre a validade e a seriedade do seu negócio.

**Comunicação mais eficaz:** Um site é uma forma eficaz de se comunicar com seus clientes em potencial e existentes. Você pode compartilhar informações sobre seus produtos e serviços, responder perguntas comuns e fornecer atualizações importantes.

**Acesso a análises:** Com um site, você pode ter acesso a uma variedade de análises que podem ajudá-lo a entender melhor seus clientes e seu comportamento online. Isso pode ser útil para tomar decisões de negócios informadas.

**Oportunidades de comércio eletrônico:** Se você está no negócio de venda de produtos ou serviços, um site pode permitir que você venda diretamente para seus clientes, o que pode aumentar sua base de clientes e sua receita.

**Controle sobre sua marca:** Com um site, você tem controle total sobre a aparência e a mensagem da sua marca. Isso é importante para garantir que sua marca seja representada da maneira que você deseja.

Em resumo, ter um site pode trazer uma série de benefícios para sua empresa ou para você como pessoa. Desde o aumento do alcance e da visibilidade até o aumento da credibilidade e do controle sobre sua marca, um site é uma ferramenta essencial para qualquer pessoa ou empresa que queira crescer e prosperar no mundo digital de hoje.`
  },
  {
    id: 2,
    title: "6 razões pelas quais um site é essencial para empresas e pessoas na era digital",
    image: "https://d.storage.plugwin.net/plugwin/904588659.jpeg",
    content: `Hoje em dia, ter um site é essencial tanto para empresas quanto para pessoas que desejam se destacar na internet. Aqui estão algumas das principais razões pelas quais você deve considerar a criação de um site para si mesmo ou para sua empresa:

1. **Visibilidade na internet:** Ter um site permite que as pessoas encontrem você ou sua empresa na internet de maneira fácil e rápida. Isso aumenta a visibilidade e a credibilidade da sua marca, especialmente se o seu site for profissional e bem desenvolvido.

2. **Acessibilidade 24/7:** Com um site, as pessoas podem acessá-lo a qualquer momento, de qualquer lugar, sempre que precisarem de informações sobre você ou sua empresa. Isso é particularmente útil para empresas que desejam atender a clientes em diferentes fusos horários.

3. **Maior alcance:** Com um site, você pode atingir um público global, em vez de ficar limitado a uma localidade específica. Isso é especialmente importante para empresas que desejam expandir seus negócios e atingir novos mercados.

4. **Economia de tempo e dinheiro:** Ter um site permite que as pessoas encontrem informações sobre você ou sua empresa de maneira rápida e fácil, sem precisar entrar em contato direto com você. Isso economiza tempo e dinheiro, pois você não precisa responder a perguntas repetitivas.

5. **Conteúdo atualizado:** Com um site, você pode facilmente atualizar e adicionar informações sobre você ou sua empresa. Isso garante que as pessoas sempre tenham acesso às informações mais recentes e precisas.

6. **Oportunidades de marketing:** Ter um site permite que você aproveite as inúmeras oportunidades de marketing na internet, incluindo o marketing de conteúdo, o marketing por e-mail, a publicidade online e muito mais.

Em resumo, ter um site é uma forma eficaz de aumentar a visibilidade, a credibilidade e a presença na internet, além de oferecer muitas oportunidades de marketing. Se você ainda não possui um site, agora é a hora de considerar a criação de um.`
  }
];

export const testimonials = [
  {
    name: "Camara de Meruoca",
    image: "/assets/icons/meruoca.png",
    text: "A qualidade e a dedicação da equipe foram excepcionais, entregando um serviço que superou todas as minhas expectativas. O sistema desenvolvido ficou intuitivo, moderno e com excelente desempenho. Sem dúvida, recomendo a Plugwin Sistemas para quem busca profissionalismo e inovação."
  },
  {
    name: "Panorama Broadcast",
    image: "/assets/icons/panorama_escale.jpg",
    text: "A equipe demonstrou profissionalismo e dedicação em cada etapa do projeto, entregando um sistema eficiente e intuitivo. A qualidade do design e a usabilidade superaram minhas expectativas, tornando a experiência ainda melhor. Recomendo fortemente!"
  },
  {
    name: "Studio Tassia Mendes",
    image: "/assets/icons/tassia.png",
    text: "Tive uma excelente experiência com a Plugwin Sistemas. A equipe entregou um trabalho de alto nível, com um site ágil, intuitivo e totalmente alinhado às minhas expectativas. Além disso, o suporte sempre foi rápido e eficiente, demonstrando comprometimento e seriedade. Sem dúvida, uma empresa que vale a pena confiar!"
  },
  {
    name: "JRC Locações",
    image: "/assets/icons/jrc.png",
    text: "A Plugwin Sistemas fez um trabalho excepcional! Desde o primeiro contato, a equipe se mostrou extremamente profissional e atenciosa, garantindo que todas as minhas necessidades fossem atendidas. O sistema desenvolvido ficou incrível, com uma interface moderna e fácil de usar. Estou muito satisfeito e recomendo a todos que buscam qualidade e inovação!"
  }
];

export const projects: Project[] = [
  {
    slug: "pwmed",
    title: "PWMed",
    category: "Saúde",
    description: "Sistema integrado de gestão de clínicas, projetado para simplificar e modernizar o atendimento ao Paciente.",
    fullDescription: "PWMed é um sistema integrado de gestão de clínicas, projetado para simplificar e modernizar o atendimento ao Paciente. Visa tornar o cuidado com o paciente mais eficiente e acolhedor, com ferramentas digitais que automatizam processos e uma abordagem centrada no ser humano.",
    image: "/assets/pwmed/quadro_agenda.jpeg",
    link: "https://site.plugwin.net/pwmed",
    logo: "/assets/Logos_projetos/logo_icone.png",
    features: [
      { title: "Atendimento Inteligente e Humanizado", description: "Visa tornar o cuidado com o paciente mais eficiente e acolhedor." },
      { title: "Plataforma Centralizada", description: "Integra agendamentos, prontuários eletrônicos e faturamento." }
    ],
    benefits: [
      { title: "Integração total", description: "O PWMed oferece integração total com sistemas de faturamento e seguros." }
    ],
    heroCards: [
      { icon: "Heart", title: "Atendimento Humanizado", description: "Foco total na experiência e bem-estar do paciente." },
      { icon: "Layout", title: "Plataforma Centralizada", description: "Todos os dados e processos em um único lugar seguro." },
      { icon: "Users", title: "Interface Intuitiva", description: "Design pensado para facilitar o dia a dia dos profissionais." },
      { icon: "Activity", title: "Foco no Paciente", description: "Jornada ágil e assertiva desde o primeiro contato." }
    ],
    detailedFeatures: [
      { 
        title: "Criação de Usuários e Gestão de Acessos", 
        description: "Estrutura de acesso inteligente e personalizada. Cada usuário é cadastrado conforme sua função, com permissões específicas que otimizam o fluxo de trabalho e garantem segurança total da informação.",
        image: "/assets/pwmed/criacao_usuarios.jpeg",
        checkList: ["Perfis personalizados", "Controle total de logs", "Segurança avançada"]
      },
      { 
        title: "Cadastro de Pacientes Simplificado", 
        description: "Uma jornada ágil e intuitiva. Do primeiro contato ao histórico completo, tudo na palma da mão. Garantimos praticidade e eficiência em cada etapa do atendimento.",
        image: "/assets/pwmed/agen_listagem.jpeg",
        checkList: ["Histórico completo", "Praticidade garantida", "Acesso rápido"]
      },
      { 
        title: "Gestão Financeira Integrada", 
        description: "Controle completo das finanças da sua clínica com relatórios detalhados, controle de receitas e despesas, e integração com sistemas de pagamento.",
        image: "/assets/pwmed/financeiro2.png",
        checkList: ["Relatórios financeiros", "Controle de receitas", "Integração de pagamentos"]
      },
      { 
        title: "Agenda Inteligente", 
        description: "Visualize e gerencie todos os agendamentos em um painel intuitivo. Otimize o tempo da sua equipe e reduza faltas com lembretes automáticos.",
        image: "/assets/pwmed/quadro_agenda.jpeg",
        checkList: ["Painel visual", "Lembretes automáticos", "Otimização de horários"]
      }
    ],
    structuredBenefits: [
      { icon: "CheckCircle", title: "Integração Total", description: "Sistemas de faturamento e operadoras de seguros em um só lugar." },
      { icon: "CheckCircle", title: "Suporte 24/7", description: "Equipe técnica disponível todos os dias para te auxiliar." },
      { icon: "CheckCircle", title: "Melhorias Contínuas", description: "Atualizações frequentes baseadas no feedback dos usuários." },
      { icon: "CheckCircle", title: "Preços Transparentes", description: "Planos acessíveis e sem taxas inesperadas." },
      { icon: "CheckCircle", title: "Gestão Eficiente", description: "Relatórios estratégicos para decisões mais inteligentes." },
      { icon: "CheckCircle", title: "Agilidade", description: "Simplifique a rotina da sua clínica com poucos cliques." }
    ]
  },
  {
    slug: "pwleg",
    title: "PWLeg",
    category: "Legislativo",
    description: "A Solução Completa para Votação Digital, Gestão de Tempo e Chamadas.",
    fullDescription: "O PWLeg é um sistema que vai agilizar o trabalho parlamentar, otimizando o processo legislativo de votação e discussão das matérias.",
    image: "/assets/pwleg/gestao_eficiente1.png",
    logo: "/assets/Logos_projetos/logopwlegini.png",
    link: "https://site.plugwin.net/pwleg",
    features: [],
    benefits: [],
    heroCards: [
      { icon: "Vote", title: "Votação Eletrônica", description: "Permite que os participantes registrem seus votos de forma rápida." },
      { icon: "Clock", title: "Controle de Tempo", description: "Tribuna equipada com controle de tempo e sistema de sirene." },
      { icon: "FileText", title: "Atas Automatizadas", description: "Agiliza a criação de registros oficiais de reuniões." },
      { icon: "Users", title: "Gestão de Presenças", description: "Monitora e registra a participação de indivíduos." }
    ],
    detailedFeatures: [
      {
        title: "Gestão Completa do Processo Legislativo",
        description: "Organiza, monitora e agiliza todas as etapas relacionadas à criação e tramitação de propostas, garantindo transparência e eficiência.",
        image: "/assets/pwleg/gestao_eficiente1.png",
        checkList: ["Tramitação digital", "Transparência total", "Histórico de votações"]
      },
      {
        title: "Controle de Tempo e Tribuna",
        description: "Sistema avançado de controle de tempo para discursos e debates, com cronometragem precisa e alertas automáticos.",
        image: "/assets/pwleg/controle_tempo22.png",
        checkList: ["Cronometragem precisa", "Alertas automáticos", "Gestão de tribuna"]
      },
      {
        title: "Registro de Presenças",
        description: "Monitora e registra a participação dos parlamentares em sessões, garantindo transparência e controle de quorum.",
        image: "/assets/pwleg/presencas1.png",
        checkList: ["Controle de quorum", "Registro automático", "Relatórios de presença"]
      },
      {
        title: "Atas Automatizadas",
        description: "Geração automática de atas com todos os registros da sessão, incluindo votações, presenças e deliberações.",
        image: "/assets/pwleg/atas1.png",
        checkList: ["Geração automática", "Registro completo", "Exportação em PDF"]
      }
    ],
    structuredBenefits: [
      { icon: "CheckCircle", title: "Atualizações garantidas", description: "Somos os mantenedores oficiais do PWLeg." },
      { icon: "CheckCircle", title: "Evolução constante", description: "Seu investimento impulsiona o aprimoramento do software." },
      { icon: "CheckCircle", title: "Embarque facilitado", description: "Nossa equipe simplifica todo o processo de adoção." },
      { icon: "CheckCircle", title: "Consultoria de Sucesso", description: "Estamos aqui para superar os desafios junto com você." }
    ]
  },
  {
    slug: "pwedu",
    title: "PWEdu",
    category: "Educação",
    description: "Plataforma que otimiza a Gestão Escolar através da análise inteligente de dados.",
    fullDescription: "O PWEdu é uma plataforma que otimiza a Gestão Escolar através da análise inteligente de dados. Oferece gestão eficiente de servidores, gestão de documentos e arquivos.",
    image: "https://site.plugwin.net/assets/img/censovdc.png",
    link: "https://site.plugwin.net/pwedu",
    logo: "/assets/Logos_projetos/logo_p.png",
    features: [],
    benefits: [],
    heroCards: [
      { icon: "School", title: "Gestão Escolar", description: "Controle total da infraestrutura e recursos escolares." },
      { icon: "FileText", title: "Documentos", description: "Armazenamento e acesso a documentos importantes." },
      { icon: "Users", title: "Servidores", description: "Gerenciamento completo de alocações e afastamentos." },
      { icon: "BarChart", title: "Métricas", description: "Mais de 150 relatórios e indicadores detalhados." }
    ],
    detailedFeatures: [
      {
        title: "Integração com Educacenso/INEP",
        description: "Importação e exportação automatizadas dos dados do censo escolar, garantindo conformidade e agilidade nos processos administrativos.",
        image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1200&h=800&fit=crop",
        checkList: ["Automação de dados", "Conformidade legal", "Redução de erros"]
      },
      {
        title: "Avaliação Adaptativa",
        description: "Sistema de avaliação e relatórios personalizados com opções de notas numéricas ou conceitos, adaptando-se à metodologia da escola.",
        image: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=1200&h=800&fit=crop",
        checkList: ["Relatórios personalizados", "Flexibilidade avaliativa", "Acompanhamento pedagógico"]
      },
      {
        title: "Gestão de Servidores",
        description: "Controle completo de alocações, afastamentos e histórico funcional dos servidores da instituição educacional.",
        image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&h=800&fit=crop",
        checkList: ["Controle de alocações", "Histórico funcional", "Gestão de afastamentos"]
      }
    ],
    structuredBenefits: [
      { icon: "CheckCircle", title: "Atualizações garantidas", description: "Somos os mantenedores oficiais do PWEdu." },
      { icon: "CheckCircle", title: "Impulso à educação", description: "Seu investimento contribui para o aprimoramento." },
      { icon: "CheckCircle", title: "Embarque facilitado", description: "Entrega de solução personalizada e configurada." },
      { icon: "CheckCircle", title: "Sua voz é fundamental", description: "Você poderá direcionar o futuro do software." }
    ]
  },
  {
    slug: "pwork",
    title: "PWork",
    category: "Gestão",
    description: "Ferramenta para a gestão de tarefas e processos internos de uma organização.",
    fullDescription: "Ferramenta para a gestão de tarefas e processos internos de uma organização. Ele ajuda a coordenar atividades, atribuir responsabilidades e monitorar o andamento.",
    image: "https://site.plugwin.net/assets/pwork/img/mulher_home.jpg",
    logo: "/assets/Logos_projetos/pwork.png",
    link: "https://site.plugwin.net/pwork",
    features: [],
    benefits: [],
    heroCards: [
      { icon: "CheckSquare", title: "Tarefas", description: "Organização e distribuição das atividades de forma harmoniosa." },
      { icon: "BarChart", title: "Eficiência", description: "Análise de indicadores de desempenho e cumprimento de metas." },
      { icon: "Users", title: "Delegação", description: "Atribuição de tarefas às pessoas mais qualificadas." },
      { icon: "Layers", title: "Centralização", description: "Centraliza informações e facilita a comunicação." }
    ],
    detailedFeatures: [
      {
        title: "Gestão Centralizada de Processos",
        description: "Priorização de tarefas, monitoramento de prazos e recursos em um único lugar, garantindo que nada se perca no dia a dia.",
        image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&h=800&fit=crop",
        checkList: ["Monitoramento de prazos", "Priorização clara", "Recursos otimizados"]
      },
      {
        title: "Plataforma Organizacional",
        description: "Centraliza informações e facilita a comunicação entre equipes, promovendo um ambiente de trabalho mais colaborativo e eficiente.",
        image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&h=800&fit=crop",
        checkList: ["Comunicação fluida", "Informação acessível", "Colaboração real"]
      },
      {
        title: "Delegação Inteligente",
        description: "Atribua tarefas às pessoas mais qualificadas e acompanhe o progresso em tempo real com dashboards intuitivos.",
        image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=1200&h=800&fit=crop",
        checkList: ["Atribuição eficiente", "Acompanhamento real-time", "Dashboards visuais"]
      }
    ],
    structuredBenefits: [
      { icon: "CheckCircle", title: "Atualizações garantidas", description: "Somos os mantenedores oficiais do PWork." },
      { icon: "CheckCircle", title: "Impulso à gestão", description: "Seu investimento contribui para o aprimoramento." },
      { icon: "CheckCircle", title: "Embarque facilitado", description: "Solução personalizada e configurada." },
      { icon: "CheckCircle", title: "Consultoria de Sucesso", description: "Superamos desafios junto com você." }
    ]
  },
  {
    slug: "diario",
    title: "Diário Oficial",
    category: "Governo",
    description: "Plataforma oficial para a publicação de atos administrativos e normativos.",
    fullDescription: "Plataforma oficial para a publicação de atos administrativos e normativos de instituições públicas, incluindo leis, decretos, portarias e outros documentos.",
    image: "https://site.plugwin.net/assets/diario/img/diario.jpg",
    logo: "/assets/Logos_projetos/diario_oficial.png",
    link: "https://site.plugwin.net/diario",
    features: [],
    benefits: [],
    heroCards: [
      { icon: "FileText", title: "Plataforma Oficial", description: "Centraliza e disponibiliza documentos como leis e decretos." },
      { icon: "Eye", title: "Transparência", description: "Assegura que cidadãos possam consultar atos governamentais." },
      { icon: "Shield", title: "Segurança", description: "Garante que documentos sejam acessíveis de forma confiável." },
      { icon: "Search", title: "Consulta Fácil", description: "Consulta rápida e segura a leis e portarias." }
    ],
    detailedFeatures: [
      {
        title: "Portal de Divulgação Oficial",
        description: "Espaço centralizado e acessível para a publicação de atos legais, garantindo que a informação chegue a quem precisa com total validade jurídica.",
        image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=1200&h=800&fit=crop",
        checkList: ["Validade jurídica", "Acesso público", "Centralização"]
      },
      {
        title: "Acesso Digital e Seguro",
        description: "Consulta rápida e segura a leis, decretos e outros documentos oficiais, promovendo a transparência e o acesso à informação.",
        image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&h=800&fit=crop",
        checkList: ["Busca rápida", "Segurança de dados", "Transparência total"]
      },
      {
        title: "Histórico de Publicações",
        description: "Mantenha um arquivo completo e organizado de todas as publicações anteriores, facilitando consultas e pesquisas históricas.",
        image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=1200&h=800&fit=crop",
        checkList: ["Arquivo completo", "Pesquisa avançada", "Organização cronológica"]
      }
    ],
    structuredBenefits: [
      { icon: "CheckCircle", title: "Atualizações garantidas", description: "Somos os mantenedores oficiais do Diário Oficial." },
      { icon: "CheckCircle", title: "Impulso à transparência", description: "Seu investimento contribui para a melhoria." },
      { icon: "CheckCircle", title: "Embarque facilitado", description: "Solução personalizada e configurada." },
      { icon: "CheckCircle", title: "Consultoria de Sucesso", description: "Apoio contínuo para superar desafios." }
    ]
  },
  {
    slug: "pwged",
    title: "PWGED",
    category: "Gestão",
    description: "Solução eficiente para a Gestão de Documentos e informações.",
    fullDescription: "Uma solução eficiente para a Gestão de Documentos e informações dentro de uma organização. Permite o armazenamento, organização e controle de documentos.",
    image: "https://site.plugwin.net/assets/pwged/img/pw_ged_gestao.jpg",
    logo: "/assets/Logos_projetos/gestao_eletronica.png",
    link: "https://site.plugwin.net/pwged",
    features: [],
    benefits: [],
    heroCards: [
      { icon: "Folder", title: "Organização", description: "Evolução da gestão de arquivos com maior controle digital." },
      { icon: "Cloud", title: "Digital", description: "Armazenamento seguro e eficiente, eliminando papéis." },
      { icon: "Search", title: "Busca Rápida", description: "Reduz tempo de busca e melhora a eficiência operacional." },
      { icon: "Lock", title: "Segurança", description: "Documentos armazenados digitalmente de forma protegida." }
    ],
    detailedFeatures: [
      {
        title: "Armazenamento Inteligente",
        description: "Utiliza tecnologia para organizar e classificar informações rapidamente, facilitando a recuperação de documentos importantes quando você mais precisa.",
        image: "https://images.unsplash.com/photo-1544396821-4dd40b938ad3?w=1200&h=800&fit=crop",
        checkList: ["Classificação automática", "Recuperação rápida", "Organização lógica"]
      },
      {
        title: "Controle de Versões e Acesso",
        description: "Garante que as versões mais recentes sejam facilmente acessíveis e que apenas pessoas autorizadas tenham acesso a informações sensíveis.",
        image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1200&h=800&fit=crop",
        checkList: ["Versionamento", "Controle de permissões", "Auditoria de acesso"]
      },
      {
        title: "Busca Avançada",
        description: "Encontre documentos rapidamente com filtros inteligentes por data, tipo, autor e conteúdo, economizando tempo e aumentando a produtividade.",
        image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=1200&h=800&fit=crop",
        checkList: ["Filtros inteligentes", "Busca por conteúdo", "Resultados instantâneos"]
      }
    ],
    structuredBenefits: [
      { icon: "CheckCircle", title: "Atualizações garantidas", description: "Somos os mantenedores oficiais do PW-GED." },
      { icon: "CheckCircle", title: "Impulso à eficiência", description: "Seu investimento contribui para a melhoria." },
      { icon: "CheckCircle", title: "Embarque facilitado", description: "Solução personalizada e configurada." },
      { icon: "CheckCircle", title: "Consultoria de Sucesso", description: "Apoio contínuo para superar desafios." }
    ]
  },
  {
    slug: "email",
    title: "E-mails Institucionais",
    category: "Comunicação",
    description: "Contas de e-mail fornecidas a membros de uma organização para comunicação oficial e profissional.",
    fullDescription: "Os e-mails institucionais são contas de e-mail fornecidas a membros de uma organização, como funcionários e departamentos, para comunicação oficial e profissional. Eles oferecem maior credibilidade, segurança e formalidade.",
    image: "https://site.plugwin.net/assets/email/img/email.jpg",
    logo: "/assets/Logos_projetos/email.png",
    link: "https://site.plugwin.net/email",
    features: [],
    benefits: [],
    heroCards: [
      { icon: "Shield", title: "Credibilidade", description: "Reforça a imagem profissional da empresa." },
      { icon: "Lock", title: "Segurança", description: "Proteção contra ataques e controle de dados." },
      { icon: "Users", title: "Conectividade", description: "Facilita o trabalho em equipe e a comunicação." },
      { icon: "Mail", title: "Profissionalismo", description: "Comunicação clara, formal e segura." }
    ],
    detailedFeatures: [
      {
        title: "Comunicação Oficial e Segura",
        description: "Garanta que as mensagens sejam claras, rastreáveis e alinhadas com a identidade da empresa, facilitando a comunicação interna e externa com total segurança.",
        image: "https://images.unsplash.com/photo-1557200134-90327ee9fafa?w=1200&h=800&fit=crop",
        checkList: ["Rastreabilidade", "Identidade corporativa", "Segurança avançada"]
      },
      {
        title: "Gestão Eficiente de Informações",
        description: "Melhore a gestão de informações e aumente a eficiência na troca de dados entre equipes e com clientes, mantendo tudo organizado e acessível.",
        image: "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=1200&h=800&fit=crop",
        checkList: ["Organização de dados", "Troca eficiente", "Acesso controlado"]
      },
      {
        title: "Proteção Contra Ameaças",
        description: "Sistema robusto de segurança com filtros anti-spam, proteção contra phishing e backup automático de mensagens.",
        image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=1200&h=800&fit=crop",
        checkList: ["Anti-spam", "Anti-phishing", "Backup automático"]
      }
    ],
    structuredBenefits: [
      { icon: "CheckCircle", title: "Atualizações garantidas", description: "Somos os mantenedores oficiais." },
      { icon: "CheckCircle", title: "Impulso à educação", description: "Seu investimento contribui para o aprimoramento." },
      { icon: "CheckCircle", title: "Embarque facilitado", description: "Solução personalizada e configurada." },
      { icon: "CheckCircle", title: "Consultoria de Sucesso", description: "Apoio contínuo para superar desafios." }
    ]
  },
  {
    slug: "esic",
    title: "E-SIC",
    category: "Transparência",
    description: "Sistema Eletrônico do Serviço de Informação ao Cidadão.",
    fullDescription: "Plataforma eletrônica que possibilita aos cidadãos solicitarem informações públicas diretamente a órgãos e entidades governamentais. Integrada à Lei de Acesso à Informação, assegura transparência e facilita o acesso a documentos.",
    image: "https://site.plugwin.net/assets/esic/img/homes_home.jpg",
    logo: "/assets/Logos_projetos/e-sic.png",
    link: "https://site.plugwin.net/esic",
    features: [],
    benefits: [],
    heroCards: [
      { icon: "Eye", title: "Transparência", description: "Fortalece a transparência nas ações governamentais." },
      { icon: "Globe", title: "Acesso Online", description: "Solicite informações públicas de forma simples e rápida." },
      { icon: "Users", title: "Cidadania", description: "Incentiva a participação da sociedade na administração." },
      { icon: "FileCheck", title: "Lei de Acesso", description: "Integrada à Lei de Acesso à Informação." }
    ],
    detailedFeatures: [
      {
        title: "Solicitação de Informações Simplificada",
        description: "Permite que os cidadãos solicitem de forma simples e rápida informações públicas diretamente aos órgãos governamentais, garantindo um processo transparente e eficiente.",
        image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&h=800&fit=crop",
        checkList: ["Processo simples", "Rapidez no pedido", "Eficiência garantida"]
      },
      {
        title: "Acompanhamento de Pedidos",
        description: "O sistema permite acompanhar o status das solicitações, assegurando que o cidadão tenha resposta dentro dos prazos legais e com a devida clareza.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop",
        checkList: ["Status em tempo real", "Cumprimento de prazos", "Clareza na resposta"]
      },
      {
        title: "Portal de Transparência",
        description: "Acesso facilitado a informações públicas, promovendo a participação cidadã e o controle social das ações governamentais.",
        image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1200&h=800&fit=crop",
        checkList: ["Acesso facilitado", "Participação cidadã", "Controle social"]
      }
    ],
    structuredBenefits: [
      { icon: "CheckCircle", title: "Atualizações garantidas", description: "Somos os mantenedores oficiais do E-SIC." },
      { icon: "CheckCircle", title: "Impulso à educação", description: "Seu investimento contribui para o aprimoramento." },
      { icon: "CheckCircle", title: "Embarque facilitado", description: "Solução personalizada e configurada." },
      { icon: "CheckCircle", title: "Consultoria de Sucesso", description: "Apoio contínuo para superar desafios." }
    ]
  },
  {
    slug: "corporativo",
    title: "Site Institucional",
    category: "Corporativo",
    description: "Vitrine digital para empresas e organizações privadas.",
    fullDescription: "Destinado a empresas e organizações privadas, o site institucional funciona como uma vitrine digital, apresentando informações institucionais, produtos, serviços, missão, visão e valores da empresa.",
    image: "https://site.plugwin.net/assets/corporativo/img/panorama_site.png",
    logo: "/assets/Logos_projetos/site_corporativo.png",
    link: "https://site.plugwin.net/corporativo",
    features: [],
    benefits: [],
    heroCards: [
      { icon: "Globe", title: "Vitrine Digital", description: "Apresenta sua identidade, produtos e serviços." },
      { icon: "Building", title: "Identidade", description: "Reflete a identidade e valores da empresa." },
      { icon: "Eye", title: "Visibilidade", description: "Amplia a visibilidade no mercado e atrai clientes." },
      { icon: "Megaphone", title: "Comunicação", description: "Facilita o contato e a interação com clientes." }
    ],
    detailedFeatures: [
      {
        title: "Apresentação de Produtos e Serviços",
        description: "Organize e apresente seus produtos e serviços de forma atrativa e acessível, facilitando para o cliente encontrar o que precisa e entender o valor da sua oferta.",
        image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=1200&h=800&fit=crop",
        checkList: ["Organização clara", "Design atrativo", "Foco no valor"]
      },
      {
        title: "Canal de Comunicação Eficiente",
        description: "Estabeleça um canal direto com seus clientes através de formulários de contato, integração com redes sociais e informações claras de atendimento.",
        image: "https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1200&h=800&fit=crop",
        checkList: ["Contato direto", "Integração social", "Atendimento claro"]
      },
      {
        title: "Identidade Visual Corporativa",
        description: "Reflita a identidade e valores da sua empresa com um design profissional que transmite credibilidade e fortalece sua marca no mercado.",
        image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1200&h=800&fit=crop",
        checkList: ["Design profissional", "Credibilidade", "Fortalecimento da marca"]
      }
    ],
    structuredBenefits: [
      { icon: "CheckCircle", title: "Atualizações garantidas", description: "Somos os mantenedores oficiais." },
      { icon: "CheckCircle", title: "Impulso à educação", description: "Seu investimento contribui para o aprimoramento." },
      { icon: "CheckCircle", title: "Embarque facilitado", description: "Solução personalizada e configurada." },
      { icon: "CheckCircle", title: "Consultoria de Sucesso", description: "Apoio contínuo para superar desafios." }
    ]
  },
  {
    slug: "ouvidoria",
    title: "Ouvidoria",
    category: "Controle",
    description: "Sistema completo para receber, analisar e encaminhar demandas da população.",
    fullDescription: "O Sistema de Ouvidoria é uma ferramenta completa para receber, analisar e encaminhar demandas da população, como denúncias, reclamações, elogios e sugestões. Garante transparência e agilidade no tratamento das manifestações.",
    image: "https://site.plugwin.net/assets/ouvidoria/img/mulher_home.jpg",
    logo: "/assets/Logos_projetos/ouvidoria.png",
    link: "https://site.plugwin.net/ouvidoria",
    features: [],
    benefits: [],
    heroCards: [
      { icon: "MessageSquare", title: "Manifestações", description: "Receba denúncias, reclamações, elogios e sugestões." },
      { icon: "Clock", title: "Agilidade", description: "Garante agilidade no atendimento e soluções eficientes." },
      { icon: "Eye", title: "Transparência", description: "Acompanhamento em tempo real do andamento dos processos." },
      { icon: "Shield", title: "Sigilo", description: "Registro de denúncias de forma confidencial e segura." }
    ],
    detailedFeatures: [
      {
        title: "Gestão Completa de Manifestações",
        description: "Gerencie todas as demandas em um só lugar, classificando por tipo (denúncia, elogio, reclamação) e encaminhando para os setores responsáveis com total rastreabilidade.",
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=800&fit=crop",
        checkList: ["Classificação automática", "Encaminhamento ágil", "Rastreabilidade total"]
      },
      {
        title: "Acompanhamento pelo Cidadão",
        description: "Permite que o cidadão acompanhe o status da sua manifestação através de um número de protocolo, garantindo transparência e confiança no processo.",
        image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=1200&h=800&fit=crop",
        checkList: ["Protocolo único", "Consulta online", "Feedback claro"]
      },
      {
        title: "Relatórios e Estatísticas",
        description: "Gere relatórios detalhados sobre as manifestações recebidas, identificando padrões e oportunidades de melhoria na gestão pública.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop",
        checkList: ["Relatórios detalhados", "Identificação de padrões", "Melhoria contínua"]
      }
    ],
    structuredBenefits: [
      { icon: "CheckCircle", title: "Atualizações garantidas", description: "Somos os mantenedores oficiais." },
      { icon: "CheckCircle", title: "Impulso à educação", description: "Seu investimento contribui para o aprimoramento." },
      { icon: "CheckCircle", title: "Embarque facilitado", description: "Solução personalizada e configurada." },
      { icon: "CheckCircle", title: "Consultoria de Sucesso", description: "Apoio contínuo para superar desafios." }
    ]
  },
  {
    slug: "instlegis",
    title: "Institucional Legislativo",
    category: "Legislativo",
    description: "Solução completa para a divulgação de informações legislativas.",
    fullDescription: "Desenvolvido especialmente para câmaras municipais e demais órgãos do Poder Legislativo, o sistema oferece uma solução completa para a divulgação de informações legislativas e a promoção da transparência pública.",
    image: "https://site.plugwin.net/assets/instlegis/img/vereadores.png",
    logo: "/assets/Logos_projetos/site_ins_leg.png",
    link: "https://site.plugwin.net/instlegis",
    features: [],
    benefits: [],
    heroCards: [
      { icon: "FileText", title: "Documentos", description: "Repositório completo de leis, decretos e projetos." },
      { icon: "Users", title: "Legisladores", description: "Informações sobre vereadores e atividades parlamentares." },
      { icon: "Eye", title: "Transparência", description: "Acesso fácil e seguro às informações governamentais." },
      { icon: "Layers", title: "Integração", description: "Integração eficiente com o Portal Legislativo PW." }
    ],
    detailedFeatures: [
      {
        title: "Gestão de Sessões e Pautas",
        description: "Acompanhamento detalhado das sessões plenárias, pautas de votação e atas, permitindo que a população fique por dentro das decisões legislativas.",
        image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1200&h=800&fit=crop",
        checkList: ["Pautas online", "Atas disponíveis", "Histórico de sessões"]
      },
      {
        title: "Perfil dos Parlamentares",
        description: "Área dedicada para apresentar os vereadores, suas biografias, projetos apresentados e contatos, aproximando o legislativo da comunidade.",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=1200&h=800&fit=crop",
        checkList: ["Biografia completa", "Projetos do autor", "Canais de contato"]
      },
      {
        title: "Legislação Municipal",
        description: "Repositório completo de leis, decretos e projetos municipais, com busca avançada e acesso facilitado para toda a população.",
        image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=1200&h=800&fit=crop",
        checkList: ["Repositório completo", "Busca avançada", "Acesso facilitado"]
      }
    ],
    structuredBenefits: [
      { icon: "CheckCircle", title: "Atualizações garantidas", description: "Somos os mantenedores oficiais." },
      { icon: "CheckCircle", title: "Impulso à educação", description: "Seu investimento contribui para o aprimoramento." },
      { icon: "CheckCircle", title: "Embarque facilitado", description: "Solução personalizada e configurada." },
      { icon: "CheckCircle", title: "Consultoria de Sucesso", description: "Apoio contínuo para superar desafios." }
    ]
  },
  {
    slug: "instexec",
    title: "Institucional Executivo",
    category: "Executivo",
    description: "Projetado para instituições do Poder Executivo, como prefeituras e governos.",
    fullDescription: "Projetado para instituições do Poder Executivo, como prefeituras, governos e secretarias, o sistema fornece uma integração eficiente e otimizada com o Portal Executivo PW.",
    image: "https://site.plugwin.net/assets/instexec/img/mulher_home.jpg",
    logo: "/assets/Logos_projetos/site_ins_executivo.png",
    link: "https://site.plugwin.net/instexec",
    features: [],
    benefits: [],
    heroCards: [
      { icon: "Building", title: "Gestão Pública", description: "Melhora a gestão e a eficiência administrativa." },
      { icon: "Globe", title: "População", description: "Informações disponíveis de forma acessível e segura." },
      { icon: "Eye", title: "Transparência", description: "Promove a transparência na gestão pública." },
      { icon: "Layers", title: "Integração", description: "Integração otimizada com o Portal Executivo PW." }
    ],
    detailedFeatures: [
      {
        title: "Portal da Transparência Integrado",
        description: "Disponibilize contas públicas, licitações, contratos e despesas de forma clara e organizada, cumprindo as exigências legais de transparência.",
        image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&h=800&fit=crop",
        checkList: ["Contas públicas", "Licitações em tempo real", "Conformidade legal"]
      },
      {
        title: "Serviços ao Cidadão",
        description: "Centralize os serviços oferecidos pela prefeitura ou secretaria em um portal digital, facilitando o acesso e reduzindo filas no atendimento presencial.",
        image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1200&h=800&fit=crop",
        checkList: ["Carta de serviços", "Atendimento digital", "Facilidade de acesso"]
      },
      {
        title: "Notícias e Comunicação",
        description: "Mantenha a população informada sobre ações, projetos e eventos da administração pública com um sistema de notícias integrado.",
        image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=1200&h=800&fit=crop",
        checkList: ["Sistema de notícias", "Agenda de eventos", "Comunicação eficiente"]
      }
    ],
    structuredBenefits: [
      { icon: "CheckCircle", title: "Atualizações garantidas", description: "Somos os mantenedores oficiais." },
      { icon: "CheckCircle", title: "Impulso à educação", description: "Seu investimento contribui para o aprimoramento." },
      { icon: "CheckCircle", title: "Embarque facilitado", description: "Solução personalizada e configurada." },
      { icon: "CheckCircle", title: "Consultoria de Sucesso", description: "Apoio contínuo para superar desafios." }
    ]
  },
  {
    slug: "protocolo",
    title: "Sistema de Protocolo",
    category: "Gestão",
    description: "Gerencia o registro e o acompanhamento de documentos e processos.",
    fullDescription: "Gerencia o registro e o acompanhamento de documentos e processos dentro de uma instituição. Sempre que um cidadão ou empresa realiza um pedido ou encaminha documentos, é gerado um protocolo para monitorar a tramitação.",
    image: "https://site.plugwin.net/assets/protocolo/img/sistema_de_protocolo.png",
    logo: "/assets/Logos_projetos/sistema_de_protocolo.png",
    link: "https://site.plugwin.net/protocolo",
    features: [],
    benefits: [],
    heroCards: [
      { icon: "FileText", title: "Registro", description: "Gera protocolo para monitorar a tramitação." },
      { icon: "Search", title: "Rastreabilidade", description: "Evita perdas e facilita a localização de arquivos." },
      { icon: "Clock", title: "Agilidade", description: "Reduz atrasos e otimiza recursos na execução." },
      { icon: "Shield", title: "Segurança", description: "Evita acessos não autorizados e fraudes." }
    ],
    detailedFeatures: [
      {
        title: "Tramitação Digital de Processos",
        description: "Elimine o papel e ganhe agilidade com a tramitação 100% digital. Encaminhe processos entre setores com um clique e mantenha o histórico completo.",
        image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&h=800&fit=crop",
        checkList: ["Zero papel", "Histórico completo", "Encaminhamento rápido"]
      },
      {
        title: "Controle de Prazos e Pendências",
        description: "O sistema alerta sobre prazos vencendo e pendências em aberto, garantindo que nenhum processo fique parado e que o atendimento ao cidadão seja ágil.",
        image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=1200&h=800&fit=crop",
        checkList: ["Alertas automáticos", "Gestão de pendências", "Cumprimento de prazos"]
      },
      {
        title: "Protocolo Digital",
        description: "Geração automática de números de protocolo com QR Code, permitindo rastreamento fácil e consulta online do andamento dos processos.",
        image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=1200&h=800&fit=crop",
        checkList: ["QR Code integrado", "Consulta online", "Rastreamento fácil"]
      }
    ],
    structuredBenefits: [
      { icon: "CheckCircle", title: "Atualizações garantidas", description: "Somos os mantenedores oficiais." },
      { icon: "CheckCircle", title: "Impulso à educação", description: "Seu investimento contribui para o aprimoramento." },
      { icon: "CheckCircle", title: "Embarque facilitado", description: "Solução personalizada e configurada." },
      { icon: "CheckCircle", title: "Consultoria de Sucesso", description: "Apoio contínuo para superar desafios." }
    ]
  }
];