- [«OCILob](class.ocilob.md)
- [OCILob::close »](ocilob.close.md)

- [PHP Manual](index.md)
- [OCILob](class.ocilob.md)
- Додає дані з об'єкта LOB до кінця іншого об'єкта

#OCILob::append

(PHP 5, PHP 7, PHP 8, PECL OCI8 \>u003d 1.1.0)

OCILob::append — Додає дані з об'єкта LOB до кінця іншого об'єкта

### Опис

public **OCILob::append**([OCILob](class.ocilob.md) `$from`): bool

Додає до кінця об'єкта LOB дані з іншого об'єкта LOB.

Запис у LOB за допомогою цього методу викликає помилку, якщо об'єкт раніше
був увімкнений режим буферизації. Тому ви повинні вимкнути буферизацію
перед її застосуванням. Перед вимкненням буферизації вам може бути
знадобиться метод [OCILob::flush](ocilob.flush.md) для очищення
буфер.

### Список параметрів

`from`
Копіюваний LOB.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Список змін

| Версія | Опис |
|------------------------|------------------------ -------------------------------------------------- ----------------------------------|
| 8.0.0, PECL OCI8 3.0.0 | Клас **OCI-Lob** перейменований на [OCILob](class.ocilob.md) відповідно до стандартів іменування PHP. |

### Дивіться також

- [OCILob::flush](ocilob.flush.md)
- [OCILob::setBuffering](ocilob.setbuffering.md)
- [OCILob::getBuffering](ocilob.getbuffering.md)
