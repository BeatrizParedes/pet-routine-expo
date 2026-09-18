
<!--

  Prática 3 — Relatório de decisão de plataforma

  Nível ⭐⭐ · ~1 h · Entrega individual · 1 a 2 páginas

  Enunciado completo (contexto e restrições do cliente): `PRATICA.md` › "Prática 3".

  TODO P3 — preencha TODAS as lacunas abaixo. A estrutura é fixa; o conteúdo é seu.

  Não existe uma resposta única correta — o que é avaliado é a qualidade do raciocínio.

-->

# Relatório de decisão de plataforma — App de Rotina Pet

**Autor:** Beatriz Paredes do Nascimento   **Data:** 18/09/2026

## 1. Recomendação

<!-- TODO P3.1 — escolha UMA abordagem e diga qual. Sem "depende". -->

Para o app do tutor, recomendo a abordagem **cross-platform**.

## 2. Restrições que sustentam a escolha

<!-- TODO P3.2 — cite TRÊS restrições do enunciado, TEXTUALMENTE.

     Não argumente em abstrato ("cross-platform é mais rápido de desenvolver"
     não é uma restrição do enunciado; "2 devs, nenhum com Kotlin ou Swift" é). -->

| # | Restrição do enunciado | Como ela empurra para a minha escolha |
|---|---|---|
| 1 | 2 devs, nenhum com Kotlin ou Swift | A abordagem cross-platform permite que a equipe desenvolva o aplicativo utilizando uma base de código compartilhada, sem exigir o domínio inicial de duas linguagens nativas. |
| 2 | O aplicativo do tutor precisa funcionar em dispositivos móveis Android e iOS. | O cross-platform permite compartilhar grande parte da implementação entre os sistemas, reduzindo a necessidade de manter dois aplicativos independentes. |
| 3 | O projeto possui recursos como GPS em background, sincronização offline e notificações. | O cross-platform possibilita implementar esses recursos por meio de bibliotecas e APIs específicas, mantendo uma base de código comum e permitindo o uso de funcionalidades nativas quando necessário. |

## 3. O que estamos perdendo

<!-- TODO P3.3 — toda decisão tem custo. Uma resposta que não nomeia
     nenhum custo está escondendo o custo, não eliminando-o. -->

Abordagem rejeitada: **nativo**.

O que a organização deixa de ganhar ao não escolhê-la:

Ao não escolher o desenvolvimento nativo, a organização deixa de aproveitar uma integração mais direta com os recursos específicos de cada sistema operacional e o controle mais detalhado sobre o desempenho e o comportamento das funcionalidades nativas. Também pode haver dependência de bibliotecas cross-platform para recursos como GPS em background e notificações. Em contrapartida, a equipe pode compartilhar boa parte do código e reduzir a duplicação de implementação entre Android e iOS.

## 4. O painel das clínicas

<!-- TODO P3.4 — lembre que o painel é usado em desktop, na recepção. -->

Mesma tecnologia do app do tutor?  ( ) sim   (X) não

Justificativa:

Eu escolheria uma tecnologia web para o painel das clínicas, pois ele será utilizado em computadores desktop na recepção. Uma aplicação web responsiva facilita o acesso pelo navegador, sem exigir a instalação de um aplicativo móvel. Além disso, a interface pode ser desenvolvida considerando o espaço maior da tela, tabelas, cadastros e gerenciamento de informações. Dessa forma, o app do tutor pode utilizar cross-platform, enquanto o painel da clínica utiliza uma solução adequada ao ambiente desktop.

## 5. Risco técnico e mitigação

<!-- TODO P3.5 — risco CONCRETO e específico deste projeto
     (pense em: Android de entrada com <4 GB de RAM, GPS em background,
     sincronização offline, notificações). Nada de "pode dar atraso". -->

| | |
|---|---|
| **Risco concreto** | Em aparelhos Android de entrada com menos de 4 GB de RAM, a execução contínua de GPS em background, junto com sincronização de dados e notificações, pode aumentar o consumo de bateria e provocar encerramento do aplicativo pelo sistema. |
| **Por que ele é plausível aqui** | O app de rotina pet pode precisar registrar atividades e localização do tutor ou do animal, além de sincronizar informações quando a conexão estiver disponível. Dispositivos com recursos limitados e restrições de execução em segundo plano podem interromper essas tarefas. |
| **Como eu mitigaria** | Utilizaria coleta de localização somente quando necessária, com intervalos de atualização configuráveis e solicitação explícita de permissões. Implementaria uma fila local para armazenar operações offline, com sincronização posterior, tentativas controladas e tratamento de conflitos. Também testaria o aplicativo em dispositivos Android de entrada e monitoraria consumo de memória e bateria. |

## 6. A pergunta que eu faria ao cliente

<!-- TODO P3.6 — uma pergunta que REALMENTE mudaria a decisão.
     Se a resposta do cliente não altera nada, a pergunta não vale nota. -->

Algo que o enunciado NÃO informa e que poderia mudar minha resposta:

O aplicativo do tutor precisa obrigatoriamente funcionar com recursos nativos específicos que não possuem suporte confiável na tecnologia cross-platform escolhida, como rastreamento de localização em background contínuo, mesmo quando o aplicativo estiver encerrado?

Se a resposta fosse sim, o aplicativo precisa de rastreamento contínuo em background com requisitos nativos específicos e sem suporte adequado na solução cross-platform, eu mudaria minha recomendação para nativo, porque o acesso direto às APIs do Android e do iOS permitiria maior controle sobre a implementação e o atendimento desses requisitos.