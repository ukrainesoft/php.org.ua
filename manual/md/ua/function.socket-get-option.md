- [« socket_export_stream](function.socket-export-stream.md)
- [socket_getopt »](function.socket-getopt.md)

- [PHP Manual](index.md)
- [Функції сокету](ref.sockets.md)
- Отримує опції потоку для сокету

# socket_get_option

(PHP 4 \>u003d 4.3.0, PHP 5, PHP 7, PHP 8)

socket_get_option — Отримує опції потоку для сокету

### Опис

**socket_get_option**([Socket](class.socket.md) `$socket`, int
`$level`, int `$option`): array\|int\|false

Функція **socket_get_option()** отримує значення для опції, вказаної
параметром `option` для заданого `socket`.

### Список параметрів

`socket`
Примірник [Socket](class.socket.md), створений за допомогою
[socket_create()](function.socket-create.md) або
[socket_accept()](function.socket-accept.md).

`level`
Параметр `level` вказує рівень протоколу, на якому знаходиться
опція. Наприклад, для отримання опцій на рівні сокету, повинен
використовувати параметр `level`, що дорівнює **`SOL_SOCKET`**. Інші рівні,
такі як **`TCP`**, можна використовувати, вказавши номер протоколу цього
рівня. Номери протоколів можна знайти за допомогою функції
[getprotobyname()](function.getprotobyname.md).

`option`
[TABLE]

**Доступні опції сокету**

### Значення, що повертаються

Повертає значення заданої опції або **`false`** у разі
виникнення помилки.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- ----|
| 8.0.0 | `socket` тепер екземпляр класу [Socket] (class.socket.md); раніше був ресурсом (resource). |

### Приклади

**Приклад #1 Приклад використання **socket_get_option()****

` <?php$socket u003d socket_create_listen(1223);$linger u003d array('l_linger' u003d> 1, 'l_onoff' u003d> 1);socket_set_option($socket, SOL_SOCKET, SO_LING socket, SOL_SOCKET, SO_REUSEADDR));?> `

### Дивіться також

- [socket_create_listen()](function.socket-create-listen.md) -
Відкриває сокет на вказаному порту для прийняття з'єднань
- [socket_set_option()](function.socket-set-option.md) -
Встановлює опції для сокету
