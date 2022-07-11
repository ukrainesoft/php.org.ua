- [« sodium_crypto_secretbox](function.sodium-crypto-secretbox.md)
- [sodium_crypto_secretstream_xchacha20poly1305_init_push
»](function.sodium-crypto-secretstream-xchacha20poly1305-init-push.md)

- [PHP Manual](index.md)
- [Функції Sodium](ref.sodium.md)
- Ініціалізує контекст secretstream для дешифрування

# sodium_crypto_secretstream_xchacha20poly1305_init_pull

(PHP 7 \>u003d 7.2.0, PHP 8)

sodium_crypto_secretstream_xchacha20poly1305_init_pull — Ініціалізує
контекст secretstream для дешифрування

### Опис

**sodium_crypto_secretstream_xchacha20poly1305_init_pull**(string
`$header`, string `$key`): string

Ініціалізує контекст secretstream для дешифрування

### Список параметрів

`header`
Заголовок secretstream. Має бути одне із значень, створених
[sodium_crypto_secretstream_xchacha20poly1305_init_push()](function.sodium-crypto-secretstream-xchacha20poly1305-init-push.md).

`key`
Ключ шифрування (256 біт).

### Значення, що повертаються

Стан secretstream.

### Приклади

**Приклад #1 Приклад використання
**sodium_crypto_secretstream_xchacha20poly1305_init_pull()****

`<?phpfunction decrypt_file(string $inputFilePath, string $outputFilePath, string $key): void{   $inputFile u003d fopen($inputFilePath, 'rb'); $outputFile u003dfopen($outputFilePath, wb'); $headeru003du003dfread($inputFile,24); $stateu003du003dsodium_crypto_secretstream_xchacha20poly1305_init_pull($header, $key); $inputFileSizeu003du003dfstat($inputFile)['size']; // Розшифровка файлу і запис вміст в вихідний файл:   for ($i u003d 24; $i < $inputFileSize; $i +u003d 8192)    // Ми не не використовуємо $tag, но в реальних протоколах ви можете використовувати його для шифрування, наприклад,         // ініціювати зміну ключа  Потім при розшифровці Ви можете підтвердити поведінку. [$ptxt_chunk, $tag] u003d sodium_crypto_secretstream_xchacha20poly1305_pull($state, $ctxt_chunk); fwrite($outputFile, $ptxt_chunk); } Sodium_memzero($state); fclose($inputFile); fclose($outputFile);}// sodium_crypto_secretstream_xchacha20poly1305_keygen()$key u003d sodium_base642bin('MS0lzb7HC+thY6jY01pkTE/cwsQxnRq0/2L1eL4Hxn8u003d', SODIUM_BASE64_VARIANT_ORIGINAL);$example u003d sodium_hex2bin('971e33b255f0990ef3931caf761c59136efa77b434832f28ec719e3ff73f5aec38b3bba1574ab5b70a8844d8da36a668e802cfea2c');file_put_contents('hello.enc', $ example);decrypt_file('hello.enc', 'hello.txt.decrypted', $key);var_dump(file_get_contents('hello.txt.decrypted'));?> `

Результатом виконання цього прикладу буде щось подібне:

string(12) "Hello world!"
