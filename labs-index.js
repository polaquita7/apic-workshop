/**
 * labs-index.js
 * Índice de laboratorios del Workshop API Connect.
 * Editá este archivo para agregar, quitar o reordenar labs en la landing page.
 * Solo define datos — título, descripción y ruta relativa a cada guía.
 *
 * Referenciado desde:
 *   laboratorios/Landing_Labs_APIC_BancoProvincia.html
 */
const LABS_INDEX = {

  /* ── Bloque Proveedores ────────────────────────────────────────────────── */
  proveedores: [
    {
      num:   "Lab 01",
      title: "Crear una API REST proxy",
      desc:  "Crear una API proxy de un endpoint de z/OS Connect en el API Studio, diseño del Assembly con política Invoke en el DataPower Gateway.",
      path:  "proveedores/01-crear-api/lab-crear-api-ibm.html",
    },
    {
      num:   "Lab 02",
      title: "Crear y publicar un Producto",
      desc:  "Creación de un Producto que agrupa APIs, exploración de sus propiedades de visibilidad y publicación en un Catálogo del API Manager.",
      path:  "proveedores/04-productos-catalogos/lab-productos-catalogos.html",
    },
    {
      num:   "Lab 03",
      title: "API Saldos con control de CUIT utilizando oAuth",
      desc:  "Implementación del control BOLA con el OAuth Provider nativo de APIC v12, validando con GatewayScript el ownership del recurso.",
      path:  "proveedores/02-bola-oauth-security/lab-bola-security-ibm.html",
    },
    {
      num:   "Lab 04",
      title: "Analítica de APIs",
      desc:  "Visibilidad del ecosistema de APIs en tiempo real",
      path:  "proveedores/07-analitica/lab-analitica.html",
    },
  ],

  /* ── Bloque Consumidores ───────────────────────────────────────────────── */
  // Agregar labs de consumidores aquí cuando estén disponibles.
  consumidores: [
    {
      num:   "Lab 05",
      title: "Catálogo interno",
      desc:  "Descubrimiento y subscripción al producto de APIs en el catálogo liviano por parte de consumidores internos a la organización",
      path:  "consumidores/06-consumer-catalog/lab-consumer-catalog.html",
    },
    {
      num:   "Lab 06",
      title: "Portal de consumidores externos",
      desc:  "Registro de cuenta en el Developer Portal, creación de una aplicación consumidora, suscripción al Producto publicado y prueba de la API con credenciales reales.",
      path:  "consumidores/05-portal-desarrolladores/lab-portal-desarrolladores.html",
      
    },
    {
      num:   "Lab 07",
      title: "Analítica para consumidores de APIs",
      desc:  "Información de uso para consumidores en tiempo real",
      path:  "consumidores/08-analitica-consumidores/lab-analitica-consumidores.html",
    },
  ],

};
