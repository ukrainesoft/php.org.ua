- [«
sodium_crypto_secretstream_xchacha20poly1305_init_pull](function.sodium-crypto-secretstream-xchacha20poly1305-init-pull.md)
- [sodium_crypto_secretstream_xchacha20poly1305_keygen
»](function.sodium-crypto-secretstream-xchacha20poly1305-keygen.md)

- [PHP Manual](index.md)
- [Функції Sodium](ref.sodium.md)
- Ініціалізує контекст secretstream для шифрування

# sodium_crypto_secretstream_xchacha20poly1305_init_push

(PHP 7 \>u003d 7.2.0, PHP 8)

sodium_crypto_secretstream_xchacha20poly1305_init_push — Ініціалізує
контекст secretstream для шифрування

### Опис

**sodium_crypto_secretstream_xchacha20poly1305_init_push**(string
`$key`): array

Ініціалізує контекст secretstream для шифрування

### Список параметрів

`key`
Ключ криптографії. Дивіться
[sodium_crypto_secretstream_xchacha20poly1305_keygen()](function.sodium-crypto-secretstream-xchacha20poly1305-keygen.md).

### Значення, що повертаються

Масив із двома рядковими значеннями:

- Стан secretstream, необхідний подальших дій
- Заголовок secretstream, який необхідно надати одержувачу,
щоб він міг витягувати дані.

### Приклади

**Приклад #1 Приклад використання
**sodium_crypto_secretstream_xchacha20poly1305_init_push()****

` <?phpfunction encrypt_file(string $inputFilePath, string $outputFilePath, string $key): void{    [$state, $header] u003d sodium_crypto_secretstream_xchacha_0poly13pusy $inputFile u003dfopen($inputFilePath, rb'); $outputFile u003dfopen($outputFilePath, wb'); // Запис заголовка:   fwrite($outputFile, $header); $inputFileSizeu003du003dfstat($inputFile)['size']; // Зашифровка файла і запис його вмісту в вихідний файл:    for ($i u003d 0; $i < $inputFileSize; $i +u003d 8175)    $ctxt_chunku003du003dsodium_crypto_secretstream_xchacha20poly1305_push($state, $ptxt_chunk); fwrite($outputFile, $ctxt_chunk); } Sodium_memzero($state); fclose($inputFile); fclose($outputFile);}// sodium_crypto_secretstream_xchacha20poly1305_keygen()$key u003d sodium_base642bin('MS0lzb7HC+thY6jY01pkTE/cwsQxnRq0/2L1eL4Hxn8u003d', SODIUM_BASE64_VARIANT_ORIGINAL);file_put_contents('hello.txt', 'Hello world!');encrypt_file('hello .txt', 'hello.txt.encrypted', $key);var_dump(sodium_bin2hex(file_get_contents('hello.txt.encrypted')));?> `

Результатом виконання цього прикладу буде щось подібне:

string(106) "971e33b255f0990ef3931caf761c59136efa77b434832f28ec719e3ff73f5aec38b3bba1574ab5b70a8844d8da36a668e2
