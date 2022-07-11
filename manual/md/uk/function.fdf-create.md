- [«fdf_close](function.fdf-close.md)
- [fdf_enum_values »](function.fdf-enum-values.md)

- [PHP Manual](index.md)
- [FDF](ref.fdf.md)
- Створює новий документ FDF

#fdf_create

(PHP 4, PHP 5 \< 5.3.0, PECL fdf SVN)

fdf_create — Створення нового документа FDF

### Опис

**fdf_create**(): resource

Створення нового документа FDF.

Функція потрібна, якщо потрібно заповнити даними поля введення в документі
PDF.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає дескриптор документа FDF або **`false`** у разі
виникнення помилки.

### Приклади

**Приклад #1 Заповнення PDF-документу**

` <?php$outfdf u003dfdf_create();fdf_set_value($outfdf, "volume", $volume, 0);fdf_set_file($outfdf, "http:/testfdf/resultlabel.pdf");fdf_sa .fdf");fdf_close($outfdf);Header("Content-type: application/vnd.fdf");$fp u003d fopen("outtest.fdf", "r");fpassthru($fp);unlink( "outtest.fdf");?> `

### Дивіться також

- [fdf_close()](function.fdf-close.md) - Закриває FDF-документ
- [fdf_save()](function.fdf-save.md) - Зберігає документ FDF
- [fdf_open()](function.fdf-open.md) - Відкриває документ FDF
