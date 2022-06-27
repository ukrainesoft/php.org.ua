- [«ps_include_file](function.ps-include-file.md)
- [ps_makespotcolor »](function.ps-makespotcolor.md)

- [PHP Manual](index.md)
- [Функції PS](ref.ps.md)
- Малює лінію

#ps_lineto

(PECL ps \>u003d 1.1.0)

ps_lineto — Малює лінію

### Опис

**ps_lineto**(resource `$psdoc`, float `$x`, float `$y`): bool

Додає до поточного шляху пряму лінію від поточної точки до заданих
координат. Використовуйте [ps_moveto()](function.ps-moveto.md), щоб
встановити початкову точку лінії.

### Список параметрів

`psdoc`
Ідентифікатор ресурсу файлу postscript, повернутий функцією
[ps_new()](function.ps-new.md).

`x`
Координата X кінцевої точки лінії.

`y`
Координати Y кінцевої точки лінії.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Приклади

**Приклад #1 Малювання прямокутника**

` <?php$ps u003d ps_new();if (!ps_open_file($ps, "rectangle.ps")) {  print "Не вдається відкрити файл PostScript
";  exit;}ps_set_info($ps, "Creator", "rectangle.php");ps_set_info($ps, "Author", "Уве Штайнманн");ps_set_info($ps, "Title", "Приклад Лі ;ps_begin_page($ps, 596, 842);ps_moveto($ps, 100, 100);ps_lineto($ps, 100, 200);ps_lineto($ps, 200, 200);ps_lineto($0, ;ps_lineto($ps, 100, 100);ps_stroke($ps);ps_end_page($ps);ps_delete($ps);?> `

### Дивіться також

- [ps_moveto()](function.ps-moveto.md) - Встановлює поточну точку
