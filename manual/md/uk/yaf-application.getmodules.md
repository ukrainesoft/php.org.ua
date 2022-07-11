- [«
Yaf_Application::getLastErrorNo](yaf-application.getlasterrorno.md)
- [Yaf_Application::run »](yaf-application.run.md)

- [PHP Manual](index.md)
- [Yaf_Application](class.yaf-application.md)
- Отримати імена заявлених модулів

# Yaf_Application::getModules

(Yaf \>u003d1.0.0)

Yaf_Application::getModules — Отримати імена заявлених модулів

### Опис

public **Yaf_Application::getModules**(): array

Отримати список модулів, заданих у конфігураційному файлі. Якщо не
одного модуля не задано, то у вашому розпорядженні завжди є модуль
"Index".

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

### Приклади

**Приклад #1 Приклад використання **Yaf_Application::getModules()****

`<?php$config u003d array(    "application" u003d> array(       "directory" u003d> realpath(dirname(__FILE__)) . "/application", Y_ ) $config);print_r($application->getModules());?> `

Результатом виконання цього прикладу буде щось подібне:

Array
(
[0] u003d> Index
)
