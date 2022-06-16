- [«ps_show_xy2](function.ps-show-xy2.md)
- [ps_show2 »](function.ps-show2.md)

- [PHP Manual](index.md)
- [Функції PS](ref.ps.md)
- Виводить текст у заданій позиції

#ps_show_xy

(PECL ps \>u003d 1.1.0)

ps_show_xy — Виводить текст у заданій позиції

### Опис

**ps_show_xy**(
resource `$psdoc`,
string `$text`,
float `$x`,
float `$y`
): bool

Виводить текст у заданій текстовій позиції.

### Список параметрів

`psdoc`
Ідентифікатор ресурсу файлу postscript, повернутий
[ps_new()](function.ps-new.md).

`text`
Текст для виведення.

`x`
Координата X лівого нижнього кута поля, що оточує текст.

`y`
Координата Y лівого нижнього кута поля, що оточує текст.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Дивіться також

- [ps_continue_text()](function.ps-continue-text.md) - Продовжує
текст у наступному рядку
- [ps_show()](function.ps-show.md) - Виводить текст
