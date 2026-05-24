---
title: "POLQA: Gobernanza de LLMs sin Depender del Vibes Testing"
description: "Evaluar modelos de lenguaje en producción no es solo correr benchmarks. Es construir pipelines reproducibles, auditables y agnósticos al proveedor — antes de que el sistema te falle en producción."
date: 2026-05-14
tags: ["Architecture & Systems", "Quality Engineering"]
lang: es
draft: false
---

**El problema no es el modelo. Es la gobernanza.**

Cuando un equipo despliega un LLM en producción, la pregunta más común es: *¿cómo sabemos si está funcionando bien?* Y la respuesta más común, lamentablemente, es: *lo probamos manualmente un rato y se sentía correcto*.

Eso no es evaluación. Es vibes testing. Y en sistemas fintech, seguros o cualquier dominio donde los errores del modelo tienen consecuencias reales, no es suficiente.

## El problema estructural

Los LLMs tienen tres propiedades que los hacen difíciles de gobernar con las herramientas de QA tradicionales:

1. **No son deterministas.** El mismo prompt puede producir respuestas distintas en ejecuciones distintas.
2. **No tienen contrato explícito.** No hay una especificación formal de qué debería devolver el modelo ante cada input.
3. **Los sesgos son latentes.** Un modelo puede pasar todas tus pruebas de funcionalidad y aun así sistemáticamente favorecer ciertos grupos, marcos ideológicos o formulaciones de respuesta.

Las herramientas de testing tradicionales — Selenium, pytest, contratos de API — no están diseñadas para este tipo de sistema.

## Qué hace POLQA diferente

[POLQA](https://polqa-framework.github.io/polqa-site/) es un framework CLI modular construido sobre tres principios:

**Reproducibilidad primero.** Cada evaluación corre con un seed fijo, versión de modelo registrada y dataset versionado. Si el resultado cambia entre runs, el framework lo detecta y lo reporta.

**Agnóstico al proveedor.** El mismo pipeline de evaluación corre contra OpenAI, Claude, modelos locales vía Ollama y endpoints personalizados. No estás evaluando un modelo — estás evaluando una *clase* de comportamiento.

**Auditabilidad como restricción de diseño.** Cada run genera un artefacto estructurado: qué se evaluó, con qué dataset, con qué variantes de prompt, qué scores obtuvo y dónde falló. Eso es lo que necesitas cuando alguien de compliance te pregunta *¿cómo sabemos que el modelo no está sesgado?*

## La arquitectura

```
polqa/
├── evaluators/        # Módulos de evaluación por dimensión (bias, quality, consistency)
├── datasets/          # Datasets curados por dominio y caso de uso
├── runners/           # Adaptadores por proveedor (OpenAI, Anthropic, Ollama, custom)
└── reporters/         # Generadores de artefactos (JSON, CSV, markdown)
```

Cada módulo es composable. Puedes construir un pipeline que evalúe calidad de output en tres dimensiones, compare resultados entre dos proveedores, y genere un reporte estructurado — todo con un solo comando.

## Por qué esto importa en fintech

En Clip, los sistemas de calidad gobiernan infraestructura de pagos. Cuando un componente LLM entra en ese stack — para clasificación de disputas, generación de resúmenes o análisis de riesgo — necesitas poder responder preguntas como:

- ¿El modelo se comporta igual con usuarios de distintas regiones?
- ¿Cuál es la tasa de alucinación en este caso de uso específico?
- ¿Cómo cambió el comportamiento después del último fine-tune?

POLQA está construido para responder esas preguntas de forma sistemática, no con intuición.

---

El framework es open source. Si estás construyendo evaluación de LLMs en producción y quieres evitar el vibes testing, empieza por ahí.
