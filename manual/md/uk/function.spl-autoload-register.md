- [« spl_autoload_functions](function.spl-autoload-functions.md)
- [spl_autoload_unregister »](function.spl-autoload-unregister.md)

- [PHP Manual](index.md)
- [Функції SPL](ref.spl.md)
- реєструє задану функцію як реалізацію методу
\_\_autoload()

# spl_autoload_register

(PHP 5 \>u003d 5.1.0, PHP 7, PHP 8)

spl_autoload_register — Реєструє задану функцію як
реалізації методу \_\_autoload()

### Опис

**spl_autoload_register**(?[callable](language.types.callable.md)
`$callback` u003d **`null`**, bool `$throw` u003d **`true`**, bool `$prepend` u003d
**`false`**): bool

Реєструє функцію \_\_autoload у черзі, що надається SPL. В
в результаті черга буде активована, навіть якщо раніше вона була
вимкнено.

Якщо у вашому скрипті реалізовано функцію
[\_\_autoload()](function.autoload.md), її необхідно явно
зареєструвати у черзі \_\_autoload. Це потрібно, т.к.
**spl_autoload_register()** повністю замінює механізм кешування
[\_\_autoload()](function.autoload.md) функціями
[spl_autoload()](function.spl-autoload.md) та
[spl_autoload_call()](function.spl-autoload-call.md).

**spl_autoload_register()** дозволяє задати кілька реалізацій методу
автозавантаження. Вона створює чергу з функцій автозавантаження в порядку їх
визначення у скрипті, тоді як вбудована функція
[\_\_autoload()](function.autoload.md) може мати лише одну
реалізацію.

### Список параметрів

`callback`
Ім'я функції, що реалізує метод
[spl_autoload()](function.spl-autoload.md). Якщо **`null`**, буде
зареєстровано реалізацію за замовчуванням.

callback(string `$class_name`): void

`throw`
Цей параметр визначає, чи має **spl_autoload_register()**
викидати виняток, якщо зареєструвати `callback` виявилося
неможливим.

`prepend`
Якщо передано значення true, **spl_autoload_register()** помістить
зазначену функцію на початок черги замість додавання до кінця.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- ----|
| 8.0.0 | callback тепер допускає значення null. |

### Приклади

**Приклад #1 **spl_autoload_register()** як альтернатива функції
[\_\_autoload()](function.autoload.md)**

` <?php// function __autoload($class) {//    include 'classes/' . $class . '.class.php';// }function my_autoloader($class) {    include 'classes/' . $class . '.class.php';}spl_autoload_register('my_autoloader');// Можно використовувати анонімні функціїspl_autoload_register(function ($class) {    include 'classes/' . $class ;

**Приклад #2 Приклад використання **spl_autoload_register()** у випадку,
якщо клас не завантажився**

`<?phpnamespace Foobar;class Foo {    static public function test($name) {         print '[['. $name .']]'; }}spl_autoload_register(__NAMESPACE__ .'\Foo::test');new InexistentClass;?> `

Результатом виконання цього прикладу буде щось подібне:

[[Foobar\InexistentClass]]
Fatal error: Class 'Foobar\InexistentClass' not found in ...

### Дивіться також

- [\_\_autoload()](function.autoload.md) - Спроба завантажити
невизначений клас
