- [«OCICollection::append](ocicollection.append.md)
- [OCICollection::assignElem »](ocicollection.assignelem.md)

- [PHP Manual](index.md)
- [OCICollection](class.ocicollection.md)
- Надає колекції значення іншої, вже існуючої колекції

# OCICollection::assign

(PHP 5, PHP 7, PHP 8, PECL OCI8 \>u003d 1.1.0)

OCICollection::assign — Надає колекції значення іншої, вже
існуючої колекції

### Опис

public
**OCICollection::assign**([OCICollection](class.ocicollection.md)
`$from`): bool

Надає колекції значення іншої, раніше створеної колекції. Обидві
колекції повинні бути створені раніше за допомогою
[oci_new_collection()](function.oci-new-collection.md).

### Список параметрів

`from`
Примірник OCI-Collection.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Список змін

| Версія | Опис |
|------------------------|------------------------ -------------------------------------------------- -------------------------------------------------- -----|
| 8.0.0, PECL OCI8 3.0.0 | Клас **OCI-Collection** перейменований на [OCICollection](class.ocicollection.md) відповідно до стандартів іменування PHP. |

### Дивіться також

- [OCICollection::append](ocicollection.append.md)
