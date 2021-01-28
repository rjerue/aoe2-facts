
shadow.cljs.devtools.client.env.module_loaded('app');

try { aoe2.core.init(); } catch (e) { console.error("An error occurred when calling (aoe2.core/init)"); throw(e); }