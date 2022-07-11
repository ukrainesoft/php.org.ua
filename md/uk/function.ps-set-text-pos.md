- [«ps_set_parameter](function.ps-set-parameter.md)
- [ps_set_value »](function.ps-set-value.md)

- [PHP Manual](index.md)
- [Функції PS](ref.ps.md)
- Встановлює позицію для виведення тексту

#ps_set_text_pos

(PECL ps \>u003d 1.1.0)

ps_set_text_pos — Встановлює позицію для виведення тексту

### Опис

**ps_set_text_pos**(resource `$psdoc`, float `$x`, float `$y`): bool

Встановлює позицію для наступного виведення тексту. Можна встановити
значення X та Y окремо, викликавши
[ps_set_value()](function.ps-set-value.md) і вибравши `textx` або
`texty` відповідно як ім'я значення.

Для виведення тексту в певному місці зручніше використовувати
[ps_show_xy()](function.ps-show-xy.md) замість встановлення позиції тексту
та виклику [ps_show()](function.ps-show.md).

### Список параметрів

`psdoc`
Ідентифікатор ресурсу файлу postscript, повернутий функцією
[ps_new()](function.ps-new.md).

`x`
Координата X нова позиція тексту.

`y`
Координати у новій позиції тексту.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Приклади

**Приклад #1 Розміщення тексту у заданій позиції**

` <?php$ps u003d ps_new();if (!ps_open_file($ps, "text.ps")) {  print "Не вдається відкрити файл PostScript
";  exit;}ps_set_info($ps, "Creator", "rectangle.php");ps_set_info($ps, "Author", "Уве Штайнманн");ps_set_info($ps, "Title", "Приклад розміщення" );ps_begin_page($ps, 596, 842);$psfontu003du003dps_findfont($ps, "Helvetica", "", 0);ps_setfont($ps, $psfont, 8.0);ps_show_xy($ps, (100, 100)", 100, 100);ps_set_value($ps, "textx", 100);ps_set_value($ps, "texty", 120);ps_show($ps, "Some text at| ");ps_end_page($ps);ps_delete($ps);?> `

### Дивіться також

- [ps_set_value()](function.ps-set-value.md) - Встановлює
певні значення
- [ps_show()](function.ps-show.md) - Виводить текст
