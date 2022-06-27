- [« spl_autoload_call](function.spl-autoload-call.md)
- [spl_autoload_functions »](function.spl-autoload-functions.md)

- [PHP Manual](index.md)
- [Функції SPL](ref.spl.md)
- Реєстрація та виведення розширень файлів для spl_autoload

# spl_autoload_extensions

(PHP 5 \>u003d 5.1.0, PHP 7, PHP 8)

spl_autoload_extensions — Реєстрація та виведення розширень файлів для
spl_autoload

### Опис

**spl_autoload_extensions**(?string `$file_extensions` u003d **`null`**):
string

Ця функція може задавати розширення файлів, у яких callback-функція
[\_\_autoload()](function.autoload.md) буде шукати класи та
інтерфейси. [spl_autoload()](function.spl-autoload.md) буде викликати
функцію \_\_autoload та передавати йому ці розширення. Також ця функція
може виводити вже зареєстровані розширення файлів.

> **Примітка**: Між заданими розширеннями файлів не повинно бути
> пробілів.

### Список параметрів

`file_extensions`
Якщо **`null`**, функція просто виведе список зареєстрованих на
на даний момент розширень, перерахованих через кому. Щоб змінити
цей список, необхідно викликати функцію, передавши їй рядок з
розширеннями, також перерахованими через кому.

### Значення, що повертаються

Список перелічених через кому розширень файлів для функції
[spl_autoload()](function.spl-autoload.md).

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -----------|
| 8.0.0 | `file_extensions` тепер припускає значення null. |

### Приклади

**Приклад #1 Приклад використання **spl_autoload_extensions()****

` <?phpspl_autoload_extensions(".php,.inc");?> `
