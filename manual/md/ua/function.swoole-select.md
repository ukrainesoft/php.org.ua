- [« swoole_load_module](function.swoole-load-module.md)
- [swoole_set_process_name »](function.swoole-set-process-name.md)

- [PHP Manual](index.md)
- [Функції Swoole](ref.swoole-funcs.md)
- Вибрати описи файлів, які готові до читання/запису або помилки в
цикл подій

# swoole_select

(PECL swoole \>u003d 1.9.0)

swoole_select — Вибрати опис файлів, які готові до читання/запису
або помилки в цикл подій

### Опис

**swoole_select**(
array `&$read_array`,
array `&$write_array`,
array `&$error_array`,
float `$timeout` u003d ?
): int

### Список параметрів

`read_array`

`write_array`

`error_array`

`timeout`

### Значення, що повертаються
