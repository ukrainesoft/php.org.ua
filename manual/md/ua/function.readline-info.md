- [«
readline_completion_function](function.readline-completion-function.md)
- [readline_list_history »](function.readline-list-history.md)

- [PHP Manual](index.md)
- [Функції Readline](ref.readline.md)
- Встановлює/читає різні внутрішні змінні readline

#readline_info

(PHP 4, PHP 5, PHP 7, PHP 8)

readline_info — Встановлює/читає різні внутрішні змінні
readline

### Опис

**readline_info**(?string `$var_name` u003d **`null`**,
int\|string\|bool\|null `$value` u003d **`null`**):
[mixed](language.types.declarations.md#language.types.declarations.mixed)

Встановлює/читає різні внутрішні змінні readline.

### Список параметрів

`var_name`
Ім'я змінної.

`value`
Якщо поставлено, то змінної буде присвоєно це значення.

### Значення, що повертаються

Якщо викликати функцію без параметрів, буде повернено масив значень
всіх внутрішніх змінних readline. Елементи масиву матимуть
наступні індекси: done, end, erase_empty_line, library_version,
line_buffer, mark, pending_input, point, prompt, readline_name та
terminal_name.

Якщо викликати з одним або двома параметрами, то буде повернено
старе/поточне значення змінної.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- --------------|
| 8.0.0 | `var_name` та `value` тепер допускають значення null. |
