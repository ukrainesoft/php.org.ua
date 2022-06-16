- [«gzseek](function.gzseek.md)
- [gzuncompress »](function.gzuncompress.md)

- [PHP Manual](index.md)
- [Функції Zlib](ref.zlib.md)
- Повертає поточну позицію читання/запису в покажчику gz-файлу

# gztell

(PHP 4, PHP 5, PHP 7, PHP 8)

gztell — Повертає поточну позицію читання/запису в покажчику gz-файлу

### Опис

**gztell**(resource `$stream`): int\|false

Отримує позицію покажчика файлу, тобто усунення в потоці
розпакованого файлу.

### Список параметрів

`stream`
Вказівник на gz-файл, повернутий після його успішного відкриття,
функцією [gzopen()](function.gzopen.md).

### Значення, що повертаються

Поточна позиція або ** false ** у разі виникнення помилки.

### Дивіться також

- [gzopen()](function.gzopen.md) - Відкрити файл gz-файл
- [gzseek()](function.gzseek.md) - Перемістити вказівник на позицію
в покажчику gz-файлу
- [gzrewind()](function.gzrewind.md) - Перемістити позицію покажчик
gz-файлу на початок
