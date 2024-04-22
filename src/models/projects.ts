interface Projeto {
    id: number
    title: string
    description: string
    projectlLink: string
    repository: string
    image: string
    overview: string[]
    tools: string[]
}

export default Projeto

export const projects: Projeto[] = [
    {
        id: 1,
        title: 'Agenda',
        description: 'O Projeto é uma aplicação de agenda de contatos altamente interativa e intuitiva, construída utilizando Django com Python.',
        projectlLink: 'https://agenda.gtatelie.com.br/',
        repository: 'https://github.com/guicamargo19/agenda.git',
        image: 'https://servidor-estatico-tan.vercel.app/portfolio_agenda.png',
        overview: [
            'A aplicação Agenda é uma plataforma acessível para leitura de informações, enquanto as operações CRUD (Create, Read, Update, Delete) \
            requerem uma conta de administrador. Esta conta tem permissões de realizar essas operações apenas em contato sob sua administração.', 
            
            'Construída com HTML5 e estilizada com CSS3, a Agenda ostenta um design moderno e minimalista, proporcionando uma navegação fácil \
            e uma experiência de usuário sem distrações.',

            'Todos os formulários são validados quanto à segurança e disponibilidade. A segurança abrange senhas fortes e validação de e-mails, \
            enquanto a disponibilidade impede a duplicação de usuários ou e-mails.',
            
            'O deploy ocorre na Google Cloud Platform, com uma base de dados PostgreSQL. Utilizando um servidor Linux Ubuntu, o projeto é hospedado \
            de forma segura com SSL, configurado com Gunicorn e Nginx.',

            'Os contatos atuais da agenda são fictícios, preenchidos por um script utilizando a biblioteca Faker.',
        ],
        tools: ['Python', 'Django', 'HTML5', 'CSS3', 'PostgreSQL', 'Google Cloud Platform', 'Linux Ubuntu', 'Gunicorn', 'Nginx', 'Faker']
    },
    {
        id: 2,
        title: 'Blog Devs Place',
        description: 'O Blog é uma sofisticada aplicação desenvolvida em Django com Python, altamente gerenciável, intuitiva e segura. Destaca-se pela alta responsividade e atenção especial à acessibilidade.',
        projectlLink: 'https://blog.gtatelie.com.br/',
        repository: 'https://github.com/guicamargo19/blog_devs_place.git',
        image: 'https://servidor-estatico-tan.vercel.app/portfolio_blog.png',
        overview: [
            'O Blog foi desenvolvido em Django com Python, oferecendo segurança e controle para os usuários. Cada administrador tem \
            acesso exclusivo ao seu blog, garantindo a integridade do sistema.',

            'Os usuários podem gerenciar seu blog com facilidade, aproveitando recursos avançados para criar e editar conteúdo (CRUD). \
            O processo de configuração é simplificado, permitindo que cada usuário crie um único setup para administrar seu blog.',
        
            'Além disso, o projeto permite a criação de posts dinâmicos com tags, categorias e páginas interligadas, proporcionando \
            uma experiência intuitiva ao criar um blog completo.',
        
            'A inserção de imagens é simplificada, com redimensionamento automático para melhorar a performance do site.',
        
            'Com um design moderno e responsivo, o blog oferece uma navegação amigável e acessível, com elementos HTML e estilização em CSS.',
        ],
        tools: ['Python', 'Django', 'Django Axes', 'HTML5', 'CSS3', 'Docker', 'PostgreSQL', 'Linux Ubuntu', 'Google Cloud Platform', 'Gunicorn', 'Nginx']
    },
    {
        id: 3,
        title: 'E-Commerce',
        description: 'E-Commerce robusto em Django com Python que possui funcionalidades para uma experiência completa de compra.',
        projectlLink: 'https://ecommerce.gtatelie.com.br/',
        repository: 'https://github.com/guicamargo19/ecommerce.git',
        image: 'https://servidor-estatico-tan.vercel.app/portfolio_ecommerce.png',
        overview: [
            'O projeto E-Commerce se destaca por oferecer uma experiência de compra completa e intuitiva, aliando funcionalidades robustas a um design minimalista.',

            'Através de recursos cuidadosamente planejados, o projeto visa atender às necessidades tanto dos clientes quanto dos administradores da plataforma.',
            
            'É focado na experiência do usuário e totalmente gerenciável, criando produtos com variações, listagem detalhada, carrinho \
            de compras com funcionalidade de remover itens, perfis de clientes, autenticação de login/logout, registro de pedidos e página de pagamento integrada.',

            'Permite a criação e gerenciamento do site com total controle sobre as informações, adição de produtos com diversas variações para atender às diferentes \
            demandas, controle de estoque e pedidos para otimizar a logística da loja virtual.',
            
            'Plataforma robusta e flexível para suportar o crescimento futuro do negócio e integração com outras ferramentas e marketplaces para ampliar o alcance da loja.',
        ],
        tools: ['Python', 'Django', 'JavaScript', 'HTML5', 'CSS3', 'Bootstrap', 'PostgreSQL', 'Linux Ubuntu', 'Google Cloud Platform', 'Gunicorn', 'Nginx']
    },
    {
        id: 4,
        title: 'eFood',
        description: 'Aplicação fictícia com listagem de restaurantes que oferece aos usuários uma experiência de compra sem complicações, elegante e rápida.',
        projectlLink: 'https://efood-two-beta.vercel.app',
        repository: 'https://github.com/guicamargo19/efood.git',
        image: 'https://servidor-estatico-tan.vercel.app/portfolio_efood.png',
        overview: [
            'Desenvolvido em ReactJS com TypeScript com requisições feitas para API utilizando React Toolkit Query, este projeto apresenta uma listagem de restaurantes, \
            onde é possível visitar a página individual de cada um e acessar seu cardápio. Pode-se inserir e remover os itens desejados no carrinho, sendo permitido adicionar apenas \
            um item de cada prato.',

            'O website segue boas práticas de programação, utilizando as regras ESLint para o ambiente de desenvolvimento e Styled Components para estilização, \
            é totalmente responsivo e oferece um ótimo feedback de interação com o usuário tornando a experiência de navegação mais agradável e intuitiva.',

            'Utilizando Redux para gerenciar o estado da aplicação e React Router DOM para navegação entre páginas, tornando esta uma SPA (Single Page Application), \
            toda parte do pedido e preenchimento do endereço de entrega e pagamento aceitando apenas cartão de crédito, fica rápida e descomplicada, permitindo ao usuário \
            finalizar seu pedido de forma tranquila.',

            'Os formulários foram criados com Formik e máscaras nos campos feitas com Yup, assim todos os campos possuem validação e \
            uma chacagem robusta para evitar erros e informações inválidas.',
        ],
        tools: ['NodeJS', 'ReactJS', 'ReduxJS', 'ESLint', 'Prettier', 'HTML5', 'CSS3', 'Styled Components', 'Router DOM', 'React Spinners', 'React Toolkit Query', 'Formik', 'Yup', 'TypeScript', 'NPM',]
    },
    {
        id: 5,
        title: 'Calculadora IMC',
        description: 'Projeto calcula o Índice de Massa Corporal do usuário, dado as informações pelo campos altura e peso.',
        projectlLink: 'https://imc-react-gray-rho.vercel.app/',
        repository: 'https://github.com/guicamargo19/imc_react.git',
        image: 'https://servidor-estatico-tan.vercel.app/portfolio-calculadora-IMC.png',
        overview: [
            'Desenvolvido em ReactJS com JavaScript e estilizado com CSS Modules, este projeto simples permite realizar o cálculo do IMC com as informações \
            informadas pelo usuários, e dado o resultado, é automática mostrado sua colocação na tabela de classificação oficial.',

            'A partir das informações, o índice é calculado dividindo o peso pela altura elevada ao quadrado. Após o cálculo, é retornado também \
            a classificação na seguinte tabela:',

            '- IMC menor que 18,5kg/m2 - baixo peso.',
            '- IMC entre 18,5kg/m2 e 24,9kg/m2 - eutrofia (peso adequado)',
            '- IMC entre 25,0kg/m2 e 29,9kg/m2 - sobrepeso.',
            '- IMC entre 30,0kg/m2 e 39,9kg/m2 - obesidade grau 2.',
            '- IMC maior que 40,0kg/m2 - obesidade grave.',

            'Seguindo as boas práticas de programação e regras ESLint no ambiente de desenvolvimento, projeto foca na usabilidade da aplicação \
            pelo usuário, contendo explicação resumida, bastante informação sem poluição de tela, é rápido acesso ao resultado.',
        ],
        tools: ['Node.js', 'ReactJS', 'ESLint', 'HTML5', 'CSS3', 'CSS Modules', 'JavaScript', 'Vite', 'NPM',]
    },
    {
        id: 6,
        title: 'Calculadora Aritmética',
        description: 'Aplicação que realiza as quatro operações básica da matemática (Adição, Subtração, Divisão e Multiplicação), em tempo real conforme dado é digitado.',
        projectlLink: 'https://calculadora-vue-omega-sooty.vercel.app/',
        repository: 'https://github.com/guicamargo19/calculadora_vue.git',
        image: 'https://servidor-estatico-tan.vercel.app/portfolio-calculadora-aritmética.png',
        overview: [
            'Aplicação simples desenvolvida em Vue.js, com visual minimalista criado com classes Bootstrap e pequenas alterações em CSS3, \
            entrega uma experiência eficiente nos cálculos realizando as operações matemáticas em tempo real.',

            'Projeto contém dois campos para inserir os números e um campo do tipo select para escolher a operação aritmética. \
            Ao alterar os valores, o cálculo já é realizado sem precisar clicar em nenhum botão.',

            'Permite apenas as quatro operações matemática básica (Adição, Subtração, Divisão e Multiplicação), com visual elegante \
            e focado na experiência de usabilidade do usuário.',
        ],
        tools: ['Node.js', 'Vue.js', 'HTML5', 'CSS3', 'Bootstrap', 'JavaScript', 'Vite', 'NPM',]
    },
]