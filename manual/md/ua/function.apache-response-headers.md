- [« apache_request_headers](function.apache-request-headers.md)
- [apache_setenv »](function.apache-setenv.md)

- [PHP Manual](index.md)
- [Функції Apache](ref.apache.md)
- Повертає список усіх HTTP-заголовків відповіді Apache

#apache_response_headers

(PHP 4 \>u003d 4.3.0, PHP 5, PHP 7, PHP 8)

apache_response_headers — Повертає список усіх заголовків HTTP відповіді
Apache

### Опис

**apache_response_headers**(): array\|false

Повертає список усіх заголовків HTTP. Працює на веб-серверах Apache
та FastCGI.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Масив HTTP-заголовків відповіді Apache у разі успішного виконання або
**`false`** у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **apache_response_headers()****

` <?phpprint_r(apache_response_headers());?> `

Результатом виконання цього прикладу буде щось подібне:

Array
(
[Accept-Ranges] u003d> bytes
[X-Powered-By] u003d> PHP/4.3.8
)

### Дивіться також

- [apache_request_headers()](function.apache-request-headers.md) -
Отримує список усіх заголовків HTTP-запиту
- [headers_sent()](function.headers-sent.md) - Перевіряє, чи були вони
надіслано заголовки
- [headers_list()](function.headers-list.md) - Повертає список
переданих заголовків (або готових до відправлення)
