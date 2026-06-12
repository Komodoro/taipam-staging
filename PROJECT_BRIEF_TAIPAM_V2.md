# PROJECT_BRIEF.md

# TAIPAM v2 - Project Brief

## Objetivo

Criar uma nova versão do website da Tuna Académica do IPAM (TAIPAM) com foco em:

- Simplicidade
- Sustentabilidade
- Facilidade de manutenção
- Baixo custo de operação
- Independência de plataformas proprietárias
- Performance e SEO

O objetivo não é criar um CMS complexo nem uma plataforma de gestão de conteúdos.

O objetivo é criar um site institucional que possa ser mantido facilmente por futuras gerações da Tuna.

---

# Filosofia do Projeto

## Princípio Fundamental

> Separar conteúdo da apresentação.

Sempre que possível:

- HTML para conteúdo permanente.
- JSON para conteúdo que necessita de atualização periódica.

---

## Outro Princípio Importante

> Se uma secção não tiver um responsável claro para a manter atualizada, essa secção não deve existir.

O site deve evitar criar dívida de manutenção.

Conteúdo desatualizado é pior do que conteúdo inexistente.

---

# Arquitetura Geral

## Páginas Estáticas

Estas páginas serão HTML puro.

Não necessitam de sistema de gestão.

Não necessitam de JSON.

Não necessitam de base de dados.

### Home

```text
/
```

### TAIPAM

```text
/taipam
```

### Música

```text
/musica
```

Conteúdo:

- Breve apresentação musical
- Ligações Spotify
- Ligações YouTube
- Outros serviços de streaming, se existirem

Nota:

Não existe necessidade de uma secção "Discografia".

Atualmente existe apenas um álbum gravado.

---

### Patrocinar FITAM

```text
/patrocinar-fitam
```

---

### Contactos

```text
/contactos
```

---

### Política de Privacidade

```text
/privacidade
```

---

# Conteúdo Dinâmico

Apenas duas áreas justificam conteúdo dinâmico.

## FITAM

Página principal:

```text
/fitam
```

Arquivo:

```text
/fitam/edicoes
```

Dados armazenados em:

```text
content/fitam-editions.json
```

Exemplos de informação:

- Número da edição
- Ano
- Datas
- Cartaz
- Tunas participantes
- Prémios atribuídos
- Vídeos
- Fotografias selecionadas
- Descrição

---

## Calendário

Página:

```text
/calendario
```

Dados armazenados em:

```text
content/eventos.json
```

Exemplos de informação:

- Título
- Data
- Hora
- Local
- Descrição
- Link

Caso não existam eventos futuros:

```text
De momento não existem eventos públicos agendados.
```

---

# Conteúdo Excluído

As seguintes secções não serão implementadas na versão 2.

## Membros

Motivo:

- Elevada manutenção
- Informação rapidamente desatualizada
- Questões de privacidade
- Pouco valor para visitantes externos

---

## Galeria

Motivo:

- Elevada manutenção
- Rapidamente desatualizada
- Conteúdo já disponível nas redes sociais

---

## Discografia

Substituída por:

```text
/musica
```

---

## Página de Prémios Independente

A TAIPAM nao pode pregar que nao quer saber de premios e depois ter uma pagina no site dedicada a isso.

Seria completamente incoerente com a forma de estar da tuna

---

# Administração de Conteúdo

## Área Administrativa

Existirá uma área reservada:

```text
/admin
```

Objetivo:

Gerar ficheiros JSON.

Não será um CMS.

Não existirá base de dados.

Não existirá WordPress.

Não existirão dependências externas desnecessárias.

---

## Funcionamento

O gerador:

1. Lê o JSON atual.
2. Permite adicionar ou editar registos.
3. Gera novo JSON.
4. Guarda o ficheiro atualizado.

Exemplo:

```text
eventos.json
fitam-editions.json
```

---

# Publicação

Fluxo previsto:

```text
Admin
↓
Atualização JSON
↓
Commit GitHub
↓
GitHub Actions
↓
Deploy Automático FTP
↓
Servidor
```

---

# Estrutura Prevista

```text
/
├── index.html
├── taipam.html
├── musica.html
├── fitam.html
├── calendario.html
├── contactos.html
├── patrocinar-fitam.html
├── privacidade.html
│
├── fitam/
│   ├── edicoes.html
│   └── edicao.html
│
├── content/
│   ├── eventos.json
│   └── fitam-editions.json
│
└── admin/
    ├── index.html
    ├── eventos.html
    └── fitam.html
```

---

# Tecnologias

## Frontend

- HTML5
- CSS3
- JavaScript Vanilla

---

## Dados

- JSON

---

## Controlo de Versões

- Git
- GitHub

---

## Deploy

- GitHub Actions
- FTP Automático

---

# Objetivo Final

Criar um website:

- Rápido
- Leve
- Sustentável
- Fácil de transferir para futuras direções
- Fácil de alojar
- Fácil de manter
- Independente de plataformas proprietárias

A simplicidade é uma funcionalidade, não uma limitação.
