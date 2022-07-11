- [«apache_note](function.apache-note.md)
- [apache_response_headers »](function.apache-response-headers.md)

- [PHP Manual](index.md)
- [Функції Apache](ref.apache.md)
- Отримує список усіх заголовків HTTP-запиту

#apache_request_headers

(PHP 4 \>u003d 4.3.0, PHP 5, PHP 7, PHP 8)

apache_request_headers — Отримує список усіх заголовків HTTP-запиту

### Опис

**apache_request_headers**(): array

Отримує список усіх заголовків HTTP поточного запиту. Працює на
веб-серверах Apache та FastCGI.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Асоціативний масив, що містить усі HTTP-заголовки поточного запиту,
або **`false`** у разі виникнення помилки.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- |
| 7.3.0 | Ця функція стала доступною у SAPI FPM. |

### Приклади

**Приклад #1 Приклад використання **apache_request_headers()****

` <?php$headers u003d apache_request_headers();foreach ($headers as $header u003d> $value) {    echo "$header: $value <br />
";}?> `

Результатом виконання цього прикладу буде щось подібне:

Accept: */*
Accept-Language: en-us
Accept-Encoding: gzip, deflate
User-Agent: Mozilla/4.0
Host: www.example.com
Connection: Keep-Alive

### Примітки

> **Примітка**:
>
> Також можна отримати значення широко використовуваних CGI-змінних,
> отримавши їх із оточення сервера; це працює незалежно від того,
> встановлений PHP як модуль Apache чи ні. Для того щоб
> отримати список усіх доступних [змінних
> оточення](language.variables.predefined.md), використовуйте функцію
> [phpinfo()](function.phpinfo.md).

### Дивіться також

- [apache_response_headers()](function.apache-response-headers.md) -
Повертає список усіх HTTP-заголовків відповіді Apache
