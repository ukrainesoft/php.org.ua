- [« Yaf_Application::getConfig](yaf-application.getconfig.md)
- [Yaf_Application::getLastErrorMsg
»](yaf-application.getlasterrormsg.md)

- [PHP Manual](index.md)
- [Yaf_Application](class.yaf-application.md)
- Отримати екземпляр класу Yaf_Dispatcher

# Yaf_Application::getDispatcher

(Yaf \>u003d1.0.0)

Yaf_Application::getDispatcher — Отримати примірник класу
Yaf_Dispatcher

### Опис

public **Yaf_Application::getDispatcher**():
[Yaf_Dispatcher](class.yaf-dispatcher.md)

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

### Приклади

**Приклад #1 Приклад використання **Yaf_Application::getDispatcher()****

`<?php$config u003d array(    "application" u003d> array(       "directory" u003d> realpath(dirname(__FILE__)) . "/application", Y_ ) $config);print_r($application->getDispatcher());?> `

Результатом виконання цього прикладу буде щось подібне:

Yaf_Dispatcher Object
(
[_router:protected] u003d> Yaf_Router Object
(
[_routes:protected] u003d> Array
(
[_default] u003d> Yaf_Route_Static Object
(
)

)

[_current:protected] u003d>
)

[_view:protected] u003d>
[_request:protected] u003d> Yaf_Request_Http Object
(
[module] u003d>
[controller] u003d>
[action] u003d>
[method] u003d> Cli
[params:protected] u003d> Array
(
)

[language:protected] u003d>
[_exception:protected] u003d>
[_base_uri:protected] u003d>
[uri:protected] u003d>
[dispatched:protected] u003d>
[routed:protected] u003d>
)

[_plugins:protected] u003d> Array
(
)

[_auto_render:protected] u003d> 1
[_return_response:protected] u003d>
[_instantly_flush:protected] u003d>
[_default_module:protected] u003d> Index
[_default_controller:protected] u003d> Index
[_default_action:protected] u003d> index
[_response] u003d> Yaf_Response_Cli Object
(
[_header:protected] u003d> Array
(
)

[_body:protected] u003d>
[_sendheader:protected] u003d>
)

)
