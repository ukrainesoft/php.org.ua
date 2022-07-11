- [«ps_restore](function.ps-restore.md)
- [ps_save »](function.ps-save.md)

- [PHP Manual](index.md)
- [Функції PS](ref.ps.md)
- Встановлює коефіцієнт обертання

#ps_rotate

(PECL ps \>u003d 1.1.0)

ps_rotate - Встановлює коефіцієнт обертання

### Опис

**ps_rotate**(resource `$psdoc`, float `$rot`): bool

Встановлює поворот системи координат.

### Список параметрів

`psdoc`
Ідентифікатор ресурсу файлу postscript, повернутий
[ps_new()](function.ps-new.md).

`rot`
Кут повороту у градусах.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Приклади

**Приклад #1 Повернення системи координат**

`<?phpfunction rectangle($ps) {    ps_moveto($ps, 0, 0); ps_lineto($ps, 0, 50); ps_lineto($ps, 50, 50); ps_lineto($ps, 50, 0); ps_lineto($ps, 0, 0); ps_stroke($ps);}$ps u003d ps_new();if (!ps_open_file($ps, "rotation.ps")) {  print "Не вдається відкрити файл PostScript
";  exit;}ps_set_info($ps, "Creator", "rotation.php");ps_set_info($ps, "Author", "Uwe Steinmann");ps_set_info($ps, "Title", "Rotation example") ;ps_set_info($ps, "BoundingBox", "0 0 596 842");$psfontu003du003dps_findfont($ps, "Helvetica", "", 0);ps_begin_page($ps, 596, 84 , 100, 100);ps_save($ps);ps_translate($ps, 100, 100);ps_rotate($ps, 45);rectangle($ps);ps_restore($ps);ps_setfont($ps, $psfont, 8.0);ps_show($ps, "Текст без повороту");ps_end_page($ps);ps_delete($ps);?> `

У наведеному вище прикладі показаний дуже поширений спосіб
повороту зображення (в даному випадку просто прямокутника) шляхом
повороту системи координат. Оскільки система координат графіки
передбачає, що (0,0) є початком координат, система координат
сторінки також перекладається, щоб розмістити графіку не на краю
сторінки. Зверніть увагу на порядок
[ps_translate()](function.ps-translate.md) та **ps_rotate()**. В
наведеному вище прикладі прямокутник обертається навколо точки (100, 100)
у непереведеній системі координат. Перемикання двох операторів дає
зовсім інший результат.

Щоб вивести наступний текст у вихідній позиції, усі модифікації
системи координат інкапсулюються в [ps_save()](function.ps-save.md) та
[ps_restore()](function.ps-restore.md).

### Дивіться також

- [ps_scale()](function.ps-scale.md) - Встановлює коефіцієнт
масштабування
- [ps_translate()](function.ps-translate.md) - Змінює систему
координат
