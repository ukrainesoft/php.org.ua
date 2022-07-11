- [«ps_begin_pattern](function.ps-begin-pattern.md)
- [ps_circle »](function.ps-circle.md)

- [PHP Manual](index.md)
- [Функції PS](ref.ps.md)
- Починає новий шаблон

#ps_begin_template

(PECL ps \>u003d 1.2.0)

ps_begin_template — Починає новий шаблон

### Опис

**ps_begin_template**(resource `$psdoc`, float `$width`, float
`$height`): int

Починає новий шаблон. На мові postscript шаблон називається формою. Він
створюється аналогічно візерунку, але використовується як зображення. Шаблони
часто використовуються для малюнків, які розміщуються у документі
кілька разів, наприклад, як логотип компанії. У шаблоні можна
використовувати усі функції малювання. Шаблон не буде намальований, поки він
не буде розміщено за допомогою
[ps_place_image()](function.ps-place-image.md).

### Список параметрів

`psdoc`
Ідентифікатор ресурсу файлу postscript, повернутий функцією
[ps_new()](function.ps-new.md).

`width`
Ширина шаблону в пікселях.

`height`
Висота шаблону в пікселях.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Приклади

**Приклад #1 Створення та використання шаблону**

` <?php$ps u003d ps_new();if (!ps_open_file($ps, "template.ps")) {  print "Не вдається відкрити файл PostScript
";  exit;}ps_set_parameter($ps, "warning", "true");ps_set_info($ps, "Creator", "template.php");ps_set_info($ps, "Author", "Уве Штайнманн"); ps_set_info($ps, "Title", "Приклад шаблону");$pstemplateu003du003dps_begin_template($ps, 30.0, 30.0);ps_moveto($ps, 0, 0);ps_lineto($ps, 3 $ps, 0, 30);ps_lineto($ps, 30, 0);ps_stroke($ps);ps_end_template($ps);ps_begin_page($ps, 596, 842);ps_place_image($ps, $pstemplate, 20.0 20.0, 1.0);ps_place_image($ps, $pstemplate, 50.0, 30.0, 0.5);ps_place_image($ps, $pstemplate, 70.0, 70.0, 0.6);ps_place_image($ps, $pstemplate, 30.0, 50.0, 1.3); ps_end_page($ps);ps_close($ps);ps_delete($ps);?> `

### Дивіться також

- [ps_end_template()](function.ps-end-template.md) - Завершує
шаблон
