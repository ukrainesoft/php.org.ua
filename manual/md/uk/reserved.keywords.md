- [« Список зарезервованих слів](reserved.md)
- [Предвизначені класи »](reserved.classes.md)

- [PHP Manual](index.md)
- [Список зарезервованих слів](reserved.md)
- Список ключових слів

## Список ключових слів

Ці слова мають спеціальне значення в PHP. Деякі з них
є речі, які виглядають як функції, деякі схожі
на константи і так далі, але вони не є насправді.
Вони – конструкції мови. Наступні слова не можна використовувати як
констант, імен класів чи імен функцій. Однак вони дозволені як
імен властивостей, констант та методів класів, інтерфейсів та трейтів, за
винятком те, що `class` неспроможна використовуватися як ім'я константи.

| | | | | |
|------------------------------------------------- -------------------------------------------------- --------------|----------------------------------- ---------------------|---------------------------- --------------------------------|----------------- -------------------------------------------------- ---|---------------------------------------------- -------------------|
| [\_\_halt_compiler()](function.halt-compiler.md) | [abstract](language.oop5.abstract.md) | [and](language.operators.logical.md) | [array()](function.array.md) | [as](control-structures.foreach.md) |
| [break](control-structures.break.md) | [callable](language.types.callable.md) | [case](control-structures.switch.md) | [catch](language.exceptions.md) | [class](language.oop5.basic.md#language.oop5.basic.class) |
| [clone](language.oop5.cloning.md) | [const](language.oop5.constants.md) | [continue](control-structures.continue.md) | [Declare](control-structures.declare.md) | [default](control-structures.switch.md) |
| [die()](function.die.md) | [do](control-structures.do.while.md) | [Echo](function.echo.md) | [else](control-structures.else.md) | [elseif](control-structures.elseif.md) |
| [empty()](function.empty.md) | [enddeclare](control-structures.declare.md) | [endfor](control-structures.alternative-syntax.md) | [endforeach](control-structures.alternative-syntax.md) | [endif](control-structures.alternative-syntax.md) |
| [endswitch](control-structures.alternative-syntax.md) | [endwhile](control-structures.alternative-syntax.md) | [eval()](function.eval.md) | [exit()](function.exit.md) | [extends](language.oop5.basic.md#language.oop5.basic.extends) |
| [final](language.oop5.final.md) | [finally](language.exceptions.md) | [fn](functions.arrow.md) (починаючи з PHP 7.4) | [for](control-structures.for.md) | [foreach](control-structures.foreach.md) |
| [function](functions.user-defined.md) | [global](language.variables.scope.md) | [goto](control-structures.goto.md) | [if](control-structures.if.md) | [implements](language.oop5.interfaces.md) |
| [include](function.include.md) | [include_once](function.include-once.md) | [instanceof](language.operators.type.md) | [insteadof](language.oop5.traits.md#language.oop5.traits.conflict) | [interface](language.oop5.interfaces.md) |
| [isset()](function.isset.md) | [list()](function.list.md) | [match](control-structures.match.md) (починаючи з PHP 8.0) | [namespace](language.namespaces.md) | [new](language.oop5.basic.md#language.oop5.basic.new) |
| [or](language.operators.logical.md) | [print](function.print.md) | [private](language.oop5.visibility.md) | [protected](language.oop5.visibility.md) | [public](language.oop5.visibility.md) |
| [readonly](language.oop5.properties.md#language.oop5.properties.readonly-properties) (починаючи з PHP 8.1.0) \* | [require](function.require.md) | [require_once](function.require-once.md) | [return](function.return.md) | [Static](language.variables.scope.md) |
| [switch](control-structures.switch.md) | [throw](language.exceptions.md) | [trait](language.oop5.traits.md) | [try](language.exceptions.md) | [unset()](function.unset.md) |
| [use](language.namespaces.md) | [var](language.oop5.properties.md) | [while](control-structures.while.md) | [xor](language.operators.logical.md) | [yield](language.generators.md) |
| [yield from](language.generators.syntax.md#control-structures.yield.from) | | | | |

**Зарезервовані слова в PHP**

\* Ключове слово `readonly` можна використовувати як ім'я функції.

| | | | | | |
|------------------------------------------------- ----------|--------------------------------------- --------------|----------------------------------- -----------------|-------------------------------- ------------------------|------------------------- ---------------------------|---------------------- --------------------------------|
| [\_\_CLASS\_\_](language.constants.predefined.md) | [\_\_DIR\_\_](language.constants.predefined.md) | [\_\_FILE\_\_](language.constants.predefined.md) | [\_\_FUNCTION\_\_](language.constants.predefined.md) | [\_\_LINE\_\_](language.constants.predefined.md) | [\_\_METHOD\_\_](language.constants.predefined.md) |
| [\_\_NAMESPACE\_\_](language.namespaces.nsconstants.md) | [\_\_TRAIT\_\_](language.constants.predefined.md) | | | | |

**Константи етапу компіляції**
