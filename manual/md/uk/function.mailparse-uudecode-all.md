- [«mailparse_stream_encode](function.mailparse-stream-encode.md)
- [Математичні модулі»](refs.math.md)

- [PHP Manual](index.md)
- [Mailparse](ref.mailparse.md)
- Сканує дані із зазначеного файлу та витягує всі вкладені
файли, кодовані в uuencode

#mailparse_uudecode_all

(PECL mailparse \>u003d 0.9.0)

mailparse_uudecode_all — Сканує дані із вказаного файлу та
витягує всі вкладені файли, кодовані в uuencode

### Опис

**mailparse_uudecode_all**(resource `$fp`): array

Сканує дані із вказаного файлу та витягує всі вкладені файли,
кодовані в uuencode, у тимчасові файли.

### Список параметрів

`fp`
Файловий дескриптор.

### Значення, що повертаються

Повертає асоціативний масив, що містить інформацію щодо вилучених
файлів.

| | |
|----------------|-------------------------------- --------------------------|
| `filename` | Шлях до створеного тимчасового файлу
| `origfilename` | Оригінальне ім'я файлу тільки для кодованих uuencode |

Перший елемент міститиме тіло повідомлення. Усі наступні -
інформацію щодо вилучених вкладень.

### Приклади

**Приклад #1 Приклад використання **mailparse_uudecode_all()****

`` <?php$text u003d <<<EODTo:fred@example.comhello,this is some text hello.blah blah blah.begin 644 test.txt/u003d&AI<R!I<R!A('1E<W0 *`endEOD;$fp u003d tmpfile();fwrite($fp, $text);$data u003d mailparse_uudecode_all($fp);echo "BODY
";readfile($data[0]["filename"]);echo "UUE ({$data[1]['origfilename']})
";readfile($data[1]["filename"]);// Очищаємоunlink($data[0]["filename"]);unlink($data[1]["filename"]);?> ``

Результат виконання цього прикладу:

BODY
To: fred@example.com

hello, this is some text hello.
blah blah blah.

UUE (test.txt)
this is a test
