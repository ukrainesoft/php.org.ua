- [« imap_lsub](function.imap-lsub.md)
- [imap_mail_copy »](function.imap-mail-copy.md)

- [PHP Manual](index.md)
- [Функції IMAP](ref.imap.md)
- Створити MIME-повідомлення на основі заданих обгортки та тіла

#imap_mail_compose

(PHP 4, PHP 5, PHP 7, PHP 8)

imap_mail_compose — Створити MIME-повідомлення на основі заданих обгортки та
тіла

### Опис

**imap_mail_compose**(array `$envelope`, array `$bodies`): string\|false

Створює MIME-повідомлення на основі обгортки `envelope` та тіла `bodies`.

### Список параметрів

`envelope`
Асоціативний масив із полями заголовка. Допустимі ключі: ``remail'``,
``return_path'', ``date'', ``from'', ``reply_to"`, `"in_reply_to"`,
"subject", "to", "cc", "bcc" і "message_id", які
встановлюють відповідні заголовки повідомлень у заданий рядок
(string). Для встановлення додаткових заголовків підтримується ключ
``custom_headers'', який містить асоціативний масив інших
заголовків, наприклад, `["User-Agent: My Mail Client"]`.

`bodies`
Індексований масив тел. Перше тіло – це основна частина повідомлення;
подальші тіла обробляються тільки якщо воно з типом
**`TYPEMULTIPART`**; ці тіла становлять тіла частин.

| Ключ | Тип | Опис |
|--------------------|--------|-------------------- -------------------------------------------------- -------------------------------------------------- -------------------------------------------------- ---------------|
| `type` | int | Тип MIME. Один з **`TYPETEXT`** (за замовчуванням), **`TYPEMULTIPART`**, **`TYPEMESSAGE`**, **`TYPEAPPLICATION`**, **`TYPEAUDIO`**, **`TYPEIMAGE `**, **`TYPEMODEL`** або **`TYPEOTHER`**. |
| 'encoding' | int | Значення `Content-Transfer-Encoding`. Одне з **`ENC7BIT`** (default), **`ENC8BIT`**, **`ENCBINARY`**, **`ENCBASE64`**, **`ENCQUOTEDPRINTABLE`** або **`ENCOTHER` **. |
| `charset` | string | Параметр charset типу MIME. |
| `type.parameters` | array | Асоціативний масив (array) імен параметрів Content-Type та їх значень. |
| `subtype` | string | Підтип MIME, наприклад, `jpeg` для **`TYPEIMAGE`**. |
| `id` | string | Значення `Content-ID`. |
| `description` | string | Значення `Content-Description`. |
| `disposition.type` | string | Значення "Content-Disposition", наприклад, "attachment". |
| `disposition` | array | Асоціативний масив (array) імен параметрів Content-Disposition та їх значень. |
| `contents.data` | string | Корисне навантаження. |
| `lines` | int | Розмір корисного навантаження у рядках. |
| `bytes` | int | Розмір корисного навантаження у байтах. |
| `md5` | string | Контрольна сума MD5 корисного навантаження. |

**Структура масиву тіла**

### Значення, що повертаються

Повертає MIME-повідомлення у вигляді рядка (string) або **`false`**
у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **imap_mail_compose()****

` <?php$envelope["from"]u003d "joe@example.com";$envelope["to"] u003d "foo@example.com";$envelope["cc"]  u003d "bar@example.com ";$part1["type"] u003d TYPEMULTIPART;$part1["subtype"] u003d "mixed";$filename u003d "/tmp/imap.c.gz";$fp u003d fopen($filename, "r") ;$contents u003d fread($fp, filesize($filename));fclose($fp);$part2["type"] u003d TYPEAPPLICATION;$part2["encoding"] u003d ENCBINARY;$part2["subtype"] u003d "octet-stream";$part2["description"] u003d basename($filename);$part2["contents.data"] u003d $contents;$part3["type"] u003d TYPETEXT;$part3["subtype"] u003d "plain";$part3["description"] u003d "description3";$part3["contents.data"] u003d "contents.data3


";$body[1] u003d $part1;$body[2] u003d $part2;$body[3] u003d $part3;echo nl2br(imap_mail_compose($envelope, $body));?> `
