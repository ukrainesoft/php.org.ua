- [« socket_addrinfo_explain](function.socket-addrinfo-explain.md)
- [socket_bind »](function.socket-bind.md)

- [PHP Manual](index.md)
- [Функції сокету](ref.sockets.md)
- Отримати масив з вмістом getaddrinfo про вказане ім'я хоста

# socket_addrinfo_lookup

(PHP 7 \>u003d 7.2.0, PHP 8)

socket_addrinfo_lookup — Отримати масив із вмістом getaddrinfo про
вказане ім'я хоста

### Опис

**socket_addrinfo_lookup**(string `$host`, ?string `$service` u003d
**`null`**, array `$hints` u003d \[\]): array\|false

Пошук різних способів підключення до хоста (host). Повертається
масив містить набір екземплярів [AddressInfo](class.addressinfo.md),
які можна прив'язати за допомогою
[socket_addrinfo_bind()](function.socket-addrinfo-bind.md).

### Список параметрів

`host`
Ім'я хоста для пошуку.

`service`
Сервіс для підключення Якщо сервіс є ім'ям, він перетворюється на
відповідний номер порту.

`hints`
Підказки надають критерії вибору адрес, що повертаються. Ви можете
вказати підказки, як визначено getadrinfo.

### Значення, що повертаються

Повертає масив екземплярів [AddressInfo](class.addressinfo.md),
які можна використовувати із іншими функціями socket_addrinfo. В разі
виникнення помилки повертає **`false`**.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- -------------------------------------------------- -----|
| 8.0.0 | У разі успішного виконання функція повертає масив екземплярів [AddressInfo](class.addressinfo.md); раніше повертався ресурс (resource). |
| 8.0.0 | `service` тепер допускає значення null. |

### Дивіться також

- [socket_addrinfo_bind()](function.socket-addrinfo-bind.md) -
Створити та прив'язати до сокету із зазначеного addrinfo
- [socket_addrinfo_connect()](function.socket-addrinfo-connect.md) -
Створити та підключитися до сокету із вказаного addrinfo
- [socket_addrinfo_explain()](function.socket-addrinfo-explain.md) -
Отримати інформацію про addrinfo
