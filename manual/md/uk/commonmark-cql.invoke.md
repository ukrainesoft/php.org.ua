- [«CommonMark\CQL::\_\_construct](commonmark-cql.construct.md)
- [Функції CommonMark »](ref.cmark.md)

- [PHP Manual](index.md)
- [CommonMark\CQL](class.commonmark-cql.md)
- Виконання CQL

# CommonMark\CQL::\_\_invoke

(cmark \>u003d 1.1.0)

CommonMark\CQL::\_\_invoke — Виконання CQL

### Опис

public
**CommonMark\CQL::\_\_invoke**([CommonMark\Node](class.commonmark-node.md)
`$root`, [callable](language.types.callable.md) `$handler`)

Повинен викликати поточну функцію CQL у вказаному `root`, виконуючи
вказаний `handler` при вході в
[CommonMark\Node](class.commonmark-node.md).

### Список параметрів

`root`
кореневий вузол дерева

`handler`
повинен мати прототип:

**handler**([CommonMark\Node](class.commonmark-node.md) `$root`,
[CommonMark\Node](class.commonmark-node.md) `$entering`): ?bool

- Якщо `handler` нічого не повертає (void) або повертає null, CQL
продовжить виконання
- Якщо обробник поверне справжнє значення, CQL продовжить виконання
- Якщо обробник повертає помилкове значення, CQL припинить виконання
