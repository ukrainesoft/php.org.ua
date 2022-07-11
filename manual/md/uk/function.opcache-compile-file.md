- [« Функції OPcache](ref.opcache.md)
- [opcache_get_configuration
»](function.opcache-get-configuration.md)

- [PHP Manual](index.md)
- [Функції OPcache](ref.opcache.md)
- Скомпілювати та закешувати, але не виконувати скрипт PHP

# opcache_compile_file

(PHP 5 \>u003d 5.5.5, PHP 7, PHP 8, PECL ZendOpcache \> 7.0.2)

opcache_compile_file — Скомпілювати та закешувати, але не виконувати
скрипт PHP

### Опис

**opcache_compile_file**(string `$filename`): bool

Ця функція компілює PHP-скрипт і поміщає його в кеш опкодів, але не
запускає його. Можна використовувати для прогрівання кеша після перезапуску
веб-сервер.

### Список параметрів

`filename`
Шлях до сценарію PHP.

### Значення, що повертаються

Повертає **`true`**, якщо `filename` успішно скомпільовано або
**`false`** у разі виникнення помилки.

### Помилки

Якщо `filename` не може бути завантажений або скомпілюваний, буде видано
помилка рівня **`E_WARNING`**. Для придушення попередження можна
використовувати [@](language.operators.errorcontrol.md).

### Дивіться також

- [opcache_invalidate()](function.opcache-invalidate.md) -
Анулює закешований скрипт
