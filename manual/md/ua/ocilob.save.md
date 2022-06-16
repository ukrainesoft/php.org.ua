- [« OCILob::rewind](ocilob.rewind.md)
- [OCILob::saveFile »](ocilob.savefile.md)

- [PHP Manual](index.md)
- [OCILob](class.ocilob.md)
- Зберігає дані в LOB

# OCILob::save

(PHP 5, PHP 7, PHP 8, PECL OCI8 \>u003d 1.1.0)

OCILob::save — Зберігає дані в LOB

### Опис

public **OCILob::save**(string `$data`, int `$offset` u003d 0): bool

Зберігає дані з параметра data в об'єкт LOB.

### Список параметрів

`data`
Дані збереження.

`offset`
Може використовуватися для вказівки усунення від початку LOB.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Список змін

| Версія | Опис |
|------------------------|------------------------ -------------------------------------------------- ----------------------------------|
| 8.0.0, PECL OCI8 3.0.0 | Клас **OCI-Lob** перейменований на [OCILob](class.ocilob.md) відповідно до стандартів іменування PHP. |

### Дивіться також

- [OCILob::write](ocilob.write.md)
- [OCILob::import](ocilob.import.md)
