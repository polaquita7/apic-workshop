/**
 * datos-ambiente.js
 * Valores de infraestructura y ambiente para los laboratorios del Workshop API Connect.
 * Editá este archivo cuando cambie el ambiente de TechZone — los HTMLs de cada lab
 * los leen automáticamente sin necesidad de recompilar nada.
 *
 * Referenciado desde cada lab con:
 *   <script src="../../datos-ambiente.js"></script>   (labs de proveedores)
 */
const LAB_CONFIG = {

   /* ── 1. APIC — organización y catálogo ─────────────────────────────────── */

  // Nombre de la organización proveedora
  apic_org: "user-demo-org",

    // Nombre del catálogo de publicación
  apic_catalog: "sandbox",

    /* ── 2. APIC — URLs de acceso (cluster OCP en TechZone) ────────────────── */

  // Host del DataPower API Gateway (Route pública de OCP)
  gw_host: "https://rgw.apps.itz-50gq8d.infra01-lb.fra02.techzone.ibm.com",
  api_manager_url: "https://manager.apps.itz-50gq8d.infra01-lb.fra02.techzone.ibm.com/manager/user-demo-org",
  portal_url: "https://portal.apps.itz-50gq8d.infra01-lb.fra02.techzone.ibm.com/user-demo-org/sandbox",
  consumer_catalog_url: "https://consumer-catalog.apps.itz-50gq8d.infra01-lb.fra02.techzone.ibm.com/user-demo-org/sandbox",
  
    /* ── 3. Mock backend de saldos ─────────────────────────────────────────── */
  // Endpoint de autenticación (/auth)
  mock_auth_host: "https://saldos-mock-auth-saldos.apps.itz-50gq8d.infra01-lb.fra02.techzone.ibm.com",

  // Host del mock backend — endpoint de saldos (/saldos/{cuit})
  mock_saldos_host: "http://saldos-mock.saldos.svc.cluster.local",
  //mock_saldos_host: "https://saldos-mock-saldos.apps.itz-50gq8d.infra01-lb.fra02.techzone.ibm.com",

  // Contraseña del mock de autenticación de saldos
  pwd_mock_saldos: "pass123",

  /* ── 4. Lab oAuth Provider — mock saldos ────────────────────────────────────── */

  // CUIT de la empresa propia (usuario autenticado)
  cuit_propio: "30716595549",

  // CUIT de una empresa ajena (escenario de ataque BOLA)
  cuit_ajeno: "30500010237",

  //Nombre del oAuth Provider
  oauth_provider_name: "saldos-oauth",
  oauth_base_path: "/saldos-oauth",

  /* ── 5. Lab Invoke simple (backend externo) ───────────────────────────────── */
  invoke_username: "CECI",
  invoke_password: "IBM01IBM",
  invoke_url: "https://148.100.75.105:9443/catalogManager/items?startItemID=10",

};
