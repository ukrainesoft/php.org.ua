- [« Вимоги](pgsql.requirements.md)
- [Налаштування під час виконання »](pgsql.configuration.md)

- [PHP Manual](index.md)
- [Встановлення та налаштування](pgsql.setup.md)
- Встановлення

## Установка

Для того, щоб включити підтримку PostgreSQL, необхідно скомпілювати
PHP з директивою **-with-pgsql\[u003dDIR\]**. Параметр `DIR` визначає
шлях до настановної директорії PostgreSQL, за замовчуванням це
`/usr/local/pgsql`. Якщо доступний динамічний модуль, він може бути
включений директивою [extension](ini.core.md#ini.extension) в `php.ini`,
або функцією [dl()](function.dl.md).
