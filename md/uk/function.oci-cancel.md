- [«oci_bind_by_name](function.oci-bind-by-name.md)
- [oci_client_version »](function.oci-client-version.md)

- [PHP Manual](index.md)
- [OCI8 Функції](ref.oci8.md)
- Закінчує процес читання з курсору

#oci_cancel

(PHP 5, PHP 7, PHP 8, PECL OCI8 \>u003d 1.1.0)

oci_cancel - Закінчує процес читання з курсору

### Опис

**oci_cancel**(resource `$statement`): bool

Скидає курсор, звільняючи всі пов'язані ресурси та скасовує
можливість читати із нього.

### Список параметрів

`statement`
Запит OCI.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.
