- [«xdiff_file_bpatch](function.xdiff-file-bpatch.md)
- [xdiff_file_diff »](function.xdiff-file-diff.md)

- [PHP Manual](index.md)
- [Функції xdiff](ref.xdiff.md)
- Псевдонім для xdiff_file_bdiff

#xdiff_file_diff_binary

(PECL xdiff \>u003d 0.2.0)

xdiff_file_diff_binary — Псевдонім для xdiff_file_bdiff

### Опис

**xdiff_file_diff_binary**(string `$old_file`, string `$new_file`,
string `$dest`): bool

Створює файл бінарного патчу, порівнюючи два файли. Ця функція працює,
як з бінарними, і з текстовими файлами. Надалі, отриманий
патч можна застосувати за допомогою функцій
[xdiff_file_bpatch()](function.xdiff-file-bpatch.md).

Починаючи з версії 1.5.0 ця функція є псевдонімом
[xdiff_file_bdiff()](function.xdiff-file-bdiff.md).

### Список параметрів

`old_file`
Шлях до першого, "старого" файлу.

`new_file`
Шлях до другого, "нового" файлу.

`dest`
Шлях результуючого файлу патчу. Він буде містити різницю між
старим і новим файлом у бінарному, людинонечитаному.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Приклади

**Приклад #1 Апмсер використання **xdiff_file_diff_binary()****

Наступний код створює бінарний патч, порівнюючи два архіви.

` <?php$old_version u003d 'my_script_1.0.tgz';$new_version u003d 'my_script_1.1.tgz';xdiff_file_diff_binary($old_version, $new_version, 'my_script.bdiff');?> `

### Примітки

> **Примітка**:
>
> Обидва файли будуть завантажені в пам'ять, тому переконайтеся, що параметр
> memory_limit налаштовано коректно.

### Дивіться також

- [xdiff_file_bdiff()](function.xdiff-file-bdiff.md) - Створити
бінарний патч порівнюючи два файли
- [xdiff_file_bpatch()](function.xdiff-file-bpatch.md) - Застосувати
бінарний патч до файлу
