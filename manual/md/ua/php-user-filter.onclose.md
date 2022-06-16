- [« php_user_filter::filter](php-user-filter.filter.md)
- [php_user_filter::onCreate »](php-user-filter.oncreate.md)

- [PHP Manual](index.md)
- [php_user_filter](class.php-user-filter.md)
- Викликається під час закриття фільтра

# php_user_filter::onClose

(PHP 5, PHP 7, PHP 8)

php_user_filter::onClose — Закриється фільтр

### Опис

public **php_user_filter::onClose**(): void

Цей метод викликається, коли фільтр завершує роботу (зазвичай разом із
закриттям потоку), і виконується *після* виклику методу `flush`. Якщо
будь-які ресурси були виділені під час виконання методу
`onCreate()`, то це час, коли їх час знищувати.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Значення, що повертається, ігнорується.
