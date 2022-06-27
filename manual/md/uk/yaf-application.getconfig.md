- [«
Yaf_Application::getAppDirectory](yaf-application.getappdirectory.md)
- [Yaf_Application::getDispatcher
»](yaf-application.getdispatcher.md)

- [PHP Manual](index.md)
- [Yaf_Application](class.yaf-application.md)
- Отримати екземпляр класу конфігурації

# Yaf_Application::getConfig

(Yaf \>u003d1.0.0)

Yaf_Application::getConfig — Отримати екземпляр класу конфігурації

### Опис

public **Yaf_Application::getConfig**():
[Yaf_Config_Abstract](class.yaf-config-abstract.md)

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Примірник класу [Yaf_Config_Abstract](class.yaf-config-abstract.md)

### Приклади

**Приклад #1 Приклад використання **Yaf_Application::getConfig()****

`<?php$config u003d array(   ""application" u003d> array(       "directory" u003d>>realpath(dirname(__FILE__)) . "/application", Y $config);print_r($application->getConfig());?> `

Результатом виконання цього прикладу буде щось подібне:

Yaf_Config_Simple Object
(
[_config:protected] u003d> Array
(
[application] u003d> Array
(
[directory] u003d> /home/laruence/local/www/htdocs/application
)

)

[_readonly:protected] u003d> 1
)
