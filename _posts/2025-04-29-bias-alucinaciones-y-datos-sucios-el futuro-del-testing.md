---
layout: post
title:  Bias, alucinaciones y datos sucios, el futuro del testing
date: 2025-04-29 15:01:35 +0300
author: Leonardo Espinosa
description: Los errores ya no siempre estan en el codigo. 
image: '/images/14-1.jpg'
tags: [Quality-Assurance]
tags_color: '#4A90E2'
featured: True
---

**Los errores ya no siempre están en el código…**

Durante años, la lógica era clara: si algo falla, es porque el código tiene un bug.  

Un condicional mal escrito, un índice fuera de rango, un input no validado…  
Pero en la era de la inteligencia artificial, los errores ya no se esconden (solo) entre líneas de código: ahora también viven en los datos, en los modelos y —lo más preocupante— en los sesgos no detectados.

Hoy, el rol del tester está cambiando. Estamos dejando de ser simples *verificadores de funcionalidades* para convertirnos en *evaluadores de criterio, contexto y consecuencias*.  

---

### ¿Qué significa testear un modelo de IA?

En sistemas tradicionales, una prueba falla si el sistema no se comporta como se espera.  
Pero con modelos de IA, especialmente los generativos o predictivos, **no hay una única “respuesta correcta”**, sino un rango de posibles resultados… y eso cambia todo.

**El nuevo QA no se trata de probar si algo "funciona", sino si algo "tiene sentido".**

Uno de los retos más comunes al testear modelos generativos (como LLMs o IA conversacionales) es detectar *incoherencias*, *contradicciones* o *respuestas que simplemente no se sostienen*.

Por ejemplo:
- Un chatbot que recomienda aspirinas a una persona con alergia a los AINEs.
- Un resumen generado que omite puntos clave del texto original.
- Una IA de asistencia que se inventa funciones que no existen.

Estos errores no son bugs clásicos. Son errores de *razonamiento* del modelo. Y para encontrarlos, **QA debe adoptar un rol de evaluador crítico** más que de verificador técnico.

---

**Cuando la IA alucina**

Uno de los problemas más documentados de los modelos de lenguaje es su tendencia a **alucinar información falsa con total seguridad**.

Ejemplo real:  
Una IA genera una biografía con logros que jamás ocurrieron, libros que no existen o universidades donde el usuario nunca estudió.

Estas *alucinaciones* son difíciles de testear con scripts automatizados, porque requieren:
- **Conocimiento de dominio.**
- **Verificación factual.**
- **Criterio humano.**

Aquí, **QA se convierte en detective**. No buscamos errores sintácticos, buscamos ficciones bien contadas. Y ese es un desafío completamente nuevo.

---

**Fairness, bias y accesibilidad: el testing invisible**

Este punto me toca especialmente.  
Crecí viendo cómo mi madre —una mujer sorda— tenía que adaptarse constantemente a una tecnología que no fue pensada para ella. Desde los subtítulos automáticos defectuosos hasta los asistentes de voz que nunca la entendieron.

Por eso hoy me resulta fundamental hacer esta pregunta al testear sistemas con IA:  
**¿Para quién fue entrenado este modelo? ¿A quién está dejando fuera?**

Los sesgos algorítmicos pueden causar:
- Discriminación por género, edad, raza o idioma.
- Exclusión de usuarios con discapacidades.
- Reproducción de estereotipos dañinos (incluso en los datos de entrenamiento).

<br>
**QA tiene que asumir un rol ético**, no solo técnico.

La revisión debe incluir fairness, diversidad en los datasets y evaluación de impacto.

Porque si el modelo solo fue entrenado con voces de hombres blancos, **¿cómo esperamos que entienda otras realidades?**

---

## ¿Estamos preparados?

La respuesta corta: no del todo.  
Pero es justo aquí donde QA tiene la oportunidad de **liderar el cambio**.

El QA de la nueva era no solo valida outputs. **Interpreta resultados, anticipa consecuencias y defiende la experiencia del usuario real**, ese que muchas veces es ignorado por los modelos entrenados con datos impersonales.

