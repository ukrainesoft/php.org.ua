- [« ldap_delete_ext](function.ldap-delete-ext.md)
- [ldap_dn2ufn »](function.ldap-dn2ufn.md)

- [PHP Manual](index.md)
- [Функції LDAP](ref.ldap.md)
- Видаляє запис із директорії LDAP

#ldap_delete

(PHP 4, PHP 5, PHP 7, PHP 8)

ldap_delete — Видалення запису з директорії LDAP

### Опис

**ldap_delete**([LDAP\Connection](class.ldap-connection.md) `$ldap`,
string `$dn`, ?array `$controls` u003d **`null`**): bool

Видалення певного запису з директорії LDAP.

### Список параметрів

`ldap`
Примірник [LDAP\Connection](class.ldap-connection.md), що повертається
функцією [ldap_connect()](function.ldap-connect.md).

`dn`
Унікальне ім'я запису LDAP.

`controls`
Масив [керуючих констант LDAP](ldap.controls.md) для надсилання в
запит.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- -------------------------------------------------- ---------------|
| 8.1.0 | Параметр `ldap` тепер очікує на екземпляр [LDAP\Connection](class.ldap-connection.md); раніше очікувався ресурс ([resource](language.types.resource.md)). |
| 8.0.0 | `controls` тепер припускає значення null; раніше значення за промовчанням було `[]`. |
| 7.3 | Додано підтримку параметра `controls` |

### Дивіться також

- [ldap_delete_ext()](function.ldap-delete-ext.md) - Видалити запис
з директорії
- [ldap_add()](function.ldap-add.md) - Додати запис до LDAP
директорію
