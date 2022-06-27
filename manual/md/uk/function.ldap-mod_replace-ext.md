- [«ldap_mod_del](function.ldap-mod-del.md)
- [ldap_mod_replace »](function.ldap-mod-replace.md)

- [PHP Manual](index.md)
- [Функції LDAP](ref.ldap.md)
- Замінити значення атрибута на нові

#ldap_mod_replace_ext

(PHP 7 \>u003d 7.3.0, PHP 8)

ldap_mod_replace_ext — Замінити значення атрибута на нові

### Опис

**ldap_mod_replace_ext**(
[LDAP\Connection](class.ldap-connection.md) `$ldap`,
string `$dn`,
array `$entry`,
?array `$controls` u003d **`null`**
): [LDAP\Result](class.ldap-result.md)\|false

Робить те саме, що й
[ldap_mod_replace()](function.ldap-mod-replace.md), але повертає
екземпляр [LDAP\Result](class.ldap-result.md) для аналізу за допомогою
[ldap_parse_result()](function.ldap-parse-result.md).

### Список параметрів

Дивіться [ldap_mod_replace()](function.ldap-mod-replace.md)

### Значення, що повертаються

Повертає екземпляр [LDAP\Result](class.ldap-result.md) або
**`false`** у разі виникнення помилки.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- -------------------------------------------------- ---------------|
| 8.1.0 | Параметр `ldap` тепер очікує на екземпляр [LDAP\Connection](class.ldap-connection.md); раніше очікувався ресурс ([resource](language.types.resource.md)). |
| 8.1.0 | Повертає екземпляр [LDAP\Result](class.ldap-result.md); раніше повертався ресурс ([resource](language.types.resource.md)). |
| 8.0.0 | `controls` тепер припускає значення null; раніше значення за промовчанням було `[]`. |
| 7.3 | Додано підтримку параметра `controls` |

### Дивіться також

- [ldap_mod_replace()](function.ldap-mod-replace.md) - Замінити
значення атрибутів на нові
- [ldap_parse_result()](function.ldap-parse-result.md) - Вийняти
інформацію з результату
