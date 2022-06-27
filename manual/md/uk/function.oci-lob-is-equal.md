- [«oci_lob_copy](function.oci-lob-copy.md)
- [oci_new_collection »](function.oci-new-collection.md)

- [PHP Manual](index.md)
- [OCI8 Функції](ref.oci8.md)
- Порівнює два об'єкти LOB/FILE

#oci_lob_is_equal

(PHP 5, PHP 7, PHP 8, PECL OCI8 \>u003d 1.1.0)

oci_lob_is_equal — Порівнює два об'єкти LOB/FILE

### Опис

**oci_lob_is_equal**([OCILob](class.ocilob.md) `$lob1`,
[OCILob](class.ocilob.md) `$lob2`): bool

Порівнює два об'єкти LOB/FILE.

### Список параметрів

`lob1`
Ідентифікатор LOB.

`lob2`
Ідентифікатор LOB.

### Значення, що повертаються

Повертає **`true`**, якщо об'єкти ідентичні, та **`false`** у зворотному
випадку або у разі виникнення помилки.

### Примітки

> **Примітка**:
>
> Клас OCILob називався OCI-Lob до PHP 8 та PECL OCI8 3.0.0.
