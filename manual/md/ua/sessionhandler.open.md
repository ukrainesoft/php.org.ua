- [« SessionHandler::gc](sessionhandler.gc.md)
- [SessionHandler::read »](sessionhandler.read.md)

- [PHP Manual](index.md)
- [SessionHandler](class.sessionhandler.md)
- Ініціалізує сесію

# SessionHandler::open

(PHP 5 \>u003d 5.4.0, PHP 7, PHP 8)

SessionHandler::open — Ініціалізує сесію

### Опис

public **SessionHandler::open**(string `$path`, string `$name`): bool

Створює нову сесію або повторно ініціалізує існуючу.
Викликається зсередини PHP коли сесія стартує автоматично або
за допомогою виклику функції
[session_start()](function.session-start.md).

Цей метод є обгорткою для внутрішнього обробника PHP
визначеного в налаштуванні ini-файлу
[session.save_handler](session.configuration.md#ini.session.save-handler),
який встановлюється до визначення обробника викликом функції
[session_set_save_handler()](function.session-set-save-handler.md).

Якщо цей клас розширюється шляхом успадкування, виклик батьківського
методу `open` виконає код обгортки для цього методу, а також внутрішній
обробник. Це дозволить методу бути перевизначеним, або перехопленим
та відфільтрованим.

Для додаткової інформації про те, що очікується від цього
методу дивіться документацію за методом
[SessionHandlerInterface::open()](sessionhandlerinterface.open.md).

### Список параметрів

`path`
Шлях яким зберігається/відновлюється сесія.

`name`
Назва сесії.

### Значення, що повертаються

Значення сесійного сховища, що повертається (зазвичай **`true`** у випадку
успішного виконання, **`false`** у разі виникнення помилки). Це
значення повертається назад до PHP для внутрішньої обробки.

### Дивіться також

- Опція конфігурації
[session.auto-start](session.configuration.md#ini.session.auto-start)
