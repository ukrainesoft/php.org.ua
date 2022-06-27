- [« SessionHandler::destroy](sessionhandler.destroy.md)
- [SessionHandler::open »](sessionhandler.open.md)

- [PHP Manual](index.md)
- [SessionHandler](class.sessionhandler.md)
- Очищає старі сесії

# SessionHandler::gc

(PHP 5 \>u003d 5.4.0, PHP 7, PHP 8)

SessionHandler::gc — Очищає старі сесії

### Опис

public **SessionHandler::gc**(int `$max_lifetime`): int\|false

Очищає сесії з терміном життя. Викликається випадковим чином
зсередини PHP коли сесія стартує або коли викликана функція
[session_start()](function.session-start.md). Частота, з якою вона
викликається, що базується на значенні параметрів конфігурації
[session.gc_divisor](session.configuration.md#ini.session.gc-divisor)
і
[session.gc_probability](session.configuration.md#ini.session.gc-probability).

Цей метод обертає внутрішній обробник сесії, визначений у
налаштування ini-файлу
[session.save_handler](session.configuration.md#ini.session.save-handler)
який встановлюється перед тим, як визначається даний обробник
функції
[session_set_save_handler()](function.session-set-save-handler.md).

Якщо цей клас розширюється шляхом успадкування, виклик батьківського
методу `gc` виконає код обгортки для цього методу, а також внутрішній
обробник. Це дозволить методу бути перевизначеним, або перехопленим
та відфільтрованим.

Для додаткової інформації про те, що очікується від цього
методу дивіться документацію за методом
[SessionHandlerInterface::gc()](sessionhandlerinterface.gc.md).

### Список параметрів

`max_lifetime`
Сесії, які не були оновлені протягом останніх `max_lifetime`
секунд віддаляються.

### Значення, що повертаються

У разі успішного виконання повертає кількість віддалених сесій або
**`false`** у разі виникнення помилки. Зверніть увагу, що це
значення повертається всередину PHP для обробки.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- ------------------------------------------|
| 7.1.0 | До цієї версії, у разі успішного виконання, ця функція повертала **`true`**. |
