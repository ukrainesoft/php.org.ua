- [«password_algos](function.password-algos.md)
- [password_hash »](function.password-hash.md)

- [PHP Manual](index.md)
- [Функції хешування паролів](ref.password.md)
- Повертає інформацію про заданий хеш

#password_get_info

(PHP 5 \>u003d 5.5.0, PHP 7, PHP 8)

password_get_info — Повертає інформацію про заданий хеш

### Опис

**password_get_info**(string `$hash`): array

Якщо передано коректний хеш, створений підтримуваним
[password_hash()](function.password-hash.md) алгоритмом, то ця
функція поверне інформацію про це хеш.

### Список параметрів

`hash`
Хеш, створений функцією [password_hash()](function.password-hash.md).

### Значення, що повертаються

Повертає асоціативний масив із трьома елементами:

- `algo`, що містить одну з [констант алгоритмів
паролів](password.constants.md)
- `algoName`, що містить ім'я алгоритму в людиночитаному вигляді
- `options`, що включає опції, передані під час виклику
[password_hash()](function.password-hash.md)
