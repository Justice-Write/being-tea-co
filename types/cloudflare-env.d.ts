/// <reference types="@cloudflare/workers-types" />
// Types only: no binding is provisioned by this declaration.
declare namespace Cloudflare {
  interface Env {
    DB?: D1Database;
  }
}
