- [«gethostbyaddr](function.gethostbyaddr.md)
- [gethostbynamel »](function.gethostbynamel.md)

- [PHP Manual](index.md)
- [Мережні функції](ref.network.md)
- Отримує IPv4-адресу, що відповідає переданому імені хоста

# gethostbyname

(PHP 4, PHP 5, PHP 7, PHP 8)

gethostbyname — Отримує IPv4-адресу, що відповідає переданому імені
хоста

### Опис

**gethostbyname**(string `$hostname`): string

Повертає IPv4-адресу на ім'я хоста `hostname`.

### Список параметрів

`hostname`
Ім'я вузла.

### Значення, що повертаються

Повертає адресу IPv4 або рядок, що містить незмінений `hostname` в
у разі виникнення помилки.

### Приклади

**Приклад #1 Простий приклад використання **gethostbyname()****

` <?php$ip u003d gethostbyname('www.example.com');echo $ip;?> `

### Дивіться також

- [gethostbyaddr()](function.gethostbyaddr.md) - Отримує доменне
ім'я хоста, що відповідає переданій IP-адресі
- [gethostbynamel()](function.gethostbynamel.md) - Отримує список
IPv4-адрес, що відповідають переданому доменному імені хоста
- [inet_pton()](function.inet-pton.md) - Конвертує читаний
IP-адреса в його упаковані in_addr
- [inet_ntop()](function.inet-ntop.md) - Конвертує упакований
інтернет-адреса в формат, що читається
