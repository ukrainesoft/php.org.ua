- [«OCICollection::assign](ocicollection.assign.md)
- [OCICollection::free »](ocicollection.free.md)

- [PHP Manual](index.md)
- [OCICollection](class.ocicollection.md)
- Надає значення елементу колекції

# OCICollection::assignElem

(PHP 5, PHP 7, PHP 8, PECL OCI8 \>u003d 1.1.0)

OCICollection::assignElem — Надає значення елементу колекції

### Опис

public **OCICollection::assignElem**(int `$index`, string `$value`):
bool

Надає значення елементу колекції з індексом `index`.

### Список параметрів

`index`
Індекс елемент. Перший індекс – нуль.

`value`
Може бути рядком чи числом.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Список змін

| Версія | Опис |
|------------------------|------------------------ -------------------------------------------------- -------------------------------------------------- -----|
| 8.0.0, PECL OCI8 3.0.0 | Клас **OCI-Collection** перейменований на [OCICollection](class.ocicollection.md) відповідно до стандартів іменування PHP. |

### Дивіться також

- [OCICollection::getElem](ocicollection.getelem.md)
