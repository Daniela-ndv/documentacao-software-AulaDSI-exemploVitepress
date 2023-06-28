## Diagrama de Casos de Uso

Abaixo está o Diagrama de Casos de Uso do projeto.

![Casos de Uso](../imagens/casos-uso.png 'Diagrama de casos de uso do projeto')

## Descrição dos Casos de Uso

**1) Caso de Uso: Emitir nota fiscal**

- **Descrição:** este caso de uso é iniciado pelo usuário ou administrador quando há requisição de emitir a nota fiscal de cada venda.
- **Objetivo:** possibilitar a emissão da nota fiscal de determinada venda.
- **Ator envolvido:** Usuário / Administrador.
- **Interação entre ator e sistema:**

| Usuário / Administrador               | Sistema                                                                                                                                                                                              |
| ------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Solicita a emissão da nota fiscal.    |                                                                                                                                                                                                      |
|                                       | Exibe uma interface com as informações de compra, descrevendo quantidade, valor unitário, tipo de produto, valor total, data da compra, nome do comprador, CPF do comprador e identificador da nota. |
| Solicita para baixar a nota fiscal    |                                                                                                                                                                                                      |
|                                       | Gera PDF com a nota fiscal da compra atual.                                                                                                                                                          |
| Solicita efetuar o pagamento via site |                                                                                                                                                                                                      |
|                                       | Direciona à plataforma integrada para pagamento, a Safe2Pay, permitindo que o cliente realize pagamento via cartão de crédito, boleto ou pix.                                                        |
| Solicita o relatório de compra        |                                                                                                                                                                                                      |
|                                       | Gera PDF com o relatório da compra atual, com as informações do cliente, do produto e o status de pagamento.                                                                                         |
| Clica em “Sair”                       |                                                                                                                                                                                                      |
|                                       | Fecha a interface.                                                                                                                                                                                   |

- **Regras de Negócio:**

  RN01 — a nota fiscal pode ser emitida a qualquer momento, não necessariamente só no momento em que a compra é efetuada.

**2) Caso de Uso: Cadastrar gastos**

- **Descrição:** este caso de uso é iniciado pelo administrador quando requisita ao sistema o cadastro do gasto unitário de cada tipo de produto com matéria-prima.
- **Objetivo:** possibilitar o cadastro do gasto unitário de cada produto com matéria-prima, para controle dos lucros posteriormente.
- **Ator envolvido:** administrador.
- **Interação entre ator e sistema:**

| Administrador                                                                             | Sistema                                                                                                                                                                                    |
| ----------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Solicita, para cada tipo de produto, o cadastramento do gasto unitário com matéria-prima. |                                                                                                                                                                                            |
|                                                                                           | Exibe uma interface com um formulário para ser preenchido com o preço gasto com a matéria-prima de determinado produto.                                                                    |
| Clica em “salvar”.                                                                        |                                                                                                                                                                                            |
|                                                                                           | Salva no banco de dados e exibe a opção do administrador ver todos os gastos cadastrados.                                                                                                  |
| Solicita a visualização dos gastos.                                                       |                                                                                                                                                                                            |
|                                                                                           | Exibe uma tabela com as informações de todos os gastos com matérias-primas, indicando a data de cadastramento, o tipo de produto, o valor gasto e o status do gasto (se está pago ou não). |
| Solicita alterar o status do gasto.                                                       |                                                                                                                                                                                            |
|                                                                                           | Permite que o administrador altere o status do gasto.                                                                                                                                      |
| Clica em “salvar”.                                                                        |                                                                                                                                                                                            |
|                                                                                           | Salva no banco de dados encerra a requisição.                                                                                                                                              |

- **Exceções:**

  EX01 — caso já haja valor cadastrado, a mensagem “Deseja alterar ou excluir este dado?” é apresentada.

- **Regras de Negócio:**

  RN01 — o valor só pode ser cadastrado para produtos em estoque.

  RN02 — o cadastramento do valor deve ser feito individualmente para cada tipo de produto.

**3) Caso de Uso: Emitir histórico de compras**

- **Descrição:** este caso de uso é iniciado pelo usuário ou administrador quando requisitam ao sistema a emissão do histórico de compras.
- **Objetivo:** possibilitar a emissão do histórico de compras, para controle individual de cada usuário de suas compras anteriores.
- **Ator envolvido:** usuário/administrador.
- **Interação entre ator e sistema:**

| Administrador                                           | Sistema                                                                                                                                                |
| ------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Solicita a emissão do histórico de compras.             |                                                                                                                                                        |
|                                                         | Exibe uma interface com informações sobre cada compra efetuada, descrevendo tipo de produto, quantidade, valor unitário, valor total e data da compra. |
| Solicita a busca das compras de um determinado cliente. |                                                                                                                                                        |
|                                                         | Solicita que o administrador insira o documento do cliente.                                                                                            |
| Insere a informação solicitada.                         |                                                                                                                                                        |
|                                                         | Exibe o histórico da compra do cliente, descrevendo tipo de produto, quantidade, valor unitário, valor total e data da compra.                         |
| Clica em “Sair”.                                        |                                                                                                                                                        |
|                                                         | Fecha a interface.                                                                                                                                     |

- **Exceções:**

  EX01 — caso o usuário ainda não tenha efetuado compras no site, a mensagem “Histórico de compras vazio” é apresentada.

- **Regras de Negócio:**

  RN01 — o histórico de compras pode ser emitido a qualquer momento.
