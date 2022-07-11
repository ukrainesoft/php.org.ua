- [« Установка](stomp.installation.md)
- [Типи ресурсів»] (stomp.resources.md)

- [PHP Manual](index.md)
- [Встановлення та налаштування](stomp.setup.md)
- Налаштування під час виконання

## Налаштування під час виконання

Поведінка цих функцій залежить від установок `php.ini`.

| Ім'я За замовчуванням | Місце зміни | Список змін |
|------------------------------------------------- -------------------------------------------------- ----------|-----------------------|--------------- --|------------------|
| [stomp.default_broker](stomp.configuration.md#ini.stomp.default-broker) | tcp://localhost:61613 | PHP_INI_ALL | |
| [stomp.default_connection_timeout_sec](stomp.configuration.md#ini.stomp.default-connection-timeout-sec) | 2 | PHP_INI_ALL | |
| [stomp.default_connection_timeout_usec](stomp.configuration.md#ini.stomp.default-connection-timeout-usec) | 0 | PHP_INI_ALL | |
| [stomp.default_read_timeout_sec](stomp.configuration.md#ini.stomp.default-read-timeout-sec) | 2 | PHP_INI_ALL | |
| [stomp.default_read_timeout_usec](stomp.configuration.md#ini.stomp.default-read-timeout-usec) | 0 | PHP_INI_ALL | |

**Опції налаштування**

Коротке пояснення конфігураційних директив.

`stomp.default_broker` string
Брокер URI за замовчуванням, який використовується при підключенні до брокера
повідомлень, якщо інші URI не вказані.

`stomp.default_connection_timeout_sec` int
Секундна частина часу очікування підключення за промовчанням.

`stomp.default_connection_timeout_usec` int
Мікросекундна частина часу очікування підключення за замовчуванням.

`stomp.default_read_timeout_sec` int
Секундна частина часу очікування зчитування за промовчанням.

`stomp.default_read_timeout_usec` int
Мікросекундна частина часу очікування за промовчанням.
