- [«radius_acct_open](function.radius-acct-open.md)
- [radius_auth_open »](function.radius-auth-open.md)

- [PHP Manual](index.md)
- [Функції Radius](ref.radius.md)
- Додає сервер

#radius_add_server

(PECL radius \>u003d 1.1.0)

radius_add_server — Додає сервер

### Опис

**radius_add_server**(
resource `$radius_handle`,
string `$hostname`,
int `$port`,
string `$secret`,
int `$timeout`,
int `$max_tries`
): bool

**radius_add_server()** може викликатися кілька разів і може
використовуватись разом з [radius_config()](function.radius-config.md).
Можна вказати трохи більше 10 серверів. Коли задано кілька серверів, вони
перевіряються циклічно, доки не буде отримана дійсна відповідь або
поки не буде досягнуто межі `max_tries` для кожного сервера.

### Список параметрів

`radius_handle`

`hostname`
Параметр `hostname` вказує хост сервера у вигляді повного домену
імені або IP-адреси, розділеної крапками, у текстовому вигляді.

`port`
`port` вказує UDP-порт для зв'язку на сервері. Якщо порт заданий як 0,
бібліотека шукає сервіс `radius/udp` або `radacct/udp` у базі даних
мережевих сервісів і використовує знайдений там порт. Якщо запис не
знайдено, бібліотека використовує стандартні порти Radius, 1812 для
автентифікації та 1813 для обліку.

`secret`
Загальний секрет для хоста сервера передається у параметрі `secret`. Протокол
Radius ігнорує все, окрім перших 128 байтів загального секрету.

`timeout`
Час очікування на отримання відповідей від сервера передається у параметрі
`timeout` за секунди.

`max_tries`
Максимальна кількість повторних запитів, які потрібно зробити перед
відмовою, передається в `max_tries`.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **radius_add_server()****

` <?phpif (!radius_add_server($res, 'radius.example.com', 1812, 'testing123', 3, 3)) {   echo 'RadiusError:' . radius_strerror($res). "
<br>";  exit;}?> `

### Дивіться також

- [radius_config()](function.radius-config.md) - Примушує
бібліотеку читати цей файл конфігурації
