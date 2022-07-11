- [« Callback-функції](yaml.callbacks.md)
- [Публікуючі callback-функції »](yaml.callbacks.emit.md)

- [PHP Manual](index.md)
- [Callback-функції](yaml.callbacks.md)
- Callback-функції парсингу

## Callback-функції парсингу

Callback-функцій (callback) для парсингу викликається функціями
[yaml_parse()](function.yaml-parse.md),
[yaml_parse_file()](function.yaml-parse-file.md) або
[yaml_parse_url()](function.yaml-parse-url.md) під час виявлення
зареєстрований тег YAML. У callback-функцію передається значення
тегований запис, сам тег і прапори, що визначають скалярний тип запису.
Callback-функція повинна повернути дані, які парсер YAML повинен
використовувати для цього запису.

**Приклад #1 Приклад використання callback-функції парсингу**

`<?php/** * Callback-функція парсингу для тегів yaml. * @param mixed $value Данные из файла yaml * @param string $tag Тег, для которого срабатывает функция * @param int $flags Стиль скаляра записи (смотрите YAML_*_SCALAR_STYLE) * @return mixed Значение, которое должен выдать парсер YAML */ function tag_callback ($value, $tag, $flags) { var_dump(func_get_args()); // налагодження  return "Hello {$value}";}$yaml u003d <<<YAMLgreeting: !example/hello WorldYAML;$result u003d yaml_parse($yaml, 0, $ndocs, array(  ! 'tag_callback',  ));var_dump($result);?> `

Результатом виконання цього прикладу буде щось подібне:

array(3) {
[0]u003d>
string(5) "World"
[1]u003d>
string(14) "!example/hello"
[2]u003d>
int(1)
}
array(1) {
["greeting"]u003d>
string(11) "Hello World"
}
