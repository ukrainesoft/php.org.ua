- [«ps_symbol_name](function.ps-symbol-name.md)
- [ps_symbol »](function.ps-symbol.md)

- [PHP Manual](index.md)
- [Функції PS](ref.ps.md)
- Отримує ширину гліфа

#ps_symbol_width

(PECL ps \>u003d 1.2.0)

ps_symbol_width — Отримує ширину гліфа.

### Опис

**ps_symbol_width**(
resource `$psdoc`,
int `$ord`,
int `$fontid` u003d 0,
float `$size` u003d 0.0
): float

Обчислює ширину гліфа в точках, якщо він був виведений із заданим шрифтом
та розміром шрифту. Функції потрібен файл метрик шрифтів Adobe для
розрахунку точної ширини.

### Список параметрів

`psdoc`
Ідентифікатор ресурсу файлу postscript, повернутий
[ps_new()](function.ps-new.md).

`ord`
Положення гліфа у векторному шрифт кодування.

`fontid`
Ідентифікатор шрифту. Якщо шрифт не вказано, буде
використовувати поточний шрифт.

`size`
Розмір шрифту. Якщо не вказано, використовується поточний розмір.

### Значення, що повертаються

Ширина гліфу у крапках.

### Дивіться також

- [ps_symbol()](function.ps-symbol.md) - Виводить гліф
- [ps_symbol_name()](function.ps-symbol-name.md) - Отримує ім'я
гліфа
