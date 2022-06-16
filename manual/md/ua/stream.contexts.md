- [« Поточні фільтри](stream.filters.md)
- [Помилки потоку »](stream.errors.md)

- [PHP Manual](index.md)
- [Потоки](book.stream.md)
- Контексти потоків

# Контексти потоків

`Контекст` - це набір `параметрів` і залежних від контексту `опцій`,
який змінює чи розширює поведінку потоку. `Контексти` створюються
за допомогою функції
[stream_context_create()](function.stream-context-create.md) та можуть
бути передані більшості функцій файлової системи, пов'язаних з
створення потоків (наприклад, [fopen()](function.fopen.md),
[file()](function.file.md),
[file_get_contents()](function.file-get-contents.md), і т. д...).

Опції можуть бути визначені при виклику функції
[stream_context_create()](function.stream-context-create.md), або
пізніше, використовуючи функцію
[stream_context_set_option()](function.stream-context-set-option.md).
Список можливих `опцій` у даному контексті може бути знайдений у розділі
[Контекстні опції та параметри](context.md).

`Параметри` можуть бути визначені для `контекстів`, використовуючи функцію
[stream_context_set_params()](function.stream-context-set-params.md).
