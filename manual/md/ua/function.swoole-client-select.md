- [« swoole_clear_error](function.swoole-clear-error.md)
- [swoole_cpu_num »](function.swoole-cpu-num.md)

- [PHP Manual](index.md)
- [Функції Swoole](ref.swoole-funcs.md)
- Отримати опис файлу, готового до читання/запису чи помилки

# swoole_client_select

(PECL swoole \>u003d 1.9.0)

swoole_client_select — Отримати опис, готовий до читання/запису
чи помилці

### Опис

**swoole_client_select**(
array `&$read_array`,
array `&$write_array`,
array `&$error_array`,
float `$timeout` u003d 0.5
): int

### Список параметрів

`read_array`

`write_array`

`error_array`

`timeout`

### Значення, що повертаються
