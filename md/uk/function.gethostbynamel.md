- [«gethostbyname](function.gethostbyname.md)
- [gethostname »](function.gethostname.md)

- [PHP Manual](index.md)
- [Мережні функції](ref.network.md)
- Отримує список IPv4-адрес, що відповідають переданому домену
імені хоста

# gethostbynamel

(PHP 4, PHP 5, PHP 7, PHP 8)

gethostbynamel — Отримує список відповідних IPv4-адрес.
переданому доменному імені хоста

### Опис

**gethostbynamel**(string `$hostname`): array\|false

Повертає список IPv4-адрес, у яких дозволяється доменне ім'я хоста
`hostname`.

### Список параметрів

`hostname`
Ім'я хоста.

### Значення, що повертаються

Повертає масив адрес IPv4 або **`false`**, якщо `hostname` не може
бути дозволено.

### Приклади

**Приклад #1 Приклад використання функції **gethostbynamel()****

` <?php$hosts u003d gethostbynamel('www.example.com');print_r($hosts);?> `

Результат виконання цього прикладу:

Array
(
[0] u003d> 192.0.34.166
)

### Дивіться також

- [gethostbyname()](function.gethostbyname.md) - Отримує
IPv4-адреса, що відповідає переданому імені хоста
- [gethostbyaddr()](function.gethostbyaddr.md) - Отримує доменне
ім'я хоста, що відповідає переданій IP-адресі
- [checkdnsrr()](function.checkdnsrr.md) - Перевіряє записи DNS,
відповідні переданому імені вузла Інтернету або IP-адреси
- [getmxrr()](function.getmxrr.md) - Отримує записи MX,
відповідні переданому доменному імені хоста
- the `named(8)` manual page
