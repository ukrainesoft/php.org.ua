- [« ldap_t61_to_8859](function.ldap-t61-to-8859.md)
- [LDAP\Connection »](class.ldap-connection.md)

- [PHP Manual](index.md)
- [Функції LDAP](ref.ldap.md)
- Розірвати прив'язку до директорії LDAP

#ldap_unbind

(PHP 4, PHP 5, PHP 7, PHP 8)

ldap_unbind — Розірвати прив'язку до директорії LDAP

### Опис

**ldap_unbind**([LDAP\Connection](class.ldap-connection.md) `$ldap`):
bool

Розриває прив'язку до LDAP-директорії.

### Список параметрів

`ldap`
Примірник [LDAP\Connection](class.ldap-connection.md), що повертається
функцією [ldap_connect()](function.ldap-connect.md).

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- -------------------------------------------------- ---------------|
| 8.1.0 | Параметр `ldap` тепер очікує на екземпляр [LDAP\Connection](class.ldap-connection.md); раніше очікувався ресурс ([resource](language.types.resource.md)). |

### Дивіться також

- [ldap_bind()](function.ldap-bind.md) - Прив'язати до директорії LDAP
