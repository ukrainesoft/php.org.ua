- [«
oci_get_implicit_resultset](function.oci-get-implicit-resultset.md)
- [oci_lob_is_equal »](function.oci-lob-is-equal.md)

- [PHP Manual](index.md)
- [OCI8 Функції](ref.oci8.md)
- Копіює об'єкт LOB

#oci_lob_copy

(PHP 5, PHP 7, PHP 8, PECL OCI8 \>u003d 1.1.0)

oci_lob_copy — Копіює об'єкт LOB

### Опис

**oci_lob_copy**([OCILob](class.ocilob.md) `$to`,
[OCILob](class.ocilob.md) `$from`, ?int `$length` u003d **`null`**): bool

Копіює вміст або частину вмісту об'єкта LOB в інший об'єкт
LOB. Вміст об'єкта LOB, у якому виконується копіювання,
перезаписується.

Якщо потрібно скопіювати певну частину об'єкта, то для цього
можна використовувати [OCILob::seek()](ocilob.seek.md), щоб пересунути
внутрішні покажчики об'єктів на потрібні позиції.

### Список параметрів

`to`
LOB призначення.

`from`
Копіюваний об'єкт LOB.

`length`
Довжина ділянки вмісту копіювання.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Список змін

| Версія | Опис |
|------------------------|------------------------ ------------------|
| 8.0.0, PECL OCI8 3.0.0 | `length` тепер припускає значення null. |

### Примітки

> **Примітка**:
>
> Клас OCILob називався OCI-Lob до PHP 8 та PECL OCI8 3.0.0.
