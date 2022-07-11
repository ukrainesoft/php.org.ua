- [« apache_response_headers](function.apache-response-headers.md)
- [getallheaders »](function.getallheaders.md)

- [PHP Manual](index.md)
- [Функції Apache](ref.apache.md)
- Встановлює змінну subprocess_env Apache

#apache_setenv

(PHP 4 \>u003d 4.2.0, PHP 5, PHP 7, PHP 8)

apache_setenv — Встановлює змінну subprocess_env Apache

### Опис

**apache_setenv**(string `$variable`, string `$value`, bool
`$walk_to_top` u003d **`false`**): bool

**apache_setenv()** встановлює значення змінної оточення Apache,
визначеної як `variable`.

> **Примітка**:
>
> У разі встановлення змінної оточення Apache, відповідна їй
> змінна `$_SERVER` не змінюється.

### Список параметрів

`variable`
Змінне оточення, яке потрібно встановити.

`value`
Нове значення змінної `variable`.

`walk_to_top`
Чи робити доступною змінну для всіх рівнів Apache.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **apache_setenv()** для встановлення
змінної оточення Apache.**

` <?phpapache_setenv("EXAMPLE_VAR", "Яке-небудь значення");?> `

### Примітки

> **Примітка**:
>
> **apache_setenv()** можна використовувати разом з
> [apache_getenv()](function.apache-getenv.md) на різних сторінках або
> визначення змінних, які потрібно передати включенням на
> стороні сервера SSI (.shtml), які, у свою чергу, були включені в
> PHP-скрипти.

### Дивіться також

- [apache_getenv()](function.apache-getenv.md) - Повертає
змінну оточення підпроцесу сервера Apache
