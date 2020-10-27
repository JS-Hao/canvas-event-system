import { idToRgba } from '../helpers';
import Base from './Base';

interface RectProps {
  x: number;
  y: number;
  width: number;
  height: number;
  strokeWidth?: number;
  strokeColor?: string;
  fillColor?: string;
}

export default class Rect extends Base {
  constructor(private props: RectProps) {
    super();
    this.props.fillColor = this.props.fillColor || '#fff';
    this.props.strokeColor = this.props.strokeColor || '#000';
    this.props.strokeWidth = this.props.strokeWidth || 1;
  }

  draw(ctx: CanvasRenderingContext2D, osCtx: OffscreenCanvasRenderingContext2D) {
    const { x, y, width, height, strokeColor, strokeWidth, fillColor } = this.props;

    ctx.save();
    ctx.beginPath();
    ctx.strokeStyle = strokeColor;
    ctx.lineWidth = strokeWidth;
    ctx.fillStyle = fillColor;
    ctx.rect(x, y, width, height);
    ctx.fill();
    ctx.stroke();
    ctx.restore();

    const [r, g, b, a] = idToRgba(this.id);

    osCtx.save();
    osCtx.beginPath();
    osCtx.strokeStyle = `rgba(${r}, ${g}, ${b}, ${a})`;
    osCtx.fillStyle = `rgba(${r}, ${g}, ${b}, ${a})`;
    osCtx.rect(x, y, width, height);
    osCtx.fill();
    osCtx.stroke();
    osCtx.restore();
  }
}
