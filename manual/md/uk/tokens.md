- [« Таблиця порівняння типів у PHP](types.comparisons.md)
- [Інструкція з назви »](userlandnaming.md)

- [PHP Manual](index.md)
- [Appendices](appendices.md)
- Список тегів (tokens) парсера

# Список тегів (tokens) парсера

Різні частини мови PHP внутрішньо представлені токенами. Фрагмент
коду, що містить неприпустиму послідовність токенів, може призвести
до таких помилок, як
`Parse error: syntax error, unexpected token "u003du003d", expecting "(" in script.php on line 10."`,
де токен `u003du003d` внутрішньо представлений як **`T_IS_EQUAL`**.

У наведеній нижче таблиці перераховані всі токени. Вони також доступні як
константи PHP.

> **Примітка**: **Використання T\_\* констант**
>
> Значення T\_\* констант автоматично генеруються на базовій основі
> інфраструктури синтаксичного аналізатора PHP. Це означає, що
> конкретне значення мітки може змінюватися між двома версіями PHP.
> Це означає, що ваш код ніколи не повинен безпосередньо покладатися на
> вихідні значення T\_\*, взяті з версії PHP X.Y.Z, щоб забезпечити
> деяку сумісність між кількома версіями PHP.
>
> Щоб використовувати T\_\* константи у кількох версіях PHP,
> невизначені константи можуть бути визначені користувачем
> використанням великих чисел, таких як `10000`) з відповідним
> стратегією, яка працюватиме як з версіями PHP, так і з
> значеннями T\_\*.
>
> ` <?php// До PHP 7.4.0 значення T_FN не визначено.defined('T_FN') || define('T_FN', 10001); `

| Мітка | Синтаксис Посилання |
|------------------------------------------------- |------------------------------|------------------ -------------------------------------------------- -------------------------------------------------- -------------------------------------------------- ----------|
| **`T_ABSTRACT`** | abstract | [Абстрактні класи](language.oop5.abstract.md) |
| **`T_AMPERSAND_FOLLOWED_BY_VAR_OR_VARARG`** | & | [Оголошення типів](language.types.declarations.md) (доступно, починаючи з PHP 8.1.0) |
| **`T_AMPERSAND_NOT_FOLLOWED_BY_VAR_OR_VARARG`** | & | [Оголошення типів](language.types.declarations.md) (доступно, починаючи з PHP 8.1.0) |
| **`T_AND_EQUAL`** | &u003d | [оператори привласнення](language.operators.assignment.md) |
| **`T_ARRAY`** | array() | [array()](function.array.md), [синтаксис масиву](language.types.array.md#language.types.array.syntax) |
| **`T_ARRAY_CAST`** | (Array) | [Приведення типу](language.types.type-juggling.md#language.types.typecasting) |
| **`T_AS`** | як | [foreach](control-structures.foreach.md) |
| **`T_ATTRIBUTE`** | #\[ | [attributes](language.attributes.md) (доступно з PHP 8.0.0) |
| **`T_BAD_CHARACTER`** | | все, що нижче за ASCII 32 виключаючи (0x09),
 (0x0a) та (0x0d) (доступно з PHP 7.4.0) |
| **`T_BOOLEAN_AND`** | && | [логічні оператори](language.operators.logical.md) |
| **`T_BOOLEAN_OR`** | \|\| | [логічні оператори](language.operators.logical.md) |
| **`T_BOOL_CAST`** | (bool) або (boolean) | [Приведення типу](language.types.type-juggling.md#language.types.typecasting) |
| **`T_BREAK`** | break | [break](control-structures.break.md) |
| **`T_CALLABLE`** | callable | [callable](language.types.callable.md) |
| **`T_CASE`** | case | [switch](control-structures.switch.md) |
| **`T_CATCH`** | catch | [Винятки](language.exceptions.md) |
| **`T_CLASS`** | class | [класи та об'єкти](language.oop5.md) |
| **`T_CLASS_C`** | \_\_CLASS\_\_ | [магічні константи](language.constants.predefined.md) |
| **`T_CLONE`** | clone | [класи та об'єкти](language.oop5.md) |
| **`T_CLOSE_TAG`** | ?\> чи %\> | [PHP-код усередині HTML](language.basic-syntax.phpmode.md) |
| **`T_COALESCE`** | ?? | [оператори порівняння](language.operators.comparison.md#language.operators.comparison.coalesce) |
| **`T_COALESCE_EQUAL`** | ??u003d | [оператори присвоєння](language.operators.assignment.md) (доступно з PHP 7.4.0) |
| **`T_COMMENT`** | // чи #, і /\* \*/ | [коментарі](language.basic-syntax.comments.md) |
| **`T_CONCAT_EQUAL`** | .u003d | [оператори привласнення](language.operators.assignment.md) |
| **`T_CONST`** | const | [константи класу](language.constants.md) |
| **`T_CONSTANT_ENCAPSED_STRING`** | "foo" або "bar" | [рядковий синтаксис](language.types.string.md#language.types.string.syntax) |
| **`T_CONTINUE`** | continue | [continue](control-structures.continue.md) |
| **`T_CURLY_OPEN`** | {$ | [Змінні всередині рядки](language.types.string.md#language.types.string.parsing.complex) |
| **`T_DEC`** | - | [оператори інкременту\декременту](language.operators.increment.md) |
| **`T_DECLARE`** | Declare | [Declare](control-structures.declare.md) |
| **`T_DEFAULT`** | default | [switch](control-structures.switch.md) |
| **`T_DIR`** | \_\_DIR\_\_ | [магічні константи](language.constants.predefined.md) |
| **`T_DIV_EQUAL`** | /u003d | [оператори привласнення](language.operators.assignment.md) |
| **`T_DNUMBER`** | 0.12 і т.д. | [числа з плаваючою точкою](language.types.float.md) |
| **`T_DO`** | do | [do..while](control-structures.do.while.md) |
| **`T_DOC_COMMENT`** | /\*\* \*/ | [PHPDoc-коментарі](language.basic-syntax.comments.md) |
| **`T_DOLLAR_OPEN_CURLY_BRACES`** | ${ | [змінна всередині рядка](language.types.string.md#language.types.string.parsing.complex) |
| **`T_DOUBLE_ARROW`** | u003d\> | [синтаксис масивів](language.types.array.md#language.types.array.syntax) |
| **`T_DOUBLE_CAST`** | (real), (double) або (float) | [Приведення типів](language.types.type-juggling.md#language.types.typecasting) |
| **`T_DOUBLE_COLON`** | :: | дивіться нижче **`T_PAAMAYIM_NEKUDOTAYIM`** |
| **`T_ECHO`** | echo | [Echo](function.echo.md) |
| **`T_ELLIPSIS`** | ... | [аргументи функції](functions.arguments.md#functions.variable-arg-list) |
| **`T_ELSE`** | else | [else](control-structures.else.md) |
| **`T_ELSEIF`** | elseif | [elseif](control-structures.elseif.md) |
| **`T_EMPTY`** | empty | [empty()](function.empty.md) |
| **`T_ENCAPSED_AND_WHITESPACE`** | "$a" | [константна частина рядка зі змінними](language.types.string.md#language.types.string.parsing) |
| **`T_ENDDECLARE`** | enddeclare | [declare](control-structures.declare.md), [альтернативний синтаксис](control-structures.alternative-syntax.md) |
| **`T_ENDFOR`** | endfor | [for](control-structures.for.md), [альтернативний синтаксис](control-structures.alternative-syntax.md) |
| **`T_ENDFOREACH`** | endforeach | [foreach](control-structures.foreach.md), [альтернативний синтаксис](control-structures.alternative-syntax.md) |
| **`T_ENDIF`** | endif | [if](control-structures.if.md), [альтернативний синтаксис](control-structures.alternative-syntax.md) |
| **`T_ENDSWITCH`** | endswitch | [switch](control-structures.switch.md), [альтернативний синтаксис](control-structures.alternative-syntax.md) |
| **`T_ENDWHILE`** | endwhile | [while](control-structures.while.md), [альтернативний синтаксис](control-structures.alternative-syntax.md) |
| **`T_ENUM`** | enum | [Перелічення](language.types.enumerations.md) (доступно, починаючи з PHP 8.1.0) |
| **`T_END_HEREDOC`** | | [синтаксис heredoc](language.types.string.md#language.types.string.syntax.heredoc) |
| **`T_EVAL`** | eval() | [eval()](function.eval.md) |
| **`T_EXIT`** | exit чи die | [exit()](function.exit.md), [die()](function.die.md) |
| **`T_EXTENDS`** | extends | [extends](language.oop5.basic.md#language.oop5.basic.extends), [класи та об'єкти](language.oop5.md) |
| **`T_FILE`** | \_\_FILE\_\_ | [магічні константи](language.constants.predefined.md) |
| **`T_FINAL`** | final | [Ключове слово final](language.oop5.final.md) |
| **`T_FINALLY`** | finally | [Винятки](language.exceptions.md) |
| **`T_FN`** | fn | [Стрілкові функції](functions.arrow.md) (доступно з PHP 7.4.0) |
| **`T_FOR`** | для | [for](control-structures.for.md) |
| **`T_FOREACH`** | foreach | [foreach](control-structures.foreach.md) |
| **`T_FUNCTION`** | функція | [функції](language.functions.md) |
| **`T_FUNC_C`** | \_\_FUNCTION\_\_ | [магічні константи](language.constants.predefined.md) |
| **`T_GLOBAL`** | Global | [область видимості змінної](language.variables.scope.md) |
| **`T_GOTO`** | goto | [goto](control-structures.goto.md) |
| **`T_HALT_COMPILER`** | \_\_halt_compiler() | [\_\_halt_compiler](function.halt-compiler.md) |
| **`T_IF`** | if | [if](control-structures.if.md) |
| **`T_IMPLEMENTS`** | implements | [Інтерфейси об'єктів](language.oop5.interfaces.md) |
| **`T_INC`** | ++ | [оператори інкременту\декременту](language.operators.increment.md) |
| **`T_INCLUDE`** | include() | [include](function.include.md) |
| **`T_INCLUDE_ONCE`** | include_once() | [include_once](function.include-once.md) |
| **`T_INLINE_HTML`** | | [текст поза PHP](language.basic-syntax.phpmode.md) |
| **`T_INSTANCEOF`** | встанівід | [оператори типу](language.operators.type.md) |
| **`T_INSTEADOF`** | insteadof | [Трейти](language.oop5.traits.md) |
| **`T_INTERFACE`** | interface | [Інтерфейси об'єктів](language.oop5.interfaces.md) |
| **`T_INT_CAST`** | (int) чи (integer) | [Приведення типів](language.types.type-juggling.md#language.types.typecasting) |
| **`T_ISSET`** | isset() | [isset()](function.isset.md) |
| **`T_IS_EQUAL`** | u003du003d | [Оператори порівняння](language.operators.comparison.md) |
| **`T_IS_GREATER_OR_EQUAL`** | \>u003d | [Оператори порівняння](language.operators.comparison.md) |
| **`T_IS_IDENTICAL`** | u003du003du003d | [Оператори порівняння](language.operators.comparison.md) |
| **`T_IS_NOT_EQUAL`** | !u003d чи \<\> | [Оператори порівняння](language.operators.comparison.md) |
| **`T_IS_NOT_IDENTICAL`** | !u003du003d | [Оператори порівняння](language.operators.comparison.md) |
| **`T_IS_SMALLER_OR_EQUAL`** | \<u003d | [Оператори порівняння](language.operators.comparison.md) |
| **`T_LINE`** | \_\_LINE\_\_ | [магічні константи](language.constants.predefined.md) |
| **`T_LIST`** | list() | [list()](function.list.md) |
| **`T_LNUMBER`** | 123, 012, 0x1ac і т.д. | [цілі числа](language.types.integer.md) |
| **`T_LOGICAL_AND`** | і | [логічні оператори](language.operators.logical.md) |
| **`T_LOGICAL_OR`** | або | [логічні оператори](language.operators.logical.md) |
| **`T_LOGICAL_XOR`** | xor | [логічні оператори](language.operators.logical.md) |
| **`T_MATCH`** | match | [match](control-structures.match.md) (доступно з PHP 8.0.0) |
| **`T_METHOD_C`** | \_\_METHOD\_\_ | [магічні константи](language.constants.predefined.md) |
| **`T_MINUS_EQUAL`** | -u003d | [оператори привласнення](language.operators.assignment.md) |
| **`T_MOD_EQUAL`** | % u003d | [оператори привласнення](language.operators.assignment.md) |
| **`T_MUL_EQUAL`** | \*u003d | [оператори привласнення](language.operators.assignment.md) |
| **`T_NAMESPACE`** | namespace | [простір імен](language.namespaces.md) |
| **`T_NAME_FULLY_QUALIFIED`** | \App\Namespace | [простір імен](language.namespaces.md) (доступно, починаючи з PHP 8.0.0) |
| **`T_NAME_QUALIFIED`** | App\Namespace | [простір імен](language.namespaces.md) (доступно, починаючи з PHP 8.0.0) |
| **`T_NAME_RELATIVE`** | namespace\Namespace | [простір імен](language.namespaces.md) (доступно, починаючи з PHP 8.0.0) |
| **`T_NEW`** | New | [класи та об'єкти](language.oop5.md) |
| **`T_NS_C`** | \_\_NAMESPACE\_\_ | [простір імен](language.namespaces.md) |
| **`T_NS_SEPARATOR`** | \ | [простір імен](language.namespaces.md) |
| **`T_NUM_STRING`** | "$a\[0\]" | [цифровий індекс масиву всередині рядка](language.types.string.md#language.types.string.parsing) |
| **`T_OBJECT_CAST`** | (object) | [Приведення типів](language.types.type-juggling.md#language.types.typecasting) |
| **`T_OBJECT_OPERATOR`** | -\> | [класи та об'єкти](language.oop5.md) |
| **`T_NULLSAFE_OBJECT_OPERATOR`** | ?-\> | [класи та об'єкти](language.oop5.md) |
| **`T_OPEN_TAG`** | \<?php, \<? чи \<% | [PHP-код усередині HTML](language.basic-syntax.phpmode.md) |
| **`T_OPEN_TAG_WITH_ECHO`** | \<?u003d або \<%u003d | [PHP-код усередині HTML](language.basic-syntax.phpmode.md) |
| **`T_OR_EQUAL`** | \|u003d | [оператори привласнення](language.operators.assignment.md) |
| **`T_PAAMAYIM_NEKUDOTAYIM`** | :: | [::](language.oop5.paamayim-nekudotayim.md). Також визначається як **`T_DOUBLE_COLON`**. |
| **`T_PLUS_EQUAL`** | +u003d | [оператори привласнення](language.operators.assignment.md) |
| **`T_POW`** | \*\* | [арифметичні оператори](language.operators.arithmetic.md) |
| **`T_POW_EQUAL`** | \*\*u003d | [оператори привласнення](language.operators.assignment.md) |
| **`T_PRINT`** | print() | [print](function.print.md) |
| **`T_PRIVATE`** | private | [класи та об'єкти](language.oop5.md) |
| **`T_PROTECTED`** | protected | [класи та об'єкти](language.oop5.md) |
| **`T_PUBLIC`** | public | [класи та об'єкти](language.oop5.md) |
| **`T_READONLY`** | readonly | [класи та об'єкти](language.oop5.md) (доступно, починаючи з PHP 8.1.0) |
| **`T_REQUIRE`** | require() | [require](function.require.md) |
| **`T_REQUIRE_ONCE`** | require_once() | [require_once](function.require-once.md) |
| **`T_RETURN`** | return | [повернені значення](functions.returning-values.md) |
| **`T_SL`** | \<\< | [побітові оператори](language.operators.bitwise.md) |
| **`T_SL_EQUAL`** | \<\<u003d | [оператори привласнення](language.operators.assignment.md) |
| **`T_SPACESHIP`** | \<u003d\> | [Оператори порівняння](language.operators.comparison.md) |
| **`T_SR`** | \>\> | [побітові оператори](language.operators.bitwise.md) |
| **`T_SR_EQUAL`** | \>\>u003d | [оператори привласнення](language.operators.assignment.md) |
| **`T_START_HEREDOC`** | \<\<\< | [синтаксис heredoc](language.types.string.md#language.types.string.syntax.heredoc) |
| **`T_STATIC`** | static | [область видимості змінної](language.variables.scope.md) |
| **`T_STRING`** | parent, self тощо. ідентифікатори, наприклад, ключові слова на кшталт `parent` та `self`, сюди підходять також імена функцій, класів та деякі інші. Читайте також **`T_CONSTANT_ENCAPSED_STRING`** |
| **`T_STRING_CAST`** | (string) | [Приведення типів](language.types.type-juggling.md#language.types.typecasting) |
| **`T_STRING_VARNAME`** | "${a | [змінні рядки](language.types.string.md#language.types.string.parsing.complex) |
| **`T_SWITCH`** | switch | [switch](control-structures.switch.md) |
| **`T_THROW`** | throw | [Винятки](language.exceptions.md) |
| **`T_TRAIT`** | trait | [Трейти](language.oop5.traits.md) |
| **`T_TRAIT_C`** | \_\_TRAIT\_\_ | [\_\_TRAIT\_\_]() |
| **`T_TRY`** | try | [Винятки](language.exceptions.md) |
| **`T_UNSET`** | unset() | [unset()](function.unset.md) |
| **`T_UNSET_CAST`** | (unset) | [Приведення типів](language.types.type-juggling.md#language.types.typecasting) |
| **`T_USE`** | use | [простір імен](language.namespaces.md) |
| **`T_VAR`** | var | [класи та об'єкти](language.oop5.md) |
| **`T_VARIABLE`** | $foo | [Змінні](language.variables.md) |
| **`T_WHILE`** | while | [while](control-structures.while.md), [do..while](control-structures.do.while.md) |
| **`T_WHITESPACE`** |
                      | |
| **`T_XOR_EQUAL`** | ^u003d | [оператори привласнення](language.operators.assignment.md) |
| **`T_YIELD`** | yield | [генератори](language.generators.syntax.md#control-structures.yield) |
| **`T_YIELD_FROM`** | yield from | [generators](language.generators.syntax.md#control-structures.yield.from) |

**Мітки**

Також дивіться [token_name()](function.token-name.md).
