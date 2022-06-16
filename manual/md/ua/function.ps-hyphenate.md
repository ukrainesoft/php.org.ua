- [«ps_get_value](function.ps-get-value.md)
- [ps_include_file »](function.ps-include-file.md)

- [PHP Manual](index.md)
- [Функції PS](ref.ps.md)
- Переносить слово

#ps_hyphenate

(PECL ps \>u003d 1.1.1)

ps_hyphenate - Переносить слово

### Опис

**ps_hyphenate**(resource `$psdoc`, string `$text`): array\|false

Переносить вказане слово. Функція **ps_hyphenate()** оцінює дефіси
значення (встановлюється [ps_set_value()](function.ps-set-value.md))
та дефіси параметра (встановлюється
[ps_set_parameter()](function.ps-set-parameter.md)). Перед викликом
цієї функції необхідно встановити дефіс.

Для роботи функції потрібно, щоб категорія мовного стандарту
LC_CTYPE було встановлено коректно. Це робиться при ініціалізації
модуля із застосуванням змінних оточення. У системах Unix для
отримання додаткової інформації прочитайте довідкову сторінку
мовних стандартів

### Список параметрів

`psdoc`
Ідентифікатор ресурсу файлу postscript, повернутий функцією
[ps_new()](function.ps-new.md).

`text`
`text` не повинен містити жодних символів, відмінних від літер. Можливі
позиції для переносів повертаються як масиву цілих чисел. кожне
число - це позиція символу `text`, після якої може бути виконаний
перенесення.

### Значення, що повертаються

Масив цілих чисел, що вказує на положення можливих переносів у тексті
або **`false`** у разі виникнення помилки.

### Приклади

**Приклад #1 Перенесення тексту**

` <?php$word u003d "Koordinatensystem";$psdoc u003d ps_new();ps_set_parameter($psdoc, "hyphendict", "hyph_de.dic");$hyphens u003d ps_hyphenate($psdoc, $word); u003d0; $i<strlen($word); $i++) {  echo $word[$i]; if(in_array($i, $hyphens))    echo "-";}ps_delete($psdoc);?> `

Результат виконання цього прикладу:

Ko-ordi-na-ten-sys-tem

### Дивіться також

- [ps_show_boxed()](function.ps-show-boxed.md) - Виводить текст у
поле
- locale(1)
