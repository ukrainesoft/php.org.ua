- [«match](control-structures.match.md)
- [return »] (function.return.md)

- [PHP Manual](index.md)
- [Керування конструкції](language.control-structures.md)
- declare

## declare

(PHP 4, PHP 5, PHP 7, PHP 8)

Конструкція `declare` використовується для встановлення директив виконання
блок коду. Синтаксис `declare` аналогічний із синтаксисом інших
конструкцій управління виконанням:

declare (directive)
statement

Секція `directive` дозволяє встановити поведінку блоку `declare`. В
нині розпізнаються лише три директиви: директива `ticks`
(Додаткова інформація про директиву
[ticks](control-structures.declare.md#control-structures.declare.ticks)
доступна нижче), директива `encoding` (Додаткова інформація про
директиві
[encoding](control-structures.declare.md#control-structures.declare.encoding)
доступна нижче) та директива `strict_types` (подробиці у розділі про
[сувору
типизацию](language.types.declarations.md#language.types.declarations.strict)
на сторінці аргументів функції)

Оскільки директиви обробляються при компіляції файлу, лише
символьні дані можна використовувати як значення директиви. Не можна
використовувати змінні та константи. Приклад:

` <?php// Правильно:declare(ticksu003d1);// Неприпустимо:const TICK_VALUE u003d 1;declare(ticksu003dTICK_VALUE);?> `

Частина `statement` блоку `declare` буде виконана - як виконується та
які побічні ефекти виникають під час виконання, може залежати від
директиви, яка встановлена в блоці `directive`.

Конструкція `declare` також може бути використана у глобальній області
видимості, впливаючи на весь наступний за нею код (проте якщо файл з
`declare` був включений, то вона не буде діяти на батьківську
файл).

`<?php//це то те саме:// можна так:declare(ticksu003d1) {    // інші дії}// або так:declare(ticksu003d1);// інші дії?> ``

### Тікі

Тік - це подія, яка трапляється кожні `N` низькорівневих операцій,
виконаних парсером усередині блоку `declare`. Значення `N` задається,
використовуючи `ticksu003dN` всередині секції `directive` блоку `declare`.

Не всі висловлювання підраховуються. Зазвичай, умовні вирази та вирази
аргументів не підраховуються.

Подія (або кілька подій), яка виникає на кожному тику
визначається, використовуючи
[register_tick_function()](function.register-tick-function.md).
Дивіться нижче приклад для додаткової інформації. Майте на увазі, що
для одного тику може виникати кілька подій.

**Приклад #1 Приклад використання тика**

` <?phpdeclare(ticksu003d1);// Функція, виконана при кожному тикуfunction tick_handler(){   echo "Викликається tick_handler()
Register_tick_function('tick_handler'); / викликає подія тика}?> `

Дивіться також
[register_tick_function()](function.register-tick-function.md) та
[unregister_tick_function()](function.unregister-tick-function.md).

### Кодування

Кодування скрипта може бути вказано для кожного скрипта, використовуючи
директиву `encoding`.

**Приклад #2 Визначення кодування для скрипта.**

`<?phpdeclare(encodingu003d'ISO-8859-1');//Інший код?> `

**Застереження**

У поєднанні з простором імен єдино допустимий синтаксис для
declare є `declare(encodingu003d'...');` де `...` це значення
кодування. `declare(encodingu003d'...') {}` призведе до помилки парсера, якщо
використовується разом із простором імен.

Дивіться також
[zend.script_encoding](ini.core.md#ini.zend.script-encoding).
