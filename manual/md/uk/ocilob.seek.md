- [« OCILob::saveFile](ocilob.savefile.md)
- [OCILob::setBuffering »](ocilob.setbuffering.md)

- [PHP Manual](index.md)
- [OCILob](class.ocilob.md)
- Встановлює позицію внутрішнього покажчика LOB

# OCILob::seek

(PHP 5, PHP 7, PHP 8, PECL OCI8 \>u003d 1.1.0)

OCILob::seek — Встановлює позицію внутрішнього покажчика LOB

### Опис

public **OCILob::seek**(int `$offset`, int `$whence` u003d
**`OCI_SEEK_SET`**): bool

Встановлює позицію внутрішнього покажчика об'єкта LOB.

### Список параметрів

`offset`
Вказує кількість байтів, на які слід переміститись від
позиції, що визначається параметром `whence`:

`whence`
Може бути одним із значень:

- **`OCI_SEEK_SET`** - встановити позицію, рівну `offset`
- **`OCI_SEEK_CUR`** - додати до поточної позиції `offset` байт
- **`OCI_SEEK_END`** - додати до кінця файлу `offset` байт (щоб
перемістити покажчик на початок - вкажіть негативний `offset`)

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Список змін

| Версія | Опис |
|------------------------|------------------------ -------------------------------------------------- ----------------------------------|
| 8.0.0, PECL OCI8 3.0.0 | Клас **OCI-Lob** перейменований на [OCILob](class.ocilob.md) відповідно до стандартів іменування PHP. |

### Дивіться також

- [OCILob::rewind](ocilob.rewind.md)
- [OCILob::tell](ocilob.tell.md)
- [OCILob::eof](ocilob.eof.md)
