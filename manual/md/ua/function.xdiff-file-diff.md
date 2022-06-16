- [«xdiff_file_diff_binary](function.xdiff-file-diff-binary.md)
- [xdiff_file_merge3 »](function.xdiff-file-merge3.md)

- [PHP Manual](index.md)
- [Функції xdiff](ref.xdiff.md)
- Створити уніфікований патч із порівняння двох файлів

#xdiff_file_diff

(PECL xdiff \>u003d 0.2.0)

xdiff_file_diff — Створити уніфікований патч із порівняння двох файлів

### Опис

**xdiff_file_diff**(
string `$old_file`,
string `$new_file`,
string `$dest`,
int `$context` u003d 3,
bool `$minimal` u003d **`false`**
): bool

Створює уніфікований патч, що містить різницю двох файлів `old_file`
і `new_file` і зберігає їх у файл `dest`. Результат людиночитається.
Необов'язковий параметр `context` вказує, скільки рядків контексту
має бути додано навколо кожного зміненого рядка. Встановлення параметра
`minimal` рівним **`true`** призведе до створення максимально короткого
патча, що може тривати багато часу.

### Список параметрів

`old_file`
Шлях до першого, "старого" файлу.

`new_file`
Шлях до другого, "нового" файлу.

`dest`
Шлях до файлу патчу.

`context`
Вказує, скільки рядків контексту необхідно включити до патчу.

`minimal`
Встановіть рівним **`true`**, щоб мінімізувати розмір патча. Може
зайняти тривалий час.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **xdiff_file_diff()****

У наступному прикладі створюється уніфікований патч двох скриптів php
величиною контексту 2.

` <?php$old_version u003d 'my_script.php';$new_version u003d 'my_new_script.php';xdiff_file_diff($old_version, $new_version, 'my_script.diff', 2);?> `

### Примітки

> **Примітка**:
>
> З бінарними даними ця функція працює погано. Для бінарних патчів
> використовуйте
> [xdiff_file_bdiff()](function.xdiff-file-bdiff.md)/[xdiff_file_rabdiff()](function.xdiff-file-rabdiff.md).

### Дивіться також

- [xdiff_file_patch()](function.xdiff-file-patch.md) - Застосування
уніфікованого патчу до файлу
