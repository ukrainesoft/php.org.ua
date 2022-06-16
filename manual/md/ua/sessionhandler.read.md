- [« SessionHandler::open](sessionhandler.open.md)
- [SessionHandler::write »](sessionhandler.write.md)

- [PHP Manual](index.md)
- [SessionHandler](class.sessionhandler.md)
- Зчитує дані сесії

# SessionHandler::read

(PHP 5 \>u003d 5.4.0, PHP 7, PHP 8)

SessionHandler::read — Зчитує дані сесії

### Опис

public **SessionHandler::read**(string `$id`): string\|false

Зчитує дані сесії зі сховища та повертає результат назад у
PHP для внутрішньої обробки. Цей метод викликається автоматично.
PHP стартує сесію (або автоматично або безпосередньо викликом
[session_start()](function.session-start.md) з наступним викликом
[SessionHandler::open()](sessionhandler.open.md).

Цей метод є обертанням внутрішнього обробника PHP, визначеного
у параметрі ini-файлу
[session.save_handler](session.configuration.md#ini.session.save-handler)
який встановлюється до того, як буде визначено оброблювач сесії
викликом
[session_set_save_handler()](function.session-set-save-handler.md).

Якщо цей клас розширено шляхом успадкування, виклик батьківського методу
`read` викликає обгортку для цього методу і, відповідно, виклик
внутрішнього оброблювача. Це дозволяє методу бути перевантаженим та/або
перехоплені та відфільтровані (наприклад для розшифровки, значення
параметра `$ data`, яке повертає батьківський метод `read`).

Для додаткової інформації дивіться документацію методом
[SessionHandlerInterface::read()](sessionhandlerinterface.read.md).

### Список параметрів

`id`
Ідентифікатор сесії, з якої необхідно рахувати дані.

### Значення, що повертаються

Повертає зашифрований рядок лічених даних. Якщо нічого не
вважається, що повертається **`false`**. Зверніть увагу, що це значення
повертається до PHP для внутрішньої обробки.

### Дивіться також

- Директива налаштування
[session.serialize_handler](session.configuration.md#ini.session.serialize-handler).
