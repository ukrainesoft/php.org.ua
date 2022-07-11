- [«inet_pton](function.inet-pton.md)
- [long2ip »](function.long2ip.md)

- [PHP Manual](index.md)
- [Мережні функції](ref.network.md)
- Конвертує рядок, що містить IPv4-адресу в ціле число

# ip2long

(PHP 4, PHP 5, PHP 7, PHP 8)

ip2long — Конвертує рядок, що містить IPv4-адресу в ціле число

### Опис

**ip2long**(string `$ip`): int\|false

Функція **ip2long()** перетворює IPv4-адресу мережі Інтернет з
стандартного формату (рядок з точками) у ціле число.

Функція **ip2long()** також працюватиме з неповними IP-адресами.
Дивіться
[»http://publibn.boulder.ibm.com/doc_link/en_US/a_doc_lib/libs/commtrf2/inet_addr.htm](http://publibn.boulder.ibm.com/doc_link/en_US/a_doc_lib/libs/commtrf2 /inet_addr.htm)
для більш детальної інформації.

### Список параметрів

`ip`
Адреса у стандартному форматі.

### Значення, що повертаються

Повертає ціле число або **`false`**, якщо параметр `ip` містить
помилку.

### Приклади

**Приклад #1 Приклад використання **ip2long()****

` <?php$ip u003d gethostbyname('www.example.com');$out u003d "Наступні URL еквівалентні:<br />
";$out .u003d 'http://www.example.com/, http://' . $ip . '/, і http://' . sprintf("%u", ip2long($ip)) . "/<br />
";echo $out;?> `

**Приклад #2 Відображення IP-адрес**

Другий приклад показує як виводити конвертовані адреси за допомогою
функції [printf()](function.printf.md):

`<?php$ip   u003d gethostbyname('www.example.com');$long u003d ip2long($ip);if ($long u003du003d -1 || $long u003du003du003d FALSE) {    echo ''Невірний адресу, спробуйте ще раз';} else {    echo $ip   . "
";              // 192.0.34.166    echo $long . "
";              // -1073732954    printf("%u
", ip2long($ip)); // 3221234342}?> `

### Примітки

> **Примітка**:
>
> З огляду на те, що тип PHP int є знаковим, і на 32-бітових системах
> багато IP-адрес будуть представлені у вигляді негативних чисел,
> необхідно використовувати %u у функції
> [sprintf()](function.sprintf.md) або
> [printf()](function.printf.md) для отримання IP-адреси в рядковому
> беззнаковому вигляді.

> **Примітка**:
>
> Функція **ip2long()** поверне `-1` для IP `255.255.255.255` в
> 32-бітових системах через цілісне переповнення.

### Дивіться також

- [long2ip()](function.long2ip.md) - Конвертує ціле число в
IPv4-адреса
- [sprintf()](function.sprintf.md) - Повертає відформатовану
рядок
