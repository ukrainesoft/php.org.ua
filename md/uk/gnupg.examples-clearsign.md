- [« Приклади](gnupg.examples.md)
- [GnuPG Функції »](ref.gnupg.md)

- [PHP Manual](index.md)
- [Приклади](gnupg.examples.md)
- Прозоре підписування тексту

## Прозоре підписування тексту

Це приклад створення чистого підпису надісланого тексту.

**Приклад #1 Процедурний приклад створення чистого підпису GnuPG**

`<?php// ініціалізація GnuPG$res u003d gnupg_init();// на самому справі не потрібно. Clearsign по умолчаниюgnupg_setsignmode($res, GNUPG_SIG_MODE_CLEAR);// добавить ключ для подписания с паролем 'test'gnupg_addsignkey($res, "8660281B6051D071D94B5B230549F9DC851566DC", "test");// подписывание$signed u003d gnupg_sign($res, "просто тест" );echo $signed;?> `

**Приклад #2 Об'єктно-орієнтований приклад створення чистого підпису
GnuPG**

` <?php// новий клас$gnupg u003d new gnupg();// на самому справі не потрібно. Clearsign по умолчанию$gnupg->setsignmode(gnupg::SIG_MODE_CLEAR);// добавить ключ для подписания с паролем 'test'$gnupg->addsignkey("8660281B6051D071D94B5B230549F9DC851566DC", "test");// подписывание$signed u003d $gnupg- >sign("просто тест");echo $signed;?> `

**Приклад #3 keylistiterator**

Цей модуль також поставляється з Iterator для ключів.

`<?php// створюємо новий ітератор для включення в список всіх відкритих ключів, відповідають 'example'$iterator u003d new gnupg_keylistiterator("example")      " -> ".$userid."
";}?> `
