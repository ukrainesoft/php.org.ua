- [« Інтернет-сокети: TCP, UDP, SSL та TLS](transports.inet.md)
- [Таблиця порівняння типів у PHP »](types.comparisons.md)

- [PHP Manual](index.md)
- [Список підтримуваних транспортних протоколів](transports.md)
- Unix-сокети: UNIX та UDG

## Unix-сокети: UNIX та UDG

`unix://` та `udg://`

- `unix:///tmp/mysock`
- `udg:///tmp/mysock`

`unix://` дає можливість використовувати unix-сокети, а `udg://`
надає альтернативний спосіб передачі даних у них,
використанням протоколу користувача датаграм.

Unix-сокети, на відміну від Інтернет-сокетів, не вимагають вказівки порту. В
випадку [fsockopen()](function.fsockopen.md) параметр `portno` повинен
дорівнювати 0.

> **Примітка**: Unix-сокети не підтримуються у Windows.
