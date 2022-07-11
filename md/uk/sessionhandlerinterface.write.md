- [« SessionHandlerInterface::read](sessionhandlerinterface.read.md)
- [SessionIdInterface »](class.sessionidinterface.md)

- [PHP Manual](index.md)
- [SessionHandlerInterface](class.sessionhandlerinterface.md)
- Записати дані сесії

# SessionHandlerInterface::write

(PHP 5 \>u003d 5.4.0, PHP 7, PHP 8)

SessionHandlerInterface::write — Записати дані сесії

### Опис

public **SessionHandlerInterface::write**(string `$id`, string `$data`):
bool

Записує дані сесії у сховище сесій. Викликається функцією
[session_write_close()](function.session-write-close.md), коли
невдало завершується функція
[session_register_shutdown()](function.session-register-shutdown.md)
або під час нормального завершення роботи. Увага:
[SessionHandlerInterface::close()](sessionhandlerinterface.close.md)
викликається відразу після цієї функції.

PHP викликає цей метод, коли сесія готова для збереження та закриття.
Кодуються дані сесії із суперглобального масиву `$_SESSION` в
серіалізований рядок та передаються разом з ідентифікатором сесії
даним методом для зберігання. Використовуваний метод серіалізації вказано в
опції
[session.serialize_handler](session.configuration.md#ini.session.serialize-handler).

Зверніть увагу, що цей метод зазвичай викликається PHP після закриття
буферів виведення, якщо явно не викликається
[session_write_close()](function.session-write-close.md).

### Список параметрів

`id`
Ідентифікатор сесії

`data`
Закодовані дані сесії. Ці дані є результатом
внутрішнього кодування PHP суперглобального масиву `$_SESSION`
серіалізований рядок та передачі її як цей параметр.
Зверніть увагу, що сесії використовують альтернативний метод
серіалізації.

### Значення, що повертаються

Значення сесійного сховища, що повертається (зазвичай **`true`** у випадку
успішного виконання, **`false`** у разі виникнення помилки). Це
значення повертається назад до PHP для внутрішньої обробки.

### Дивіться також

- Директива конфігурації
[session.serialize_handler](session.configuration.md#ini.session.serialize-handler)
