- [«ps_curveto](function.ps-curveto.md)
- [ps_end_page »](function.ps-end-page.md)

- [PHP Manual](index.md)
- [Функції PS](ref.ps.md)
- Видаляє всі ресурси документа PostScript

#ps_delete

(PECL ps \>u003d 1.1.0)

ps_delete — Видалення всіх ресурсів документа PostScript

### Опис

**ps_delete**(resource `$psdoc`): bool

В основному звільняє пам'ять, використовувану документом. Також закриває
файл, якщо він не був раніше закритий за допомогою
[ps_close()](function.ps-close.md). У будь-якому випадку вам слід закрити
файл за допомогою [ps_close()](function.ps-close.md) раніше, тому що
[ps_close()](function.ps-close.md) не лише закриває файл, а й
виводить дані, що містять коментарі PostScript, такі як кількість
сторінок у документі та додавання ієрархії закладок.

### Список параметрів

`psdoc`
Ідентифікатор ресурсу файлу postscript, повернутий
[ps_new()](function.ps-new.md).

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Дивіться також

- [ps_close()](function.ps-close.md) - Закриває документ PostScript
