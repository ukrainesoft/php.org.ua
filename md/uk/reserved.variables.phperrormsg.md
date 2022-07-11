- [«$\_COOKIE](reserved.variables.cookies.md)
- [$http_response_header
»](reserved.variables.httpresponseheader.md)

- [PHP Manual](index.md)
- [Предвизначені змінні](reserved.variables.md)
- Попереднє повідомлення про помилку

# $php_errormsg

(PHP 4, PHP 5, PHP 7)

$php_errormsg — Попереднє повідомлення про помилку

**Увага**

Ця функціональність оголошена *ЗАСТАРЛЕННОЮ*, починаючи з PHP 7.2.0 та її
Вкрай не рекомендується використовувати.

Використовуйте [error_get_last()](function.error-get-last.md).

### Опис

`$php_errormsg` є змінною, що містить текст останньої помилки,
згенерованої PHP. Ця змінна буде доступна лише у блоці коду,
в якому трапилася помилка, і лише якщо включена конфігураційна
опція [track_errors](errorfunc.configuration.md#ini.track-errors) (по
замовчуванням вимкнено).

**Увага**

Якщо налаштований користувальницький обробник помилок
([set_error_handler()](function.set-error-handler.md)), то
`$php_errormsg` встановлюється лише в тому випадку, якщо обробник
помилки повертає **`false`**.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- -------------------------------------------------- -------------|
| 8.0.0 | Директиву [track_errors](errorfunc.configuration.md#ini.track-errors), через яку стає доступним `$php_errormsg`, було видалено. |
| 7.2.0 | Директива [track_errors](errorfunc.configuration.md#ini.track-errors), через яку стає доступним `$php_errormsg`, була оголошена застарілою. |

### Приклади

**Приклад #1 Приклад використання `$php_errormsg`**

` <?php@strpos();echo $php_errormsg;?> `

Результатом виконання цього прикладу буде щось подібне:

Wrong parameter count for strpos()

### Дивіться також

- [error_get_last()](function.error-get-last.md) - Отримання
інформації про останню помилку
