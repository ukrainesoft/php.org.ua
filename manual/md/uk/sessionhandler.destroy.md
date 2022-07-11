- [« SessionHandler::create_sid](sessionhandler.create-sid.md)
- [SessionHandler::gc »](sessionhandler.gc.md)

- [PHP Manual](index.md)
- [SessionHandler](class.sessionhandler.md)
- Знищує сесію

# SessionHandler::destroy

(PHP 5 \>u003d 5.4.0, PHP 7, PHP 8)

SessionHandler::destroy — Знищує сесію

### Опис

public **SessionHandler::destroy**(string `$id`): bool

Знищує сесію. Викликається зсередини PHP за допомогою функції
[session_regenerate_id()](function.session-regenerate-id.md)
(мається на увазі, що параметр `$destroy` встановлений у **`true`**,
функції [session_destroy()](function.session-destroy.md) або коли
виклик [session_decode()](function.session-decode.md) невдалий.

Цей метод є обгорткою для внутрішнього обробника PHP,
визначеного в налаштуванні ini-файлу
[session.save_handler](session.configuration.md#ini.session.save-handler),
який встановлюється до обробника викликом
[session_set_save_handler()](function.session-set-save-handler.md).

Якщо цей клас розширюється шляхом успадкування, то виклик батьківського
методу `destroy` виконає код обгортки, а отже код внутрішнього
оброблювача. Це дозволяє методу бути перевизначеним, перехопленим
або відфільтрованим.

Для додаткової інформації дивіться посібник з функції
[SessionHandlerInterface::destroy()](sessionhandlerinterface.destroy.md).

### Список параметрів

`id`
Ідентифікатор сесії, що знищується.

### Значення, що повертаються

Значення сесійного сховища, що повертається (зазвичай **`true`** у випадку
успішного виконання, **`false`** у разі виникнення помилки). Це
значення повертається назад до PHP для внутрішньої обробки.
