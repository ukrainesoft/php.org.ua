- [«ps_lineto](function.ps-lineto.md)
- [ps_moveto »](function.ps-moveto.md)

- [PHP Manual](index.md)
- [Функції PS](ref.ps.md)
- Створює плашковий колір

#ps_makespotcolor

(PECL ps \>u003d 1.1.0)

ps_makespotcolor — Створює плашковий колір

### Опис

**ps_makespotcolor**(resource `$psdoc`, string `$name`, int `$reserved`
u003d 0): int

Створює плашковий колір із поточного кольору заливки. Колір заливки повинен
бути визначений у колірному просторі rgb, cmyk чи gray. Назва
плашкового кольору може бути довільним. Плашковий колір може бути
встановлений як будь-який колір за допомогою
[ps_setcolor()](function.ps-setcolor.md). Якщо документ не друкується,
а відображається програмою перегляду PostScript, використовується заданий
колір у зазначеному колірному просторі.

### Список параметрів

`psdoc`
Ідентифікатор ресурсу PostScript, повернутий функцією
[ps_new()](function.ps-new.md).

`name`
Назва плашкового кольору, наприклад Pantone 5565.

### Значення, що повертаються

Ідентифікатор нового плашкового кольору або 0 у разі виникнення
помилки.

### Приклади

**Приклад #1 Створення та використання плашкового кольору**

` <?php$ps u003d ps_new();if (!ps_open_file($ps, "spotcolor.ps")) {  print "Не вдається відкрити файл PostScript
";  exit;}ps_set_info($ps, "Creator", "spotcolor.php");ps_set_info($ps, "Author", "Уве Штайнманн");ps_set_info($ps, "Title", "Приклад пла );ps_begin_page($ps, 596, 842);ps_setcolor($ps, "fill", "cmyk", 0.37, 0.0, 0.34, 0.34);$spotcolor u003d ps_makespotcolor$5 ;ps_setcolor($ps, "fill", "spot", $spotcolor, 0.5, 0.0, 0.0);ps_moveto($ps, 100, 100);ps_lineto($ps, 100, 200);ps_line , 200);ps_lineto($ps, 200, 100);ps_lineto($ps, 100, 100);ps_fill($ps);ps_end_page($ps);ps_delete($ps);?> `

У цьому прикладі створюється плашковий колір "PANTONE 5565 C", який
є більш темно-зеленим (оливковим) і заповнює прямокутник з
інтенсивністю 50%.

### Дивіться також

- [ps_setcolor()](function.ps-setcolor.md) - Встановлює поточний
колір
