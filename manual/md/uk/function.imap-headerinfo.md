- [« imap_header](function.imap-header.md)
- [imap_headers »](function.imap-headers.md)

- [PHP Manual](index.md)
- [Функції IMAP](ref.imap.md)
- Прочитати заголовок повідомлення

#imap_headerinfo

(PHP 4, PHP 5, PHP 7, PHP 8)

imap_headerinfo — Прочитати заголовок повідомлення

### Опис

**imap_headerinfo**(
[IMAP\Connection](class.imap-connection.md) `$imap`,
int `$message_num`,
int `$from_length` u003d 0,
int `$subject_length` u003d 0
): stdClass\|false

Витягує інформацію про повідомлення з його заголовка.

### Список параметрів

`imap`
Примірник [IMAP\Connection](class.imap-connection.md).

`message_num`
Номер повідомлення

`from_length`
Кількість символів у властивості `fetchfrom`. Має бути більше чи одно
нулю.

`subject_length`
Кількість символів у властивості `fetchsubject`. Має бути більше або
одно нулю.

`defaulthost`

### Значення, що повертаються

У разі виникнення помилки повертає **`false`**. У разі успішного
виконання повертає об'єкт із такими властивостями:

- toaddress - повний рядок to:, максимум 1024 символів
- to - масив об'єктів з поля To:, з наступними властивостями:
`personal`, `adl`, `mailbox` та `host`
- fromaddress - повний рядок from:, максимум 1024 символів
- from - масив об'єктів з поля From:, з наступними властивостями:
`personal`, `adl`, `mailbox` та `host`
- ccaddress - повний рядок cc: максимум 1024 символів
- cc - масив об'єктів з поля Cc:, з наступними властивостями:
`personal`, `adl`, `mailbox` та `host`
- bccaddress - повний рядок bcc:, максимум 1024 символів
- bcc - масив об'єктів з поля Bcc:, з наступними властивостями:
`personal`, `adl`, `mailbox` та `host`
- reply_toaddress - повний рядок Reply-To:, максимум 1024 символів
- reply_to - масив об'єктів з поля Reply-To: з наступними
властивостями: `personal`, `adl`, `mailbox` та `host`
- senderaddress - повний рядок sender:, максимум 1024 символів
- sender - масив об'єктів з поля Sender: з наступними властивостями:
`personal`, `adl`, `mailbox` та `host`
- return_pathaddress - повний рядок Return-Path:, максимум 1024
символів
- return_path - масив об'єктів з поля Return-Path:, з наступними
властивостями: `personal`, `adl`, `mailbox` та `host`
- remail -
- date - Дата листа, як вона вказана у заголовку
- Date - Те саме, що й date
- subject - Тема листа
- Subject - Те саме, що й subject
- in_reply_to -
- message_id -
- newsgroups -
- followup_to -
- references -
- Recent - `R` якщо нове та прочитане, `N` якщо нове і не
прочитане, якщо не нове.
- Unseen - `U` якщо НЕ прочитано і НЕ нове, '' якщо прочитано АБО
не прочитано і нове
- Flagged - `F` якщо зазначено, '' якщо ні
- Answered - `A` якщо відповідь, '' якщо ні
- Deleted - `D` якщо видалено, '' якщо ні
- Draft - `X` якщо чернетка, '' якщо ні
- Msgno - Номер повідомлення
- MailDate -
- Size - Розмір повідомлення
- udate - час відсилання у вигляді тимчасової мітки Unix
- fetchfrom - поле from, відформатоване відповідно до
`from_length`
- fetchsubject - поле subject, відформатоване відповідно до
`subject_length`

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- -------------------------------------------------- ---------------|
| 8.1.0 | Параметр `imap` тепер чекає на екземпляр [IMAP\Connection](class.imap-connection.md); раніше очікувався ресурс ([resource](language.types.resource.md)). |
| 8.0.0 | Параметр 'defaulthost' був видалений. |

### Дивіться також

- [imap_fetch_overview()](function.imap-fetch-overview.md) - Огляд
інформації, що міститься в заголовках повідомлень
