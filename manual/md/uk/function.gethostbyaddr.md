- [«fsockopen](function.fsockopen.md)
- [gethostbyname»](function.gethostbyname.md)

- [PHP Manual](index.md)
- [Мережні функції](ref.network.md)
- Отримує доменне ім'я хоста, що відповідає переданій IP-адресі

# gethostbyaddr

(PHP 4, PHP 5, PHP 7, PHP 8)

gethostbyaddr — Отримує доменне ім'я хоста, яке відповідає переданому
IP-адресою

### Опис

**gethostbyaddr**(string `$ip`): string\|false

Повертає доменне ім'я хоста на адресу `ip`.

### Список параметрів

`ip`
IP-адреса хоста

### Значення, що повертаються

Повертає ім'я хоста у разі успішного виконання, вихідний `ip`
у разі виникнення помилки, або **`false`** у разі помилкового введення.

### Приклади

**Приклад #1 Простий приклад використання **gethostbyaddr()****

` <?php$hostname u003d gethostbyaddr($_SERVER['REMOTE_ADDR']);echo $hostname;?> `

### Дивіться також

- [gethostbyname()](function.gethostbyname.md) - Отримує
IPv4-адреса, що відповідає переданому імені хоста
- [gethostbynamel()](function.gethostbynamel.md) - Отримує список
IPv4-адрес, що відповідають переданому доменному імені хоста
