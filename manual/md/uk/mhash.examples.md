- [«Зумовлені константи](mhash.constants.md)
- [Функції Mhash »](ref.mhash.md)

- [PHP Manual](index.md)
- [Mhash](book.mhash.md)
- Приклади

# Приклади

**Приклад #1 Обчислення MD5 та HMAC та друк їх у шістнадцятковому вигляді**

`<?php$input u003d "what do ya want for nothing?";$hash u003d mhash(MHASH_MD5, $input);echo "Хеш MD5 - " . bin2hex($hash) . "<br />
";$hash u003d mhash(MHASH_MD5, $input, "Jefe");echo "Хеш HMAC - " . bin2hex($hash) . "<br />
";?> `

Результат виконання цього прикладу:

Хеш MD5 - d03cb659cbf9192dcd066272249f8412
Хеш HMAC - 750c783e6ab0b503eaa86e310a5db738
