- [« SessionHandler::read](sessionhandler.read.md)
- [SessionHandlerInterface »](class.sessionhandlerinterface.md)

- [PHP Manual](index.md)
- [SessionHandler](class.sessionhandler.md)
- Записує дані сесії

# SessionHandler::write

(PHP 5 \>u003d 5.4.0, PHP 7, PHP 8)

SessionHandler::write — Записує дані сесії

### Опис

public **SessionHandler::write**(string `$id`, string `$data`): bool

Записує дані сесії у сховище. Зазвичай викликається при завершенні
скрипта, функцією
[session_write_close()](function.session-write-close.md) або коли
[session_register_shutdown()](function.session-register-shutdown.md)
зазнає невдачі. PHP викликає
[SessionHandler::close()](sessionhandler.close.md) відразу ж після
цього методу.

Метод є обертанням внутрішнього обробника PHP, визначеного в
параметрі ini-файлу
[session.save_handler](session.configuration.md#ini.session.save-handler)
який встановлюється до того, як буде визначено оброблювач сесії
викликом
[session_set_save_handler()](function.session-set-save-handler.md).

Якщо цей клас розширено шляхом успадкування, виклик батьківського методу
`write` викликає обгортку для цього методу і, відповідно, виклик
внутрішнього оброблювача. Це дозволяє методу бути перевантаженим або
перехопленим та відфільтрованим (наприклад, для шифрування значення
параметра `$ data` перед відправкою його в батьківський метод ` write `).

Для додаткової інформації дивіться документацію методом
[SessionHandlerInterface::write()](sessionhandlerinterface.write.md).

### Список параметрів

`id`
Ідентифікатор сесії

`data`
Зашифровані дані сесії. Ці дані є результатом того, що
PHP внутрішньо шифрує суперглобальну змінну `$_SESSION` в
серіалізований рядок і передає його як параметр. Зверніть
увагу, що сесії використовують альтернативний метод серіалізації.

### Значення, що повертаються

Значення сесійного сховища, що повертається (зазвичай **`true`** у випадку
успішного виконання, **`false`** у разі виникнення помилки). Це
значення повертається назад до PHP для внутрішньої обробки.

### Дивіться також

- Директива налаштування конфігурації
[session.serialize_handler](session.configuration.md#ini.session.serialize-handler).
