- [« SessionHandler](class.sessionhandler.md)
- [SessionHandler::create_sid »](sessionhandler.create-sid.md)

- [PHP Manual](index.md)
- [SessionHandler](class.sessionhandler.md)
- Закриває сесію

# SessionHandler::close

(PHP 5 \>u003d 5.4.0, PHP 7, PHP 8)

SessionHandler::close — Закриває сесію

### Опис

public **SessionHandler::close**(): bool

Закриває поточну сесію. Цей метод автоматично викликається з PHP
час закриття сесії або безпосередньо викликом функції
[session_write_close()](function.session-write-close.md) (яка для
початку викликає функцію
[SessionHandler::write()](sessionhandler.write.md)).

Цей метод є обертанням внутрішнього обробника сесій PHP,
визначеного в налаштуванні ini-файлу
[session.save_handler](session.configuration.md#ini.session.save-handler),
яка встановлюється перед тим як обробник активується функцією
[session_set_save_handler()](function.session-set-save-handler.md).

Якщо цей клас розширюється шляхом успадкування, то виклик батьківського
методу `close` виконає код обгортки, а отже код внутрішнього
оброблювача. Це дозволяє методу бути перевизначеним або
перехопленим.

Додаткову інформацію про те, які дії очікуються від цього
методу дивіться посібник з методу
[SessionHandlerInterface::close()](sessionhandlerinterface.close.md).

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Значення сесійного сховища, що повертається (зазвичай **`true`** у випадку
успішного виконання, **`false`** у разі виникнення помилки). Це
значення повертається назад до PHP для внутрішньої обробки.
