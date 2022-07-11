- [«ldap_read](function.ldap-read.md)
- [ldap_rename »](function.ldap-rename.md)

- [PHP Manual](index.md)
- [Функції LDAP](ref.ldap.md)
- Модифікувати назву запису

#ldap_rename_ext

(PHP 7 \>u003d 7.3.0, PHP 8)

ldap_rename_ext — Модифікувати назву запису

### Опис

**ldap_rename_ext**(
[LDAP\Connection](class.ldap-connection.md) `$ldap`,
string `$dn`,
string `$new_rdn`,
string `$new_parent`,
bool `$delete_old_rdn`,
?array `$controls` u003d **`null`**
): [LDAP\Result](class.ldap-result.md)\|false

Робить те саме, що і [ldap_rename()](function.ldap-rename.md), але
повертає екземпляр [LDAP\Result](class.ldap-result.md) для розбору з
за допомогою [ldap_parse_result()](function.ldap-parse-result.md).

### Список параметрів

Дивіться [ldap_rename()](function.ldap-rename.md)

### Значення, що повертаються

Повертає екземпляр [LDAP\Result](class.ldap-result.md) або
**`false`** у разі виникнення помилки.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- -------------------------------------------------- ---------------|
| 8.1.0 | Параметр `ldap` тепер очікує на екземпляр [LDAP\Connection](class.ldap-connection.md); раніше очікувався ресурс ([resource](language.types.resource.md)). |
| 8.1.0 | Повертає екземпляр [LDAP\Result](class.ldap-result.md); раніше повертався ресурс ([resource](language.types.resource.md)). |
| 8.0.0 | `controls` тепер припускає значення null; раніше значення за промовчанням було `[]`. |
| 7.3 | Додано підтримку параметра `controls` |

### Дивіться також

- [ldap_rename()](function.ldap-rename.md) - Змінити ім'я запису
- [ldap_parse_result()](function.ldap-parse-result.md) - Вийняти
інформацію з результату
