- [« Константа SNI (Server Name Indication)] (openssl.constsni.md)
- [Параметри ключа/сертифіката »](openssl.certparams.md)

- [PHP Manual](index.md)
- [Предвизначені константи](openssl.constants.md)
- Інші константи

## Інші константи

**`OPENSSL_RAW_DATA`** (bool)
Якщо **`OPENSSL_RAW_DATA`** встановлена в
[openssl_encrypt()](function.openssl-encrypt.md) або
[openssl_decrypt()](function.openssl-decrypt.md), дані, що повертаються
повертаються як є. Якщо константа не вказана, що викликає стороні
повертаються дані у кодуванні Base64.

**`OPENSSL_ZERO_PADDING`** (bool)
За замовчуванням операції шифрування доповнюються стандартним наповненням.
блоку, а заповнення перевіряється та видаляється при дешифруванні. Якщо
**`OPENSSL_ZERO_PADDING`** встановлено в `options` функції
[openssl_encrypt()](function.openssl-encrypt.md) або
[openssl_decrypt()](function.openssl-decrypt.md), то заповнення не
виконується, загальний обсяг зашифрованих або розшифрованих даних повинен
бути кратним розміру блоку, інакше виникне помилка.

**`OPENSSL_ENCODING_SMIME`** (int)
Вказує, що використовується кодування S/MIME.

**`OPENSSL_ENCODING_DER`** (int)
Вказує, що використовується кодування DER (Distinguished Encoding)
Rules).

**`OPENSSL_ENCODING_PEM`** (int)
Вказує, що використовується кодування PEM (Privacy-Enhanced Mail).
