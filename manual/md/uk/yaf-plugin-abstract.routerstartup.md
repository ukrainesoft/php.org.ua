- [«
Yaf_Plugin_Abstract::routerShutdown](yaf-plugin-abstract.routershutdown.md)
- [Yaf_Registry »](class.yaf-registry.md)

- [PHP Manual](index.md)
- [Yaf_Plugin_Abstract](class.yaf-plugin-abstract.md)
- Перехоплювач RouterStartup

# Yaf_Plugin_Abstract::routerStartup

(Yaf \>u003d1.0.0)

Yaf_Plugin_Abstract::routerStartup — Перехоплювач RouterStartup

### Опис

public
**Yaf_Plugin_Abstract::routerStartup**([Yaf_Request_Abstract](class.yaf-request-abstract.md)
`$request`, [Yaf_Response_Abstract](class.yaf-response-abstract.md)
`$response`): void

Це найраніший перехоплювач у системі плагінів Yaf, якщо
плагін користувача реалізує цей метод, то він буде викликаний перед
маршрутизація запиту.

**Увага**

На цей час ця функція ще була документована; для
ознайомлення доступний лише список аргументів.

### Список параметрів

`request`

`response`

### Значення, що повертаються

### Дивіться також

- [Yaf_Plugin_Abstract::routerShutdown()](yaf-plugin-abstract.routershutdown.md) -
Призначення routerShutdown
- [Yaf_Plugin_Abstract::dispatchLoopStartup()](yaf-plugin-abstract.dispatchloopstartup.md) -
Хук перед відправкою циклу
- [Yaf_Plugin_Abstract::preDispatch()](yaf-plugin-abstract.predispatch.md) -
Призначення preDispatch
- [Yaf_Plugin_Abstract::postDispatch()](yaf-plugin-abstract.postdispatch.md) -
Призначення postDispatch
- [Yaf_Plugin_Abstract::dispatchLoopShutdown()](yaf-plugin-abstract.dispatchloopshutdown.md) -
Призначення dispatchLoopShutdown
