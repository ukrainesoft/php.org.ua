- [« socket_addrinfo_connect](function.socket-addrinfo-connect.md)
- [socket_addrinfo_lookup »](function.socket-addrinfo-lookup.md)

- [PHP Manual](index.md)
- [Функції сокету](ref.sockets.md)
- Отримати інформацію про addrinfo

# socket_addrinfo_explain

(PHP 7 \>u003d 7.2.0, PHP 8)

socket_addrinfo_explain — Отримати інформацію про addrinfo

### Опис

**socket_addrinfo_explain**([AddressInfo](class.addressinfo.md)
`$address`): array

Функція **socket_addrinfo_explain()** надає доступ до базової
структурі `addrinfo`.

### Список параметрів

`address`
Примірник [AddressInfo](class.addressinfo.md), створений за допомогою
[socket_addrinfo_lookup()](function.socket-addrinfo-lookup.md)

### Значення, що повертаються

Повертає масив, що містить поля у структурі `addrinfo`.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- ---------------|
| 8.0.0 | `address` тепер екземпляр класу [AddressInfo](class.addressinfo.md); раніше був ресурсом (resource). |

### Дивіться також

- [socket_addrinfo_bind()](function.socket-addrinfo-bind.md) -
Створити та прив'язати до сокету із зазначеного addrinfo
- [socket_addrinfo_connect()](function.socket-addrinfo-connect.md) -
Створити та підключитися до сокету із вказаного addrinfo
- [socket_addrinfo_lookup()](function.socket-addrinfo-lookup.md) -
Отримати масив з вмістом getaddrinfo про вказане ім'я хоста
