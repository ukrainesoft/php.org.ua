- [« spl_autoload_unregister](function.spl-autoload-unregister.md)
- [spl_classes »](function.spl-classes.md)

- [PHP Manual](index.md)
- [Функції SPL](ref.spl.md)
- Реалізація за умовчанням методу \_\_autoload()

# spl_autoload

(PHP 5 \>u003d 5.1.0, PHP 7, PHP 8)

spl_autoload — Реалізація за замовчуванням методу \_\_autoload()

### Опис

**spl_autoload**(string `$class`, ?string `$file_extensions` u003d
**`null`**): void

Ця функція є базовою реалізацією методу
[\_\_autoload()](function.autoload.md). Якщо вона не вказана та
[spl_autoload_register()](function.spl-autoload-register.md)
викликається без будь-яких параметрів, то при кожному наступному виклику
[\_\_autoload()](function.autoload.md) буде використовуватись саме ця
функція.

### Список параметрів

`class`
Ім'я класу (і простору імен), яке потрібно завантажити.

`file_extensions`
За замовчуванням функція шукатиме файли з розширеннями .inc та .php. по
всім include-шляхам, де може розташовуватися клас, що шукається.

### Значення, що повертаються

Функція не повертає значення після виконання.

### Помилки

Викликає виняток [LogicException](class.logicexception.md), якщо
клас не знайдено та відсутні інші зареєстровані автозавантажувачі.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -----------|
| 8.0.0 | `file_extensions` тепер припускає значення null. |
