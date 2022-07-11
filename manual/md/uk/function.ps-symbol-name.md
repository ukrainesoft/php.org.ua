- [«ps_stroke](function.ps-stroke.md)
- [ps_symbol_width »](function.ps-symbol-width.md)

- [PHP Manual](index.md)
- [Функції PS](ref.ps.md)
- Отримує ім'я гліфа

#ps_symbol_name

(PECL ps \>u003d 1.2.0)

ps_symbol_name — Отримує ім'я гліфа

### Опис

**ps_symbol_name**(resource `$psdoc`, int `$ord`, int `$fontid` u003d 0):
string

Для функції потрібен файл метрик шрифтів Adobe, щоб знати, які
гліфи доступні.

### Список параметрів

`psdoc`
Ідентифікатор ресурсу файлу postscript, повернутий
[ps_new()](function.ps-new.md).

`ord`
Параметр `ord` – це позиція гліфа у векторі кодування шрифту.

`fontid`
Ідентифікатор шрифту. Якщо шрифт не вказано, буде
використовувати поточний шрифт.

### Значення, що повертаються

Ім'я гліфа у заданому шрифті.

### Дивіться також

- [ps_symbol()](function.ps-symbol.md) - Виводить гліф
- [ps_symbol_width()](function.ps-symbol-width.md) - Отримує ширину
гліфа
