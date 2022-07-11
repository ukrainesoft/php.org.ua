- [«oci_field_type](function.oci-field-type.md)
- [oci_free_statement »](function.oci-free-statement.md)

- [PHP Manual](index.md)
- [OCI8 Функції](ref.oci8.md)
- звільняє дескриптор

#oci_free_descriptor

(PHP 5, PHP 7, PHP 8, PECL OCI8 \>u003d 1.1.0)

oci_free_descriptor - Звільняє дескриптор

### Опис

**oci_free_descriptor**([OCILob](class.ocilob.md) `$lob`): bool

Звільняє дескриптор, створений за допомогою
[oci_new_descriptor()](function.oci-new-descriptor.md).

### Список параметрів

`descriptor`
Дескриптор, створений за допомогою
[oci_new_descriptor()](function.oci-new-descriptor.md).

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Примітки

> **Примітка**:
>
> Функція зазвичай використовується як метод
> [OCILOB::free](ocilob.free.md).

### Дивіться також

- [OCILOB::free](ocilob.free.md)
