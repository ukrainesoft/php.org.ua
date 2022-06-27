- [« JsonSerializable](class.jsonserializable.md)
- [Функції JSON »](ref.json.md)

- [PHP Manual](index.md)
- [JsonSerializable](class.jsonserializable.md)
- Задає дані, які мають бути серіалізовані у JSON

# JsonSerializable::jsonSerialize

(PHP 5 \>u003d 5.4.0, PHP 7, PHP 8)

JsonSerializable::jsonSerialize — Задає дані, які мають бути
серіалізовані в JSON

### Опис

public **JsonSerializable::jsonSerialize**():
[mixed](language.types.declarations.md#language.types.declarations.mixed)

Серіалізує об'єкт у значення, яке спочатку може бути
серіалізовано функцією [json_encode()](function.json-encode.md).

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає дані, які можуть бути серіалізовані
[json_encode()](function.json-encode.md), які є значенням
будь-якого типу, крім [resource](language.types.resource.md).

### Приклади

**Приклад #1 Приклад використання **JsonSerializable::jsonSerialize()**,
повертає масив (array)**

` <?phpclass ArrayValue implements JsonSerializable {    public function __construct(array $array) {       $this->array u003d $array; }    public function jsonSerialize() {        return $this->array; }}$array u003d [1, 2, 3];echo json_encode(new ArrayValue($array), JSON_PRETTY_PRINT);?> `

Результат виконання цього прикладу:

[
1,
2,
3
]

**Приклад #2 Приклад використання **JsonSerializable::jsonSerialize()**,
повертає асоціативний масив (array)**

` <?phpclass ArrayValue implements JsonSerializable {    public function __construct(array $array) {       $this->array u003d $array; }    public function jsonSerialize() {        return $this->array; }}$array u003d ['foo' u003d> 'bar', 'quux' u003d> 'baz'];echo json_encode(new ArrayValue($array), JSON_PRETTY_PRINT);?> `

Результат виконання цього прикладу:

{
"foo": "bar",
"quux": "baz"
}

**Приклад #3 Приклад використання **JsonSerializable::jsonSerialize()**,
повертає ціле значення (int)**

`<?phpclass IntegerValue implements JsonSerializable {    public function __construct($number) {       $this->number u003d (integer) $number; }    public function jsonSerialize() {        return $this->number; }}echo json_encode(new IntegerValue(1), JSON_PRETTY_PRINT);?> `

Результат виконання цього прикладу:

1

**Приклад #4 Приклад використання **JsonSerializable::jsonSerialize()**,
повертає рядок (string)**

` <?phpclass StringValue implements JsonSerializable {    public function __construct($string) {        $this->string u003d (string) $string; }    public function jsonSerialize() {        return $this->string; }}echo json_encode(new StringValue('Hello!'), JSON_PRETTY_PRINT);?> `

Результат виконання цього прикладу:

"Hello!"
