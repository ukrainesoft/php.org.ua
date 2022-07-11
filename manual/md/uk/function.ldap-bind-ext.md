- [«ldap_add](function.ldap-add.md)
- [ldap_bind »](function.ldap-bind.md)

- [PHP Manual](index.md)
- [Функції LDAP](ref.ldap.md)
- Прив'язати до директорії LDAP

#ldap_bind_ext

(PHP 7 \>u003d 7.3.0, PHP 8)

ldap_bind_ext — Прив'язати до директорії LDAP

### Опис

**ldap_bind_ext**(
[LDAP\Connection](class.ldap-connection.md) `$ldap`,
?string `$dn` u003d **`null`**,
?string `$password` u003d **`null`**,
?array `$controls` u003d **`null`**
): [LDAP\Result](class.ldap-result.md)\|false

Робить те саме, що і [ldap_bind()](function.ldap-bind.md), але
повертає екземпляр [LDAP\Result](class.ldap-result.md) для розбору з
за допомогою [ldap_parse_result()](function.ldap-parse-result.md).

### Список параметрів

Дивіться [ldap_bind()](function.ldap-bind.md)

### Значення, що повертаються

Повертає екземпляр [LDAP\Result](class.ldap-result.md) або
**`false`** у разі виникнення помилки.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- -------------------------------------------------- ---------------|
| 8.1.0 | Параметр `ldap` тепер очікує на екземпляр [LDAP\Connection](class.ldap-connection.md); раніше очікувався ресурс ([resource](language.types.resource.md)). |
| 8.1.0 | Повертає екземпляр [LDAP\Result](class.ldap-result.md); раніше повертався ресурс ([resource](language.types.resource.md)). |
| 8.0.0 | `controls` тепер припускає значення null; раніше значення за промовчанням було `[]`. |

### Дивіться також

- [ldap_bind()](function.ldap-bind.md) - Прив'язати до директорії LDAP
- [ldap_parse_result()](function.ldap-parse-result.md) - Вийняти
інформацію з результату
