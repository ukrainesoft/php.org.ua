- [« header](function.header.md)
- [headers_sent »](function.headers-sent.md)

- [PHP Manual](index.md)
- [Мережні функції](ref.network.md)
- Повертає список переданих заголовків (або готових до відправлення)

#headers_list

(PHP 5, PHP 7, PHP 8)

headers_list — Повертає список переданих заголовків (або готових до
відправці)

### Опис

**headers_list**(): array

Функція **headers_list()** повертає список заголовків, що передаються
браузеру/клієнту. Для того, щоб визначити, чи вже передані
заголовки, використовуйте функцію
[headers_sent()](function.headers-sent.md).

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає нумерований масив заголовків.

### Приклади

**Приклад #1 Приклад використання **headers_list()****

` <?php/* Функція setcookie() додасть заголовок сама по собі */setcookie('foo', 'bar');/* Визначення користувацького заголовка    Це буде про про про ;/* Передача простого текстового контенту */header('Content-Type:text/plain; charsetu003dUTF-8');/* Які заголовки будуть відправлені? */var_dump(headers_list());?> `

Результатом виконання цього прикладу буде щось подібне:

array(3) {
[0]u003d>
string(19) "Set-Cookie: foou003dbar"
[1]u003d>
string(17) "Example-Test: foo"
[2]u003d>
string(39) "Content-Type: text/plain; charsetu003dUTF-8"
}

### Примітки

> **Примітка**:
>
> Доступ до заголовків та їх виведення здійснюватиметься лише у випадку,
> якщо у SAPI є їх підтримка.

### Дивіться також

- [headers_sent()](function.headers-sent.md) - Перевіряє, чи були вони
надіслано заголовки
- [header()](function.header.md) - Надсилання HTTP-заголовка
- [setcookie()](function.setcookie.md) - Надсилає cookie
- [apache_response_headers()](function.apache-response-headers.md) -
Повертає список усіх HTTP-заголовків відповіді Apache
- [http_response_code()](function.http-response-code.md) - Отримує
або встановлює код відповіді HTTP
