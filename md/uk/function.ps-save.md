- [«ps_rotate](function.ps-rotate.md)
- [ps_scale »](function.ps-scale.md)

- [PHP Manual](index.md)
- [Функції PS](ref.ps.md)
- Зберігає поточний контекст

#ps_save

(PECL ps \>u003d 1.1.0)

ps_save — Зберігає поточний контекст

### Опис

**ps_save**(resource `$psdoc`): bool

Зберігає поточний графічний контекст, який містить кольори, налаштування
переміщення, повороту та багато іншого. Збережений контекст можна
відновити за допомогою [ps_restore()](function.ps-restore.md).

### Список параметрів

`psdoc`
Ідентифікатор ресурсу файлу postscript, повернутий
[ps_new()](function.ps-new.md).

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Дивіться також

- [ps_restore()](function.ps-restore.md) - Відновлює раніше
збережений контекст
