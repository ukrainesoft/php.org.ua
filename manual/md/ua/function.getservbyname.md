- [«getprotobynumber](function.getprotobynumber.md)
- [getservbyport »](function.getservbyport.md)

- [PHP Manual](index.md)
- [Мережні функції](ref.network.md)
- Отримує номер порту, пов'язаного з інтернет-службою та протоколом

#getservbyname

(PHP 4, PHP 5, PHP 7, PHP 8)

getservbyname — Отримує номер порту, пов'язаного з інтернет-службою та
протоколом

### Опис

**getservbyname**(string `$service`, string `$protocol`): int\|false

Функція **getservbyname()** повертає порт, який відповідає
параметру `service` для заданого протоколу у параметрі `protocol`
згідно `/etc/services`.

### Список параметрів

`service`
Ім'я служби Інтернету у вигляді рядка.

`protocol`
Параметр `protocol` може дорівнювати ``tcp`` або ``udp'` (у нижньому
регістрі).

### Значення, що повертаються

Повертає номер порту, або **`false`**, якщо `service` або `protocol`
не знайдено.

### Приклади

**Приклад #1 Приклад використання **getservbyname()****

` <?php$services u003d array('http', 'ftp', 'ssh', 'telnet', 'imap','smtp', 'nicname', 'gopher', 'finger', 'pop3', ' www');foreach ($services as $service) {   $port u003d getservbyname($service, 'tcp'); echo $service . ": " . $port . "<br />
";}?> `

### Дивіться також

- [getservbyport()](function.getservbyport.md) - Отримує
інтернет-службу, що відповідає заданому порту та протоколу
- Дивіться
[»http://www.iana.org/assignments/port-numbers](http://www.iana.org/assignments/port-numbers)
щоб отримати повний список номерів портів.
