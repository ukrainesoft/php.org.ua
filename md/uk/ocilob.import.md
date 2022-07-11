- [« OCILob::getBuffering](ocilob.getbuffering.md)
- [OCILob::load »](ocilob.load.md)

- [PHP Manual](index.md)
- [OCILob](class.ocilob.md)
- Записує вміст файлу в об'єкт LOB

# OCILob::import

(PHP 5, PHP 7, PHP 8, PECL OCI8 \>u003d 1.1.0)

OCILob::import — Записує вміст файлу на об'єкт LOB

### Опис

public **OCILob::import**(string `$filename`): bool

Записує вміст файлу `filename` на поточну позицію об'єкта LOB.

### Список параметрів

`filename`
Шлях до файлу.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Список змін

| Версія | Опис |
|------------------------|------------------------ -------------------------------------------------- ----------------------------------|
| 8.0.0, PECL OCI8 3.0.0 | Клас **OCI-Lob** перейменований на [OCILob](class.ocilob.md) відповідно до стандартів іменування PHP. |

### Дивіться також

- [OCILob::export](ocilob.export.md)
- [OCILob::write](ocilob.write.md)
