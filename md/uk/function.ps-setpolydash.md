- [«ps_setoverprintmode](function.ps-setoverprintmode.md)
- [ps_shading_pattern »](function.ps-shading-pattern.md)

- [PHP Manual](index.md)
- [Функції PS](ref.ps.md)
- Встановлює зовнішній вигляд пунктирної лінії

#ps_setpolydash

(PECL ps \>u003d 1.1.0)

ps_setpolydash - Встановлює зовнішній вигляд пунктирної лінії

### Опис

**ps_setpolydash**(resource `$psdoc`, float `$arr`): bool

Встановлює довжину чорних та білих частин пунктирної лінії.
**ps_setpolydash()** використовується для встановлення більш складних шаблонів
тире.

### Список параметрів

`psdoc`
Ідентифікатор ресурсу файлу postscript, повернутий
[ps_new()](function.ps-new.md).

`arr`
`arr` – це список елементів довжини по черзі для чорної та білої частини.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Приклади

**Приклад #1 Малювання пунктирної лінії**

` <?php$ps u003d ps_new();if (!ps_open_file($ps, "polydash.ps")) {   print "Не вдається відкрити файл PostScript
";    exit;}ps_set_info($ps, "Creator", "polydash.php");ps_set_info($ps, "Author", "Уве Штайнманн");ps_set_info($ps, "Title", );ps_begin_page($ps, 596, 842);ps_setpolydash($ps, array(10, 5, 2, 5));ps_moveto($ps, 100, 100);ps_lineto($ps, 200,_2 ($ps);ps_end_page($ps);ps_delete($ps);?> `

У цьому прикладі малюється лінія з 10 і 2 точок з проміжками 5 точок
між ними.

### Дивіться також

- [ps_setdash()](function.ps-setdash.md) - Встановлює зовнішній вигляд
пунктирної лінії
