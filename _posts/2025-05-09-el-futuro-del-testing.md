---
layout: post
title:  El futuro del testing (y no hablo de IA)
date: 2025-05-09 15:01:35 +0300
author: Leonardo Espinosa
description:  Blockchain, contenedores, accesibilidad real. Las nuevas fronteras del testing están aquí. 
image: '/images/15-1.jpg'
tags: [Quality-Assurance]
tags_color: '#4A90E2'
featured: True
---

**Antes, probar software era asegurarse de que los botones funcionaran.**
Ahora también significa asegurar que un contrato inteligente no pierda millones, que una API sobreviva en producción distribuida, o que una persona ciega pueda acceder a tu app sin obstáculos.

**El QA del futuro ya está aquí.**

---

### Blockchain Testing: lo inmutable también se prueba

Cuando escuchamos “blockchain”, muchos piensan en criptomonedas.
Pero desde la perspectiva de QA, **el verdadero reto está en los contratos inteligentes**.
Estos pequeños programas que corren sobre Ethereum, Solana u otras redes **son inmutables una vez desplegados**.
Un error no solo rompe la funcionalidad: puede **costar millones o ser explotado por atacantes.**

Probar smart contracts no es solo escribir pruebas unitarias. Es entender:

* cómo se calcula el **gas fee**,
* cómo puede un usuario malicioso manipular una transacción,
* y cómo se comporta el sistema ante forks, errores de consenso o ataques Sybil.

**Ganache**, **Hardhat**, y herramientas de análisis estático como **Mythril** o **Slither** se vuelven indispensables.
Aquí el QA se convierte en **criptodetective**: no basta con validar, hay que anticipar.

---

### Cloud-native Testing: entre contenedores y caos

La promesa del software moderno es clara: escalar automáticamente, sobrevivir a fallos, desplegar en segundos.
Pero para que eso funcione, **el QA también tiene que volverse nativo del cloud**.

Hoy en día ya no pruebas "una app". Pruebas:

* 12 microservicios que se comunican por APIs REST,
* que se ejecutan en pods dentro de Kubernetes,
* con flujos de datos orquestados en tiempo real.

Y no basta con pruebas funcionales. Hay que testear:

* qué pasa si un microservicio cae (*fault injection*),
* cómo se comporta el sistema bajo picos de tráfico (*stress & scalability*),
* o cómo impacta un cambio de versión en producción (*canary testing*).

Las herramientas cambian: **K6**, **Postman + Newman**, **LitmusChaos**, **Istio**, **TestContainers**…

Aquí el QA **no se sienta a probar**: se mete al clúster, monitorea con Grafana y destruye para validar resiliencia.

---

### Accessibility Testing Avanzado: porque la inclusión no es opcional

Crecí viendo cómo la tecnología ignoraba a mi madre, que es sorda.
Y aunque avanzamos, todavía hoy muchas aplicaciones **siguen sin estar diseñadas para todos**.

Accessibility testing (o A11y) ya no es solo revisar si hay etiquetas `alt`.
Significa validar:

* que los lectores de pantalla no se traben,
* que el contraste permita leer con baja visión,
* que la navegación por teclado sea completa,
* que los formularios funcionen con tecnologías de asistencia.

Hoy, las herramientas como **axe-core**, **WAVE**, **Lighthouse**, o incluso plugins de Figma ayudan…
Pero **nada reemplaza una prueba real con usuarios diversos.**
Una app puede pasar todos los checks automáticos y seguir siendo una pesadilla para alguien con dislexia o parálisis.

**La accesibilidad no es un nice-to-have.
Es parte de la calidad. Y si no la testea QA, ¿quién más lo hará?**

---


Esta en nuestras manos como testers fomentar este cambio.


