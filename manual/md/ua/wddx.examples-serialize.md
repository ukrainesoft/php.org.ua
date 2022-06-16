- [« Приклади](wddx.examples.md)
- [Функції WDDX »](ref.wddx.md)

- [PHP Manual](index.md)
- [Приклади](wddx.examples.md)
- Приклади wddx

## Приклади wddx

Усі функції, що серіалізують змінні, використовують перший елемент масиву
для визначення, у що повинен бути серіалізований масив, масив або
структуру. Якщо перший елемент має рядковий ключ, то він буде
серіалізований у структуру, інакше масив.

**Приклад #1 Серіалізація одне значення за допомогою WDDX**

`<?phpecho wddx_serialize_value("PHP to WDDX packet example", "PHP packet");?> `

Цей приклад створює:

<wddxPacket versionu003d'1.0'><header commentu003d'PHP packet'/><data>
<string>PHP to WDDX packet example</string></data></wddxPacket>

**Приклад #2 Використання інкрементальних пакетів WDDX**

` <?php$pi u003d 3.1415926;$packet_id u003d wddx_packet_start("PHP");wddx_add_vars($packet_id, "pi");/* Предпожим, за завжди| ", "Novato", "Seattle");wddx_add_vars($packet_id, "cities");$packet u003d wddx_packet_end($packet_id);echo $packet;?> `

Цей приклад створює:

<wddxPacket versionu003d'1.0'><header commentu003d'PHP'/><data><struct>
<var nameu003d'pi'><number>3.1415926</number></var><var nameu003d'cities'>
<array lengthu003d'3'><string>Austin</string><string>Novato</string>
<string>Seattle</string></array></var></struct></data></wddxPacket>

> **Примітка**:
>
> Рядки повинні бути закодовані в UTF-8; для роботи з іншими
> кодуванням спочатку перетворіть рядок за допомогою функції
> [mb_convert_encoding()](function.mb-convert-encoding.md),
> [UConverter::transcode()](uconverter.transcode.md) або
> [iconv()](function.iconv.md).
