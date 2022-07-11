- [«ldap_count_references](function.ldap-count-references.md)
- [ldap_delete »] (function.ldap-delete.md)

- [PHP Manual](index.md)
- [Функції LDAP](ref.ldap.md)
- Видалити запис із директорії

#ldap_delete_ext

(PHP 7 \>u003d 7.3.0, PHP 8)

ldap_delete_ext — Видалити запис із директорії

### Опис

**ldap_delete_ext**([LDAP\Connection](class.ldap-connection.md)
`$ldap`, string `$dn`, ?array `$controls` u003d **`null`**):
[LDAP\Result](class.ldap-result.md)\|false

Робить те саме, що й [ldap_delete()](function.ldap-delete.md), але
повертає екземпляр [LDAP\Result](class.ldap-result.md) для розбору з
за допомогою [ldap_parse_result()](function.ldap-parse-result.md).

### Список параметрів

Дивіться [ldap_delete()](function.ldap-delete.md)

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

- [ldap_delete()](function.ldap-delete.md) - Видаляє запис з
директорії LDAP
- [ldap_parse_result()](function.ldap-parse-result.md) - Вийняти
інформацію з результату
