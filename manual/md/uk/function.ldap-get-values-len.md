- [«ldap_get_option](function.ldap-get-option.md)
- [ldap_get_values »](function.ldap-get-values.md)

- [PHP Manual](index.md)
- [Функції LDAP](ref.ldap.md)
- Отримати всі бінарні значення із запису результату

#ldap_get_values_len

(PHP 4, PHP 5, PHP 7, PHP 8)

ldap_get_values_len — Отримати всі бінарні значення із запису
результату

### Опис

**ldap_get_values_len**([LDAP\Connection](class.ldap-connection.md)
`$ldap`, LDAP\ResultEntry `$entry`, string `$attribute`): array\|false

Читає всі значення атрибута запису результату.

Ця функція використовується так само як і
[ldap_get_values()](function.ldap-get-values.md) за винятком того,
що обробляє двійкові дані, а не рядкові.

### Список параметрів

`ldap`
Примірник [LDAP\Connection](class.ldap-connection.md), що повертається
функцією [ldap_connect()](function.ldap-connect.md).

`entry`
Примірник [LDAP\ResultEntry](class.ldap-result-entry.md).

`attribute`

### Значення, що повертаються

Повертає масив значень для атрибуту у разі успішного виконання та
**`false`** у разі виникнення помилки. Окремі значення доступні
по цілісному індексу в масиві. Перший індекс 0. Число значень
може бути знайдено за індексом "count" у результуючому масиві.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- -------------------------------------------------- -------------------|
| 8.1.0 | Параметр `ldap` тепер очікує на екземпляр [LDAP\Connection](class.ldap-connection.md); раніше очікувався ресурс ([resource](language.types.resource.md)). |
| 8.1.0 | Параметр `entry` тепер чекає на екземпляр [LDAP\ResultEntry](class.ldap-result-entry.md); раніше очікувався ресурс ([resource](language.types.resource.md)). |

### Дивіться також

- [ldap_get_values()](function.ldap-get-values.md) - Отримує все
значення із запису результату
