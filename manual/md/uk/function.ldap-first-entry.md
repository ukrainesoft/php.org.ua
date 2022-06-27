- [« ldap_first_attribute](function.ldap-first-attribute.md)
- [ldap_first_reference »](function.ldap-first-reference.md)

- [PHP Manual](index.md)
- [Функції LDAP](ref.ldap.md)
- Повернути перший ідентифікатор результату

#ldap_first_entry

(PHP 4, PHP 5, PHP 7, PHP 8)

ldap_first_entry — Повернути перший ідентифікатор результату

### Опис

**ldap_first_entry**([LDAP\Connection](class.ldap-connection.md)
`$ldap`, [LDAP\Result](class.ldap-result.md) `$result`):
LDAP\ResultEntry\|false

Повертає ідентифікатор для першого запису в результаті. Цей
ідентифікатор потім використовується у функції
[ldap_next_entry()](function.ldap-next-entry.md), для
послідовного отримання записів із результату.

Записи в LDAP результаті зчитуються послідовно використовуючи функції
**ldap_first_entry()** та
[ldap_next_entry()](function.ldap-next-entry.md).

### Список параметрів

`ldap`
Примірник [LDAP\Connection](class.ldap-connection.md), що повертається
функцією [ldap_connect()](function.ldap-connect.md).

`result`
Примірник [LDAP\Result](class.ldap-result.md), що повертається
[ldap_list()](function.ldap-list.md) або
[ldap_search()](function.ldap-search.md).

### Значення, що повертаються

Повертає екземпляр [LDAP\ResultEntry](class.ldap-result-entry.md)
або **`false`** у разі виникнення помилки.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- -------------------------------------------------- ---------------|
| 8.1.0 | Параметр `ldap` тепер очікує на екземпляр [LDAP\Connection](class.ldap-connection.md); раніше очікувався ресурс ([resource](language.types.resource.md)). |
| 8.1.0 | Параметр `result` тепер чекає на екземпляр [LDAP\Result](class.ldap-result.md); раніше очікувався ресурс ([resource](language.types.resource.md)). |
| 8.1.0 | Повертає екземпляр [LDAP\ResultEntry](class.ldap-result-entry.md); раніше повертався ресурс ([resource](language.types.resource.md)). |

### Дивіться також

- [ldap_get_entries()](function.ldap-get-entries.md) - Отримує все
запису результату
