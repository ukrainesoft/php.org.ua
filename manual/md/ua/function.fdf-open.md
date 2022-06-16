- [«fdf_open_string](function.fdf-open-string.md)
- [fdf_remove_item »](function.fdf-remove-item.md)

- [PHP Manual](index.md)
- [FDF](ref.fdf.md)
- Відкриває документ FDF

#fdf_open

(PHP 4, PHP 5 \< 5.3.0, PECL fdf SVN)

fdf_open — Відкриває документ FDF

### Опис

**fdf_open**(string `$filename`): resource

Відкриває файл із даними форми.

Ви також можете використати
[fdf_open_string()](function.fdf-open-string.md) для обробки
результатів POST-запиту PDF-форми.

### Список параметрів

`filename`
Шлях до файлу FDF. Файл повинен містити дані, повернені із PDF
форми або створені за допомогою [fdf_create()](function.fdf-create.md) та
[fdf_save()](function.fdf-save.md).

### Значення, що повертаються

Повертає дескриптор документа FDF або **`false`** у разі
виникнення помилки.

### Приклади

**Приклад #1 Доступ до даних форми**

` <?php// Збереження даних FDF во часовий файл$fdffp u003dfopen("test.fdf", "w");fwrite($fdffp, $HTTP_FDF_DATA, strlen($HTTP_FDF_df) / Відкриття тимчасового файлу і отримання даних$fdf u003d fdf_open("test.fdf");/* ... */fdf_close($fdf);?> `

### Дивіться також

- [fdf_open_string()](function.fdf-open-string.md) - Читає FDF
документ з рядка
- [fdf_close()](function.fdf-close.md) - Закриває FDF-документ
- [fdf_create()](function.fdf-create.md) - Створює новий документ
FDF
- [fdf_save()](function.fdf-save.md) - Зберігає документ FDF
