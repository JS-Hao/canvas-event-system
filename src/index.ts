import { Stage, Rect, Circle, EventNames } from './canvas-event-system';

const canvas = document.querySelector('#canvas') as HTMLCanvasElement;
const stage = new Stage(canvas);

const rect = new Rect({
  x: 50,
  y: 50,
  width: 250,
  height: 175,
  fillColor: 'green',
});

const circle = new Circle({
  x: 200,
  y: 200,
  radius: 100,
  fillColor: 'red',
});

rect.on(EventNames.mousedown, () => console.log('rect mousedown'));
rect.on(EventNames.mouseup, () => console.log('rect mouseup'));
rect.on(EventNames.mouseenter, () => console.log('rect mouseenter'));
rect.on(EventNames.click, () => console.log('rect click'));

circle.on(EventNames.click, () => console.log('circle click!!'));
circle.on(EventNames.mouseleave, () => console.log('circle mouseleave!'));

stage.add(rect);
stage.add(circle);
