- [«Stomp::readFrame](stomp.readframe.md)
- [Stomp::setReadTimeout »](stomp.setreadtimeout.md)

- [PHP Manual](index.md)
- [Stomp](class.stomp.md)
- Надсилає повідомлення

# Stomp::send

#stomp_send

(PECL stomp \>u003d 0.1.0)

Stomp::send -- stomp_send — Надсилає повідомлення

### Опис

Об'єктно-орієнтований стиль (метод):

public **Stomp::send**(string `$destination`,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$msg`, array `$headers` u003d ?): bool

Процедурний стиль:

**stomp_send**(
resource `$link`,
string `$destination`,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$msg`,
array `$headers` u003d ?
): bool

Надсилає повідомлення брокеру повідомлень (Message Broker).

### Список параметрів

`link`
Тільки для процедурного стилю: ідентифікатор з'єднання stomp,
отриманий із [stomp_connect()](stomp.construct.md).

`destination`
Призначення для надсилання повідомлення.

`msg`
Повідомлення для надсилання.

`headers`
Асоціативний масив, що містить додаткові заголовки (приклад:
receipt).

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Приклади

Дивіться [stomp_ack()](stomp.ack.md).

### Примітки

> **Примітка**:
>
> Також може бути зазначений заголовок транзакції, що означає, що прийом
> повідомлення має бути частиною іменованої транзакції.

**Підказка**

Stomp асинхронний за своєю суттю. Синхронний зв'язок може бути реалізований
додаванням receipt-заголовка. Це змусить методи нічого не повертати,
доки сервер не підтвердить отримання повідомлення або не буде перевищено
час очікування повідомлення.
