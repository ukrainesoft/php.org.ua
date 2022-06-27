- [«ps_moveto](function.ps-moveto.md)
- [ps_open_file »](function.ps-open-file.md)

- [PHP Manual](index.md)
- [Функції PS](ref.ps.md)
- Створює новий об'єкт документа PostScript

#ps_new

(PECL ps \>u003d 1.1.0)

ps_new — Створює новий об'єкт документа PostScript

### Опис

**ps_new**(): resource\|false

Створює новий екземпляр документа. Функція не створює файл на диску або
у пам'яті, вона просто все налаштовує. За **ps_new()** зазвичай слідує
виклик [ps_open_file()](function.ps-open-file.md) для фактичного
створення документа postscript.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Ресурс документа PostScript або **`false`** у разі виникнення
помилки. Повертається значення передається всім іншим функціям в
як перший аргумент.

### Дивіться також

- [ps_delete()](function.ps-delete.md) - Видаляє всі ресурси
документа PostScript
