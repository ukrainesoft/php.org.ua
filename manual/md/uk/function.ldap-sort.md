- [« ldap_set_rebind_proc](function.ldap-set-rebind-proc.md)
- [ldap_start_tls »](function.ldap-start-tls.md)

- [PHP Manual](index.md)
- [Функції LDAP](ref.ldap.md)
- Сортує записи LDAP

#ldap_sort

(PHP 4 \>u003d 4.2.0, PHP 5, PHP 7)

ldap_sort — Сортування записів LDAP

**Увага**

Ця функція оголошена *УСТАРНІЙ*, починаючи з PHP 7.0.0 і була *Видалена*
у версії PHP 8.0.0. Використовувати цю функцію не рекомендується.

### Опис

**ldap_sort**(resource `$link`, resource `$result`, string
`$sortfilter`): bool

Сортує результат запиту LDAP, який повертається функцією
[ldap_search()](function.ldap-search.md).

Так як ця функція сортує результат на стороні клієнта, ви можете
отримати не ті результати, які очікували у разі, якщо його було перевищено
ліміт `sizelimit` на стороні сервера або вказаний у
[ldap_search()](function.ldap-search.md).

### Список параметрів

`link`
Ресурс LDAP, який повертається функцією
[ldap_connect()](function.ldap-connect.md).

`result`
Дескриптор результату пошуку, що повертається функцією
[ldap_search()](function.ldap-search.md).

`sortfilter`
Атрибут, який використовується як ключ при сортуванні.

### Значення, що повертаються

Функція не повертає значення після виконання.

### Список змін

| Версія | Опис |
|--------|-----------------------|
| 8.0.0 | Функцію було видалено. |

### Приклади

Сортування результатів пошуку.

**Приклад #1 Сортування LDAP**

`<?php      // $ds - активний дескриптор з'єднання (дивіться ldap_connect)     $dn        u003d 'ouu003dexample,dcu003dorg'; $filter   u003d '(|(snu003dDoe*)(givennameu003dJohn*))'; $justthese u003d array('ou', 'sn', 'givenname', 'mail'); $sr u003d ldap_search($ds, $dn, $filter, $justthese); // Сортування     ldap_sort($ds, $sr, 'sn'); // Отримання даних     $info u003d ldap_get_entries($ds, $sr); `
