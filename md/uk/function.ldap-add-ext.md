- [« ldap_8859_to_t61](function.ldap-8859-to-t61.md)
- [ldap_add »](function.ldap-add.md)

- [PHP Manual](index.md)
- [Функції LDAP](ref.ldap.md)
- Додати записи до каталогу LDAP

#ldap_add_ext

(PHP 7 \>u003d 7.3.0, PHP 8)

ldap_add_ext — Додати записи до каталогу LDAP

### Опис

**ldap_add_ext**(
[LDAP\Connection](class.ldap-connection.md) `$ldap`,
string `$dn`,
array `$entry`,
?array `$controls` u003d **`null`**
): [LDAP\Result](class.ldap-result.md)\|false

Робить те саме, що й [ldap_add()](function.ldap-add.md), але
повертає екземпляр [LDAP\Result](class.ldap-result.md) для розбору з
за допомогою [ldap_parse_result()](function.ldap-parse-result.md).

### Список параметрів

Дивіться [ldap_add()](function.ldap-add.md)

### Значення, що повертаються

Повертає екземпляр [LDAP\Result](class.ldap-result.md) або
**`false`** у разі виникнення помилки.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- -------------------------------------------------- ---------------|
| 8.1.0 | Параметр `ldap` тепер очікує на екземпляр [LDAP\Connection](class.ldap-connection.md); раніше очікувався ресурс ([resource](language.types.resource.md)). |
| 8.1.0 | Повертає екземпляр [LDAP\Result](class.ldap-result.md); раніше повертався ресурс ([resource](language.types.resource.md)). |
| 8.0.0 | `controls` тепер припускає значення null; раніше значення за промовчанням було `[]`. |

### Примітки

> **Примітка**: Ця функція безпечна для обробки даних у двійковій
> Формі.

### Дивіться також

- [ldap_add()](function.ldap-add.md) - Додати запис до LDAP
директорію
- [ldap_parse_result()](function.ldap-parse-result.md) - Вийняти
інформацію з результату
