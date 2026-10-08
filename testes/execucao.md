# Execução dos Testes

## CT01 - Cálculo do carrinho sem cupom

**Data da execução:** 06/10/2026

**Status:** PASS

### Dados utilizados

- Produto: Calça Jeans Slim (P002)
- Quantidade: 1
- Cupom: Não informado

### Resultado esperado x resultado obtido

| Item | Resultado esperado | Resultado obtido | Status |
|---|---:|---:|---|
| Subtotal | R$ 139,90 | R$ 139,90 | PASS |
| Desconto | R$ 0,00 | R$ 0,00 | PASS |
| Frete | R$ 19,90 | R$ 19,90 | PASS |
| Valor faltante para frete grátis | R$ 60,10 | R$ 60,10 | PASS |
| Total | R$ 159,80 | R$ 159,80 | PASS |

### Resultado da execução

Todos os valores apresentados pela aplicação correspondem aos resultados esperados definidos no caso de teste.

### Evidência

`evidencias/CT01-carrinho-sem-cupom.png`

---

## CT02 - Aplicação de cupom válido

**Data da execução:** 07/10/2026

**Status:** PASS

### Dados utilizados

- Produto: Calça Jeans Slim (P002)
- Quantidade: 1
- Cupom: BEMVINDO10

### Resultado esperado x resultado obtido

| Item | Resultado esperado | Resultado obtido | Status |
|---|---:|---:|---|
| Subtotal | R$ 139,90 | R$ 139,90 | PASS |
| Desconto | R$ 13,99 | R$ 13,99 | PASS |
| Frete | R$ 19,90 | R$ 19,90 | PASS |
| Total | R$ 145,81 | R$ 145,81 | PASS |

### Resultado da execução

O cupom `BEMVINDO10` foi aceito pela aplicação e o desconto de 10% foi aplicado corretamente sobre o subtotal.

Os valores apresentados pela aplicação correspondem aos resultados esperados definidos no caso de teste.

### Evidência

`evidencias/CT02-cupom-valido.png`

---

## CT03 - Cupom informado em letras minúsculas

**Data da execução:** 07/10/2026

**Status:** PASS

### Dados utilizados

- Produto: Calça Jeans Slim (P002)
- Quantidade: 1
- Cupom: bemvindo10

### Resultado esperado x resultado obtido

| Item | Resultado esperado | Resultado obtido | Status |
|---|---:|---:|---|
| Subtotal | R$ 139,90 | R$ 139,90 | PASS |
| Desconto | R$ 13,99 | R$ 13,99 | PASS |
| Frete | R$ 19,90 | R$ 19,90 | PASS |
| Total | R$ 145,81 | R$ 145,81 | PASS |

### Resultado da execução

O cupom informado em letras minúsculas foi aceito pela aplicação e o desconto de 10% foi aplicado corretamente sobre o subtotal.

O comportamento está de acordo com a regra de negócio que determina que o código do cupom não diferencia letras maiúsculas de minúsculas.

### Evidência

`evidencias/CT03-cupom-minusculo-input.png`

---

## CT04 - Cupom com espaços nas extremidades

**Data da execução:** 07/10/2026

**Status:** PASS

### Dados utilizados

- Produto: Calça Jeans Slim (P002)
- Quantidade: 1
- Cupom: `  BEMVINDO10  `

### Resultado esperado x resultado obtido

| Item | Resultado esperado | Resultado obtido | Status |
|---|---:|---:|---|
| Subtotal | R$ 139,90 | R$ 139,90 | PASS |
| Desconto | R$ 13,99 | R$ 13,99 | PASS |
| Frete | R$ 19,90 | R$ 19,90 | PASS |
| Total | R$ 145,81 | R$ 145,81 | PASS |

### Resultado da execução

O cupom informado com espaços nas extremidades foi aceito pela aplicação e o desconto de 10% foi aplicado corretamente sobre o subtotal.

O comportamento está de acordo com a regra de negócio que determina que o cupom aceita espaços no início e no final do código.

### Evidência

`evidencias/CT04-cupom-com-espacos.png`

---

## CT05 - Cupom inexistente

**Data da execução:** 07/10/2026

**Status:** PASS

### Dados utilizados

- Produto: Calça Jeans Slim (P002)
- Quantidade: 1
- Cupom: `CUPOMINVALIDO`

### Resultado esperado x resultado obtido

| Item | Resultado esperado | Resultado obtido | Status |
|---|---:|---:|---|
| Subtotal | R$ 139,90 | R$ 139,90 | PASS |
| Desconto | R$ 0,00 | R$ 0,00 | PASS |
| Frete | R$ 19,90 | R$ 19,90 | PASS |
| Total | R$ 159,80 | R$ 159,80 | PASS |

### Resultado da execução

A aplicação rejeitou corretamente o cupom inexistente, apresentando a mensagem **“Cupom inválido.”**.

O desconto permaneceu em R$ 0,00 e os demais valores do pedido permaneceram inalterados.

### Evidência

`evidencias/CT05-cupom-inexistente.png`

---

## CT06 - Cupom expirado

**Data da execução:** 07/10/2026

**Status:** PASS

### Dados utilizados

- Produto: Calça Jeans Slim (P002)
- Quantidade: 1
- Cupom: `VERAO2026`

### Resultado esperado x resultado obtido

| Item | Resultado esperado | Resultado obtido | Status |
|---|---:|---:|---|
| Subtotal | R$ 139,90 | R$ 139,90 | PASS |
| Desconto | R$ 0,00 | R$ 0,00 | PASS |
| Frete | R$ 19,90 | R$ 19,90 | PASS |
| Total | R$ 159,80 | R$ 159,80 | PASS |

### Resultado da execução

A aplicação identificou corretamente o cupom como expirado e apresentou a mensagem **“Cupom expirado.”**.

O desconto permaneceu em R$ 0,00 e os demais valores do pedido permaneceram inalterados.

### Evidência

`evidencias/CT06-cupom-expirado.png`

---

## CT07 - Troca de cupom

**Data da execução:** 07/10/2026

**Status:** PASS

### Dados utilizados

- Produto: Calça Jeans Slim (P002)
- Quantidade: 1
- Primeiro cupom: `BEMVINDO10`
- Segundo cupom: `VERAO2026`

### Resultado esperado x resultado obtido

| Item | Resultado esperado | Resultado obtido | Status |
|---|---:|---:|---|
| Primeiro cupom aplicado | BEMVINDO10 | BEMVINDO10 | PASS |
| Desconto com primeiro cupom | R$ 13,99 | R$ 13,99 | PASS |
| Remoção do primeiro cupom | Cupom removido | Cupom removido | PASS |
| Segundo cupom | VERAO2026 | VERAO2026 | PASS |
| Mensagem do segundo cupom | Cupom expirado. | Cupom expirado. | PASS |
| Desconto final | R$ 0,00 | R$ 0,00 | PASS |
| Frete final | R$ 19,90 | R$ 19,90 | PASS |
| Total final | R$ 159,80 | R$ 159,80 | PASS |

### Resultado da execução

O cupom `BEMVINDO10` foi aplicado inicialmente e, após sua remoção, foi possível informar outro cupom.

O cupom `VERAO2026` foi corretamente identificado como expirado, sem manter o desconto do cupom anterior.

O comportamento está de acordo com a regra de negócio que determina que apenas um cupom pode ser aplicado por vez e que o cupom atual deve ser removido antes da aplicação de outro.

### Evidência

`evidencias/CT07-troca-de-cupom.png`

---

## CT08 - Frete grátis no limite de R$ 200,00

**Data da execução:** 07/10/2026

**Status:** FAIL

### Dados utilizados

- Produto: Mochila Urbana 20L (P005) - quantidade 1
- Produto: Garrafa Térmica 750ml (P008) - quantidade 2
- Cupom: Não informado

### Resultado esperado x resultado obtido

| Item | Resultado esperado | Resultado obtido | Status |
|---|---:|---:|---|
| Subtotal | R$ 200,00 | R$ 200,00 | PASS |
| Desconto | R$ 0,00 | R$ 0,00 | PASS |
| Frete | R$ 0,00 | R$ 19,90 | FAIL |
| Total | R$ 200,00 | R$ 219,90 | FAIL |

### Resultado da execução

O subtotal atingiu exatamente o limite de R$ 200,00, porém a aplicação continuou cobrando R$ 19,90 de frete.

A aplicação informa que faltam R$ 0,00 para o frete grátis, mas o frete não é zerado.

O comportamento diverge da regra de negócio definida para o ambiente, segundo a qual subtotais maiores ou iguais a R$ 200,00 devem possuir frete grátis.

### Evidência

`evidencias/CT08-frete-gratis-limite-200.png`

### Bug relacionado

`BUG-001 - Frete não fica grátis quando o subtotal é exatamente R$ 200,00`

---

## CT09 - Frete para subtotal abaixo de R$ 200,00

**Data da execução:** 07/10/2026

**Status:** PASS

### Dados utilizados

- Produto: Tênis Casual Urbano (P003)
- Quantidade: 1
- Cupom: Não informado

### Resultado esperado x resultado obtido

| Item | Resultado esperado | Resultado obtido | Status |
|---|---:|---:|---|
| Subtotal | R$ 189,90 | R$ 189,90 | PASS |
| Desconto | R$ 0,00 | R$ 0,00 | PASS |
| Frete | R$ 19,90 | R$ 19,90 | PASS |
| Valor faltante para frete grátis | R$ 10,10 | R$ 10,10 | PASS |
| Total | R$ 209,80 | R$ 209,80 | PASS |

### Resultado da execução

A aplicação calculou corretamente o frete de R$ 19,90 para um subtotal abaixo de R$ 200,00.

O valor apresentado como faltante para atingir o frete grátis também foi calculado corretamente em R$ 10,10.

### Evidência

`evidencias/CT09-frete-abaixo-200.png`

---

## CT10 - Frete grátis calculado antes do desconto

**Data da execução:** 07/10/2026

**Status:** PASS

### Dados utilizados

- Produto: Camiseta Essencial (P001) - quantidade 1
- Produto: Mochila Urbana 20L (P005) - quantidade 1
- Produto: Garrafa Térmica 750ml (P008) - quantidade 1
- Cupom: `BEMVINDO10`

### Resultado esperado x resultado obtido

| Item | Resultado esperado | Resultado obtido | Status |
|---|---:|---:|---|
| Subtotal | R$ 209,90 | R$ 209,90 | PASS |
| Desconto | R$ 20,99 | R$ 20,99 | PASS |
| Frete | R$ 0,00 | R$ 0,00 | PASS |
| Total | R$ 188,91 | R$ 188,91 | PASS |

### Resultado da execução

A aplicação calculou corretamente o frete grátis considerando o subtotal antes da aplicação do desconto.

Mesmo após a aplicação do cupom `BEMVINDO10`, que reduziu o valor do pedido para R$ 188,91, o frete permaneceu em R$ 0,00.

O comportamento está de acordo com a regra de negócio definida para o cálculo do frete.

### Evidência

`evidencias/CT10-frete-antes-do-desconto.png`

---

## CT11 - Quantidade máxima permitida

**Data da execução:** 08/10/2026

**Status:** PASS

### Dados utilizados

- Produto: Calça Jeans Slim (P002)
- Quantidade: 5
- Cupom: Não informado

### Resultado esperado x resultado obtido

| Item | Resultado esperado | Resultado obtido | Status |
|---|---:|---:|---|
| Quantidade | 5 | 5 | PASS |
| Subtotal | R$ 699,50 | R$ 699,50 | PASS |
| Desconto | R$ 0,00 | R$ 0,00 | PASS |
| Frete | R$ 0,00 | Grátis | PASS |
| Total | R$ 699,50 | R$ 699,50 | PASS |

### Resultado da execução

A aplicação permitiu corretamente a inclusão de até 5 unidades do mesmo produto.

A quantidade máxima foi respeitada e o cálculo do subtotal e do total foi realizado corretamente.

### Evidência

`evidencias/CT11-quantidade-maxima.png`

---

## CT12 - Quantidade acima do limite

**Data da execução:** 08/10/2026

**Status:** PASS

### Dados utilizados

- Produto: Calça Jeans Slim (P002)
- Quantidade inicial: 5
- Tentativa: adicionar a 6ª unidade
- Cupom: Não informado

### Resultado esperado x resultado obtido

| Item | Resultado esperado | Resultado obtido | Status |
|---|---|---|---|
| Quantidade máxima | 5 unidades | 5 unidades | PASS |
| Tentativa de adicionar 6ª unidade | Não permitir | Não permitida | PASS |
| Botão de adicionar (`+`) | Desabilitado ao atingir o limite | Desabilitado ao atingir o limite | PASS |

### Resultado da execução

Ao atingir a quantidade máxima de 5 unidades, a aplicação desabilitou o botão de adicionar mais produtos.

A tentativa de aumentar a quantidade para 6 unidades não foi permitida, mantendo o carrinho dentro do limite definido para o produto.

### Evidência

`evidencias/CT12-quantidade-acima-limite.png`

---

## CT13 - Produto duplicado no cálculo do carrinho

**Data de execução:** 08/10/2026  
**Resultado:** PASS

### Dados utilizados

- Produto: P002 - Calça Jeans Slim
- Quantidade: 1
- Produto repetido: P002 - Calça Jeans Slim
- Quantidade do item repetido: 1
- Cupom: Não informado
- Método: API
- Endpoint: `POST /api/carrinho/calcular`

### Resultado esperado

A API deve rejeitar a requisição quando o mesmo produto aparecer mais de uma vez na lista de itens.

- HTTP esperado: `422 Unprocessable Entity`
- Código esperado: `ITEM_DUPLICADO`

### Resultado obtido

A API retornou:

- HTTP: `422 Unprocessable Entity`
- Código: `ITEM_DUPLICADO`
- Mensagem: `"O produto P002 aparece mais de uma vez."`
- Campo: `itens[1].produtoId`

**Resultado:** PASS

### Evidência

`evidencias/CT13-produto-duplicado.png`

---

## CT14 - Quantidade inválida

**Data de execução:** 08/10/2026  
**Resultado:** PASS

### Dados utilizados

- Produto: P002 - Calça Jeans Slim
- Quantidade: 0
- Cupom: Não informado
- Método: API
- Endpoint: `POST /api/carrinho/calcular`

### Resultado esperado

A API deve rejeitar a requisição quando a quantidade informada for menor que 1.

- HTTP esperado: `422 Unprocessable Entity`
- Código esperado: `QUANTIDADE_INVALIDA`

### Resultado obtido

A API retornou:

- HTTP: `422 Unprocessable Entity`
- Código: `QUANTIDADE_INVALIDA`
- Mensagem: `"A quantidade deve ser um número inteiro maior ou igual a 1."`
- Campo: `itens[0].quantidade`

**Resultado:** PASS

### Evidência

`evidencias/CT14-quantidade-invalida.png`

---

## CT15 - Produto inexistente

**Data de execução:** 08/10/2026  
**Resultado:** PASS

### Dados utilizados

- Produto: P999 - Produto inexistente
- Quantidade: 1
- Cupom: Não informado
- Método: API
- Endpoint: `POST /api/carrinho/calcular`

### Resultado esperado

A API deve rejeitar a requisição quando o produto informado não existir.

- HTTP esperado: `422 Unprocessable Entity`
- Código esperado: `PRODUTO_NAO_ENCONTRADO`

### Resultado obtido

A API retornou:

- HTTP: `422 Unprocessable Entity`
- Código: `PRODUTO_NAO_ENCONTRADO`
- Mensagem: `"Produto P999 não encontrado."`
- Campo: `itens[0].produtoId`

**Resultado:** PASS

### Evidência

`evidencias/CT15-produto-inexistente.png`

---

## CT16 - Nome sem sobrenome

**Data de execução:** 08/10/2026  
**Resultado:** PASS

### Dados utilizados

- Produto: P002 - Calça Jeans Slim
- Quantidade: 1
- Nome: MARIA
- E-mail: maria@exemplo.com
- CEP: 01310-100
- Método: Interface

### Resultado esperado

A aplicação deve rejeitar a finalização do pedido quando o nome informado não possuir sobrenome.

- Mensagem esperada: `Informe nome e sobrenome.`

### Resultado obtido

A aplicação apresentou:

- Mensagem: `Informe nome e sobrenome.`

**Resultado:** PASS

### Evidência

`evidencias/CT16-nome-sem-sobrenome.png`

---

## CT17 - E-mail inválido

**Data de execução:** 08/10/2026  
**Resultado:** PASS

### Dados utilizados

- Produto: P002 - Calça Jeans Slim
- Quantidade: 1
- Nome: MARIA SILVA
- E-mail: maria@
- CEP: 01310-100
- Método: Interface

### Resultado esperado

A aplicação deve rejeitar a finalização do pedido quando o e-mail informado possuir formato inválido.

- Mensagem esperada: `Informe um e-mail válido.`

### Resultado obtido

A aplicação apresentou:

- Mensagem: `Informe um e-mail válido.`

O pedido não foi finalizado.

**Resultado:** PASS

### Evidência

`evidencias/CT17-email-invalido.png`

---

## CT18 - CEP válido sem hífen

**Data de execução:** 08/10/2026  
**Resultado:** PASS

### Dados utilizados

- Produto: P002 - Calça Jeans Slim
- Quantidade: 1
- Nome: MARIA SILVA
- E-mail: maria@exemplo.com
- CEP: 01310100
- Método: Interface

### Resultado esperado

O pedido deve ser finalizado com sucesso quando for informado um CEP válido com 8 dígitos, sem hífen.

### Resultado obtido

A aplicação aceitou o CEP informado sem hífen e finalizou o pedido com sucesso.

- Número do pedido: `VZ-701190`
- Subtotal: `R$ 139,90`
- Desconto: `R$ 0,00`
- Frete: `R$ 19,90`
- Total: `R$ 159,80`

**Resultado:** PASS

### Evidência

`evidencias/CT18-cep-sem-hifen.png`

---

## CT19 - CEP válido com hífen

**Data de execução:** 08/10/2026  
**Resultado:** PASS

### Dados utilizados

- Produto: P002 - Calça Jeans Slim
- Quantidade: 1
- Nome: MARIA SILVA
- E-mail: maria@exemplo.com
- CEP: 01310-100
- Método: Interface

### Resultado esperado

O pedido deve ser finalizado com sucesso quando for informado um CEP válido no formato com hífen.

### Resultado obtido

A aplicação aceitou o CEP informado com hífen e finalizou o pedido com sucesso.

- Número do pedido: conforme apresentado na tela
- Subtotal: `R$ 139,90`
- Desconto: `R$ 0,00`
- Frete: `R$ 19,90`
- Total: `R$ 159,80`

**Resultado:** PASS

### Evidência

`evidencias/CT19-cep-com-hifen.png`

---

## CT20 - Finalização do pedido com cupom de desconto

**Data de execução:** 08/10/2026  
**Resultado:** PASS

### Dados utilizados

- Produto: P005 - Mochila Urbana 20L
- Quantidade: 1
- Nome: Maria Silva
- E-mail: maria@exemplo.com
- CEP: 01310-100
- Cupom: BEMVINDO10
- Método: Interface

### Resultado esperado

O pedido deve ser criado com sucesso utilizando dados válidos e o cupom `BEMVINDO10`.

- Subtotal esperado: `R$ 100,00`
- Desconto esperado: `R$ 10,00`
- Frete esperado: `R$ 19,90`
- Total esperado: `R$ 109,90`
- Número do pedido no formato `VZ-000000`

### Resultado obtido

O pedido foi criado com sucesso.

- Número do pedido: `VZ-650247`
- Subtotal: `R$ 100,00`
- Desconto: `R$ 10,00`
- Frete: `R$ 19,90`
- Total: `R$ 109,90`

**Resultado:** PASS

### Evidência

`evidencias/CT20-finalizacao-pedido-cupom.png`

---

## CT21 - Dados do cliente inválidos pela API

**Data de execução:** 08/10/2026  
**Resultado:** PASS

### Dados utilizados

- Produto: P005 - Mochila Urbana 20L
- Quantidade: 1
- Nome: Maria
- E-mail: maria@
- CEP: 123
- Método: API
- Endpoint: `POST /api/pedidos`

### Resultado esperado

A API deve rejeitar a requisição quando os dados do cliente forem inválidos.

- HTTP esperado: `422 Unprocessable Entity`
- Código esperado: `DADOS_INVALIDOS`

### Resultado obtido

A API retornou:

- HTTP: `422 Unprocessable Entity`
- Código: `DADOS_INVALIDOS`
- Mensagem: `Existem campos inválidos no pedido.`
- Campo: `cliente.nome` — `Informe nome e sobrenome.`
- Campo: `cliente.email` — `Informe um e-mail válido.`
- Campo: `cliente.cep` — `Informe um CEP com 8 dígitos.`

**Resultado:** PASS

### Evidência

`evidencias/CT21-dados-cliente-invalidos.png`

---

## CT22 - Cupom inexistente na criação do pedido

**Data de execução:** 08/10/2026  
**Resultado:** PASS

### Dados utilizados

- Produto: P005 - Mochila Urbana 20L
- Quantidade: 1
- Nome: Maria Silva
- E-mail: maria@exemplo.com
- CEP: 01310-100
- Cupom: CUPOMINVALIDO
- Método: API
- Endpoint: `POST /api/pedidos`

### Resultado esperado

A API deve rejeitar a criação do pedido quando for informado um cupom inexistente.

- HTTP esperado: `422 Unprocessable Entity`
- Código esperado: `CUPOM_INVALIDO`

### Resultado obtido

A API retornou:

- HTTP: `422 Unprocessable Entity`
- Código: `CUPOM_INVALIDO`
- Mensagem: `Cupom inválido.`
- Campo: `cupom`

O pedido não foi criado.

**Resultado:** PASS

### Evidência

`evidencias/CT22-cupom-inexistente-pedido.png`

---

## CT23 - Cupom expirado na criação do pedido

**Data de execução:** 08/10/2026  
**Resultado:** PASS

### Dados utilizados

- Produto: P005 - Mochila Urbana 20L
- Quantidade: 1
- Nome: Maria Silva
- E-mail: maria@exemplo.com
- CEP: 01310-100
- Cupom: VERAO2026
- Método: API
- Endpoint: `POST /api/pedidos`

### Resultado esperado

A API deve rejeitar a criação do pedido quando for informado um cupom expirado.

- HTTP esperado: `422 Unprocessable Entity`
- Código esperado: `CUPOM_EXPIRADO`

### Resultado obtido

A API retornou:

- HTTP: `422 Unprocessable Entity`
- Código: `CUPOM_EXPIRADO`
- Mensagem: `Cupom expirado.`
- Campo: `cupom`

O pedido não foi criado.

**Resultado:** PASS

### Evidência

`evidencias/CT23-cupom-expirado-pedido.png`