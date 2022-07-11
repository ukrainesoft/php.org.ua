- [«xdiff_file_bdiff_size](function.xdiff-file-bdiff-size.md)
- [xdiff_file_bpatch »](function.xdiff-file-bpatch.md)

- [PHP Manual](index.md)
- [Функції xdiff](ref.xdiff.md)
- Створити бінарний патч порівнюючи два файли

#xdiff_file_bdiff

(PECL xdiff \>u003d 1.5.0)

xdiff_file_bdiff — Створити бінарний патч порівнюючи два файли

### Опис

**xdiff_file_bdiff**(string `$old_file`, string `$new_file`, string
`$dest`): bool

Створює файл бінарного патчу, порівнюючи два файли. Ця функція працює
як з бінарними, і з текстовими файлами. Надалі, отриманий
патч можна застосувати за допомогою функцій
[xdiff_file_bpatch()](function.xdiff-file-bpatch.md)/[xdiff_string_bpatch()](function.xdiff-string-bpatch.md).

### Список параметрів

`old_file`
Шлях до першого, "старого" файлу.

`new_file`
Шлях до другого, "нового" файлу.

`dest`
Шлях результуючого файлу патчу. Він буде містити різницю між
старим та новим файлом у бінарному, людинонечитаному форматі.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **xdiff_file_bdiff()****

Наступний код створює бінарний патч.

` <?php$old_version u003d 'my_script_1.0.tgz';$new_version u003d 'my_script_1.1.tgz';xdiff_file_bdiff($old_version, $new_version, 'my_script.bdiff');?> `

### Примітки

> **Примітка**:
>
> Обидва файли будуть завантажені в пам'ять, тому переконайтеся, що параметр
> memory_limit налаштовано коректно.

### Дивіться також

- [xdiff_file_bpatch()](function.xdiff-file-bpatch.md) - Застосувати
бінарний патч до файлу
