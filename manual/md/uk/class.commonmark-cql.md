- [«CommonMark\Parser::finish](commonmark-parser.finish.md)
- [CommonMark\CQL::\_\_construct »](commonmark-cql.construct.md)

- [PHP Manual](index.md)
- [CommonMark](book.cmark.md)
- Клас CommonMark\CQL

# Клас CommonMark\CQL

(cmark \>u003d 1.1.0)

## Вступ

CommonMark Query Language – це DSL для опису того, як проходити
через дерево вузлів CommonMark, реалізоване у вигляді синтаксичного
аналізатора та компілятора для невеликого набору інструкцій, та
віртуальної машини для виконання цих інструкцій.

##### Шляхи:

У найбільш спрощеній формі запит CQL поєднує такі шляхи і `/`,
щоб описати, як пересуватися по дереву:

- firstChild
- LastChild
- previous
- next
- parent

Наприклад, `/firstChild/lastChild` переміщатиметься до останнього
дочірньому вузлу першого дочірнього вузла.

##### Цикли

CQL може бути заданий цикл, наприклад, через дочірні елементи або
дочірні елементи до певного вузла з використанням шляху 'children'
або `siblings`. Наприклад, `/firstChild/children` буде переміщатися по
всім дочірнім елементам першого дочірнього вузла.

##### Підзапити

CQL можна проінструктувати, як переміщатися, використовуючи підзапит,
такий як `[/firstChild]`. Наприклад, `/firstChild/children[/firstChild]`
перейде до першого дочірнього вузла всіх дочірніх вузлів першого дочірнього
вузла.

##### Обмеження циклів

Під час циклу CQL може бути проінструктований обмежувати пройдений
шлях до вузлів певного типу. Наприклад, `/children(BlockQuote)`
буде переміщатися до дочірніх елементів вузла, де типом є
`BlockQuote`. Наступні типи розпізнаються (без урахування регістру):

- BlockQuote
- List
- Item
- CodeBlock
- HtmlBlock
- CustomBlock
- Paragraph
- Heading
- ThematicBreak
- Text
- SoftBreak
- LineBreak
- Code
- HtmlInline
- CustomInline
- Emphasis
- Strong
- Link
- Image

Типи можуть використовуватись як об'єднання, наприклад,
`/children(BlockQuote|List)` переміщатиметься до дочірніх елементів
вузла, де типом є `BlockQuote` або `List`. Типи чи об'єднання
Типи також можуть бути скасовані. Наприклад, `/children(~BlockQuote)`
буде переміщатися до дочірніх елементів вузла, де тип не є
`BlockQuote`, а `/children(~BlockQuote|Paragraph)` буде переміщатися до
дочірнім вузлам, де тип не є `BlockQuote` або `Paragraph`.

##### Обмеження шляхів

CQL можна доручити створити цикл для переміщення до певного вузла
типу за певним шляхом. Наприклад, `/firstChild(BlockQuote)` перейде
до першого дочірнього вузла з типом `BlockQuote`. Зверніть увагу, що
як і інші цикли, для `children` та `siblings`, цей тип шляху може
супроводжуватися лише підзапитом.

##### Зауваження щодо реалізації

Хоча CQL реалізований як частина модуля PHP CommonMark, він стоїть окремо
від PHP і не використовує віртуальну машину PHP або внутрішнє
уявлення значень.

## Огляд класів

class **CommonMark\CQL** {

/\* Конструктор \*/

public [\_\_construct](commonmark-cql.construct.md)(string `$query`)

/\* Методи \*/

public
[\_\_invoke](commonmark-cql.invoke.md)([CommonMark\Node](class.commonmark-node.md)
`$root`, [callable](language.types.callable.md) `$handler`)

}

## Зміст

- [CommonMark\CQL::\_\_construct](commonmark-cql.construct.md) -
Конструктор класу CQL
- [CommonMark\CQL::\_\_invoke](commonmark-cql.invoke.md) -
Виконання CQL
