- [« ldap_mod_del_ext](function.ldap-mod_del-ext.md)
- [ldap_mod_replace_ext »](function.ldap-mod_replace-ext.md)

- [PHP Manual](index.md)
- [Функції LDAP](ref.ldap.md)
- Видалити атрибути з поточних атрибутів

#ldap_mod_del

(PHP 4, PHP 5, PHP 7, PHP 8)

ldap_mod_del — Видалити атрибути з поточних атрибутів.

### Опис

**ldap_mod_del**(
[LDAP\Connection](class.ldap-connection.md) `$ldap`,
string `$dn`,
array `$entry`,
?array `$controls` u003d **`null`**
): bool

Видаляє один або більше атрибутів із зазначеного `dn`. Видалення об'єктів
здійснюється функцією [ldap_delete()](function.ldap-delete.md).

### Список параметрів

`ldap`
Примірник [LDAP\Connection](class.ldap-connection.md), що повертається
функцією [ldap_connect()](function.ldap-connect.md).

`dn`
Відмінне ім'я об'єкта LDAP.

`entry`

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

- [ldap_mod_del_ext()](function.ldap-mod_del-ext.md) - Видалити
значення атрибутів із поточних атрибутів
- [ldap_mod_add()](function.ldap-mod-add.md) - Додати значення
атрибуту до поточних атрибутів
- [ldap_mod_replace()](function.ldap-mod-replace.md) - Замінити
значення атрибутів на нові
- [ldap_modify_batch()](function.ldap-modify-batch.md) -
Формування та запуск пакетної зміни запису LDAP
