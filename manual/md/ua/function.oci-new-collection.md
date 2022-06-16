- [« oci_lob_is_equal](function.oci-lob-is-equal.md)
- [oci_new_connect »](function.oci-new-connect.md)

- [PHP Manual](index.md)
- [OCI8 Функції](ref.oci8.md)
- Створює новий об'єкт колекції

#oci_new_collection

(PHP 5, PHP 7, PHP 8, PECL OCI8 \>u003d 1.1.0)

oci_new_collection — Створює новий об'єкт колекції

### Опис

**oci_new_collection**(resource `$connection`, string `$type_name`,
?string `$schema` u003d **`null`**):
[OCICollection](class.ocicollection.md)\|false

Створює новий об'єкт колекції.

### Список параметрів

`connection`
Ідентифікатор з'єднання з сервером Oracle, що повертається функцією
[oci_connect()](function.oci-connect.md) або
[oci_pconnect()](function.oci-pconnect.md).

`type_name`
Має бути коректним ім'ям типу (у верхньому регістрі).

`schema`
Має бути зазначена схема даних, де створено іменований тип. Якщо
передано значення **`null`**, вказується ім'я користувача як
ім'я схеми.

### Значення, що повертаються

Повертає новий об'єкт [OCICollection](class.ocicollection.md) або
**`false`** у разі виникнення помилки.

### Список змін

| Версія | Опис |
|------------------------|------------------------ ------------------|
| 8.0.0, PECL OCI8 3.0.0 | `schema` тепер припускає значення null. |

### Примітки

> **Примітка**:
>
> Клас [OCICollection](class.ocicollection.md) називався
> **OCI-Collection** до PHP 8 та OCI8 3.0.0.

> **Примітка**:
>
> У версіях PHP нижче 5.0.0 ця функція називалася
> [ocinewcollection()](function.ocinewcollection.md). У PHP 5.0.0 та
> вище [ocinewcollection()](function.ocinewcollection.md) є
> аліасом **oci_new_collection()**, тому ви можете продовжувати
> використовувати це ім'я, але це не рекомендується.
