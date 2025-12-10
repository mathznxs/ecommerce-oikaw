# Oikaw - E-commerce Streetwear

E-commerce moderno de streetwear brasileiro construído com Next.js 16, Supabase e design dark theme.

## Funcionalidades

- Catálogo de produtos com filtros por categoria
- Páginas de produto com galeria de imagens
- Sistema de avaliações (requer autenticação)
- Carrinho de compras com localStorage
- Integração WhatsApp para encomendas
- Dashboard administrativo completo (CRUD de produtos)
- Autenticação com Supabase Auth
- Design responsivo dark theme

## Tecnologias

- Next.js 16 (App Router)
- Supabase (Database + Auth)
- TypeScript
- Tailwind CSS v4
- shadcn/ui Components

## Como Configurar

### 1. Configure o Supabase

Execute os scripts SQL na ordem:
1. `scripts/001_create_tables.sql` - Cria tabelas de produtos e reviews
2. `scripts/002_seed_products.sql` - Popula produtos iniciais
3. `scripts/003_admin_tables.sql` - Cria tabela de administradores

### 2. Configure Variáveis de Ambiente

As variáveis do Supabase já estão configuradas automaticamente pelo v0.

### 3. Configure o Número do WhatsApp

Edite os seguintes arquivos e substitua `5511999999999` pelo seu número:
- `components/cart-drawer.tsx`
- `components/add-to-cart-section.tsx`

### 4. Torne-se Administrador

1. Crie uma conta em `/auth/sign-up`
2. No Supabase, execute:
\`\`\`sql
-- Encontre seu user_id
SELECT id, email FROM auth.users WHERE email = 'seu-email@example.com';

-- Insira como admin (substitua o UUID)
INSERT INTO admin_users (user_id, email) 
VALUES ('seu-user-id-aqui', 'seu-email@example.com');
\`\`\`
3. Acesse o dashboard em `/admin`

## Páginas

- `/` - Homepage com banners e destaques
- `/produtos` - Catálogo completo (com filtro por categoria via query params)
- `/produtos/[slug]` - Página de produto individual
- `/admin` - Dashboard administrativo (requer autenticação de admin)
- `/auth/login` - Login
- `/auth/sign-up` - Cadastro
- `/profile` - Perfil do usuário

## Dashboard Admin

O dashboard permite:
- Adicionar novos produtos
- Editar produtos existentes
- Remover produtos
- Gerenciar múltiplas imagens por produto
- Adicionar cores e tamanhos personalizados
- Controlar estoque
- Marcar produtos como destaque

## Sistema de Carrinho

- Adicione múltiplos produtos ao carrinho
- Selecione tamanho e cor antes de adicionar
- Visualize o carrinho no drawer lateral
- Envie todos os produtos do carrinho via WhatsApp com um clique
- Ou encomende produtos individualmente

## Autenticação

- Sistema completo de login/cadastro com Supabase Auth
- Email e senha
- Proteção de rotas
- Reviews requerem autenticação
- Admin dashboard requer permissões especiais

## Deploy

O projeto está pronto para deploy na Vercel. As variáveis de ambiente do Supabase são configuradas automaticamente.
