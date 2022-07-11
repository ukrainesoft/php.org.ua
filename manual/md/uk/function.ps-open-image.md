- [«ps_open_image_file](function.ps-open-image-file.md)
- [ps_open_memory_image »](function.ps-open-memory-image.md)

- [PHP Manual](index.md)
- [Функції PS](ref.ps.md)
- Зчитує зображення для подальшого розміщення

#ps_open_image

(PECL ps \>u003d 1.1.0)

ps_open_image — Зчитує зображення для подальшого розміщення

### Опис

**ps_open_image**(
resource `$psdoc`,
string `$type`,
string `$source`,
string `$data`,
int `$ lenght `,
int `$width`,
int `$height`,
int `$components`,
int `$bpc`,
string `$params`
): int

Зчитує зображення, яке вже є у пам'яті. Параметр `source`
нині немає і передбачається, що це `memory`.
Дані зображення є послідовністю пікселів,
що починається у верхньому лівому кутку і закінчується в правому нижньому
кутку. Кожен піксель складається з компонентів кольору (`components`) та у
кожного компонента є біти `bpc`.

### Список параметрів

`psdoc`
Ідентифікатор ресурсу PostScript, повернутий функцією
[ps_new()](function.ps-new.md).

`type`
Тип зображення. Можливі значення: `png`, `jpeg` або `eps`.

`source`
Не використовується.

`data`
Дані зображення.

`length`
Довжина даних зображення.

`width`
Ширина зображення.

`height`
Висота зображення.

`components`
Кількість компонентів кожного пікселя. Можливо: 1 (зображення в
градаціях сірого), 3 (зображення RGB) або 4 (зображення cmyk, rgba).

`bpc`
Кількість біт на компонент (найчастіше 8).

`params`

### Значення, що повертаються

Повертає ідентифікатор зображення або нуль у разі виникнення
помилки. Ідентифікатор – позитивне число більше 0.

### Дивіться також

- [ps_open_image_file()](function.ps-open-image-file.md) - Відкриває
зображення з файлу
- [ps_place_image()](function.ps-place-image.md) - Розміщує
зображення на сторінці
- [ps_close_image()](function.ps-close-image.md) - Закриває
зображення та звільняє пам'ять
