# [Painter](https://jeffren716.github.io/Painter/)

![Painter](https://i.imgur.com/Ve4Gu7x.png)

## Background and overview

Users can paint with a variety of colors, sizes, and brushes.  Also features
touch support.

## Architecture and Technology

* Vanilla JS
* canvas for rendering
* webpack to bundle

## Timeline and Implementation

Created this application from pure JavaScript, HTML5 Canvas, and CSS3.  The first
problems arose with making sure the canvas would correctly draw lines as the mouse
tracked across the screen.  The following is an example function that was called
upon an onclick event listener:

```JavaScript
function pen() {
  canvas.onmousedown = event => {
    paint = true;
    ctx.lineWidth = brushSize;
    ctx.lineJoin = 'round';
    ctx.moveTo(event.clientX - canvas.offsetLeft, event.clientY - canvas.offsetTop);
  };

  canvas.ontouchstart = event => {
    paint = true;
    ctx.lineWidth = brushSize;
    ctx.lineJoin = 'round';
    ctx.moveTo(event.touches[0].clientX - canvas.offsetLeft, event.touches[0].clientY - canvas.offsetTop);
  };

  canvas.onmousemove = event => {
    if (paint) {
      ctx.lineTo(event.clientX - canvas.offsetLeft, event.clientY - canvas.offsetTop);
      ctx.strokeStyle = lineColor;
      ctx.stroke();
    }
  };

  canvas.ontouchmove = event => {
    if (paint) {
      ctx.lineTo(event.touches[0].clientX - canvas.offsetLeft, event.touches[0].clientY - canvas.offsetTop);
      ctx.strokeStyle = lineColor;
      ctx.stroke();
    }
  };

  canvas.onmouseup = () => {
    paint = false;
  };

  canvas.ontouchend = () => {
    paint = false;
  };
}
```

This function utilizes the HTML5 Canvas methods to draw a continuous line based on
the line between previous points and creating the stroke between them.  This snippet
also showcases the touch support utilizing the ontouchstart and ontouchmove methods.

The different types of strokes are based on this structure with changes to the stroke
based on what tool is being used.  This is where the more creative parts of my code
came into play.  Changing the stroke styles allowed for a lot of experimentation and really highlighted the extent to which Canvas allowed.  Below is a snippet from the
web stroke style:

```JavaScript
canvas.onmousemove = event => {
  if (paint) {
    line.push({ x: event.clientX - canvas.offsetLeft, y: event.clientY - canvas.offsetTop });

    ctx.beginPath();
    ctx.moveTo(line[line.length - 2].x, line[line.length - 2].y);
    ctx.lineTo(line[line.length - 1].x, line[line.length - 1].y);
    ctx.strokeStyle = lineColor;
    ctx.lineWidth = 1;
    ctx.stroke();

    for (var i = 0; i < line.length; i++) {
      let dx = line[i].x - line[line.length - 1].x;
      let dy = line[i].y - line[line.length - 1].y;
      let d = (dx ** 2) + (dy ** 2);

      if (d < 5000) {
        ctx.beginPath();
        ctx.strokeStyle = lineColor;
        ctx.moveTo(line[line.length - 1].x + (dx * 0.2), line[line.length - 1].y + (dy * 0.2));
        ctx.lineTo(line[i].x - (dx * (brushSize / 10)), line[i].y - (dy * (brushSize / 10)));
        ctx.stroke();
      }

    }
  }
};
```

The result was a very cool effect where multiple lines would be drawn between points
that weren't necessarily close to each other.  Furthermore, by adding the brushSize
variable into account, the webbing effect could be increased or decreased on the creators discretion.

Overall, this project was a great way to fiddle around with vanilla JS and DOM manipulation.  Furthermore, this project has the potential for a plethora of features that can be added.  It was definitely a great resource for learning how to use Canvas and will continue to be a playground of sorts when I want to experiment with it.

## Bonus features

* Allow for undo and redo
* Allow for a slider for sizes and a color wheel for colors
* Allow for more brush types
* Better touch support
