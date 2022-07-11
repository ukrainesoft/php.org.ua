- [«
Yaf_Application::clearLastError](yaf-application.clearlasterror.md)
- [Yaf_Application::\_\_destruct »](yaf-application.destruct.md)

- [PHP Manual](index.md)
- [Yaf_Application](class.yaf-application.md)
- Конструктор класу Yaf_Application

# Yaf_Application::\_\_construct

(Yaf \>u003d1.0.0)

Yaf_Application::\_\_construct - Конструктор класу Yaf_Application

### Опис

public
**Yaf_Application::\_\_construct**([mixed](language.types.declarations.md#language.types.declarations.mixed)
`$config`, string `$envrion` u003d ?)

Примірник [Yaf_Application](class.yaf-application.md).

### Список параметрів

`config`
Шлях до конфігураційного ini-файлу або масив із налаштуваннями

Якщо це шлях до ini-файлу, то в ньому повинен бути розділ з
ім'ям [yaf.environ](yaf.configuration.md#ini.yaf.environ), що є
за промовчанням "product".

> **Примітка**:
>
> Якщо ви використовуєте ini-файл, то для покращення продуктивності,
> дозвольте опцію
> [yaf.cache_config](yaf.configuration.md#ini.yaf.cache-config).

Параметри конфігурації (та їх значення за замовчуванням):

**Приклад #1 Приклад ini-файлу**

`` inicode
[product]
;Ця опція не має значення за умовчанням і обов'язково має бути задана вами
application.directoryu003dAPPLICATION_PATH

;Наступні параметри мають значення за замовчуванням, вам можна їх не чіпати
application.library u003d APPLICATION_PATH . "/library"
application.dispatcher.throwExceptionu003d1
application.dispatcher.catchExceptionu003d1

application.baseUriu003d""

;розширення php-скриптів
ap.extu003dphp

;розширення файлів шаблонів
ap.view.extu003dphtml

ap.dispatcher.defaultModuelu003dIndex
ap.dispatcher.defaultControlleru003dIndex
ap.dispatcher.defaultActionu003dindex

;Певні модулі
ap.modulesu003dIndex
````

`envrion`
Який розділ буде завантажено як остаточну конфігурацію

### Значення, що повертаються

### Приклади

**Приклад #2 Приклад використання **Yaf_Application::\_\_construct()****

` <?phpdefined('APPLICATION_PATH')                   // APPLICATION_PATH will be used in the ini config file   | define('APPLICATION_PATH', __DIR__));$application u003d new Yaf_Application(APPLICATION_PATH.'/conf/application.ini');$application->bootstrap()->run();?> `

Результатом виконання цього прикладу буде щось подібне:

**Приклад #3 Приклад використання **Yaf_Application::\_\_construct()****

`<?php$config u003d array(    "application" u003d> array(       "directory" u003d> realpath(dirname(__FILE__)) . "/application", Y_ ) $config);$application->bootstrap()->run();?> `

Результатом виконання цього прикладу буде щось подібне:

### Дивіться також

- [Yaf_Config_Ini](class.yaf-config-ini.md)
