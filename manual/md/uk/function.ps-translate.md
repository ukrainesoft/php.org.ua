- [«ps_symbol](function.ps-symbol.md)
- [RpmInfo »](book.rpminfo.md)

- [PHP Manual](index.md)
- [Функції PS](ref.ps.md)
- Змінює систему координат

#ps_translate

(PECL ps \>u003d 1.1.0)

ps_translate — Змінює систему координат

### Опис

**ps_translate**(resource `$psdoc`, float `$x`, float `$y`): bool

Встановлює нову початкову точку системи координат.

### Список параметрів

`psdoc`
Ідентифікатор ресурсу файлу postscript, повернутий функцією
[ps_new()](function.ps-new.md).

`x`
Координата X почала зміненої системи координат.

`y`
Координата Y початку зміненої системи координат.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Приклади

**Приклад #1 Зміна системи координат**

`<?phpfunction rectangle($ps) {    ps_moveto($ps, 0, 0); ps_lineto($ps, 0, 50); ps_lineto($ps, 50, 50); ps_lineto($ps, 50, 0); ps_lineto($ps, 0, 0); ps_stroke($ps);}$ps u003d ps_new();if (!ps_open_file($ps, "translate.ps")) {  print "Не вдається відкрити файл PostScript
";  exit;}ps_set_info($ps, "Creator", "translate.php");ps_set_info($ps, "Author", "Уве Штайнманн");ps_set_info($ps, "Title", "Приклад перекладу ;ps_set_info($ps, "BoundingBox", "0 0 596 842");$psfontu003du003dps_findfont($ps, "Helvetica", "", 0);ps_begin_page($ps, 596, 84 , 100, 100);ps_translate($ps, 500, 750);rectangle($ps);ps_translate($ps, -500, -750);ps_setfont($ps, $psfont, 8.0);ps_show($ "Текст у вихідної позиції");ps_end_page($ps);ps_begin_page($ps, 596, 842);ps_set_text_pos($ps, 100, 100);ps_save($ps);ps_translate($ps, 500, 50, rectangle($ps);ps_restore($ps);ps_setfont($ps, $psfont, 8.0);ps_show($ps, "Текст у вихідній позиції");ps_end_page($ps);ps_delete($ps);?> `

Наведений вище приклад демонструє два можливі способи розмістити
графіку (в даному випадку просто прямокутник) у будь-якій позиції на
сторінці, у той час як сама графіка використовує свою власну
систему координат. Хитрість полягає в тому, щоб змінити початок
поточної системи координат перед малюванням прямокутника. Зміна
системи координат необхідно скасувати після того, як малюнок був
намальований.

На другій сторінці застосований дещо інший і елегантніший підхід.
Замість скасування зміни другим викликом **ps_translate()**, графічний
контекст зберігається до зміни системи координат та відновлюється
після малювання прямокутника.

### Дивіться також

- [ps_scale()](function.ps-scale.md) - Встановлює коефіцієнт
масштабування
- [ps_rotate()](function.ps-rotate.md) - Встановлює коефіцієнт
обертання
