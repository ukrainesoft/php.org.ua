- [« apache_setenv](function.apache-setenv.md)
- [virtual »] (function.virtual.md)

- [PHP Manual](index.md)
- [Функції Apache](ref.apache.md)
- Повертає всі заголовки HTTP-запиту

# getallheaders

(PHP 4, PHP 5, PHP 7, PHP 8)

getallheaders — Повертає всі заголовки HTTP-запиту

### Опис

**getallheaders**(): array

Повертає всі заголовки для поточного запиту HTTP.

Ця функція є псевдонімом функції
[apache_request_headers()](function.apache-request-headers.md).
Будь ласка, зверніться до опису функції
[apache_request_headers()](function.apache-request-headers.md) для
отримання детальної інформації щодо її роботи.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Асоціативний масив, що містить усі HTTP-заголовки для цього запиту
або **`false`** у разі виникнення помилок.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- |
| 7.3.0 | Ця функція стала доступною у SAPI FPM. |

### Приклади

**Приклад #1 Приклад використання **getallheaders()****

` <?phpforeach (getallheaders() as $name u003d> $value) {   echo "$name: $value
";}?> `

### Дивіться також

- [apache_response_headers()](function.apache-response-headers.md) -
Повертає список усіх HTTP-заголовків відповіді Apache
