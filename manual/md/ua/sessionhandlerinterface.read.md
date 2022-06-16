- [« SessionHandlerInterface::open](sessionhandlerinterface.open.md)
- [SessionHandlerInterface::write
»](sessionhandlerinterface.write.md)

- [PHP Manual](index.md)
- [SessionHandlerInterface](class.sessionhandlerinterface.md)
- Читає дані сесії

# SessionHandlerInterface::read

(PHP 5 \>u003d 5.4.0, PHP 7, PHP 8)

SessionHandlerInterface::read — Читає дані сесії

### Опис

public **SessionHandlerInterface::read**(string `$id`): string\|false

Читає дані сесії зі сховища сесій та повертає результат.
Викликається одразу після старту сесії або коли викликана
[session_start()](function.session-start.md). Зверніть увагу, що
перед викликом цього методу буде викликано функцію
[SessionHandlerInterface::open()](sessionhandlerinterface.open.md).

Цей метод викликається PHP, коли стартує сесія. Цей метод винен
отримати дані сесії зі сховища за вказаним її ідентифікатором.
Рядок, що повертається цим методом, повинен мати той самий серіалізований
формат, що й вихідна, яка передавалася функції
[SessionHandlerInterface::write()](sessionhandlerinterface.write.md).
Якщо запису не знайдено, повертається **`false`**.

Дані, що повертаються цим методом, будуть розшифровані всередині PHP,
використовуючи метод десеріалізації, зазначений у
[session.serialize_handler](session.configuration.md#ini.session.serialize-handler).
Отримані дані будуть використані для заповнення суперглобального
масиву `$_SESSION`.

Зверніть увагу, що схема серіалізації даних не така, як у функції
[unserialize()](function.unserialize.md), і отримати доступ до даних
можна за допомогою функції
[session_decode()](function.session-decode.md).

### Список параметрів

`id`
Ідентифікатор сесії

### Значення, що повертаються

Повертає закодований рядок прочитаних даних. Якщо нічого не
прочитано, повертається **`false`**. Зверніть увагу, що це значення
передається для обробки всередині PHP.

### Дивіться також

- INI-директива
[session.serialize_handler](session.configuration.md#ini.session.serialize-handler)
