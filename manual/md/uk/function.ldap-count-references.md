- [«ldap_count_entries](function.ldap-count-entries.md)
- [ldap_delete_ext »](function.ldap-delete-ext.md)

- [PHP Manual](index.md)
- [Функції LDAP](ref.ldap.md)
- Підраховує кількість посилань у результатах пошуку

#ldap_count_references

(PHP 8)

ldap_count_references — Підраховує кількість посилань у результатах
пошуку

### Опис

**ldap_count_references**([LDAP\Connection](class.ldap-connection.md)
`$ldap`, [LDAP\Result](class.ldap-result.md) `$result`): int

Підраховує кількість посилань у результатах пошуку.

### Список параметрів

`ldap`
Примірник [LDAP\Connection](class.ldap-connection.md), що повертається
функцією [ldap_connect()](function.ldap-connect.md).

`result`
Примірник [LDAP\Result](class.ldap-result.md), що повертається
[ldap_list()](function.ldap-list.md) або
[ldap_search()](function.ldap-search.md).

### Значення, що повертаються

Повертає кількість посилань у результаті пошуку.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- -------------------------------------------------- ---------------|
| 8.1.0 | Параметр `ldap` тепер очікує на екземпляр [LDAP\Connection](class.ldap-connection.md); раніше очікувався ресурс ([resource](language.types.resource.md)). |
| 8.1.0 | Параметр `result` тепер чекає на екземпляр [LDAP\Result](class.ldap-result.md); раніше очікувався ресурс ([resource](language.types.resource.md)). |

### Дивіться також

- [ldap_connect()](function.ldap-connect.md) - Підключитись до
серверу LDAP
