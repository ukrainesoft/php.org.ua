- [« fann_copy](function.fann-copy.md)
- [fann_create_shortcut_array
»](function.fann-create-shortcut-array.md)

- [PHP Manual](index.md)
- [Функції Fann](ref.fann.md)
- Створює нейронну мережу зі зворотним розповсюдженням помилки з
конфігураційного файлу

# fann_create_from_file

(PECL fann u003d 1.0.0)

fann_create_from_file — Створює нейронну мережу зі зворотним
поширенням помилки з конфігураційного файлу

### Опис

**fann_create_from_file**(string `$configuration_file`): resource

Створює нейронну мережу зі зворотним поширенням помилки з
конфігураційного файлу, створеного раніше за допомогою
[fann_save()](function.fann-save.md).

### Список параметрів

`configuration_file`
Конфігураційний файл.

### Значення, що повертаються

Повертає ресурс (resource) нейронної мережі у разі успішного
виконання, або **`false`** у разі виникнення помилки.

### Дивіться також

- [fann_save()](function.fann-save.md) - Зберігає всю мережу у файл
конфігурації
