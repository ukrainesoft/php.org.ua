- [«opcache_compile_file](function.opcache-compile-file.md)
- [opcache_get_status »](function.opcache-get-status.md)

- [PHP Manual](index.md)
- [Функції OPcache](ref.opcache.md)
- Отримати конфігураційну інформацію кешу

# opcache_get_configuration

(PHP 5 \>u003d 5.5.0, PHP 7, PHP 8, PECL ZendOpcache \> 7.0.2)

opcache_get_configuration — Отримати конфігураційну інформацію кеша

### Опис

**opcache_get_configuration**(): array\|false

Ця функція повертає конфігураційні установки екземпляра кеша.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає масив з інформацією, включаючи INI-налаштування, чорний список та
версію

### Помилки

Якщо використовується `opcache.restrict_api` та поточний шлях підпадає під
заборона, то буде викликана помилка рівня E_WARNING та жодних даних
повернуто не буде.

### Дивіться також

- [opcache_get_status()](function.opcache-get-status.md) - Отримати
інформацію про стан кешу
