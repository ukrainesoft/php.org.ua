- [« ldap_mod_add_ext](function.ldap-mod_add-ext.md)
- [ldap_mod_del_ext »](function.ldap-mod_del-ext.md)

- [PHP Manual](index.md)
- [Функції LDAP](ref.ldap.md)
- Додати значення атрибуту до поточних атрибутів

#ldap_mod_add

(PHP 4, PHP 5, PHP 7, PHP 8)

ldap_mod_add — Додати значення атрибуту до поточних атрибутів

### Опис

**ldap_mod_add**(
[LDAP\Connection](class.ldap-connection.md) `$ldap`,
string `$dn`,
array `$entry`,
?array `$controls` u003d **`null`**
): bool

Додає один або більше атрибутів до зазначеного `dn`. Для додавання
повноцінного нового об'єкта використовуйте
[ldap_add()](function.ldap-add.md).

### Список параметрів

`ldap`
Примірник [LDAP\Connection](class.ldap-connection.md), що повертається
функцією [ldap_connect()](function.ldap-connect.md).

`dn`
Відмінне ім'я об'єкта LDAP.

`entry`
Асоціативний масив зі списком значень атрибутів, що додаються. Якщо
який-небудь атрибут ще не існує, він буде доданий. Якщо атрибут
вже існує, то ви можете лише додати до нього значення, якщо він
підтримує множинні значення.

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

> **Примітка**: Ця функція безпечна для обробки даних у двійковій
> Формі.

### Дивіться також

- [ldap_mod_add_ext()](function.ldap-mod_add-ext.md) - Додати
значення атрибуту до поточних атрибутів
- [ldap_mod_del()](function.ldap-mod-del.md) - Видалити значення
атрибута із поточних атрибутів
- [ldap_mod_replace()](function.ldap-mod-replace.md) - Замінити
значення атрибутів на нові
- [ldap_modify_batch()](function.ldap-modify-batch.md) -
Формування та запуск пакетної зміни запису LDAP
