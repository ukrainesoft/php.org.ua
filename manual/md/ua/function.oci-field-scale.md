- [«oci_field_precision](function.oci-field-precision.md)
- [oci_field_size »](function.oci-field-size.md)

- [PHP Manual](index.md)
- [OCI8 Функції](ref.oci8.md)
- Повертає масштаб поля

#oci_field_scale

(PHP 5, PHP 7, PHP 8, PECL OCI8 \>u003d 1.1.0)

oci_field_scale — Повертає масштаб поля

### Опис

**oci_field_scale**(resource `$statement`, string\|int `$column`):
int\|false

Повертає масштаб поля під номером column.

Для полів типу FLOAT точність, що отримується за допомогою
[oci_field_precision()](function.oci-field-precision.md), більше нуля,
а масштаб дорівнює -127. Якщо точність поля дорівнює нулю, тип поля -
NUMBER. Інакше ж, тип поля може бути описаний як NUMBER(precision,
scale).

### Список параметрів

`statement`
Ідентифікатор допустимого запиту OCI.

`column`
Може бути номер поля (нумерація починається з 1) або ім'ям.

### Значення, що повертаються

Повертає масштаб у вигляді числа або **`false`** у разі виникнення
помилки.

### Приклади

**Приклад #1 **oci_field_scale()** Example**

` <?php// Створіть таблицю://   CREATE TABLE mytab (c1 NUMBER, c2 FLOAT, c3 NUMBER(4), c4 NUMBER(5,3));$conn u003d oci_connect| localhost/XE");if(!$conn) {   $m u003d oci_error(); trigger_error(htmlentities($m['message']), E_USER_ERROR);}$stidu003du003doci_parse($conn, "SELECT * FROM mytab");oci_execute($stid, OCI_DESCRIBE_ONLY); // використовуйте OCI_DESCRIBE_ONLY, якщо не отримуєте даних$ncols u003d oci_num_fields($stid);for ($i u003d 1; $i <u003d $ncols; $i++) {   " "         . oci_field_precision($stid, $i) . " "         . oci_field_scale($stid, $i) . "<br>
";}// Виведе:// C1                                                      не»||

### Примітки

> **Примітка**:
>
> У версіях PHP нижче 5.0.0 ця функція називалася
> [ocicolumnscale()](function.ocicolumnscale.md). У PHP 5.0.0 і вище
> [ocicolumnscale()](function.ocicolumnscale.md) є аліасом
> **oci_field_scale()**, тому ви можете продовжувати використовувати це
> ім'я, але це не рекомендується.

### Дивіться також

- [oci_field_precision()](function.oci-field-precision.md) -
Повертає точність поля
- [oci_field_type()](function.oci-field-type.md) - Повертає ім'я
типу поля
