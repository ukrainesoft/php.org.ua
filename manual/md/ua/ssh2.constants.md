- [« Типи ресурсів](ssh2.resources.md)
- [Функції SSH2»] (ref.ssh2.md)

- [PHP Manual](index.md)
- [SSH2](book.ssh2.md)
- Обумовлені константи

# Зумовлені константи

Наведені нижче константи визначені даним модулем і можуть бути
доступні лише в тому випадку, якщо PHP був зібраний за допомогою цього
модуля або в тому випадку, якщо даний модуль був динамічно завантажений
під час виконання.

**`SSH2_FINGERPRINT_MD5`** (int)
Прапор для отримання ідентифікатора сервера у вигляді хеш-суми MD5 функцією
[ssh2_fingerprint()](function.ssh2-fingerprint.md).

**`SSH2_FINGERPRINT_SHA1`** (int)
Прапор для отримання ідентифікатора сервера у вигляді хеш-суми SHA1 функцією
[ssh2_fingerprint()](function.ssh2-fingerprint.md).

**`SSH2_FINGERPRINT_HEX`** (int)
Прапор для отримання ідентифікатора сервера функцією
[ssh2_fingerprint()](function.ssh2-fingerprint.md) як рядок
шістнадцяткових символів.

**`SSH2_FINGERPRINT_RAW`** (int)
Прапор для отримання ідентифікатора сервера функцією
[ssh2_fingerprint()](function.ssh2-fingerprint.md) у вигляді
невідформатованого рядка восьмибітних символів.

**`SSH2_TERM_UNIT_CHARS`** (int)
Прапор для функції [ssh2_shell()](function.ssh2-shell.md), що визначає,
що параметри `width` та `height` задаються у вигляді кількості символів.

**`SSH2_TERM_UNIT_PIXELS`** (int)
Прапор для функції [ssh2_shell()](function.ssh2-shell.md), що визначає,
що параметри `width` та `height` задаються в пікселях.

**`SSH2_DEFAULT_TERM_WIDTH`** (int)
Прийняте за замовчуванням значення ширини вікна терміналу, прийняте
функцією [ssh2_shell()](function.ssh2-shell.md).

**`SSH2_DEFAULT_TERM_HEIGHT`** (int)
Прийняте за умовчанням значення висоти вікна терміналу
функцією [ssh2_shell()](function.ssh2-shell.md).

**`SSH2_DEFAULT_TERM_UNIT`** (int)
Прийнята за замовчуванням одиниця виміру значень ширини та висоти вікна
терміналу, що приймаються функцією
[ssh2_shell()](function.ssh2-shell.md).

**`SSH2_STREAM_STDIO`** (int)
Прапор функції [ssh2_fetch_stream()](function.ssh2-fetch-stream.md),
запитує субканал STDIO.

**`SSH2_STREAM_STDERR`** (int)
Прапор функції [ssh2_fetch_stream()](function.ssh2-fetch-stream.md),
запитує субканал STDERR.

**`SSH2_DEFAULT_TERMINAL`** (string)
Типовий термінал прийнятий за замовчуванням (наприклад, vt102, ansi, xterm,
vanilla), що запитується функцією
[ssh2_shell()](function.ssh2-shell.md).

**`SSH2_POLLIN`** (int)

**`SSH2_POLLEXT`** (int)

**`SSH2_POLLOUT`** (int)

**`SSH2_POLLERR`** (int)

**`SSH2_POLLHUP`** (int)

**`SSH2_POLLNVAL`** (int)

**`SSH2_POLL_SESSION_CLOSED`** (int)

**`SSH2_POLL_CHANNEL_CLOSED`** (int)

**`SSH2_POLL_LISTENER_CLOSED`** (int)
