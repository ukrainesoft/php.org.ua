- [«ldap_next_reference](function.ldap-next-reference.md)
- [ldap_parse_reference »](function.ldap-parse-reference.md)

- [PHP Manual](index.md)
- [Функції LDAP](ref.ldap.md)
- Розбір результуючого об'єкта виконання розширеної операції LDAP

#ldap_parse_exop

(PHP 7 \>u003d 7.2.0, PHP 8)

ldap_parse_exop — Розбір результуючого об'єкта виконання розширеної
операції LDAP

### Опис

**ldap_parse_exop**(
[LDAP\Connection](class.ldap-connection.md) `$ldap`,
[LDAP\Result](class.ldap-result.md) `$result`,
string `&$response_data` u003d **`null`**,
string `&$response_oid` u003d **`null`**
): bool

Розбирає `result`, отриманий після виконання розширеної операції
LDAP

### Список параметрів

`ldap`
Примірник [LDAP\Connection](class.ldap-connection.md), що повертається
функцією [ldap_connect()](function.ldap-connect.md).

`result`
Примірник [LDAP\Result](class.ldap-result.md), що повертається
[ldap_list()](function.ldap-list.md) або
[ldap_search()](function.ldap-search.md).

`response_data`
Буде заповнений розібраними даними.

`response_oid`
Буде заповнено поверненим OID.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- -------------------------------------------------- ---------------|
| 8.1.0 | Параметр `ldap` тепер очікує на екземпляр [LDAP\Connection](class.ldap-connection.md); раніше очікувався ресурс ([resource](language.types.resource.md)). |
| 8.1.0 | Параметр `result` тепер чекає на екземпляр [LDAP\Result](class.ldap-result.md); раніше очікувався ресурс ([resource](language.types.resource.md)). |

### Дивіться також

- [ldap_exop()](function.ldap-exop.md) - Виконати розширену
операцію
