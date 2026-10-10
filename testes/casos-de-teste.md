# Casos de Teste

## CT01 - Cálculo do carrinho sem cupom

```gherkin
Funcionalidade: Cálculo do carrinho

  @CT01
  Cenário: Calcular carrinho sem cupom com subtotal abaixo do limite para frete grátis
   
    Dado que o cliente está na página de produtos
    E o carrinho está vazio
    Quando o cliente adiciona 1 unidade do produto "Calça Jeans Slim" ao carrinho
    E acessa o carrinho
    E mantém o campo de cupom vazio
    Então o subtotal deve ser de R$ 139,90
    E o desconto deve ser de R$ 0,00
    E o frete deve ser de R$ 19,90
    E o valor faltante para frete grátis deve ser de R$ 60,10
    E o total do pedido deve ser de R$ 159,80
```

### Informações do cenário

**ID:** CT01

**Objetivo:**  
Validar o cálculo do subtotal, desconto, frete e total do carrinho quando nenhum cupom é aplicado e o subtotal é inferior a R$ 200,00.

**Prioridade:** Alta

**Tipo:** Funcional

**Técnica:** Teste baseado em regra de negócio

### Dados de teste

| Campo | Valor |
|---|---|
| Produto | Calça Jeans Slim |
| Código | P002 |
| Quantidade | 1 |
| Preço unitário | R$ 139,90 |
| Cupom | Não informado |

### Regras de negócio validadas

- Subtotal inferior a R$ 200,00 deve possuir frete de R$ 19,90.
- O sistema deve informar o valor restante para atingir R$ 200,00.
- O total deve ser calculado como subtotal - desconto + frete.

---

## CT02 - Aplicação de cupom válido

```gherkin
Funcionalidade: Aplicação de cupom de desconto

  @CT02
  Cenário: Aplicar cupom válido com desconto de 10 por cento

    Dado que o cliente está na página de produtos
    E o carrinho está vazio
    Quando o cliente adiciona 1 unidade do produto "Calça Jeans Slim" ao carrinho
    E acessa o carrinho
    E informa o cupom "BEMVINDO10"
    E aplica o cupom
    Então o subtotal deve ser de R$ 139,90
    E o desconto deve ser de R$ 13,99
    E o frete deve ser de R$ 19,90
    E o total do pedido deve ser de R$ 145,81
```

### Informações do cenário

**ID:** CT02

**Objetivo:**  
Validar a aplicação do cupom válido `BEMVINDO10` e o cálculo do desconto de 10% sobre o subtotal.

**Prioridade:** Alta

**Tipo:** Funcional

**Técnica:** Teste baseado em regra de negócio

### Dados de teste

| Campo | Valor |
|---|---|
| Produto | Calça Jeans Slim |
| Código | P002 |
| Quantidade | 1 |
| Preço unitário | R$ 139,90 |
| Cupom | BEMVINDO10 |

### Regras de negócio validadas

- O cupom `BEMVINDO10` aplica 10% de desconto sobre o subtotal.
- O desconto não incide sobre o frete.
- O total considera subtotal - desconto + frete.

---

## CT03 - Cupom informado em letras minúsculas

```gherkin
Funcionalidade: Aplicação de cupom de desconto

  @CT03
  Cenário: Aplicar cupom válido ignorando diferença entre maiúsculas e minúsculas

    Dado que o cliente está na página de produtos
    E o carrinho está vazio
    Quando o cliente adiciona 1 unidade do produto "Calça Jeans Slim" ao carrinho
    E acessa o carrinho
    E informa o cupom "bemvindo10"
    E aplica o cupom
    Então o cupom deve ser aceito
    E o desconto deve ser de R$ 13,99
    E o frete deve ser de R$ 19,90
```

### Informações do cenário

**ID:** CT03

**Objetivo:**  
Validar que o código do cupom não diferencia letras maiúsculas de minúsculas.

**Prioridade:** Média

**Tipo:** Funcional / Positivo

**Técnica:** Teste de variação de entrada

### Dados de teste

| Campo | Valor |
|---|---|
| Produto | Calça Jeans Slim |
| Código | P002 |
| Quantidade | 1 |
| Cupom | bemvindo10 |

### Regras de negócio validadas

- O código do cupom deve ser case-insensitive.
- O cupom deve ser tratado da mesma forma que `BEMVINDO10`.

---

## CT04 - Cupom com espaços nas extremidades

```gherkin
Funcionalidade: Aplicação de cupom de desconto

  @CT04
  Cenário: Aplicar cupom válido ignorando espaços no início e no fim

    Dado que o cliente está na página de produtos
    E o carrinho está vazio
    Quando o cliente adiciona 1 unidade do produto "Calça Jeans Slim" ao carrinho
    E acessa o carrinho
    E informa o cupom "  BEMVINDO10  "
    E aplica o cupom
    Então o cupom deve ser aceito
    E o desconto deve ser de R$ 13,99
    E o frete deve ser de R$ 19,90
```

### Informações do cenário

**ID:** CT04

**Objetivo:**  
Validar que espaços inseridos antes ou depois do código do cupom são ignorados.

**Prioridade:** Média

**Tipo:** Funcional / Positivo

**Técnica:** Teste de variação de entrada

### Dados de teste

| Campo | Valor |
|---|---|
| Produto | Calça Jeans Slim |
| Código | P002 |
| Quantidade | 1 |
| Cupom | `  BEMVINDO10  ` |

### Regras de negócio validadas

- Espaços no início e no fim do código devem ser ignorados.
- O cupom deve ser aceito como válido.

---

## CT05 - Cupom inexistente

```gherkin
Funcionalidade: Validação de cupom

  @CT05
  Cenário: Rejeitar cupom inexistente

    Dado que o cliente está na página de produtos
    E o carrinho está vazio
    Quando o cliente adiciona 1 unidade do produto "Calça Jeans Slim" ao carrinho
    E acessa o carrinho
    E informa o cupom "CUPOMINVALIDO"
    E aplica o cupom
    Então deve ser exibida a mensagem "Cupom inválido."
    E o desconto deve ser de R$ 0,00
```

### Informações do cenário

**ID:** CT05

**Objetivo:**  
Validar o comportamento da aplicação ao informar um cupom inexistente.

**Prioridade:** Alta

**Tipo:** Negativo

**Técnica:** Teste de validação de entrada

### Dados de teste

| Campo | Valor |
|---|---|
| Produto | Calça Jeans Slim |
| Código | P002 |
| Quantidade | 1 |
| Cupom | CUPOMINVALIDO |

### Regras de negócio validadas

- Cupom inexistente deve exibir a mensagem `Cupom inválido.`
- Nenhum desconto deve ser aplicado.

---

## CT06 - Cupom expirado

```gherkin
Funcionalidade: Validação de cupom

  @CT06
  Cenário: Rejeitar cupom expirado

    Dado que o cliente está na página de produtos
    E o carrinho está vazio
    Quando o cliente adiciona 1 unidade do produto "Calça Jeans Slim" ao carrinho
    E acessa o carrinho
    E informa o cupom "VERAO2026"
    E aplica o cupom
    Então deve ser exibida a mensagem "Cupom expirado."
    E o desconto deve ser de R$ 0,00
```

### Informações do cenário

**ID:** CT06

**Objetivo:**  
Validar o comportamento da aplicação ao informar um cupom fora do período de validade.

**Prioridade:** Alta

**Tipo:** Negativo

**Técnica:** Teste baseado em regra de negócio

### Dados de teste

| Campo | Valor |
|---|---|
| Produto | Calça Jeans Slim |
| Código | P002 |
| Quantidade | 1 |
| Cupom | VERAO2026 |
| Situação | Expirado em 31/03/2026 |

### Regras de negócio validadas

- Cupom expirado deve exibir a mensagem `Cupom expirado.`
- Nenhum desconto deve ser aplicado.

---

## CT07 - Troca de cupom

```gherkin
Funcionalidade: Aplicação de cupom de desconto

  @CT07
  Cenário: Remover um cupom e aplicar outro cupom

    Dado que o cliente está na página de produtos
    E o carrinho está vazio
    Quando o cliente adiciona 1 unidade do produto "Calça Jeans Slim" ao carrinho
    E acessa o carrinho
    E informa o cupom "BEMVINDO10"
    E aplica o cupom
    E remove o cupom atual
    E informa o cupom "VERAO2026"
    E aplica o cupom
    Então deve ser exibida a mensagem "Cupom inválido."
    E o desconto deve ser de R$ 0,00
```

### Informações do cenário

**ID:** CT07

**Objetivo:**  
Validar que somente um cupom pode estar aplicado por vez e que a troca exige a remoção do cupom atual.

**Prioridade:** Alta

**Tipo:** Funcional

**Técnica:** Teste de transição de estado

### Dados de teste

| Campo | Valor |
|---|---|
| Produto | Calça Jeans Slim |
| Código | P002 |
| Quantidade | 1 |
| Primeiro cupom | BEMVINDO10 |
| Segundo cupom | CUPOMINVALIDO |

### Regras de negócio validadas

- Apenas um cupom pode ser aplicado por vez.
- Para trocar de cupom, o cupom atual deve ser removido antes da aplicação do novo.

---

## CT08 - Frete grátis no limite de R$ 200,00

```gherkin
Funcionalidade: Cálculo de frete

  @CT08
  Cenário: Conceder frete grátis para subtotal exatamente igual a R$ 200,00

    Dado que o cliente está na página de produtos
    E o carrinho está vazio
    Quando o cliente adiciona 1 unidade do produto "Mochila Urbana 20L" ao carrinho
    E adiciona 2 unidades do produto "Garrafa Térmica 750ml" ao carrinho
    E acessa o carrinho
    Então o subtotal deve ser de R$ 200,00
    E o frete deve ser de R$ 0,00
    E o valor faltante para frete grátis deve ser de R$ 0,00
    E o total do pedido deve ser de R$ 200,00
```

### Informações do cenário

**ID:** CT08

**Objetivo:**  
Validar o limite inferior para concessão do frete grátis.

**Prioridade:** Alta

**Tipo:** Funcional / Boundary Value Analysis

**Técnica:** Análise de valor limite

### Dados de teste

| Campo | Valor |
|---|---|
| Produto 1 | Mochila Urbana 20L (P005) |
| Quantidade | 1 |
| Produto 2 | Garrafa Térmica 750ml (P008) |
| Quantidade | 2 |
| Subtotal | R$ 200,00 |

### Regras de negócio validadas

- Subtotal igual a R$ 200,00 deve possuir frete grátis.
- O valor faltante para frete grátis deve ser R$ 0,00.

---

## CT09 - Frete para subtotal abaixo de R$ 200,00

```gherkin
Funcionalidade: Cálculo de frete

@CT09

Cenário: Cobrar frete fixo para subtotal abaixo de R$ 200,00

Dado que o cliente está na página de produtos
E o carrinho está vazio
Quando o cliente adiciona 1 unidade do produto "Tênis Casual Urbano" ao carrinho
E acessa o carrinho
Então o subtotal deve ser de R$ 189,90
E o frete deve ser de R$ 19,90
E o valor faltante para frete grátis deve ser de R$ 10,10
```

### Informações do cenário

**ID:** CT09

**Objetivo:**  
Validar a cobrança do frete fixo e o cálculo do valor faltante quando o subtotal está abaixo de R$ 200,00.

**Prioridade:** Alta

**Tipo:** Funcional / Boundary Value Analysis

**Técnica:** Análise de valor limite

### Dados de teste

| Campo | Valor |
|---|---|
| Produto | Tênis Casual Urbano |
| Código | P003 |
| Quantidade | 1 |
| Preço unitário | R$ 189,90 |

### Regras de negócio validadas

- Subtotal inferior a R$ 200,00 deve possuir frete de R$ 19,90.
- O valor faltante deve ser calculado como R$ 200,00 menos o subtotal.

---

## CT10 - Frete grátis calculado antes do desconto

```gherkin
Funcionalidade: Cálculo de frete e desconto

  @CT10
  Cenário: Manter frete grátis quando o subtotal antes do desconto supera R$ 200,00

    Dado que o cliente está na página de produtos
    E o carrinho está vazio
    Quando o cliente adiciona 1 unidade do produto "Camiseta Essencial" ao carrinho
    E adiciona 1 unidade do produto "Mochila Urbana 20L" ao carrinho
    E adiciona 1 unidade do produto "Garrafa Térmica 750ml" ao carrinho
    E acessa o carrinho
    E informa o cupom "BEMVINDO10"
    E aplica o cupom
    Então o subtotal deve ser de R$ 209,90
    E o desconto deve ser de R$ 20,99
    E o frete deve ser de R$ 0,00
    E o valor faltante para frete grátis deve ser de R$ 0,00
    E o total do pedido deve ser de R$ 188,91
```

### Informações do cenário

**ID:** CT10

**Objetivo:**  
Validar que a regra de frete grátis considera o subtotal antes da aplicação do desconto do cupom.

**Prioridade:** Alta

**Tipo:** Funcional

**Técnica:** Teste baseado em regra de negócio

### Dados de teste

| Campo | Valor |
|---|---|
| Produto 1 | Camiseta Essencial (P001) |
| Quantidade | 1 |
| Produto 2 | Mochila Urbana 20L (P005) |
| Quantidade | 1 |
| Produto 3 | Garrafa Térmica 750ml (P008) |
| Quantidade | 1 |
| Subtotal | R$ 209,90 |
| Cupom | BEMVINDO10 |

### Regras de negócio validadas

- O frete grátis considera o subtotal antes do desconto.
- O desconto do cupom não incide sobre o frete.
- O pedido permanece com frete grátis mesmo após o desconto reduzir o subtotal para R$ 188,91.

---

## CT11 - Quantidade máxima permitida

```gherkin
Funcionalidade: Validação de quantidade de produtos

@CT11

Cenário: Permitir no máximo 5 unidades do mesmo produto

Dado que o cliente está na página de produtos
Quando o cliente adiciona 5 unidades do produto "Calça Jeans Slim" ao carrinho
Então o produto deve ser adicionado ao carrinho
E a quantidade do produto deve ser 5
```

### Informações do cenário

**ID:** CT11

**Objetivo:**  
Validar o limite máximo permitido de unidades de um mesmo produto por pedido.

**Prioridade:** Alta

**Tipo:** Funcional / Boundary Value Analysis

**Técnica:** Análise de valor limite

### Dados de teste

| Campo | Valor |
|---|---|
| Produto | Calça Jeans Slim |
| Código | P002 |
| Quantidade | 5 |

### Regras de negócio validadas

- Cada produto pode ter no máximo 5 unidades por pedido.
- A quantidade 5 deve ser aceita.

---

## CT12 - Quantidade acima do limite

```gherkin
Funcionalidade: Validação de quantidade de produtos

  @CT12
  Cenário: Rejeitar quantidade superior a 5 unidades do mesmo produto

     Dado que o cliente está na página de produtos
     E o carrinho contém 4 unidades do produto "Camiseta Essencial"
     Quando o cliente adiciona mais uma unidade desse produto ao carrinho
     Então o carrinho deve conter 5 unidades do produto "Camiseta Essencial"
     E deve ser exibida a mensagem "Limite de 5 unidades atingido"
     E o botão "Adicionar ao carrinho" desse produto deve ficar desabilitado
```

### Informações do cenário

**ID:** CT12

**Objetivo:**  
Validar a rejeição de quantidade superior ao limite máximo permitido.

**Prioridade:** Alta

**Tipo:** Negativo / Boundary Value Analysis

**Técnica:** Análise de valor limite

### Dados de teste

| Campo | Valor |
|---|---|
| Produto | Camiseta Essencial |
| Código | P001 |
| Quantidade | 6 |

### Regras de negócio validadas

- Quantidades superiores a 5 devem ser rejeitadas.
- A interface deve impedir que a quantidade ultrapasse 5 unidades.

---

## CT13 - Produto duplicado no cálculo do carrinho

```gherkin
Funcionalidade: Validação do carrinho

  @CT13
  Cenário: Rejeitar produto duplicado na lista de itens

    Dado que existe uma requisição para cálculo do carrinho
    Quando o mesmo produto é informado mais de uma vez na lista de itens
    Então a requisição deve ser rejeitada
    E o código do erro deve ser "ITEM_DUPLICADO"
```

### Informações do cenário

**ID:** CT13

**Objetivo:**  
Validar que o mesmo produto não pode aparecer mais de uma vez na lista de itens enviada para o cálculo do carrinho.

**Prioridade:** Média

**Tipo:** Negativo / API

**Técnica:** Validação de contrato e regra de negócio

### Dados de teste

| Campo | Valor |
|---|---|
| Produto | P002 |
| Primeira quantidade | 1 |
| Segunda quantidade | 1 |

### Regras de negócio validadas

- O mesmo produto não deve aparecer mais de uma vez na lista de itens.
- A API deve retornar `ITEM_DUPLICADO`.

---

## CT14 - Quantidade inválida

```gherkin
Funcionalidade: Validação de quantidade

  @CT14
  Cenário: Rejeitar quantidade menor que 1

    Dado que existe uma requisição para cálculo do carrinho
    Quando a quantidade de um produto é informada como 0
    Então a requisição deve ser rejeitada
    E o código do erro deve ser "QUANTIDADE_INVALIDA"
```

### Informações do cenário

**ID:** CT14

**Objetivo:**  
Validar a rejeição de quantidades menores que 1.

**Prioridade:** Alta

**Tipo:** Negativo / API

**Técnica:** Análise de valor limite

### Dados de teste

| Campo | Valor |
|---|---|
| Produto | P002 |
| Quantidade | 0 |

### Regras de negócio validadas

- A quantidade deve ser um número inteiro maior ou igual a 1.
- Quantidade igual a 0 deve ser rejeitada com `QUANTIDADE_INVALIDA`.

---

## CT15 - Produto inexistente

```gherkin
Funcionalidade: Consulta de produtos

  @CT15
  Cenário: Consultar produto inexistente pela API

    Dado que a API de produtos está disponível
    Quando o cliente consulta um produto com ID inexistente
    Então a API deve retornar HTTP 404
    E o código do erro deve ser "PRODUTO_NAO_ENCONTRADO"
```

### Informações do cenário

**ID:** CT15

**Objetivo:**  
Validar o comportamento da API ao consultar um produto que não existe.

**Prioridade:** Média

**Tipo:** Negativo / API

**Técnica:** Teste de validação de entrada

### Dados de teste

| Campo | Valor |
|---|---|
| Endpoint | GET /api/produtos/:id |
| ID do produto | P999 |

### Regras de negócio validadas

- Produto inexistente deve retornar HTTP 404.
- O erro deve ser identificado como `PRODUTO_NAO_ENCONTRADO`.

---

## CT16 - Nome sem sobrenome

```gherkin
Funcionalidade: Validação dos dados do cliente

  @CT16
  Cenário: Impedir finalização do pedido com nome sem sobrenome

    Dado que o cliente está na página de finalização do pedido
    E o carrinho possui produtos
    Quando o cliente informa o nome "Maria"
    E informa um e-mail válido
    E informa um CEP válido
    E tenta confirmar o pedido
    Então o pedido não deve ser finalizado
    E a aplicação deve indicar que o nome completo é obrigatório
```

### Informações do cenário

**ID:** CT16

**Objetivo:**  
Validar que a aplicação não permite a finalização do pedido quando o nome informado não possui nome e sobrenome.

**Prioridade:** Média

**Tipo:** Negativo / Funcional

**Técnica:** Teste de validação de entrada

### Dados de teste

| Campo | Valor |
|---|---|
| Nome | Maria |
| E-mail | maria@exemplo.com |
| CEP | 01310100 |
| Produto | Calça Jeans Slim |
| Código | P002 |
| Quantidade | 1 |

### Regras de negócio validadas

- O nome do cliente deve conter nome e sobrenome.
- Dados inválidos não devem permitir a finalização do pedido.

---

## CT17 - E-mail inválido

```gherkin
Funcionalidade: Validação dos dados do cliente

  @CT17
  Cenário: Impedir finalização do pedido com e-mail inválido

    Dado que o cliente está na página de finalização do pedido
    E o carrinho possui produtos
    Quando o cliente informa um nome completo válido
    E informa o e-mail "maria@"
    E informa um CEP válido
    E tenta confirmar o pedido
    Então o pedido não deve ser finalizado
    E a aplicação deve indicar que o e-mail informado é inválido
```

### Informações do cenário

**ID:** CT17

**Objetivo:**  
Validar que a aplicação não permite a finalização do pedido quando o e-mail informado possui formato inválido.

**Prioridade:** Média

**Tipo:** Negativo / Funcional

**Técnica:** Teste de validação de entrada

### Dados de teste

| Campo | Valor |
|---|---|
| Nome | Maria Silva |
| E-mail | maria@ |
| CEP | 01310100 |
| Produto | Calça Jeans Slim |
| Código | P002 |
| Quantidade | 1 |

### Regras de negócio validadas

- O e-mail deve possuir formato válido.
- Dados inválidos não devem permitir a finalização do pedido.

---

## CT18 - CEP válido sem hífen

```gherkin
Funcionalidade: Validação dos dados do cliente

  @CT18
  Cenário: Finalizar pedido utilizando CEP sem hífen

    Dado que o cliente está na página de finalização do pedido
    E o carrinho possui produtos
    Quando o cliente informa um nome completo válido
    E informa um e-mail válido
    E informa o CEP "01310100"
    E confirma o pedido
    Então o pedido deve ser finalizado com sucesso
    E o CEP deve ser aceito pela aplicação
```

### Informações do cenário

**ID:** CT18

**Objetivo:**  
Validar que a aplicação aceita CEP válido informado somente com números.

**Prioridade:** Média

**Tipo:** Positivo / Funcional

**Técnica:** Teste de validação de entrada

### Dados de teste

| Campo | Valor |
|---|---|
| Nome | Maria Silva |
| E-mail | maria@exemplo.com |
| CEP | 01310100 |
| Produto | Calça Jeans Slim |
| Código | P002 |
| Quantidade | 1 |

### Regras de negócio validadas

- O CEP deve possuir 8 dígitos.
- O CEP pode ser informado sem hífen.
- Dados válidos devem permitir a finalização do pedido.

---

## CT19 - CEP válido com hífen

```gherkin
Funcionalidade: Validação dos dados do cliente

  @CT19
  Cenário: Finalizar pedido utilizando CEP com hífen

    Dado que o cliente está na página de finalização do pedido
    E o carrinho possui produtos
    Quando o cliente informa um nome completo válido
    E informa um e-mail válido
    E informa o CEP "01310-100"
    E confirma o pedido
    Então o pedido deve ser finalizado com sucesso
    E o CEP deve ser aceito pela aplicação
```

### Informações do cenário

**ID:** CT19

**Objetivo:**  
Validar que a aplicação aceita CEP válido informado no formato com hífen.

**Prioridade:** Média

**Tipo:** Positivo / Funcional

**Técnica:** Teste de validação de entrada

### Dados de teste

| Campo | Valor |
|---|---|
| Nome | Maria Silva |
| E-mail | maria@exemplo.com |
| CEP | 01310-100 |
| Produto | Calça Jeans Slim |
| Código | P002 |
| Quantidade | 1 |

### Regras de negócio validadas

- O CEP deve possuir 8 dígitos.
- O CEP pode ser informado com hífen.
- Dados válidos devem permitir a finalização do pedido.

---

## CT20 - Finalização do pedido com cupom de desconto

```gherkin
Funcionalidade: Finalização do pedido

  @CT20
  Cenário: Finalizar pedido com dados válidos e cupom de desconto

    Dado que o cliente está na página de produtos
    E o carrinho está vazio
    Quando o cliente adiciona 1 unidade da Mochila Urbana 20L ao carrinho
    E acessa o carrinho
    E informa o cupom "BEMVINDO10"
    E acessa a página de finalização do pedido
    E informa o nome "Maria Silva"
    E informa o e-mail "maria@exemplo.com"
    E informa o CEP "01310-100"
    E confirma o pedido
    Então o pedido deve ser criado com sucesso
    E o subtotal deve ser R$ 100,00
    E o desconto deve ser R$ 10,00
    E o frete deve ser R$ 19,90
    E o total deve ser R$ 109,90
    E a aplicação deve apresentar o número do pedido
```

### Informações do cenário

**ID:** CT20

**Objetivo:**  
Validar a finalização completa de um pedido utilizando dados válidos e um cupom de desconto válido.

**Prioridade:** Alta

**Tipo:** Positivo / E2E

**Técnica:** Teste de fluxo completo

### Dados de teste

| Campo | Valor |
|---|---|
| Nome | Maria Silva |
| E-mail | maria@exemplo.com |
| CEP | 01310-100 |
| Produto | Mochila Urbana 20L |
| Código | P005 |
| Quantidade | 1 |
| Cupom | BEMVINDO10 |
| Subtotal esperado | R$ 100,00 |
| Desconto esperado | R$ 10,00 |
| Frete esperado | R$ 19,90 |
| Total esperado | R$ 109,90 |

### Regras de negócio validadas

- O cupom `BEMVINDO10` concede 10% de desconto sobre o subtotal.
- O desconto não é aplicado sobre o frete.
- Subtotais inferiores a R$ 200,00 possuem frete de R$ 19,90.
- O total deve ser calculado como subtotal menos desconto mais frete.
- Dados válidos devem permitir a criação do pedido.
- O pedido criado deve apresentar um número de pedido.

---

## CT21 - Nome do cliente inválido pela API

```gherkin
Funcionalidade: Criação de pedidos

  @CT21
  Cenário: Rejeitar pedido com nome do cliente inválido

    Dado que a API de pedidos está disponível
    Quando o cliente envia um pedido com nome inválido
    Então a API deve retornar HTTP 422
    E o código do erro deve ser "DADOS_INVALIDOS"
    E a resposta deve informar os campos inválidos
```

### Informações do cenário

**ID:** CT21

**Objetivo:**  
Validar o comportamento da API ao receber dados inválidos do cliente durante a criação de um pedido.

**Prioridade:** Média

**Tipo:** Negativo / API

**Técnica:** Teste de validação de entrada

### Dados de teste

| Campo | Valor |
|---|---|
| Endpoint | POST /api/pedidos |
| Nome | Maria |
| E-mail | maria@exemplo.com |
| CEP | 83255000 |
| Produto | Mochila Urbana 20L |
| Código | P005 |
| Quantidade | 1 |

### Regras de negócio validadas

- O nome deve conter apenas primeiro nome.
- O e-mail deve possuir formato válido.
- O CEP deve possuir 8 dígitos.
- Dados inválidos devem retornar HTTP 422.
- O erro deve ser identificado como `DADOS_INVALIDOS`.

---

## CT22 - Cupom inexistente na criação do pedido

```gherkin
Funcionalidade: Criação de pedidos

  @CT22
  Cenário: Rejeitar pedido com cupom inexistente

    Dado que a API de pedidos está disponível
    Quando o cliente envia um pedido com o cupom "CUPOMINVALIDO"
    Então a API deve retornar HTTP 422
    E o código do erro deve ser "CUPOM_INVALIDO"
    E o pedido não deve ser criado
```

### Informações do cenário

**ID:** CT22

**Objetivo:**  
Validar que a API rejeita a criação de um pedido quando é informado um cupom inexistente.

**Prioridade:** Média

**Tipo:** Negativo / API

**Técnica:** Teste de validação de regra de negócio

### Dados de teste

| Campo | Valor |
|---|---|
| Endpoint | POST /api/pedidos |
| Nome | Maria Silva |
| E-mail | maria@exemplo.com |
| CEP | 01310-100 |
| Produto | Mochila Urbana 20L |
| Código | P005 |
| Quantidade | 1 |
| Cupom | CUPOMINVALIDO |

### Regras de negócio validadas

- Cupons inexistentes devem ser rejeitados na criação do pedido.
- A API deve retornar HTTP 422.
- O erro deve ser identificado como `CUPOM_INVALIDO`.
- O pedido não deve ser criado.

---

## CT23 - Cupom expirado na criação do pedido

```gherkin
Funcionalidade: Criação de pedidos

  @CT23
  Cenário: Rejeitar pedido com cupom expirado

    Dado que a API de pedidos está disponível
    Quando o cliente envia um pedido com o cupom "VERAO2026"
    Então a API deve retornar HTTP 422
    E o código do erro deve ser "CUPOM_EXPIRADO"
    E o pedido não deve ser criado
```

### Informações do cenário

**ID:** CT23

**Objetivo:**  
Validar que a API rejeita a criação de um pedido quando é informado um cupom expirado.

**Prioridade:** Média

**Tipo:** Negativo / API

**Técnica:** Teste de validação de regra de negócio

### Dados de teste

| Campo | Valor |
|---|---|
| Endpoint | POST /api/pedidos |
| Nome | Maria Silva |
| E-mail | maria@exemplo.com |
| CEP | 01310-100 |
| Produto | Mochila Urbana 20L |
| Código | P005 |
| Quantidade | 1 |
| Cupom | VERAO2026 |

### Regras de negócio validadas

- O cupom `VERAO2026` está expirado.
- Cupons expirados devem ser rejeitados na criação do pedido.
- A API deve retornar HTTP 422.
- O erro deve ser identificado como `CUPOM_EXPIRADO`.
- O pedido não deve ser criado.

---

## CT24 - E-mail do cliente inválido pela API

```gherkin
Funcionalidade: Criação de pedidos

  @CT24
  Cenário: Rejeitar pedido com e-mail do cliente inválido

    Dado que a API de pedidos está disponível
    Quando o cliente envia um pedido com e-mail inválido
    Então a API deve retornar HTTP 422
    E o código do erro deve ser "DADOS_INVALIDOS"
    E a resposta deve informar os campos inválidos
```

### Informações do cenário

**ID:** CT24

**Objetivo:**  
Validar o comportamento da API ao receber dado de e-mail inválido do cliente durante a criação de um pedido.

**Prioridade:** Média

**Tipo:** Negativo / API

**Técnica:** Teste de validação de entrada

### Dados de teste

| Campo | Valor |
|---|---|
| Endpoint | POST /api/pedidos |
| Nome | Maria Silva |
| E-mail | maria@ |
| CEP | 83255000 |
| Produto | Mochila Urbana 20L |
| Código | P005 |
| Quantidade | 1 |

### Regras de negócio validadas

- O nome deve conter nome e sobrenome.
- O e-mail deve possuir formato inválido.
- O CEP deve possuir 8 dígitos.
- Dados inválidos devem retornar HTTP 422.
- O erro deve ser identificado como `DADOS_INVALIDOS`.

---

## CT25 - CEP do cliente inválido pela API

```gherkin
Funcionalidade: Criação de pedidos

  @CT25
  Cenário: Rejeitar pedido com o CEP do cliente inválido

    Dado que a API de pedidos está disponível
    Quando o cliente envia um pedido com CEP inválido
    Então a API deve retornar HTTP 422
    E o código do erro deve ser "DADOS_INVALIDOS"
    E a resposta deve informar os campos inválidos
```

### Informações do cenário

**ID:** CT25

**Objetivo:**  
Validar o comportamento da API ao receber dado de CEP inválido do cliente durante a criação de um pedido.

**Prioridade:** Média

**Tipo:** Negativo / API

**Técnica:** Teste de validação de entrada

### Dados de teste

| Campo | Valor |
|---|---|
| Endpoint | POST /api/pedidos |
| Nome | Maria Silva |
| E-mail | maria@exemplo.com |
| CEP | 83255 |
| Produto | Mochila Urbana 20L |
| Código | P005 |
| Quantidade | 1 |

### Regras de negócio validadas

- O nome deve conter nome e sobrenome.
- O e-mail deve possuir formato válido.
- O CEP deve possuir 5 dígitos.
- Dados inválidos devem retornar HTTP 422.
- O erro deve ser identificado como `DADOS_INVALIDOS`.

---

## CT26 - Listagem de produtos disponíveis pela API

```gherkin
Funcionalidade: Consulta de produtos pela API

  @CT26
  Cenário: Listar produtos disponíveis com sucesso

    Dado que a API da Verzel Store está disponível 
    Quando o cliente realiza uma requisição GET para o endpoint "/api/produtos" 
    Então a resposta deve retornar o status HTTP 200 
    E a resposta deve conter a lista de produtos disponíveis 
    E cada produto deve apresentar seu identificador, nome e preço
```

### Informações do cenário

**ID:** CT26

**Objetivo:**  
Validar a listagem de produtos disponíveis por meio da API, verificando o retorno HTTP 200 e a estrutura dos dados.

**Prioridade:** Alta

**Tipo:** Positivo / API

**Técnica:** Teste positivo e validação de resposta

### Dados de teste

| Campo | Valor |
|---|---|
| Endpoint | POST /api/produtos |
| Parâmetros | Nenhum |
| Body | Não aplicável |
| Status HTTP esperado | 200 OK |


### Regras de negócio validadas

- A API deve permitir a consulta dos produtos disponíveis sem exigir parâmetros.
- Uma requisição válida deve retornar HTTP 200.
- A resposta deve conter a lista de produtos disponíveis.
- Cada produto deve apresentar identificador, nome e preço.

---

## CT27 - Responsividade do layout em resolução desktop

```gherkin
Funcionalidade: Responsividade da loja

  @CT27
  Cenário: Adaptar os elementos da página

  Dado que o cliente acessa a Verzel Store
  Quando visualiza a aplicação no navegador
  Então o cabeçalho deve permanecer legível e organizado
  E a seção principal deve se adaptar à largura disponível
  E os cards de produtos devem se reorganizar sem sobreposição
  E o rodapé deve permanecer legível e dentro dos limites da página
  E não deve existir rolagem horizontal indevida
```

### Informações do cenário

**ID:** CT27

**Objetivo:**  
Validar a adaptação dos elementos da interface, verificando a organização, legibilidade e disposição do conteúdo.

**Prioridade:** Média

**Tipo:** Responsividade / Teste visual

**Técnica:** Teste exploratório

### Dados de teste

| Campo | Valor |
|---|---|
| Resolução da tela | 1440 × 900 pixels |
| Dispositivo | Desktop |
| Navegador | Google Chrome |
| Elementos validados | Cabeçalho, seção principal, cards de produtos e rodapé |


### Regras de negócio validadas

- Os elementos da página devem ser exibidos corretamente na resolução testada.

- Os textos devem permanecer legíveis.

- Os cards de produtos devem manter alinhamento consistente, sem sobreposição.

- O cabeçalho e o rodapé devem permanecer dentro dos limites da página.

- Não deve existir rolagem horizontal indevida.

---

## CT28 - Responsividade do layout em dispositivo móvel

```gherkin
Funcionalidade: Responsividade da loja em dispositivo móvel

  @CT28
  Cenário: Adaptar os elementos da página pelo dispositivo móvel

  Dado que o cliente acessa a Verzel Store
  Quando visualiza a aplicação pelo navegador do dispositivo móvel
  Então o cabeçalho deve permanecer legível e organizado
  E a seção principal deve se adaptar à largura disponível
  E os cards de produtos devem se reorganizar sem sobreposição
  E o rodapé deve permanecer legível e dentro dos limites da página
  E não deve existir rolagem horizontal indevida
```

### Informações do cenário

**ID:** CT28

**Objetivo:**  
Validar a adaptação dos elementos da interface, verificando a organização, legibilidade e disposição do conteúdo.

**Prioridade:** Média

**Tipo:** Responsividade / Teste visual

**Técnica:** Teste exploratório

### Dados de teste

| Campo | Valor |
|---|---|
| Resolução  | 392 × 712 pixels |
| Dispositivo | Xiaomi MI 9T |
| Navegador | Google Chrome para Android |
| Elementos validados | Cabeçalho, seção principal, cards de produtos e rodapé |


### Regras de negócio validadas

- Os elementos da página devem ser exibidos corretamente na resolução testada.

- Os textos devem permanecer legíveis.

- Os cards de produtos devem manter alinhamento consistente, sem sobreposição.

- O cabeçalho e o rodapé devem permanecer dentro dos limites da página.

- Não deve existir rolagem horizontal indevida.

