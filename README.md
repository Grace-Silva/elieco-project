# Elieco — Wireframes navegables del e-commerce

Prototipo de wireframes del e-commerce de **Elieco** (moda sostenible, Bogotá, Colombia).
Es un prototipo de validación de flujos: **no es la tienda final** ni incluye backend,
pagos ni base de datos.

## Qué contiene

Una sola superficie de revisión con 13 pantallas navegables:

1. **Inicio** — hero, categorías, productos destacados
2. **Tienda** — catálogo con filtros (2 categorías, ~400 productos)
3. **Producto** — detalle, precio en COP con IVA incluido
4. **Acceso / Registro** — login simulado (requerido para el carrito)
5. **Carrito** — conserva la selección; pedido mínimo $70.000 COP
6. **Confirmar pedido** — envía el pedido como **mensaje prellenado de WhatsApp Business**
   (+57 300 5200883). No hay pasarela de pago: la tienda atiende desde WhatsApp
7. **Personaliza** — pedidos personalizados (anticipo 50%, sin cambio salvo defecto)
8. **Experiencia Elieco** — programa de fidelización, concursos, descuentos y
   agendamiento de reuniones empresariales (uniformes/eventos)
9. **Nuestra historia**
10. **Sostenibilidad**
11. **Contacto / FAQ** — envíos (gratis desde $200.000; Bogotá 1–3 días, resto 3–5),
    cambios y devoluciones (5 días hábiles)
12. **Cuenta**
13. **Legales**

Redes sociales (Instagram @elieco26, Facebook) visibles en todas las pantallas.
Controles de vista **escritorio / móvil** en la barra superior del prototipo.

## Cómo ejecutarlo en tu PC

Requisitos: [Node.js 20+](https://nodejs.org) o [Bun](https://bun.sh).

```bash
# con npm
npm install
npm run dev

# o con bun
bun install
bun run dev
```

Luego abre http://localhost:8080 (o el puerto que indique la terminal).

## Estructura relevante

- `src/components/wireframe-app.tsx` — todo el prototipo (pantallas, navegación, estado)
- `src/routes/index.tsx` — punto de entrada que renderiza el prototipo
- `src/styles.css` — paleta (verde bosque + beige) y tokens de diseño
- `src/routes/__root.tsx` — metadatos y fuentes (Playfair Display / Montserrat)

## Notas para ajustes

- El prototipo es **state-driven** (una sola superficie con estado), no usa rutas por
  pantalla: está pensado para validar flujos, no como arquitectura de producción.
- El login es simulado (sin verificación real).
- Los textos comerciales (precios, tiempos de envío, políticas) vienen del brief;
  ajústalos en `wireframe-app.tsx`.

---
Paquete generado desde Lovable — octubre 2026.
