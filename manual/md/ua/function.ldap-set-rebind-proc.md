- [«ldap_set_option](function.ldap-set-option.md)
- [ldap_sort »](function.ldap-sort.md)

- [PHP Manual](index.md)
- [Функції LDAP](ref.ldap.md)
- Встановити функцію зворотного дзвінка для повторного зв'язування при
посилальному пошуку

#ldap_set_rebind_proc

(PHP 4 \>u003d 4.2.0, PHP 5, PHP 7, PHP 8)

ldap_set_rebind_proc — Встановити функцію зворотного дзвінка
повторного зв'язування під час посилального пошуку

### Опис

**ldap_set_rebind_proc**([LDAP\Connection](class.ldap-connection.md)
`$ldap`, ?[callable](language.types.callable.md) `$callback`): bool

**Увага**

На цей час ця функція ще була документована; для
ознайомлення доступний лише список аргументів.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- -------------------------------------------------- ---------------|
| 8.1.0 | Параметр `ldap` тепер очікує на екземпляр [LDAP\Connection](class.ldap-connection.md); раніше очікувався ресурс ([resource](language.types.resource.md)). |
| 8.0.0 | callback тепер допускає значення null. |
