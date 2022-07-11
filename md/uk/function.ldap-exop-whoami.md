- [« ldap_exop_refresh](function.ldap-exop-refresh.md)
- [ldap_exop »](function.ldap-exop.md)

- [PHP Manual](index.md)
- [Функції LDAP](ref.ldap.md)
- Обертка для розширеної операції WHOAMI

#ldap_exop_whoami

(PHP 7 \>u003d 7.2.0, PHP 8)

ldap_exop_whoami — Обертка для розширеної операції WHOAMI

### Опис

**ldap_exop_whoami**([LDAP\Connection](class.ldap-connection.md)
`$ldap`): string\|false

Виконує розширену операцію WHOAMI та повертає дані.

### Список параметрів

`ldap`
Примірник [LDAP\Connection](class.ldap-connection.md), що повертається
функцією [ldap_connect()](function.ldap-connect.md).

### Значення, що повертаються

Дані, повернені сервером, або ** false **.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- -------------------------------------------------- ---------------|
| 8.1.0 | Параметр `ldap` тепер очікує на екземпляр [LDAP\Connection](class.ldap-connection.md); раніше очікувався ресурс ([resource](language.types.resource.md)). |

### Дивіться також

- [ldap_exop()](function.ldap-exop.md) - Виконати розширену
операцію
