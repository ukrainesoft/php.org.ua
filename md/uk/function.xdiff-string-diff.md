- [«xdiff_string_diff_binary](function.xdiff-string-diff-binary.md)
- [xdiff_string_merge3 »](function.xdiff-string-merge3.md)

- [PHP Manual](index.md)
- [Функції xdiff](ref.xdiff.md)
- Створити звичайний патч для двох рядків

#xdiff_string_diff

(PECL xdiff \>u003d 0.2.0)

xdiff_string_diff — Створити звичайний патч для двох рядків

### Опис

**xdiff_string_diff**(
string `$old_data`,
string `$new_data`,
int `$context` u003d 3,
bool `$minimal` u003d **`false`**
): string

Створює патч для рядків `old_data` та `new_data`. Підсумковий патч
людиночитаємо. Опціональний параметр `context` вказує, скільки рядків
контексту має бути додано до патчу навколо кожної відмінності.
Встановлення параметра `minimal` у значення **`true`** дозволить отримати
максимально короткий патч (може зайняти багато часу).

### Список параметрів

`old_data`
Перший рядок із даними. Це будуть "старі" дані.

`new_data`
Другий рядок із даними. Це будуть "нові" дані.

`context`
Кількість рядків контексту навколо кожної зміни.

`minimal`
Якщо **`true`**, то буде створено максимально короткий патч (може зайняти
багато часу).

### Значення, що повертаються

Повертає рядок із патчем, або **`false`** у разі виникнення
помилки.

### Приклади

**Приклад #1 Приклад використання **xdiff_string_diff()****

Наступний код виведе різницю двох статей.

` <?php$old_article u003d file_get_contents('./old_article.txt');$new_article u003d $_REQUEST['article']; /* Допустимо хтось відправив нову статтю через html-форму */$diff u003d xdiff_string_diff($old_article, $new_article, 1);if (is_string($diff)) х         
";   echo $diff;}?> `

### Примітки

> **Примітка**:
>
> Ця функція не призначена для роботи з бінарними даними. Для
> бінарного порівняння використовуйте
> [xdiff_string_bdiff()](function.xdiff-string-bdiff.md) та
> [xdiff_string_rabdiff()](function.xdiff-string-rabdiff.md).

### Дивіться також

- [xdiff_string_patch()](function.xdiff-string-patch.md) - Застосувати
звичайний патч до рядка
