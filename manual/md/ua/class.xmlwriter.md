- [« Робота з об'єктно-орієнтованим
API](example.xmlwriter-oop.md)
- [XMLWriter::endAttribute »](xmlwriter.endattribute.md)

- [PHP Manual](index.md)
- [XMLWriter](book.xmlwriter.md)
- Клас XMLWriter

# Клас XMLWriter

(PHP 5 u003d 5.1.2, PHP 7, PHP 8, PECL xmlwriter u003d 0.1.0)

## Вступ

## Огляд класів

class **XMLWriter** {

/\* Методи \*/

public [endAttribute](xmlwriter.endattribute.md)(): bool

public [endCdata](xmlwriter.endcdata.md)(): bool

public [endComment](xmlwriter.endcomment.md)(): bool

public [endDocument](xmlwriter.enddocument.md)(): bool

public [endDtd](xmlwriter.enddtd.md)(): bool

public [endDtdAttlist](xmlwriter.enddtdattlist.md)(): bool

public [endDtdElement](xmlwriter.enddtdelement.md)(): bool

public [endDtdEntity](xmlwriter.enddtdentity.md)(): bool

public [endElement](xmlwriter.endelement.md)(): bool

public [endPi](xmlwriter.endpi.md)(): bool

public [flush](xmlwriter.flush.md)(bool `$empty` u003d **`true`**):
string\|int

public [fullEndElement](xmlwriter.fullendelement.md)(): bool

public [openMemory](xmlwriter.openmemory.md)(): bool

public [openUri](xmlwriter.openuri.md)(string `$uri`): bool

public [outputMemory](xmlwriter.outputmemory.md)(bool `$flush` u003d
**`true`**): string

public [setIndent](xmlwriter.setindent.md)(bool `$enable`): bool

public [setIndentString](xmlwriter.setindentstring.md)(string
`$indentation`): bool

public [startAttribute](xmlwriter.startattribute.md)(string `$name`):
bool

public [startAttributeNs](xmlwriter.startattributens.md)(?string
`$prefix`, string `$name`, ?string `$namespace`): bool

public [startCdata](xmlwriter.startcdata.md)(): bool

public [startComment](xmlwriter.startcomment.md)(): bool

public [startDocument](xmlwriter.startdocument.md)(?string `$version`
u003d "1.0", ?string `$encoding` u003d **`null`**, ?string `$standalone` u003d
**`null`**): bool

public [startDtd](xmlwriter.startdtd.md)(string `$qualifiedName`,
?string `$publicId` u003d **`null`**, ?string `$systemId` u003d **`null`**):
bool

public [startDtdAttlist](xmlwriter.startdtdattlist.md)(string
`$name`): bool

public [startDtdElement](xmlwriter.startdtdelement.md)(string
`$qualifiedName`): bool

public [startDtdEntity](xmlwriter.startdtdentity.md)(string `$name`,
bool `$isParam`): bool

public [startElement](xmlwriter.startelement.md)(string `$name`): bool

public [startElementNs](xmlwriter.startelementns.md)(?string
`$prefix`, string `$name`, ?string `$namespace`): bool

public [startPi](xmlwriter.startpi.md)(string `$target`): bool

public [text](xmlwriter.text.md)(string `$content`): bool

public [writeAttribute](xmlwriter.writeattribute.md)(string `$name`,
string `$value`): bool

public [writeAttributeNs](xmlwriter.writeattributens.md)(
?string `$prefix`,
string `$name`,
?string `$namespace`,
string `$value`
): bool

public [writeCdata](xmlwriter.writecdata.md)(string `$content`): bool

public [writeComment](xmlwriter.writecomment.md)(string `$content`):
bool

public [writeDtd](xmlwriter.writedtd.md)(
string `$name`,
?string `$publicId` u003d **`null`**,
?string `$systemId` u003d **`null`**,
?string `$content` u003d **`null`**
): bool

public [writeDtdAttlist](xmlwriter.writedtdattlist.md)(string `$name`,
string `$content`): bool

public [writeDtdElement](xmlwriter.writedtdelement.md)(string `$name`,
string `$content`): bool

public [writeDtdEntity](xmlwriter.writedtdentity.md)(
string `$name`,
string `$content`,
bool `$isParam` u003d **`false`**,
?string `$publicId` u003d **`null`**,
?string `$systemId` u003d **`null`**,
?string `$notationData` u003d **`null`**
): bool

public [writeElement](xmlwriter.writeelement.md)(string `$name`,
?string `$content` u003d **`null`**): bool

public [writeElementNs](xmlwriter.writeelementns.md)(
?string `$prefix`,
string `$name`,
?string `$namespace`,
?string `$content` u003d **`null`**
): bool

public [writePi](xmlwriter.writepi.md)(string `$target`, string
`$content`): bool

public [writeRaw](xmlwriter.writeraw.md)(string `$content`): bool

}

## Зміст

- [XMLWriter::endAttribute](xmlwriter.endattribute.md) — Завершити
атрибут
- [XMLWriter::endCdata](xmlwriter.endcdata.md) — Завершити поточну
секцію CDATA
- [XMLWriter::endComment](xmlwriter.endcomment.md) — Завершити
коментар
- [XMLWriter::endDocument](xmlwriter.enddocument.md) — Завершити
поточний документ
- [XMLWriter::endDtd](xmlwriter.enddtd.md) — Завершити поточний DTD
- [XMLWriter::endDtdAttlist](xmlwriter.enddtdattlist.md) — Завершити
поточний список атрибутів DTD
- [XMLWriter::endDtdElement](xmlwriter.enddtdelement.md) — Завершити
поточний елемент DTD
- [XMLWriter::endDtdEntity](xmlwriter.enddtdentity.md) — Завершити
поточний запис DTD
- [XMLWriter::endElement](xmlwriter.endelement.md) — Завершити
поточний елемент
- [XMLWriter::endPi](xmlwriter.endpi.md) — Завершити поточну
інструкцію обробки (PI)
- [XMLWriter::flush](xmlwriter.flush.md) — Скинути поточний буфер
- [XMLWriter::fullEndElement](xmlwriter.fullendelement.md) -
Завершити поточний елемент
- [XMLWriter::openMemory](xmlwriter.openmemory.md) — Створити новий
об'єкт XMLWriter, використовуючи пам'ять для рядкового виводу
- [XMLWriter::openUri](xmlwriter.openuri.md) — Створити новий об'єкт
XMLWriter, використовуючи вихідний URI для виводу
- [XMLWriter::outputMemory](xmlwriter.outputmemory.md) — Повертає
поточний буфер
- [XMLWriter::setIndent](xmlwriter.setindent.md) — Увімкнути або
відключити відступи
- [XMLWriter::setIndentString](xmlwriter.setindentstring.md) -
Встановити рядок, який використовується для відступів
- [XMLWriter::startAttribute](xmlwriter.startattribute.md) — Створити
початковий атрибут
- [XMLWriter::startAttributeNs](xmlwriter.startattributens.md) -
Створити стартовий атрибут простору імен
- [XMLWriter::startCdata](xmlwriter.startcdata.md) — Створити
початковий тег CDATA
- [XMLWriter::startComment](xmlwriter.startcomment.md) — Створює
стартовий коментар
- [XMLWriter::startDocument](xmlwriter.startdocument.md) — Створити
тег документа
- [XMLWriter::startDtd](xmlwriter.startdtd.md) — Створити стартовий
DTD тег
- [XMLWriter::startDtdAttlist](xmlwriter.startdtdattlist.md) -
Створює стартовий перелік атрибутів DTD
- [XMLWriter::startDtdElement](xmlwriter.startdtdelement.md) -
Створити стартовий елемент DTD
- [XMLWriter::startDtdEntity](xmlwriter.startdtdentity.md) — Створити
стартовий запис DTD
- [XMLWriter::startElement](xmlwriter.startelement.md) — Створити
стартовий тег елемента
- [XMLWriter::startElementNs](xmlwriter.startelementns.md) — Створити
стартовий тег елемента простору імен
- [XMLWriter::startPi](xmlwriter.startpi.md) — Створити стартовий тег
PI
- [XMLWriter::text](xmlwriter.text.md) — Записати текст
- [XMLWriter::writeAttribute](xmlwriter.writeattribute.md) -
Записати повний атрибут
- [XMLWriter::writeAttributeNs](xmlwriter.writeattributens.md) -
Записати повний атрибут простору імен
- [XMLWriter::writeCdata](xmlwriter.writecdata.md) — Записати повний
тег CDATA
- [XMLWriter::writeComment](xmlwriter.writecomment.md) — Записати
повний тег коментаря
- [XMLWriter::writeDtd](xmlwriter.writedtd.md) — Записати повний тег
DTD
- [XMLWriter::writeDtdAttlist](xmlwriter.writedtdattlist.md) -
Записати повний тег DTD AttList
- [XMLWriter::writeDtdElement](xmlwriter.writedtdelement.md) -
Записати повний тег елемента DTD
- [XMLWriter::writeDtdEntity](xmlwriter.writedtdentity.md) -
Записати повний тег DTD запису
- [XMLWriter::writeElement](xmlwriter.writeelement.md) — Записати
повний тег елемент
- [XMLWriter::writeElementNs](xmlwriter.writeelementns.md) -
Записати повний простір імен тега елемента
- [XMLWriter::writePi](xmlwriter.writepi.md) — Записати інструкцію
обробки (PI)
- [XMLWriter::writeRaw](xmlwriter.writeraw.md) — Записати
необроблений XML-текст
