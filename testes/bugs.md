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

`evidencias/CT08-frete-gratis-limite-200.png`