- [«xdiff_file_patch](function.xdiff-file-patch.md)
- [xdiff_string_bdiff_size »](function.xdiff-string-bdiff-size.md)

- [PHP Manual](index.md)
- [Функції xdiff](ref.xdiff.md)
- Створити бінарний патч порівнюючи два файли за допомогою поліномінального
алгоритму Rabin fingerprinting

#xdiff_file_rabdiff

(PECL xdiff \>u003d 1.5.0)

xdiff_file_rabdiff — Створити бінарний патч порівнюючи два файли за допомогою
поліномінального алгоритму Rabin fingerprinting

### Опис

**xdiff_file_rabdiff**(string `$old_file`, string `$new_file`, string
`$dest`): bool

Створює бінарний патч порівнюючи два файли та зберігає результат у файл.
Ця функція відрізняється від
[xdiff_file_bdiff()](function.xdiff-file-bdiff.md) використовуваним
алгоритмом, який працює швидше та виробляє патчі меншого
розміру. Ця функція працює як із текстом, так і з бінарними даними.
Патч згодом можна застосувати за допомогою функцій
[xdiff_file_bpatch()](function.xdiff-file-bpatch.md)/[xdiff_string_bpatch()](function.xdiff-string-bpatch.md).

Детальніше різниця алгоритмів пояснена на сайті
[» libxdiff](http://www.xmailserver.org/xdiff-lib.md).

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

**Приклад #1 Приклад використання **xdiff_file_rabdiff()****

Наступний код порівнює два архіви та створює патч.

` <?php$old_version u003d 'my_script_1.0.tgz';$new_version u003d 'my_script_1.1.tgz';xdiff_file_rabdiff($old_version, $new_version, 'my_script.bdiff');?> `

### Примітки

> **Примітка**:
>
> Обидва файли будуть завантажені в пам'ять, тому переконайтеся, що параметр
> memory_limit налаштовано коректно.

### Дивіться також

- [xdiff_file_bpatch()](function.xdiff-file-bpatch.md) - Застосувати
бінарний патч до файлу
