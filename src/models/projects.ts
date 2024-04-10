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
        description: 'O Projeto é uma aplicação de agenda de contatos altamente interativa e intuitiva construída utilizando Django com Python.',
        projectlLink: 'https://agenda.gtatelie.com.br/',
        repository: 'https://github.com/guicamargo19/agenda.git',
        image: '../src/assets/projects-png/Agenda.png',
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
        description: 'O Blog é uma sofisticada aplicação desenvolvida em Django com Python, oferecendo segurança e intuição. Destaca-se pela alta responsividade e atenção especial à acessibilidade.',
        projectlLink: 'https://blog.gtatelie.com.br/',
        repository: 'https://github.com/guicamargo19/blog_devs_place.git',
        image: '../src/assets/projects-png/Blog.png',
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
        description: 'E-Commerce robusto em Django com Python que possui funcionalidades para uma experiência completo de compra.',
        projectlLink: 'https://ecommerce.gtatelie.com.br/',
        repository: 'https://github.com/guicamargo19/ecommerce.git',
        image: '../src/assets/projects-png/E-Commerce.png',
        overview: [
            'O projeto E-Commerce se destaca por oferecer uma experiência de compra completa e intuitiva, aliando funcionalidades robustas a um design minimalista.',

            'Através de recursos cuidadosamente planejados, o projeto visa atender às necessidades tanto dos clientes quanto dos administradores da plataforma.',
            
            'Focado na experiência do usuário, trazendo visual minimalista e totalmente gerenciável, criando produtos com variações, listagem detalhada, carrinho \
            de compras com funcionalidade de remover itens, perfis de clientes, autenticação de login/logout, registro de pedidos e página de pagamento integrada.',

            'A criação e gerenciamento do site com total controle sobre as informações, adição de produtos com diversas variações para atender às diferentes \
            demandas, controle de estoque e pedidos para otimizar a logística da loja virtual.',
            
            'Plataforma robusta e flexível para suportar o crescimento futuro do negócio e integração com outras ferramentas e marketplaces para ampliar o alcance da loja.',
        ],
        tools: ['Python', 'Django', 'JavaScript', 'HTML5', 'CSS3', 'Bootstrap', 'PostgreSQL', 'Linux Ubuntu', 'Google Cloud Platform', 'Gunicorn', 'Nginx']
    },
    {
        id: 4,
        title: 'eFood',
        description: 'Website fictício com lista de restaurantes que oferencendo aos clientes uma experiência de compra sem complicações, elegante e rápida.',
        projectlLink: 'https://efood-two-beta.vercel.app',
        repository: 'https://github.com/guicamargo19/efood.git',
        image: '../src/assets/projects-png/eFood.png',
        overview: [
            'Desenvolvido em ReactjS com TypeScript com requisições feitas para API utilizando React Toolkit Query, este projeto apresenta uma listagem de restaurantes, \
            onde é possível visitar a página individual de cada um e acessar seu cardápio. Pode-se inserir e remover os itens desejados no carrinho, sendo permitido apenas \
            um tipo de cada prato.',

            'Website segue boas práticas de programação, utilizando as regras ESLint para o ambiente de desenvolvimento e Styled Components para estilização, \
            projeto é totalmente responsivo e oferece um ótimo feedback de interação com o usuário tornando a experiência de navegação mais agradável e intuitiva.',

            'Utilizando Redux para gerenciar o estado da aplicação e React Router DOM para navegação entre páginas, tornando esta uma SPA (Single Page Application), \
            toda parte do pedido e preenchimento do endereço de entrega e pagamento apenas com cartão de crédito, fica rápida e descomplicada, permitindo ao usuário \
            finalizar seu pedido de forma tranquila e rápida.',

            'Os formulários foram criados com Formik e com validação e máscaras nos campos feitas com Yup, assim todos os campos possuem validação e \
            estão ligados por uma chacagem robusta para evitar erros e informações inválidas.',
        ],
        tools: ['ESLint', 'HTML5', 'CSS3', 'Styled Components', 'NodeJS', 'ReactJS', 'ReduxJS', 'Router DOM', 'React Spinners', 'React Toolkit Query', 'Formik', 'Yup', 'TypeScript', 'NPM',]
    },
]