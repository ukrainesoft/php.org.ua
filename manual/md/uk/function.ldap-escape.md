- [« ldap_error](function.ldap-error.md)
- [ldap_exop_passwd »](function.ldap-exop-passwd.md)

- [PHP Manual](index.md)
- [Функції LDAP](ref.ldap.md)
- Екранування рядка для використання у фільтрі LDAP або DN

#ldap_escape

(PHP 5 \>u003d 5.6.0, PHP 7, PHP 8)

ldap_escape — Екранування рядка для використання у фільтрі LDAP або
у DN

### Опис

**ldap_escape**(string `$value`, string `$ignore` u003d "", int `$flags` u003d
0): string

Екранує `value` для використання в контексті, заданому в `flags`.

### Список параметрів

`value`
Значення екранування.

`ignore`
Символи, які потрібно ігнорувати при екрануванні.

`flags`
Контекст, для якого екранується рядок: **`LDAP_ESCAPE_FILTER`** для
фільтрів, що використовуються в [ldap_search()](function.ldap-search.md) або
**`LDAP_ESCAPE_DN`** для DN. Якщо не передано жодних прапорів, то всі
символи будуть екрановані.

### Значення, що повертаються

повертає екранований рядок.

### Приклади

При побудові LDAP фільтра, ви повинні використовувати ldap_escape з прапором
LDAP_ESCAPE_FILTER

**Приклад #1 Пошук по email-адресі**

` <?php// $ds - ідентифікатор сервера каталогів// $mail - email-адреса, наданий користувачем$base   u003d "ou003dMy Company, cu003dUS";$filter u003d $ , "", LDAP_ESCAPE_FILTER).")";$sr u003d ldap_search($ds, $base, $filter, array("sn", "givenname", "mail"));$info u003d ldap_get_entries($ds, sr);echo $info["count"]." записів повернено
";?> `
