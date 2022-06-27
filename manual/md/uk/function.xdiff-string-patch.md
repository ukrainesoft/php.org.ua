- [«
xdiff_string_patch_binary](function.xdiff-string-patch-binary.md)
- [xdiff_string_rabdiff »](function.xdiff-string-rabdiff.md)

- [PHP Manual](index.md)
- [Функції xdiff](ref.xdiff.md)
- Застосувати звичайний патч до рядка

#xdiff_string_patch

(PECL xdiff \>u003d 0.2.0)

xdiff_string_patch — Застосувати звичайний патч до рядка

### Опис

**xdiff_string_patch**(
string `$str`,
string `$patch`,
int `$flags` u003d ?,
string `&$error` u003d ?
): string

Застосовує до рядка `str` звичайний патч `patch` та повертає результат.
`patch` має бути звичайним патчем, створеним за допомогою функцій
[xdiff_file_diff()](function.xdiff-file-diff.md) або
[xdiff_string_diff()](function.xdiff-string-diff.md). Опціональний
параметр `flags` задає режим операції Усі відкинуті частини патчу
будуть записані в змінну `error`.

### Список параметрів

`str`
Оригінальний рядок.

`patch`
Стандартний патч. Повинен бути створений функціями
[xdiff_string_diff()](function.xdiff-string-diff.md), або
[xdiff_file_diff()](function.xdiff-file-diff.md), або за допомогою
інструменти, що створюють сумісні патчі.

`flags`
`flags` може бути **`XDIFF_PATCH_NORMAL`** (режим за замовчуванням,
нормальний патч) або **`XDIFF_PATCH_REVERSE`** (реверсивний патч).

Починаючи з версії 1.5.0, можна використовувати бінарне АБО для додавання
прапора **`XDIFF_PATCH_IGNORESPACE`**.

`error`
Якщо заданий, то цю змінну будуть записані всі відкинуті частини
патча.

### Значення, що повертаються

Повертає рядок або **`false`** у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **xdiff_string_patch()****

Наступний код застосовує патч до статті.

` <?php$old_article u003d file_get_contents('./old_article.txt');$diff u003d $_SERVER['patch']; /* Допустимо хтось відправив патч через html-форму */$errors u003d '';$new_article u003d xdiff_string_patch($old_article, $diff, XDIFF_PATCH_NORMAL, $                  :
";   echo $new_article;}if (strlen($errors)) {   echo "Відхилено:
";   echo $errors;}?> `

### Дивіться також

- [xdiff_string_diff()](function.xdiff-string-diff.md) - Створити
звичайний патч для двох рядків
