- [« Типи ресурсів](v8js.resources.md)
- [V8Js »](class.v8js.md)

- [PHP Manual](index.md)
- [V8js](book.v8js.md)
- Приклади

# Приклади

Основи використання

**Приклад #1 Запуск Javascript**

`<?php$v8 u003d new V8Js();/* basic.js */$JS u003d <<< EOTlen u003d print('Hello' + ' ' + 'World!' + "\n");len;EOT ;try { var_dump($v8->executeString($JS, 'basic.js'));} catch (V8JsException $e) { var_dump($e);}?> `

Результат виконання цього прикладу:

Hello World!
int(13)
