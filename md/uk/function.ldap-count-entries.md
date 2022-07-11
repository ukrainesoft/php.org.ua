- [«
ldap_control_paged_result](function.ldap-control-paged-result.md)
- [ldap_count_references »](function.ldap-count-references.md)

- [PHP Manual](index.md)
- [Функції LDAP](ref.ldap.md)
- Порахувати кількість записів у результатах пошуку

#ldap_count_entries

(PHP 4, PHP 5, PHP 7, PHP 8)

ldap_count_entries — Порахувати число записів у результатах пошуку

### Опис

**ldap_count_entries**([LDAP\Connection](class.ldap-connection.md)
`$ldap`, [LDAP\Result](class.ldap-result.md) `$result`): int

Повертає кількість записів, збережених у результаті попередньої операції
пошуку.

### Список параметрів

`ldap`
Примірник [LDAP\Connection](class.ldap-connection.md), що повертається
функцією [ldap_connect()](function.ldap-connect.md).

`result`
Примірник [LDAP\Result](class.ldap-result.md), що повертається
[ldap_list()](function.ldap-list.md) або
[ldap_search()](function.ldap-search.md).

### Значення, що повертаються

Повертає число записів у результаті або **`false`** у разі
виникнення помилки.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- -------------------------------------------------- ---------------|
| 8.1.0 | Параметр `ldap` тепер очікує на екземпляр [LDAP\Connection](class.ldap-connection.md); раніше очікувався ресурс ([resource](language.types.resource.md)). |
| 8.1.0 | Параметр `result` тепер чекає на екземпляр [LDAP\Result](class.ldap-result.md); раніше очікувався ресурс ([resource](language.types.resource.md)). |

### Приклади

**Приклад #1 Приклад використання функції **ldap_count_entries()****

Отримання числа записів у результаті.

` // $ds - дійсний ідентифікатор з'єднання (дивіться ldap_connect)     $dn        u003d 'ouu003dexample,dcu003dorg'; $filter   u003d '(|(snu003dDoe*)(givennameu003dJohn*))'; $justthese u003d array('ou', 'sn', 'givenname', 'mail'); $sr u003d ldap_search($ds, $dn, $filter, $justthese); var_dump(ldap_count_entries($ds, $sr));`

Результатом виконання цього прикладу буде щось подібне:

int(1)
