# Знакомство с CSS и продолжение HTML

## Отчет по Лаб. №4
## ст. Бондарь С.А.
## гр. АСБ-3-036

------------

### Код задачи:

<!-- HTML -->
```html
<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Love Sins</title>
    <link rel="stylesheet" href="lab4.css">
</head>
<body>
    <div>
        <h1>The Life of</h1>
        <h2>ITUshnik</h2>
	<img src="exsi.png" width="210px">
        <h3>Экси</h3>
	<h3>2022</h3>
    </div>
	<p><a href="https://music.yandex.ru/album/22599911" target="_blank"><span>	Плейлист</span></a> <span>для учёбы на чилле</span></p>
    	<p>Один раз послушал - семь раз забил</p>
</body>
</html>
```

<!-- CSS -->
```html
body {
  
}

img {
  width: 210px;
}

h1, h2, h3 {
  color: Fuchsia;
}

div {
  background-image: url('w1.png');
  background-size: cover;
  width: 500px;
  height: 500px;
  margin: 0 auto 20px;
  text-align: center;
}

h1 {
  font-size: 31px;
  text-transform: uppercase;
  font-style: italic;
  font-weight: normal;
  padding-top: 45px;
  margin-top: 0;
}

h2 {
  font-size: 31px;
  margin-bottom: 10px;
}

h3 {
  font-family: 'Inter', sans-serif;
  font-size: 20px;
  text-transform: uppercase;
  line-height: 18px;
  font-weight: normal;
  margin: 0;
  margin-top: -10;
}

img {
  margin-bottom: 40px;
}

p {
  margin: 0;
  line-height: 2;
  text-align: center;
  color: Fuchsia;
}
```

### Вывод задачи:

![alt](imgs/go.png)
