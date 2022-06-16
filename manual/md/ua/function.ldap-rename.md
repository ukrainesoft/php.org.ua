- [« ldap_rename_ext](function.ldap-rename-ext.md)
- [ldap_sasl_bind »](function.ldap-sasl-bind.md)

- [PHP Manual](index.md)
- [Функції LDAP](ref.ldap.md)
- Змінити ім'я запису

#ldap_rename

(PHP 4 \>u003d 4.0.5, PHP 5, PHP 7, PHP 8)

ldap_rename — Змінити ім'я запису

### Опис

**ldap_rename**(
[LDAP\Connection](class.ldap-connection.md) `$ldap`,
string `$dn`,
string `$new_rdn`,
string `$new_parent`,
bool `$delete_old_rdn`,
?array `$controls` u003d **`null`**
): bool

Перейменування/переміщення запису, визначеного `dn`.

### Список параметрів

`ldap`
Примірник [LDAP\Connection](class.ldap-connection.md), що повертається
функцією [ldap_connect()](function.ldap-connect.md).

`dn`
Відмінне ім'я об'єкта LDAP.

`new_rdn`
Новий RDN.

`new_parent`
Новий батьківський/переважаючий запис.

`delete_old_rdn`
Якщо **`true`**, старі значення RDN видаляються, інакше старі значення
RDN зберігаються як унікальні значення запису.

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

### Примітки

> **Примітка**:
>
> Ця функція працює лише з LDAPv3. Можливо вам
> доведеться використовувати
> [ldap_set_option()](function.ldap-set-option.md) перед прив'язкою,
> Використовуючи LDAPv3. Ця функція доступна лише за умови використання
> OpenLDAP 2.xx або Netscape Directory SDK x.x.

### Дивіться також

- [ldap_rename_ext()](function.ldap-rename-ext.md) - Модифікувати
назва запису
- [ldap_modify()](function.ldap-modify.md) - Псевдонім
ldap_mod_replace
