- [«ldap_mod_replace](function.ldap-mod-replace.md)
- [ldap_modify»] (function.ldap-modify.md)

- [PHP Manual](index.md)
- [Функції LDAP](ref.ldap.md)
- Формування та запуск пакетної зміни запису LDAP

#ldap_modify_batch

(PHP 5.4 \>u003d 5.4.26, PHP 5.5 \>u003d 5.5.10, PHP 5.6 \>u003d 5.6.0, PHP 7, PHP
8)

ldap_modify_batch — Формування та запуск пакетної зміни запису
LDAP

### Опис

**ldap_modify_batch**(
[LDAP\Connection](class.ldap-connection.md) `$ldap`,
string `$dn`,
array `$modifications_info`,
?array `$controls` u003d **`null`**
): bool

Модифікує існуючий запис у каталозі LDAP. Допустимо детальне
опис модифікації.

### Список параметрів

`ldap`
Примірник [LDAP\Connection](class.ldap-connection.md), що повертається
функцією [ldap_connect()](function.ldap-connect.md).

`dn`
Характерне ім'я LDAP.

`modifications_info`
Масив, що описує необхідну модифікацію. Кожен запис цього масиву
являє собою асоціативний масив із двома або трьома ключами:
`attrib` задає ім'я атрибута для зміни, `modtype` задає тип
модифікації та (залежно від типу модифікації) `values` задає масив
значень атрибутів, що відповідає даній модифікації.

Допустимі значення для `modtype`:

**`LDAP_MODIFY_BATCH_ADD`**
Кожне значення, задане в `values`, буде додано (як додаткове
значення) до атрибуту `attrib`.

**`LDAP_MODIFY_BATCH_REMOVE`**
Кожне значення, задане в `values`, буде видалено з атрибута заданого
в `attrib`. Жодне значення не вказане в `values` не буде порушено.

**`LDAP_MODIFY_BATCH_REMOVE_ALL`**
Усі значення будуть видалені у атрибута `attrib`. Параметр `values` не
потрібний.

**`LDAP_MODIFY_BATCH_REPLACE`**
Усі існуючі значення атрибуту `attrib` будуть замінені значеннями
вказаними в `values`.

Зверніть увагу, що всі значення `attrib` повинні бути рядками, всі
значення `values` повинні бути масивами рядків та будь-які значення `modtype`
повинні бути однією з констант LDAP_MODIFY_BATCH\_\*, перерахованих вище.

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

### Приклади

**Приклад #1 Додавання контакту телефонного номера**

` <?php$dn u003d "cnu003dJohn Smith,ouu003dWizards,dcu003dexample,dcu003dcom";$modifs u003d [    [        "attrib"  u003d> "telephoneNumber",        "modtype" u003d> LDAP_MODIFY_BATCH_ADD,        "values" u003d> ["+1 555 555 1717"],    ],];ldap_modify_batch($connection, $dn, $modifs);?> `

**Приклад #2 Перейменування користувача**

` <?php$dn u003d "cnu003dJohn Smith,ouu003dWizards,dcu003dexample,dcu003dcom";$modifs u003d [    [        "attrib"  u003d> "sn",        "modtype" u003d> LDAP_MODIFY_BATCH_REPLACE,        "values" u003d> ["Smith-Jones"],    ],    [        "attrib"  u003d> "givenName",        "modtype" u003d> LDAP_MODIFY_BATCH_REPLACE,        "values"  u003d> ["Jack"],    ],];ldap_modify_batch($connection, $ dn, $modifs);ldap_rename($connection, $dn, "cnu003dJack Smith-Jones", NULL, TRUE);?> `

**Приклад #3 Додавання користувачеві двох e-mail адрес**

` <?php$dn u003d "cnu003dJack Smith-Jones,ouu003dWizards,dcu003dexample,dcu003dcom";$modifs u003d [    [        "attrib"  u003d> "mail",        "modtype" u003d> LDAP_MODIFY_BATCH_ADD,        " values"  u003d> [            "jack.smith@example.com",            "jack.smith-jones@example.com",        ],    ],];ldap_modify_batch($connection, $dn, $modifs);?> `

**Приклад #4 Зміна пароля користувача**

` <?php$dn u003d "cnu003dJack Smith-Jones,ouu003dWizards,dcu003dexample,dcu003dcom";$modifs u003d [    [        "attrib"  u003d> "userPassword",        "modtype" u003d> LDAP_MODIFY_BATCH_REMOVE,        " values"  u003d> ["Tr0ub4dor&3"],    ],    [        "attrib"  u003d> "userPassword",        "modtype" u003d> LDAP_MODIFY_BATCH_ADD,        "values"  u003d> ["correct horse battery staple"],    ],];ldap_modify_batch($ connection, $dn, $modifs);?> `

**Приклад #5 Зміна пароля користувача (Active Directory)**

` <?phpfunction adifyPw($pw){    return iconv("UTF-8", "UTF-16LE", '"'''.$$pw . '"');}$dn u003d "cnu003dJack Smi u003dWizards,dcu003dad,dcu003dexample,dcu003dcom";$modifs u003d [    [        "attrib"  u003d> "unicodePwd",        "modtype" u003d> LDAP_MODIFY_BATCH_REMOVE,        "values"  u003d> [adifyPw("Tr0ub4dor&3")] ,    ],    [        "attrib"  u003d> "unicodePwd",        "modtype" u003d> LDAP_MODIFY_BATCH_ADD,        "values"  u003d> [adifyPw("correct horse battery staple")],    ],];ldap_modify_batch($connection, $dn, $ modifs); `
