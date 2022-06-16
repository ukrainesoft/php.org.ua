- [«ldap_get_dn](function.ldap-get-dn.md)
- [ldap_get_option »](function.ldap-get-option.md)

- [PHP Manual](index.md)
- [Функції LDAP](ref.ldap.md)
- Отримує всі записи результату

#ldap_get_entries

(PHP 4, PHP 5, PHP 7, PHP 8)

ldap_get_entries — Отримує всі записи результату

### Опис

**ldap_get_entries**([LDAP\Connection](class.ldap-connection.md)
`$ldap`, [LDAP\Result](class.ldap-result.md) `$result`): array\|false

Читає множинні записи із заданого результату, а потім читає
атрибути та множинні значення.

### Список параметрів

`ldap`
Примірник [LDAP\Connection](class.ldap-connection.md), що повертається
функцією [ldap_connect()](function.ldap-connect.md).

`result`
Примірник [LDAP\Result](class.ldap-result.md), що повертається
[ldap_list()](function.ldap-list.md) або
[ldap_search()](function.ldap-search.md).

### Значення, що повертаються

Повертає повну інформацію про результат у вигляді багатовимірного масиву
у разі успішного виконання, і **`false`** у разі виникнення
помилки.

Структура масиву наступна: Індекс атрибута перетворено на нижній
регістр. (Атрибути для серверів каталогів є нечутливими до
регістру, але не тоді, коли вони використовуються як індекси
масиву.)

return_value["count"] u003d кількість записів у результаті
return_value[0] : посилається на інформацію про перший запис

return_value[i]["dn"] u003d DN i-ого запису в результаті

return_value[i]["count"] u003d число атрибутів у i-му записі
return_value[i][j] u003d NAME j-ого атрибуту в i-му записі результату

return_value[i]["attribute"]["count"] u003d число значень атрибута в
i-го запису
return_value[i]["attribute"][j] u003d j-е значення атрибуту i-ого запису

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- -------------------------------------------------- ---------------|
| 8.1.0 | Параметр `ldap` тепер очікує на екземпляр [LDAP\Connection](class.ldap-connection.md); раніше очікувався ресурс ([resource](language.types.resource.md)). |
| 8.1.0 | Параметр `result` тепер чекає на екземпляр [LDAP\Result](class.ldap-result.md); раніше очікувався ресурс ([resource](language.types.resource.md)). |

### Дивіться також

- [ldap_first_entry()](function.ldap-first-entry.md) - Повернути
перший ідентифікатор результату
- [ldap_next_entry()](function.ldap-next-entry.md) - Отримати
наступний запис результату
