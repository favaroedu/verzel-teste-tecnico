# Teste Técnico QA Júnior - Verzel

Repositório desenvolvido para o teste técnico de QA Júnior da Verzel.

O teste contempla levantamento de cenários a partir da documentação, execução de testes manuais e exploratórios, identificação e documentação de bugs, registro das evidências e automação de cenários E2E com Playwright.

## Aplicação testada

**Verzel Store**

https://verzel-store.qa-test-verzel-store.workers.dev

Documentação da aplicação:

https://verzel-store.qa-test-verzel-store.workers.dev/documentacao

## Entregas

### 1. Casos de teste

Os cenários foram elaborados a partir da documentação disponibilizada pela aplicação, utilizando Gherkin.

Arquivo:

`testes/casos-de-teste.md`

O documento contém os casos de teste, objetivos, prioridades, técnicas, dados utilizados e regras de negócio validadas.

### 2. Execução dos testes

Os resultados dos testes manuais e exploratórios estão documentados em:

`testes/execucao.md`

O documento apresenta o resultado de cada cenário executado, incluindo os resultados esperados, resultados obtidos e evidências correspondentes.

### 3. Bugs encontrados

Os bugs identificados durante a execução estão documentados em:

`testes/bugs.md`

### 4. Evidências

As evidências da execução dos testes estão disponíveis em:

`testes/evidencias/`

Os arquivos estão identificados de acordo com os respectivos casos de teste.

### 5. Automação com Playwright

Foram automatizados 3 cenários E2E:

- CT06 - Cupom expirado
- CT11 - Limite máximo de quantidade por produto
- CT20 - Finalização do pedido com cupom de desconto

Os testes automatizados estão disponíveis em:

`testes/playwright/casos.spec.js`

## Como executar a automação

### Pré-requisitos

- Node.js
- npm

### Instalação das dependências

Na raiz do projeto, execute:

```bash
npm install
```

Caso os navegadores do Playwright ainda não estejam instalados:

```bash
npx playwright install
```

### Executar os testes

```bash
npx playwright test
```

### Executar os testes com o navegador visível

```bash
npx playwright test --headed
```

### Visualizar o relatório

Após a execução dos testes:

```bash
npx playwright show-report
```

## Estrutura do projeto

```text
verzel-teste-tecnico/
├── testes/
│   ├── evidencias/
│   │   ├── CT01-carrinho-sem-cupom.png
│   │   ├── CT02-cupom-valido.png
│   │   ├── ...
│   │   └── CT28-responsividade-mobile.png
│   │
│   ├── playwright/
│   │   ├── casos.spec.js
│   │   └── comandos.js
│   │
│   ├── bugs.md
│   ├── casos-de-teste.md
│   └── execucao.md
│
├── README.md
├── package.json
├── package-lock.json
└── playwright.config.js
```

## Estratégia de testes

A execução combinou diferentes abordagens de teste:

- **Escopo das validações**: funcionalidades, regras de negócio, usabilidade e responsividade e respostas da API.
- **Técnicas e abordagens**: cenários positivos e negativos, análise de valor limite e testes exploratórios.
- **Automação**: testes E2E com Playwright.
- **Priorização**: regras de negócio, cálculos financeiros e validações de entrada.


## Resultado

Foram executados 28 casos de teste:

- 27 casos aprovados;
- 1 caso reprovado;
- 3 bugs identificados.

O caso reprovado foi o **CT08 - Frete grátis no limite de R$ 200,00**.

O comportamento identificado foi a cobrança de R$ 19,90 de frete quando o subtotal era exatamente R$ 200,00, contrariando a regra de negócio que determina frete grátis para subtotais maiores ou iguais a R$ 200,00.

Os bugs estão documentados em:

`testes/bugs.md`

## Uso de Inteligência Artificial

Foi utilizada Inteligência Artificial como ferramenta de apoio durante a elaboração deste teste técnico.

A IA foi utilizada para:

- Apoio na organização e revisão da documentação;
- Revisão dos casos de teste;
- Apoio na revisão dos scripts de automação com Playwright;
- Apoio na identificação de inconsistências entre os artefatos.

A execução dos testes, a análise dos comportamentos da aplicação, a coleta de evidências e a identificação dos bugs foram realizadas por mim no ambiente disponibilizado para o desafio. Todo o conteúdo produzido com apoio da IA foi revisado e validado por mim.