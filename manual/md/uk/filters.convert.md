- [« Рядкові фільтри](filters.string.md)
- [компресійні фільтри »](filters.compression.md)

- [PHP Manual](index.md)
- [Список доступних фільтрів](filters.md)
- Перетворюючі фільтри

## Перетворюючі фільтри

Як і фільтри string.\*, фільтри convert.\* здійснюють дії,
відповідні їхнім іменам. Для отримання додаткової інформації про
конкретному фільтрі, зверніться до сторінки посібника відповідної
функції.

## convert.base64-encode та convert.base64-decode

Використання цих фільтрів еквівалентно обробці всіх даних потоку
функціями [base64_encode()](function.base64-encode.md) та
[base64_decode()](function.base64-decode.md) відповідно.
`convert.base64-encode` підтримує аргументи, передані у вигляді
асоціативного масиву. Якщо вказано аргумент `line-length`, результат
base64 буде поділено на шматки довгої `line-length` символів кожен.
Якщо вказано аргумент `line-break-chars`, кожен шматок буде поділено
вказаними символами. Ці параметри дають такий самий ефект, як і
використання [base64_encode()](function.base64-encode.md) у парі з
[chunk_split()](function.chunk-split.md).

**Приклад #1 convert.base64-encode та convert.base64-decode**

` <?php$fp u003dfopen('php://output', 'w');stream_filter_append($fp, 'convert.base64-encode');fwrite($fp, "This is a test.
");fclose($fp);/* Виведе: VGhpcyBpcyBhIHRlc3QuCgu003du003d */$param u003d array('line-length' u003d> 8, 'line-break-chars' u003d> "
");$fp u003d fopen('php://output', 'w');stream_filter_append($fp, 'convert.base64-encode', STREAM_FILTER_WRITE, $param);fwrite($fp, "This t .
");fclose($fp);/* Выведет:  VGhpcyBp          :  cyBhIHRl          :  c3QuCgu003du003d  */$fp u003d fopen('php://output', 'w');stream_filter_append($fp, 'convert.base64- decode');fwrite($fp, "VGhpcyBpcyBhIHRlc3QuCgu003du003d");fclose($fp);/* Виведе: This is a test.

## convert.quoted-printable-encode та convert.quoted-printable-decode

Використання decode-версії цього фільтра еквівалентно обробці всіх
даних потоку функцією
[quoted_printable_decode()](function.quoted-printable-decode.md). У
фільтра `convert.quoted-printable-encode` не має еквівалентної функції.
`convert.quoted-printable-encode` підтримує аргументи, передані в
вигляді асоціативного масиву. На додаток до аргументів, що підтримуються
`convert.base64-encode`, `convert.quoted-printable-encode` також
підтримує boolean-аргументи `binary` та `force-encode-first`.
`convert.base64-decode` підтримує лише аргумент `line-break-chars` у
як підказки для чищення закодованих даних.

**Приклад #2 convert.quoted-printable-encode &
convert.quoted-printable-decode**

` <?php$fp u003dfopen('php://output', 'w');stream_filter_append($fp, 'convert.quoted-printable-encode');fwrite($fp, "This is a test.
");/* Виведе:  u003dThis is a test.u003d0A  */?> `

## convert.iconv.\*

Фільтри `convert.iconv.*` доступні, якщо включена підтримка
[iconv](book.iconv.md) та їх використання аналогічно обробці
потокових даних за допомогою [iconv()](function.iconv.md). Ці фільтри
не підтримують параметри. Натомість очікується, що вихідна та
цільове кодування були задані в імені фільтра таким чином:
`convert.iconv.<input-encoding>.<output-encoding>` або
`convert.iconv.<input-encoding>/<output-encoding>` (обидва варіанти
семантично еквівалентні).

**Приклад #3 convert.iconv.\***

` <?php$fp u003dfopen('php://output', 'w');stream_filter_append($fp, 'convert.iconv.utf-16le.utf-8');fwrite($fp, "T h i s   i s a t e s t .
"); fclose ($ fp); / * Виведе: This is a test. * *?
