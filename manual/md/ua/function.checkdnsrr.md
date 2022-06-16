- [«Мережеві функції](ref.network.md)
- [closelog »] (function.closelog.md)

- [PHP Manual](index.md)
- [Мережні функції](ref.network.md)
- Перевіряє записи DNS, що відповідають переданому імені вузла
Інтернету або IP-адреси

# checkdnsrr

(PHP 4, PHP 5, PHP 7, PHP 8)

checkdnsrr — Перевірка записів DNS, які відповідають переданому імені
вузла Інтернету або IP-адреси

### Опис

**checkdnsrr**(string `$hostname`, string `$type` u003d "MX"): bool

Шукає записи DNS типу `type`, що відповідають `hostname`.

### Список параметрів

`hostname`
Параметр `hostname` може бути IP-адресою у вигляді чотирьох десяткових
чисел, розділених крапками, або ім'ям вузла.

`type`
Параметр `type` може бути одним з: A, MX, NS, SOA, PTR, CNAME, AAAA,
A6, SRV, NAPTR, TXT чи ANY.

### Значення, що повертаються

Повертає **`true`**, якщо було знайдено записи; повертає **`false`**,
якщо записів не було знайдено або сталася помилка.

### Примітки

> **Примітка**:
>
> Для сумісності з попередніми версіями PHP під Windows, де не
> було реалізації цієї функції, використовуйте клас
> [»PEAR](https://pear.php.net/)
> [»Net_DNS](https://pear.php.net/package/Net_DNS).

### Дивіться також

- [dns_get_record()](function.dns-get-record.md) - Отримання
ресурсних записів DNS хоста
- [getmxrr()](function.getmxrr.md) - Отримує записи MX,
відповідні переданому доменному імені хоста
- [gethostbyaddr()](function.gethostbyaddr.md) - Отримує доменне
ім'я хоста, що відповідає переданій IP-адресі
- [gethostbyname()](function.gethostbyname.md) - Отримує
IPv4-адреса, що відповідає переданому імені хоста
- [gethostbynamel()](function.gethostbynamel.md) - Отримує список
IPv4-адрес, що відповідають переданому доменному імені хоста
- сторінка керівництва named(8)
