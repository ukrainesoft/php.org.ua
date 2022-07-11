- [« ldap_next_attribute](function.ldap-next-attribute.md)
- [ldap_next_reference »](function.ldap-next-reference.md)

- [PHP Manual](index.md)
- [Функції LDAP](ref.ldap.md)
- Отримати наступний запис результату

#ldap_next_entry

(PHP 4, PHP 5, PHP 7, PHP 8)

ldap_next_entry — Отримати наступний запис результату

### Опис

**ldap_next_entry**([LDAP\Connection](class.ldap-connection.md)
`$ldap`, LDAP\ResultEntry `$entry`): LDAP\ResultEntry\|false

Отримати записи, які зберігаються в результаті. Наступні дзвінки
**ldap_next_entry()** повертають по одному запису, доки не залишиться
більше записів. Перший виклик **ldap_next_entry()** здійснюється після
виклику [ldap_first_entry()](function.ldap-first-entry.md) з параметром
`entry`, який був повернутий
[ldap_first_entry()](function.ldap-first-entry.md).

### Список параметрів

`ldap`
Примірник [LDAP\Connection](class.ldap-connection.md), що повертається
функцією [ldap_connect()](function.ldap-connect.md).

`entry`
Примірник [LDAP\ResultEntry](class.ldap-result-entry.md).

### Значення, що повертаються

Повертає екземпляр [LDAP\ResultEntry](class.ldap-result-entry.md)
для наступного запису в результаті, вміст якого починають
читатися, запускаючи [ldap_first_entry()](function.ldap-first-entry.md).
Якщо немає більше записів у результаті, то повертається **`false`**.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- -------------------------------------------------- -------------------|
| 8.1.0 | Параметр `ldap` тепер очікує на екземпляр [LDAP\Connection](class.ldap-connection.md); раніше очікувався ресурс ([resource](language.types.resource.md)). |
| 8.1.0 | Параметр `entry` тепер чекає на екземпляр [LDAP\ResultEntry](class.ldap-result-entry.md); раніше очікувався ресурс ([resource](language.types.resource.md)). |
| 8.1.0 | Повертає екземпляр [LDAP\Result](class.ldap-result.md); раніше повертався ресурс ([resource](language.types.resource.md)). |

### Дивіться також

- [ldap_get_entries()](function.ldap-get-entries.md) - Отримує все
запису результату
