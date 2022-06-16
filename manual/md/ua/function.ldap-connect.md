- [«ldap_compare](function.ldap-compare.md)
- [ldap_control_paged_result_response
»](function.ldap-control-paged-result-response.md)

- [PHP Manual](index.md)
- [Функції LDAP](ref.ldap.md)
- Підключитись до сервера LDAP

#ldap_connect

(PHP 4, PHP 5, PHP 7, PHP 8)

ldap_connect — Підключитись до сервера LDAP

### Опис

**ldap_connect**(?string `$uri` u003d **`null`**):
[LDAP\Connection](class.ldap-connection.md)\|false

**Увага**

*Наступний* синтаксис все ще підтримується для забезпечення зворотної
сумісності (крім використання іменованих аргументів), але він
оголошений застарілим і не повинен використовуватися!

**ldap_connect**(?string `$uri` u003d **`null`**, int `$port` u003d 389):
[LDAP\Connection](class.ldap-connection.md)\|false

Створює [LDAP\Connection](class.ldap-connection.md) та перевіряє
правдоподібність заданого `uri`.

> **Примітка**: Ця функція *НЕ* відкриває з'єднання. Вона перевіряє,
> чи вірогідні задані параметри і чи можуть вони використовуватися для
> підключення, коли в ньому виникне потреба.

### Список параметрів

`uri`
Повний LDAP URI типу `ldap://hostname:port` або `ldaps://hostname:port`.

Також можна вказати кілька LDAP-URI, розділених пробілом.

Зверніть увагу, що `hostname:port` - це непідтримуваний LDAP URI,
оскільки відсутня схема.

`uri`
Ім'я сервера для підключення.

`port`
Порт для підключення.

### Значення, що повертаються

Повертає екземпляр [LDAP\Connection](class.ldap-connection.md), якщо
LDAP URI правдоподібний. Вона проводить синтаксичний розбір та перевірку
переданих параметрів, але з'єднання із сервером не відбувається. Якщо
перевірка синтаксису провалилася – повертається **`false`**.
**ldap_connect()** завжди повертатиме екземпляр
[LDAP\Connection](class.ldap-connection.md), оскільки вона фактично
не з'єднується, лише ініціалізує параметри з'єднання.
Фактичне підключення відбувається за наступних викликів ldap\_\*
функцій, зазвичай, при виклику [ldap_bind()](function.ldap-bind.md).

Якщо жодних параметрів не буде визначено, тоді буде повернено
екземпляр [LDAP\Connection](class.ldap-connection.md) відкритого
з'єднання.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- ------------------------------------------------|
| 8.1.0 | Повертає екземпляр [LDAP\Connection](class.ldap-connection.md); раніше повертався ресурс ([resource](language.types.resource.md)). |

### Приклади

**Приклад #1 Приклад підключення до сервера LDAP.**

`<?php//LDAP змінні$ldapuri u003d "ldap://ldap.example.com:389"; // ldap-uri// Сполука з LDAP$ldapconn u003d ldap_connect($ldapuri)          or die("LDAP-URI некоректний");?> `

**Приклад #2 Приклад безпечного підключення до сервера LDAP.**

` <?php// Переконайтеся, що ваш хост і коректний і ви видали сертифікат безпеки $ldaphost u003d u003d "ldaps://ldap.example.com/"; / / | or die("LDAP-URI некоректний");?> `

### Дивіться також

- [ldap_bind()](function.ldap-bind.md) - Прив'язати до директорії LDAP
