---
title: "SAD-TH: Sistema de Ingesta y Gestión Transaccional Documental"
description: "Plataforma de digitalización hospitalaria con control estricto de concurrencia y pipeline de visión artificial en memoria para validación de expedientes."
techStack: ["FastAPI", "Python", "React", "PostgreSQL", "SQLAlchemy", "Alembic", "Llama Vision"]
githubBackend: "https://github.com/ZeroGravityClone/mi_backend_medico"
githubFrontend: "https://github.com/ZeroGravityClone/mi_frontend_medico"
role: "Backend Architect & Data Pipeline Engineer"
---

### El Problema Real
Los entornos hospitalarios manejan miles de expedientes físicos de personal de salud. Los problemas del cliente eran críticos:
1. **Pérdida de trazabilidad física:** Carpetas prestadas simultáneamente a diferentes departamentos sin control, generando extravíos recurrentes de contratos y credenciales obligatorias.
2. **"Cajas negras" digitales:** PDFs escaneados que requerían inspección humana manual para confirmar si estaban realmente firmados, sellados o si pertenecían al empleado correcto.

### La Solución Implementada
Diseñé y construí un ecosistema desacoplado (**SAD-TH**) compuesto por un backend asíncrono de alto rendimiento y un cliente reactivo. 

Para resolver la trazabilidad física, implementé un **mecanismo de préstamo transaccional** en la base de datos que bloquea la carpeta de forma lógica si tiene un préstamo activo, evitando la concurrencia destructiva (doble préstamo).

Para resolver el análisis documental, diseñé un **pipeline de visión multimodal**:
*   Los PDFs se suben mediante flujos binarios asíncronos y se procesan **100% en memoria** (`io.BytesIO`) para evitar cuellos de botella de I/O de disco y garantizar privacidad de datos médicos.
*   Se renderizan las páginas clave a 300 DPI utilizando PyMuPDF y se codifican en Base64 para ser analizadas por un modelo multimodal (Llama Vision), el cual extrae metadatos estructurados y detecta visualmente la presencia de firmas y sellos institucionales.

### Impacto Técnico
*   **Aislamiento de Recursos:** Transición exitosa de lógica monolítica de escritorio hacia un servicio web moderno y desacoplado de alta velocidad.
*   **Integridad de Datos:** Normalización determinista de fechas (vía expresiones regulares hacia formato ISO 8601) y matching difuso por similitud en la base maestra del personal para evitar nombres duplicados con errores de tipeo.