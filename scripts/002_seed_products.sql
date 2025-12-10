-- Insert streetwear products for Oikaw
INSERT INTO products (name, slug, description, price, category, image_url, images, sizes, colors, stock, featured) VALUES
-- Camisetas
('Camiseta Oikaw Essential', 'camiseta-oikaw-essential', 'Camiseta oversized 100% algodão com logo bordado. Conforto e estilo para o dia a dia urbano.', 89.90, 'camisetas', '/placeholder.svg?height=600&width=600', 
  ARRAY['/placeholder.svg?height=600&width=600', '/placeholder.svg?height=600&width=600', '/placeholder.svg?height=600&width=600'],
  ARRAY['P', 'M', 'G', 'GG', 'XG'], ARRAY['Preto', 'Branco', 'Cinza'], 50, true),

('Camiseta Oikaw Wave', 'camiseta-oikaw-wave', 'Design gráfico exclusivo com arte urbana. Modelagem relaxed fit ideal para o street.', 99.90, 'camisetas', '/placeholder.svg?height=600&width=600',
  ARRAY['/placeholder.svg?height=600&width=600', '/placeholder.svg?height=600&width=600'],
  ARRAY['P', 'M', 'G', 'GG'], ARRAY['Branco', 'Preto'], 40, true),

('Camiseta Oikaw Gradient', 'camiseta-oikaw-gradient', 'Estampa degradê minimalista. Peça statement para quem busca originalidade.', 94.90, 'camisetas', '/placeholder.svg?height=600&width=600',
  ARRAY['/placeholder.svg?height=600&width=600', '/placeholder.svg?height=600&width=600'],
  ARRAY['P', 'M', 'G', 'GG'], ARRAY['Preto', 'Azul Escuro'], 35, false),

-- Moletons
('Moletom Oikaw Core', 'moletom-oikaw-core', 'Moletom com capuz e bolso canguru. Tecido premium com toque macio e durabilidade excepcional.', 189.90, 'moletons', '/placeholder.svg?height=600&width=600',
  ARRAY['/placeholder.svg?height=600&width=600', '/placeholder.svg?height=600&width=600', '/placeholder.svg?height=600&width=600'],
  ARRAY['P', 'M', 'G', 'GG', 'XG'], ARRAY['Preto', 'Cinza Escuro', 'Verde Militar'], 30, true),

('Moletom Oikaw Zip', 'moletom-oikaw-zip', 'Moletom com zíper frontal e detalhes refletivos. Perfeito para as noites frias da cidade.', 199.90, 'moletons', '/placeholder.svg?height=600&width=600',
  ARRAY['/placeholder.svg?height=600&width=600', '/placeholder.svg?height=600&width=600'],
  ARRAY['P', 'M', 'G', 'GG'], ARRAY['Cinza', 'Preto'], 25, false),

-- Calças
('Calça Cargo Oikaw Tech', 'calca-cargo-oikaw-tech', 'Cargo pants com múltiplos bolsos e ajuste na barra. Design funcional e estilo contemporâneo.', 249.90, 'calcas', '/placeholder.svg?height=600&width=600',
  ARRAY['/placeholder.svg?height=600&width=600', '/placeholder.svg?height=600&width=600'],
  ARRAY['38', '40', '42', '44', '46'], ARRAY['Preto', 'Caqui', 'Verde Militar'], 20, true),

('Jeans Oikaw Wide', 'jeans-oikaw-wide', 'Jeans wide leg com lavagem especial. Conforto e movimento para o skate e street culture.', 229.90, 'calcas', '/placeholder.svg?height=600&width=600',
  ARRAY['/placeholder.svg?height=600&width=600', '/placeholder.svg?height=600&width=600'],
  ARRAY['38', '40', '42', '44'], ARRAY['Azul Desbotado', 'Preto'], 18, false),

-- Bonés
('Boné Oikaw Classic', 'bone-oikaw-classic', 'Boné dad hat com logo bordado frontal. Aba curva e ajuste traseiro em metal.', 79.90, 'bones', '/placeholder.svg?height=600&width=600',
  ARRAY['/placeholder.svg?height=600&width=600', '/placeholder.svg?height=600&width=600'],
  ARRAY['Único'], ARRAY['Preto', 'Branco', 'Bege'], 60, true),

('Boné Oikaw Trucker', 'bone-oikaw-trucker', 'Trucker cap com tela traseira. Design clássico para todas as estações.', 69.90, 'bones', '/placeholder.svg?height=600&width=600',
  ARRAY['/placeholder.svg?height=600&width=600', '/placeholder.svg?height=600&width=600'],
  ARRAY['Único'], ARRAY['Preto/Branco', 'Cinza/Preto'], 45, false),

-- Acessórios
('Mochila Oikaw Urban', 'mochila-oikaw-urban', 'Mochila com compartimento para notebook e múltiplos bolsos. Resistente à água e design minimalista.', 179.90, 'acessorios', '/placeholder.svg?height=600&width=600',
  ARRAY['/placeholder.svg?height=600&width=600', '/placeholder.svg?height=600&width=600'],
  ARRAY['Único'], ARRAY['Preto', 'Cinza Escuro'], 25, false),

('Shoulder Bag Oikaw', 'shoulder-bag-oikaw', 'Bolsa transversal compacta com alça ajustável. Ideal para levar o essencial com estilo.', 119.90, 'acessorios', '/placeholder.svg?height=600&width=600',
  ARRAY['/placeholder.svg?height=600&width=600', '/placeholder.svg?height=600&width=600'],
  ARRAY['Único'], ARRAY['Preto', 'Verde Militar'], 30, true),

('Meias Oikaw Pack 3', 'meias-oikaw-pack-3', 'Kit com 3 pares de meias de cano alto. Logo bordado e conforto para o dia todo.', 49.90, 'acessorios', '/placeholder.svg?height=600&width=600',
  ARRAY['/placeholder.svg?height=600&width=600'],
  ARRAY['36-40', '41-44'], ARRAY['Mix Preto/Branco/Cinza'], 80, false);
