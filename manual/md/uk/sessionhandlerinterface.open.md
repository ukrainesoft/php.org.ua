- [« SessionHandlerInterface::gc](sessionhandlerinterface.gc.md)
- [SessionHandlerInterface::read »](sessionhandlerinterface.read.md)

- [PHP Manual](index.md)
- [SessionHandlerInterface](class.sessionhandlerinterface.md)
- Ініціалізує сесію

# SessionHandlerInterface::open

(PHP 5 \>u003d 5.4.0, PHP 7, PHP 8)

SessionHandlerInterface::open — Ініціалізує сесію

### Опис

public **SessionHandlerInterface::open**(string `$path`, string
`$name`): bool

Повторно ініціалізує існуючу сесію чи створює нову.
Викликається коли сесія стартує або коли викликана функція
[session_start()](function.session-start.md).

### Список параметрів

`path`
Шлях, яким зберігається/відновлюється сесія.

`name`
Назва сесії.

### Значення, що повертаються

Значення сесійного сховища, що повертається (зазвичай **`true`** у випадку
успішного виконання, **`false`** у разі виникнення помилки). Це
значення повертається назад до PHP для внутрішньої обробки.

### Дивіться також

- [session_name()](function.session-name.md) - Отримати або
встановити ім'я поточної сесії
- Опція конфігурації
[session.auto-start](session.configuration.md#ini.session.auto-start)
