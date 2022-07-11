- [« SessionIdInterface](class.sessionidinterface.md)
- [SessionUpdateTimestampHandlerInterface
»](class.sessionupdatetimestamphandlerinterface.md)

- [PHP Manual](index.md)
- [SessionIdInterface](class.sessionidinterface.md)
- Створити ідентифікатор сесії

# SessionIdInterface::create_sid

(PHP 5 \>u003d 5.5.1, PHP 7, PHP 8)

SessionIdInterface::create_sid — Створити ідентифікатор сесії

### Опис

public **SessionIdInterface::create_sid**(): string

Створює новий ідентифікатор сесії. Функція автоматично виконується,
коли потрібно створити новий ідентифікатор сесії.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Новий ідентифікатор сесії Зверніть увагу, що це значення
повертається всередині PHP для обробки.

### Дивіться також

- [SessionHandler::create_sid()](sessionhandler.create-sid.md) -
Повертає новий ідентифікатор сесії
