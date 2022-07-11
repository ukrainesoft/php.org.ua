- [«socket_accept](function.socket-accept.md)
- [socket_addrinfo_connect »](function.socket-addrinfo-connect.md)

- [PHP Manual](index.md)
- [Функції сокету](ref.sockets.md)
- Створити та прив'язати до сокету із зазначеного addrinfo

# socket_addrinfo_bind

(PHP 7 \>u003d 7.2.0, PHP 8)

socket_addrinfo_bind — Створити та прив'язати до сокету із зазначеного
addrinfo

### Опис

**socket_addrinfo_bind**([AddressInfo](class.addressinfo.md)
`$address`): [Socket](class.socket.md)\|false

Створити екземпляр [Socket](class.socket.md) та прив'язати його з
наданим [AddressInfo](class.addressinfo.md). Повертається
значення цієї функції може використовуватися з
[socket_listen()](function.socket-listen.md).

### Список параметрів

`address`
Примірник [AddressInfo](class.addressinfo.md), створений за допомогою
[socket_addrinfo_lookup()](function.socket-addrinfo-lookup.md).

### Значення, що повертаються

Повертає екземпляр [Socket](class.socket.md) у разі успішного
виконання або **`false`** у разі виникнення помилки.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- ------------------------------------|
| 8.0.0 | У разі успішного виконання, функція повертає екземпляр [Socket](class.socket.md); раніше повертався ресурс (resource). |
| 8.0.0 | `address` тепер екземпляр класу [AddressInfo](class.addressinfo.md); раніше був ресурсом (resource). |

### Дивіться також

- [socket_addrinfo_connect()](function.socket-addrinfo-connect.md) -
Створити та підключитися до сокету із вказаного addrinfo
- [socket_addrinfo_explain()](function.socket-addrinfo-explain.md) -
Отримати інформацію про addrinfo
- [socket_addrinfo_lookup()](function.socket-addrinfo-lookup.md) -
Отримати масив з вмістом getaddrinfo про вказане ім'я хоста
- [socket_listen()](function.socket-listen.md) - Прослуховує
вхідні з'єднання на сокеті
