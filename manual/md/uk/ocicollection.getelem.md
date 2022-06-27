- [«OCICollection::free](ocicollection.free.md)
- [OCICollection::max »](ocicollection.max.md)

- [PHP Manual](index.md)
- [OCICollection](class.ocicollection.md)
- Повертає значення елемента

# OCICollection::getElem

(PHP 5, PHP 7, PHP 8, PECL OCI8 \>u003d 1.1.0)

OCICollection::getElem — Повертає значення елемента

### Опис

public **OCICollection::getElem**(int `$index`):
string\|float\|null\|false

Повертає значення елемента з індексом `index` (починаючи з нуля).

### Список параметрів

`index`
Індекс елемент. Перший індекс – нуль.

### Значення, що повертаються

Djpdhfoftn **`false`**, якщо такого елемента немає; **`null`**, якщо
елемент дорівнює **`null`**; рядок, якщо елемент відноситься до рядкового
стовпця, і число, якщо елемент є числовим полем.

### Список змін

| Версія | Опис |
|------------------------|------------------------ -------------------------------------------------- -------------------------------------------------- -----|
| 8.0.0, PECL OCI8 3.0.0 | Клас **OCI-Collection** перейменований на [OCICollection](class.ocicollection.md) відповідно до стандартів іменування PHP. |

### Дивіться також

- [OCICollection::assignElem](ocicollection.assignelem.md)
