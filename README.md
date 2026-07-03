# Bell's Tattoo & Piercing — Site One-Page

Site institucional de página única para o **Bell's Tattoo & Piercing**, estúdio de
tatuagem e piercing do tatuador e body piercer **John Bell** (16 anos de experiência),
em Santo Amaro — São Paulo/SP.

Feito com **HTML + CSS + JavaScript puros** — sem frameworks, sem build, sem
dependências. É só abrir no navegador ou publicar.

---

## ✦ Destaques

- **Mobile-first**, totalmente responsivo (breakpoints em 380 / 560 / 780 / 960 px).
- Tema **dark** com destaque em **vermelho sangue / bordô** e branco-osso.
- Tipografia: **Bebas Neue** (títulos), **Cormorant Garamond** (frases) e **Inter** (corpo), via Google Fonts.
- Micro-animações: scroll reveal escalonado (IntersectionObserver), header com blur ao rolar, zoom lento no hero, brilho deslizante nos botões — tudo respeitando `prefers-reduced-motion`.
- Todos os CTAs levam ao **WhatsApp** (com mensagens pré-preenchidas por contexto) ou ao **Instagram**.
- Botão flutuante do WhatsApp com efeito de pulso e respeito à *safe-area* do iPhone.
- Mapa interativo do Google Maps com estilo dark e overlay "Traçar rota".
- Acessibilidade: `aria-label`, `alt` nas imagens, foco navegável.

---

## 📁 Estrutura dos arquivos

```
bell tattoo/
├── index.html      → estrutura e conteúdo
├── styles.css      → identidade visual e responsividade
├── script.js       → interações (menu, scroll reveal, header, etc.)
├── README.md       → este arquivo
└── assets/         → imagens dos trabalhos (troque pelas fotos reais)
```

---

## 🖼️ Trocar as imagens

As fotos do portfólio ficam na pasta `assets/`. Para atualizar:

1. Coloque as novas imagens em `assets/`.
2. No `index.html`, ajuste os caminhos `src="assets/..."` nas seções **Hero**,
   **Galeria**, **Serviços** e **Sobre**.
3. Mantenha o texto do atributo `alt` descrevendo cada tatuagem (bom para SEO e acessibilidade).

> Dica: imagens quadradas ou verticais funcionam melhor no mosaico da galeria.

---

## ✏️ Dados que você pode querer editar

Todos no `index.html`:

- **WhatsApp:** `https://wa.me/5511933110769` (telefone (11) 93311-0769).
  As mensagens pré-preenchidas ficam no parâmetro `?text=` de cada link.
- **Instagram:** `https://instagram.com/johnbell.tatuador`
- **Endereço:** R. Vieira de Morais, 923 · Santo Amaro — São Paulo/SP · CEP 04617-012
- **Depoimentos:** nomes fictícios — substitua pelos reais quando quiser.
- **Avaliação:** 5,0 ★ · 306 avaliações no Google.

---

## 🚀 Publicar no GitHub Pages

1. Crie um repositório no GitHub e envie estes arquivos (o `index.html` precisa estar na **raiz** do repositório):

   ```bash
   git init
   git add .
   git commit -m "Site Bell's Tattoo & Piercing"
   git branch -M main
   git remote add origin https://github.com/SEU-USUARIO/SEU-REPO.git
   git push -u origin main
   ```

2. No GitHub, vá em **Settings → Pages**.
3. Em **Build and deployment → Source**, selecione **Deploy from a branch**.
4. Escolha a branch **main** e a pasta **/ (root)** e clique em **Save**.
5. Aguarde alguns minutos. O site ficará disponível em:

   ```
   https://SEU-USUARIO.github.io/SEU-REPO/
   ```

> Se quiser usar um **domínio próprio** (ex.: `bellstattoo.com.br`), configure em
> **Settings → Pages → Custom domain**.

---

## 💻 Rodar localmente

É um site estático — basta abrir o `index.html` no navegador.
Para ver o mapa e as fontes carregarem certinho, o ideal é servir por HTTP:

```bash
# Python 3
python -m http.server 8000
# depois abra http://localhost:8000
```

---

Feito com carinho para o Bell's Tattoo & Piercing · Women-owned & LGBTQ+ friendly.
