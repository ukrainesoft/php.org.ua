- [«xdiff_file_patch_binary](function.xdiff-file-patch-binary.md)
- [xdiff_file_rabdiff »](function.xdiff-file-rabdiff.md)

- [PHP Manual](index.md)
- [Функції xdiff](ref.xdiff.md)
- Застосування уніфікованого патчу до файлу

#xdiff_file_patch

(PECL xdiff \>u003d 0.2.0)

xdiff_file_patch — Застосування уніфікованого патчу до файлу

### Опис

**xdiff_file_patch**(
string `$file`,
string `$patch`,
string `$dest`,
int `$flags` u003d DIFF_PATCH_NORMAL
):
[mixed](language.types.declarations.md#language.types.declarations.mixed)

Застосовує до файлу `file` патча `patch` та зберігає результат у файл.
`patch` має бути уніфікованим патчем, створеним функціями
[xdiff_file_diff()](function.xdiff-file-diff.md)/[xdiff_string_diff()](function.xdiff-string-diff.md).
Необов'язковий параметр `flags` визначає режим операції.

### Список параметрів

`file`
Оригінальний файл.

`patch`
Уніфікований патч. Його можна створити функціями
[xdiff_string_diff()](function.xdiff-string-diff.md) та
[xdiff_file_diff()](function.xdiff-file-diff.md) або іншими
сумісними інструментами.

`dest`
Шлях до результуючого файлу.

`flags`
Можливо **`XDIFF_PATCH_NORMAL`** (режим за замовчуванням, нормальний
створення патчу) або **`XDIFF_PATCH_REVERSE`** (відкат патчу).

Починаючи з версії 1.5.0 ви можете використовувати побітове АБО для
підключення прапора **`XDIFF_PATCH_IGNORESPACE`**.

### Значення, що повертаються

Повертає **`true`**, якщо створення патча пройшло успішно, рядок з
відхиленими даними, якщо ні, і **`false`** у разі внутрішньої
помилки.

### Приклади

**Приклад #1 Приклад використання **xdiff_file_patch()****

Наступний код використовує уніфікований патч до файлу.

` <?php$old_version u003d 'my_script-1.0.php';$patch u003d 'my_script.patch';$errors u003d xdiff_file_patch($old_version, $patch, 'my_script-1.1.php');if (is_string($error) )) {   echo "Відхилені:
";   echo $errors;}?> `

**Приклад #2 Patch reversing example**

Наступний код застосовує відкат патча до файлу.

` <?php$new_version u003d 'my_script-1.1.php';$patch u003d 'my_script.patch';$errors u003d xdiff_file_patch($new_version, $patch, 'my_script-1.0.php', XDIFF_PAT $errors)) {  echo "Відхилено:
";   echo $errors;}?> `

### Дивіться також

- [xdiff_file_diff()](function.xdiff-file-diff.md) - Створити
уніфікований патч із порівняння двох файлів
