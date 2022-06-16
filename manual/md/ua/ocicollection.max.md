- [«OCICollection::getElem](ocicollection.getelem.md)
- [OCICollection::size »](ocicollection.size.md)

- [PHP Manual](index.md)
- [OCICollection](class.ocicollection.md)
- Повертає максимальну кількість елементів у колекції

# OCICollection::max

(PHP 5, PHP 7, PHP 8, PECL OCI8 \>u003d 1.1.0)

OCICollection::max — Повертає максимальну кількість елементів у
колекції

### Опис

public **OCICollection::max**(): int\|false

Повертає максимальну кількість елементів у колекції.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає максимальну кількість як ціле число або **`false`**
у разі виникнення помилки.

Якщо буде повернено 0, кількість елементів не обмежена.

### Список змін

| Версія | Опис |
|------------------------|------------------------ -------------------------------------------------- -------------------------------------------------- -----|
| 8.0.0, PECL OCI8 3.0.0 | Клас **OCI-Collection** перейменований на [OCICollection](class.ocicollection.md) відповідно до стандартів іменування PHP. |

### Дивіться також

- [OCICollection::size](ocicollection.size.md)
