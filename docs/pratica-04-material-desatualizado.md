
<!--
  Prática 4 — Caça ao material desatualizado (OPCIONAL, bônus)

  Nível ⭐ · ~30 min

  Enunciado completo: `PRATICA.md` › "Prática 4".

  TODO P4 — encontre DOIS tutoriais ou artigos de desenvolvimento mobile
  factualmente desatualizados e preencha uma ficha para cada.

  Sinais de alerta vistos na Aula 1:

    • Diz que os smartwatches Samsung rodam Tizen

    • Trata HarmonyOS como "um Android com outra cara", ou diz que o
      HarmonyOS NEXT roda APK

    • Apresenta o diagrama de 4 camadas do iOS como arquitetura vigente

    • Mostra a arquitetura do Android em 5 camadas

    • Usa market share sem dizer se mede tráfego, vendas ou base instalada

    • Ensina `status: string` onde caberia um union literal

    • Usa `as` como se fosse validação
-->

# Prática 4 — Caça ao material desatualizado

## Achado #1

- **Link:** https://www.youtube.com/watch?v=55HfCkXa7fk
- **Data de publicação:** 30/04/2021
- **Sinal de alerta que me chamou atenção:** Afirmação de que todos os smartwatches Samsung utilizam Tizen.

| | |
|---|---|
| **O que o material afirma** | O vídeo afirma que todos os smartwatches Galaxy Watch da Samsung utilizam o sistema operacional Tizen. |
| **Por que está errado hoje** | A afirmação ficou desatualizada porque a Samsung passou a utilizar o Wear OS nos modelos Galaxy Watch4 e posteriores. Portanto, não é correto afirmar que todos os relógios Galaxy Watch utilizam Tizen. |
| **Qual é a informação correta** | Os modelos Galaxy Watch4 e posteriores utilizam Wear OS. Os modelos anteriores ao Galaxy Watch4 utilizam Tizen. |
| **Fonte da informação correta** | https://www.samsung.com/us/support/answer/ANS10003348/ — consulta em 18/09/2026. |

- **Um leitor iniciante perceberia o erro sozinho?** ( ) sim (X) não — por quê: Um iniciante pode não conhecer a mudança de sistema operacional da Samsung e acreditar que a informação continua válida para todos os modelos atuais.

---

## Achado #2

- **Link:** https://www.wikitechy.com/architecture-of-android-explained/
- **Data de publicação:** 13/09/2025
- **Sinal de alerta que me chamou atenção:** Apresentação da arquitetura do Android como composta por cinco camadas fixas.

| | |
|---|---|
| **O que o material afirma** | O material apresenta a arquitetura do Android como composta por cinco camadas principais: Linux Kernel, Libraries, Android Runtime, Application Framework e Applications. |
| **Por que está errado hoje** | A representação simplificada pode induzir o leitor a acreditar que essa é a arquitetura completa e atual do Android. Ela não destaca adequadamente a Hardware Abstraction Layer (HAL), que faz parte da arquitetura da plataforma Android. |
| **Qual é a informação correta** | A documentação oficial do Android apresenta componentes como Linux Kernel, Hardware Abstraction Layer (HAL), Android Runtime, bibliotecas nativas, framework e aplicativos. A arquitetura deve ser entendida como uma visão dos componentes da plataforma, e não como um conjunto rígido de cinco camadas. |
| **Fonte da informação correta** | https://developer.android.com/guide/platform — consulta em 18/09/2026. |

- **Um leitor iniciante perceberia o erro sozinho?** ( ) sim (X) não — por quê: O diagrama e a explicação parecem didáticos e objetivos. Um iniciante pode não perceber que alguns componentes importantes foram omitidos ou simplificados.
