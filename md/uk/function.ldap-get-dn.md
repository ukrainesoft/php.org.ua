- [« ldap_get_attributes](function.ldap-get-attributes.md)
- [ldap_get_entries »](function.ldap-get-entries.md)

- [PHP Manual](index.md)
- [Функції LDAP](ref.ldap.md)
- Отримати DN результуючого запису

#ldap_get_dn

(PHP 4, PHP 5, PHP 7, PHP 8)

ldap_get_dn — Отримати DN результуючого запису

### Опис

**ldap_get_dn**([LDAP\Connection](class.ldap-connection.md) `$ldap`,
LDAP\ResultEntry `$entry`): string\|false

Виявити результат DN в результаті.

### Список параметрів

`ldap`
Примірник [LDAP\Connection](class.ldap-connection.md), що повертається
функцією [ldap_connect()](function.ldap-connect.md).

`entry`
Примірник [LDAP\ResultEntry](class.ldap-result-entry.md).

### Значення, що повертаються

Повертає DN запису результату та **`false`** у разі виникнення
помилки.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- -------------------------------------------------- -------------------|
| 8.1.0 | Параметр `ldap` тепер очікує на екземпляр [LDAP\Connection](class.ldap-connection.md); раніше очікувався ресурс ([resource](language.types.resource.md)). |
| 8.1.0 | Параметр `entry` тепер чекає на екземпляр [LDAP\ResultEntry](class.ldap-result-entry.md); раніше очікувався ресурс ([resource](language.types.resource.md)). |
