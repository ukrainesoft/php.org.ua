- [«ps_begin_page](function.ps-begin-page.md)
- [ps_begin_template »](function.ps-begin-template.md)

- [PHP Manual](index.md)
- [Функції PS](ref.ps.md)
- Починає новий візерунок

#ps_begin_pattern

(PECL ps \>u003d 1.2.0)

ps_begin_pattern — Починає новий візерунок

### Опис

**ps_begin_pattern**(
resource `$psdoc`,
float `$width`,
float `$height`,
float `$xstep`,
float `$ystep`,
int `$painttype`
): int\|false

Починає новий візерунок. Візерунок схожий на сторінку, що містить, наприклад,
малюнок, який можна використовувати для заливання областей. Він
використовується як колір, викликаючи
[ps_setcolor()](function.ps-setcolor.md) та встановлюючи колірне
простір у `pattern`.

### Список параметрів

`psdoc`
Ідентифікатор ресурсу файлу postscript, повернутий функцією
[ps_new()](function.ps-new.md).

`width`
Ширина візерунка у пікселях.

`height`
Висота візерунка у пікселях.

`x-step`
Відстань у пікселях розміщення візерунка по горизонталі.

`y-step`
Відстань у пікселях розміщення візерунка по вертикалі.

`painttype`
Можливо 1 або 2.

### Значення, що повертаються

Ідентифікатор візерунка або **`false`** у разі виникнення помилки.

### Приклади

**Приклад #1 Створення та використання візерунка**

` <?php$ps u003d ps_new();if (!ps_open_file($ps, "pattern.ps")) {  print "Не вдається відкрити файл PostScript
";  exit;}ps_set_parameter($ps, "warning", "true");ps_set_info($ps, "Creator", "pattern.php");ps_set_info($ps, "Author", "Уве Штайнманн"); ps_set_info($ps, "Title", "Приклад узору");$pspatternu003du003dps_begin_pattern($ps, 10.0, 10.0, 10.0, 10.0, 1);ps_setlinewidth($ps,$0,$0, , "rgb", 0.0, 0.0, 1.0, 0.0);ps_moveto($ps, 0, 0);ps_lineto($ps, 7, 7);ps_stroke($ps);ps_moveto($ps, 0, 7); ps_lineto($ps, 7, 0);ps_stroke($ps);ps_end_pattern($ps);ps_begin_page($ps, 596, 842);ps_setcolor($ps, "both", "pattern", $pspattern, 0.0, 0.0, 0.0);ps_rect($ps, 50, 400, 200, 200);ps_fill($ps);ps_end_page($ps);ps_close($ps);ps_delete($ps);?> `

### Дивіться також

- [ps_end_pattern()](function.ps-end-pattern.md) - Завершує шаблон
- [ps_setcolor()](function.ps-setcolor.md) - Встановлює поточний
колір
- [ps_shading_pattern()](function.ps-shading-pattern.md) - Створює
візерунок на основі затінення
