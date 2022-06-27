- [« Установка](swoole.installation.md)
- [Типи ресурсів»] (swoole.resources.md)

- [PHP Manual](index.md)
- [Встановлення та налаштування](swoole.setup.md)
- Налаштування під час виконання

## Налаштування під час виконання

Поведінка цих функцій залежить від установок `php.ini`.

| Ім'я За замовчуванням | Місце зміни | Список змін |
|------------------------------------------------- -------------------------------------------------- -----|--------------|-----------------|----------- -----------------------|
| [swoole.aio_thread_num](swoole.configuration.md#ini.swoole.aio-thread-num) | 2 | PHP_INI_ALL | |
| [swoole.display_errors](swoole.configuration.md#ini.swoole.display-errors) | On | PHP_INI_ALL | |
| [swoole.fast_serialize](swoole.configuration.md#ini.swoole.fast-serialize) | Off | PHP_INI_ALL | |
| [swoole.unixsock_buffer_size](swoole.configuration.md#ini.swoole.unixsock-buffer-size) | 8388608 | PHP_INI_ALL | |
| [swoole.use_namespace](swoole.configuration.md#ini.swoole.use-namespace) | On | PHP_INI_SYSTEM | |
| [swoole.enable_coroutine](swoole.configuration.md#ini.swoole.enable-coroutine) | On | PHP_INI_ALL | Доступно починаючи з swoole 4.0.0 |
| [swoole.use_shortname](swoole.configuration.md#ini.swoole.use-shortname) | On | PHP_INI_ALL | Доступно починаючи з swoole 4.0.0 |
| [swoole.enable_preemptive_scheduler](swoole.configuration.md#ini.swoole.enable-preemptive-scheduler) | Off | PHP_INI_ALL | Доступно починаючи з swoole 4.4.0 |
| [swoole.enable_library](swoole.configuration.md#ini.swoole.enable-library) | On | PHP_INI_ALL | Доступно починаючи з swoole 4.0.0 |

**Опції налаштування Swoole**

Коротке пояснення конфігураційних директив.

`swoole.aio_thread_num` int
Номер потоку асинхронного введення/виводу POSIX

`swoole.display_errors` string
Визначає, чи помилки Swoole повинні виводитися на екран.

`swoole.fast_serialize` string
Визначає, чи включати Swoole fast_serialize.

`swoole.unixsock_buffer_size` int
Розмір буфера сокету Unix.

`swoole.use_namespace` string
Визначає, чи використовувати простір імен PHP.

`swoole.enable_coroutine` string
Визначає, чи включати співпрограму

`swoole.use_shortname` string
Визначає, чи включати короткі псевдоніми

`swoole.enable_preemptive_scheduler` string
Визначає, чи включати витісняючий планувальник

`swoole.enable_library` string
Визначає, чи включати бібліотеку
