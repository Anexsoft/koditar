# KODITAR
A simple javascript script to make full name initial avatars.

## Example

```
window.onload = () => {
    const image = document.createElement('img');

    image.src = Koditar.render('Alberto Érnesto', {
        // image size
        size: 600,

        // font
        fontFamily: 'Calibri',
        fontSize: '100'
    });

    document.body.append(image);
};
```

<img src="resources/result.jpg">