- [« Приклади](yaf.tutorials.md)
- [Yaf_Application »](class.yaf-application.md)

- [PHP Manual](index.md)
- [Yaf](book.yaf.md)
- Конфігурація програми

# Конфігурація програми

Ви повинні задати конфігурацію у вигляді масиву або INI файлу (Див.
[Yaf_Config_Ini](class.yaf-config-ini.md)) у конструкторі
[Yaf_Application::\_\_construct()](yaf-application.construct.md).

Yaf автоматично об'єднає параметри програми та користувацькі
параметри. Конфігурація програм має префікс "yaf." або
"application.". Якщо вказано обидва "yaf." та "application.", перевага
буде віддано "application.".

**Приклад #1 Приклад PHP масиву**

` <?php    $configs u003d array(            "application" u003d> array(                "directory" u003d> dirname(__FILE__),                "dispatcher" u003d> array(                      "catchException" u003d> 0,                    ),                "view" u003d> array(                       " ext" u003d> "phtml",                     ),                ), | $app u003d new Yaf_Application($config);?> `

**Приклад #2 Приклад INI файлу**

`` inicode
[yaf]
yaf.directory u003d APPLICATION_PATH "/appliation"
yaf.dispatcher.catchException u003d 0

[product : yaf]
; user configuration list here
````

| Ім'я За замовчуванням | Список змін |
|------------------------------------------|------ -------------------------------------------------- |------------------|
| application.directory | | |
| application.ext | "PHP" | |
| application.view.ext | "phtml" | |
| application.modules | "index" | |
| application.library | application.directory. "/library" | |
| application.library.directory | application.directory. "/library" | |
| application.library.namespace | "" | |
| application.bootstrap | application.directory. "/Bootstrap" . application.ext | |
| application.baseUri | "" | |
| application.dispatcher.defaultRoute | | |
| application.dispatcher.throwException | 1 | |
| application.dispatcher.catchException | 0 | |
| application.dispatcher.defaultModule | "index" | |
| application.dispatcher.defaultController | "index" | |
| application.dispatcher.defaultAction | "index" | |
| application.system | | |

**Конфігурація Yaf програми**

Коротке пояснення конфігураційних директив.

`application.directory` string
Директорія, що містить папки "controllers"(контролери),
"views" (шаблони виведення), "models" (моделі), "plugins" (плагіни).

> **Примітка**:
>
> Це єдина конфігурація, яка не має параметрів по
> замовчуванням. Ви повинні ввести її вручну.

`application.ext` string
Розширення файлів PHP-скриптів, що використовуються в класі автозавантаження
[Yaf_Loader](class.yaf-loader.md)).

`application.view.ext` string
Розширення файлів шаблонів виводу.

`application.modules` string
Список зареєстрованих модулів, розділених комами, що використовуються в
маршрутизації, особливо якщо в PATH_INFO більше трьох сегментів,

Yaf повинен мати можливість зрозуміти, чи є перший сегмент ім'ям
модуля чи ні.

`application.library` string
Локальний каталог із бібліотеками, дивіться
[Yaf_Loader](class.yaf-loader.md) та
[yaf.library](yaf.configuration.md#ini.yaf.library).

> **Примітка**:
>
> Після Yaf 2.1.6, ця настройка повинна являти собою масив.
> Шлях до бібліотек намагатиметься використовувати елементи
> [application.library.directory](yaf.appconfig.md#configuration.yaf.library.directory)

`application.library.directory` string
Псевдонім для
[application.library](yaf.appconfig.md#configuration.yaf.library).
Додано до Yaf 2.1.6

`application.library.namespace` string
Префікси просторів імен локальних бібліотек, перераховані через
кому.

Додано до Yaf 2.1.6

`application.bootstrap` string
Абсолютний шлях до скрипта класу Bootstrap.

`application.baseUri` string
Використовується для видалення фіксованого префікса URI запиту у процесі
маршрутизації. Наприклад, надійшов запит до "/prefix/controller/action".
Якщо ви поставите application.baseUri рівним "/prefix", то в процесі
маршрутизації, як PATH_INFO буде використовуватися тільки
"/controller/action".

В цілому, це досить марна настройка.

`application.dispatcher.throwException` bool
Якщо встановлено як On, Yaf буде викидати винятки у разі
виникнення помилок. Також дивіться
[Yaf_Dispatcher::throwException()](yaf-dispatcher.throwexception.md).

`application.dispatcher.catchException` bool
Якщо встановлено як On, Yaf надсилатиме не оброблені винятки в
контролер Помилок/Дій. Також дивіться
[Yaf_Dispatcher::catchException()](yaf-dispatcher.catchexception.md).

`application.dispatcher.defaultRoute` string
Маршрутизація за замовчуванням, якщо не задано, то за промовчанням буде
використано маршрут Static. Дивіться:
[Yaf_Router::addRoute()](yaf-router.addroute.md).

`application.dispatcher.defaultModule` string
Ім'я модуля за замовчуванням також дивіться
[Yaf_Dispatcher::setDefaultModule()](yaf-dispatcher.setdefaultmodule.md).

`application.dispatcher.defaultController` string
Ім'я контролера за замовчуванням, також дивіться
[Yaf_Dispatcher::setDefaultController()](yaf-dispatcher.setdefaultcontroller.md).

`application.dispatcher.defaultAction` string
Ім'я дії за замовчуванням також дивіться
[Yaf_Dispatcher::setDefaultAction()](yaf-dispatcher.setdefaultaction.md).

`application.system` string
Встановлює конфігурацію часу виконання yaf в application.ini,
типу:
[application.system.lowcase_path](yaf.configuration.md#ini.yaf.lowcase-path)

> **Примітка**:
>
> тільки PHP_INI_ALL опції можуть бути встановлені таким чином
