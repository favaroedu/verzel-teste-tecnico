# Bugs Encontrados

## BUG-001 - Frete não fica grátis quando o subtotal é exatamente R$ 200,00

**Status:** Aberto

**Severidade:** Crítica

**Prioridade:** Alta

### Descrição

Ao realizar uma compra com subtotal exatamente igual a R$ 200,00, a aplicação continua cobrando R$ 19,90 de frete, apesar da regra de negócio determinar que o frete deve ser grátis para subtotais maiores ou iguais a R$ 200,00.

### Pré-condições

- Carrinho vazio.
- Produtos disponíveis no ambiente de teste.

### Passos para reprodução

1. Adicionar 1 unidade da Mochila Urbana 20L (P005), no valor de R$ 100,00.
2. Adicionar 2 unidades da Garrafa Térmica 750ml (P008), no valor de R$ 50,00 cada.
3. Acessar o carrinho.
4. Não informar cupom de desconto.
5. Verificar o resumo do pedido.

### Resultado esperado

Como o subtotal é exatamente R$ 200,00, o frete deve ser **R$ 0,00**.

O total esperado é **R$ 200,00**.

### Resultado obtido

A aplicação apresenta:

- Subtotal: R$ 200,00
- Desconto: R$ 0,00
- Frete: R$ 19,90
- Total: R$ 219,90

A aplicação informa que faltam R$ 0,00 para o frete grátis, porém o frete continua sendo cobrado.

### Evidência

[Evidência: CT08 - Frete grátis no limite de R$ 200,00](evidencias/CT08-frete-gratis-limite-200.png)

---

## BUG-002 - Desalinhamento vertical do contador do carrinho

**Status:** Aberto

**Severidade:** Baixa

**Prioridade:** Baixa

### Descrição

O número exibido no contador do carrinho apresenta desalinhamento vertical dentro do círculo verde, ficando posicionado mais próximo da parte superior do indicador em vez de estar centralizado.

### Pré-condições

- Acessar a Verzel Store.

- Visualizar o contador do carrinho no cabeçalho da aplicação

### Passos para reprodução

1. Acessar a página inicial da loja.

2. Observar o contador numérico dentro do círculo verde ao lado de “Carrinho”.

3. Verificar o posicionamento vertical do número em relação ao círculo.

### Resultado esperado

O número deve estar centralizado vertical e horizontalmente dentro do círculo verde.

### Resultado obtido

O número 0 aparece deslocado para cima dentro do círculo verde, causando uma inconsistência visual no componente.

### Evidência

[BUG-002: Desalinhamento vertical do contador do carrinho](evidencias/BUG-002-contador-carrinho-desalinhado.png)

---

## BUG-003 - Reutilização do cupom de primeira compra

**Status:** Aberto

**Severidade:** Crítica

**Prioridade:** Alta

### Descrição

O cupom promocional BEMVINDO10, anunciado na página inicial como válido para a primeira compra, é aceito novamente após a realização de um pedido anterior, utilizando os mesmos dados de cliente.

### Pré-condições

- Ter realizado e confirmado uma compra utilizando o cupom BEMVINDO10.
- Possuir os dados utilizados no pedido anterior.

### Passos para reprodução

1. Acessar a loja virtual.
2. Adicionar um produto ao carrinho.
3. Aplicar o cupom BEMVINDO10.
4. Preencher os dados do cliente e confirmar o pedido.
5. Iniciar uma nova compra utilizando os mesmos dados.
6. Aplicar novamente o cupom BEMVINDO10.

### Resultado esperado

O sistema deve verificar se o cliente já realizou uma compra e, como a promoção é restrita à primeira compra, impedir a reutilização do cupom ou a utilização em uma compra que não seja a primeira e exibir uma mensagem informativa.

### Resultado obtido

O sistema aceita novamente o cupom BEMVINDO10 e concede 10% de desconto, mesmo após a realização de uma compra anterior com os mesmos dados.

### Evidência

[BUG-003: Reutilização de cupom de primeira compra](evidencias/BUG-003-reutilizacao-upom.png)

[BUG-003: Vídeo reutilizando o cupom](https://jam.dev/c/36e98b12-7fbb-4d63-b4fb-704bebc795cc)