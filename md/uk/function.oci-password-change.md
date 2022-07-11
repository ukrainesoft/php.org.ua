- [«oci_parse](function.oci-parse.md)
- [oci_pconnect »](function.oci-pconnect.md)

- [PHP Manual](index.md)
- [OCI8 Функції](ref.oci8.md)
- Змінює пароль користувача Oracle

#oci_password_change

(PHP 5, PHP 7, PHP 8, PECL OCI8 \>u003d 1.1.0)

oci_password_change — Змінює пароль користувача Oracle

### Опис

**oci_password_change**(
resource `$connection`,
string `$username`,
string `$old_password`,
string `$new_password`
): bool

**oci_password_change**(
string `$database_name`,
string `$username`,
string `$old_password`,
string `$new_password`
): resource

Змінює пароль користувача, вказаного в `username`.

Функція **oci_password_change()** особливо корисна для скриптів PHP
командного рядка або при використанні непостійних з'єднань у всьому
програмі PHP.

### Список параметрів

`connection`
Ідентифікатор з'єднання, який повертається функцією
[oci_connect()](function.oci-connect.md) або
[oci_pconnect()](function.oci-pconnect.md).

`username`
Ім'я користувача Oracle.

`old_password`
Старий пароль.

`new_password`
Новий пароль.

`database_name`
Назва бази даних.

### Значення, що повертаються

Якщо вказано параметр `connection`, **oci_password_change()** повертає
**`true`** у разі успішного виконання або **`false`** у разі
виникнення помилки. Якщо вказано параметр `connection`,
**oci_password_change()** повертає ресурс з'єднання у випадку
успішного виконання або **`false`** у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **oci_password_change()** зі зміною
пароля вже підключеного користувача**

`<?php$dbase     u003d 'localhost/orcl';$user       u003d 'cj';$current_pw u003d 'welcome';$new_pw      u003d '$$ ($c, $user, $current_pw, $new_pw);echo "Новий пароль : " . $new_pw . "
";?> `

**Приклад #2 Приклад використання **oci_password_change()** з
підключенням та зміною пароля одночасно**

`<?php$dbase     u003d 'localhost/orcl';$user       u003d 'cj';$current_pw u003d 'welcome';$new_pw     u003du003d '$|| (!$c) {   $m u003d oci_error(); if ($m['code'] u003du003d 28001) { // "ORA-28001: the password has expired"        // Подключение и сброс пароля одновременно        $c u003d oci_password_change($dbase, $user, $current_pw, $new_pw) ; if ($c) {             echo "Новий пароль : " . $new_pw . "
";        }    }}if (!$c) {  // Ошибка не совпадала с 28001, или не получилось изменить пароль    $m u003d oci_error();    trigger_error('Не удалось подключиться к базе данных: '. $m['message' ], E_USER_ERROR);}// Використання підключення $c// ...?> `

### Примітки

> **Примітка**:
>
> Змінити пароль за допомогою цієї функції або безпосередньо в Oracle
> має виконуватися акуратно, оскільки PHP-програма може
> продовжувати використовувати у постійних з'єднаннях дані аутентифікації
> останнього успішного підключення, які вже застаріли. Найкращим
> Рішенням може бути перезапуск всіх веб-серверів після зміни пароля.

> **Примітка**:
>
> Під час оновлення бібліотеки клієнта Oracle або бази даних від версії
> установки до версії 11.2.0.3 та вище функція **oci_password_change()**
> може повернути помилку "ORA-1017: invalid username/password" (Невірні
> ім'я користувача/пароль), якщо версії та клієнта та сервера оновлені в
> час.

> **Примітка**:
>
> Другий набір параметрів **oci_password_change()** доступний
> Починаючи з версії OCI8 1.1.

> **Примітка**:
>
> У версіях PHP нижче 5.0.0 ця функція називалася
> **ocipasswordchange()**. У PHP 5.0.0 і вище **ocipasswordchange()**
> є аліасом **oci_password_change()** для зворотної сумісності,
> Ви можете продовжувати використовувати це ім'я, але це не
> Рекомендується.
