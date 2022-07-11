- [« Yaf_Application::\_\_destruct](yaf-application.destruct.md)
- [Yaf_Application::execute »](yaf-application.execute.md)

- [PHP Manual](index.md)
- [Yaf_Application](class.yaf-application.md)
- Отримати значення оточення

# Yaf_Application::environ

(Yaf \>u003d1.0.0)

Yaf_Application::environ — Отримати значення оточення

### Опис

public **Yaf_Application::environ**(): void

Отримати значення оточення з yaf.environ, яке за умовчанням дорівнює
"product".

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

### Приклади

**Приклад #1 Приклад використання **Yaf_Application::environ()****

`<?php$config u003d array(   ""application" u003d> array(       "directory" u003d>>realpath(dirname(__FILE__)) . "/application", Y $config);print_r($application->environ());?> `

Результатом виконання цього прикладу буде щось подібне:

product
