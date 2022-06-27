- [« ldap_mod_replace_ext](function.ldap-mod_replace-ext.md)
- [ldap_modify_batch »](function.ldap-modify-batch.md)

- [PHP Manual](index.md)
- [Функції LDAP](ref.ldap.md)
- Замінити значення атрибутів на нові

#ldap_mod_replace

(PHP 4, PHP 5, PHP 7, PHP 8)

ldap_mod_replace — Замінити значення атрибутів на нові

### Опис

**ldap_mod_replace**(
[LDAP\Connection](class.ldap-connection.md) `$ldap`,
string `$dn`,
array `$entry`,
?array `$controls` u003d **`null`**
): bool

Замінює один або більше атрибутів із зазначеного `dn`. Також її можна
використовувати для видалення чи додавання атрибутів.

### Список параметрів

`ldap`
Примірник [LDAP\Connection](class.ldap-connection.md), що повертається
функцією [ldap_connect()](function.ldap-connect.md).

`dn`
Відмінне ім'я об'єкта LDAP.

`entry`
Асоціативний масив зі списком атрибутів, що замінюються. Якщо поставити порожній
масив, атрибут буде видалений. Якщо якийсь атрибут відсутній, то
він буде додано.

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

- [ldap_mod_replace_ext()](function.ldap-mod_replace-ext.md) -
Замінити значення атрибута на нові
- [ldap_mod_del()](function.ldap-mod-del.md) - Видалити значення
атрибута із поточних атрибутів
- [ldap_mod_add()](function.ldap-mod-add.md) - Додати значення
атрибуту до поточних атрибутів
- [ldap_modify_batch()](function.ldap-modify-batch.md) -
Формування та запуск пакетної зміни запису LDAP
