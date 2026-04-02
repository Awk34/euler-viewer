import * as d3 from 'd3';

/**
 * Abstract Base Chart Class
 * Handles the generic setup for an SVG-based D3 chart.
 */
export abstract class BaseChart<T> {
  protected svg!: d3.Selection<SVGSVGElement, unknown, HTMLElement|null, undefined>;
  protected chartGroup!: d3.Selection<SVGGElement, unknown, HTMLElement|null, undefined>;
  protected width!: number;
  protected height!: number;
  protected margin = { top: 20, right: 20, bottom: 50, left: 60 };
  protected container!: HTMLElement;

    protected constructor(
        container: HTMLElement,
        protected data: T[]
    ) {
        this.container = container;
        this.init();
    }

  private init(): void {
    const container = d3.select(this.container);
    if (container.empty()) {
      console.error(`Container element '${this.container.nodeName}' not found.`);
      return;
    }

    // Clear any previous chart
    container.selectAll('*').remove();

    // Get dimensions from the container element
    const element = container.node() as HTMLElement;
    this.width = element.clientWidth - this.margin.left - this.margin.right;
    this.height = element.clientHeight - this.margin.top - this.margin.bottom;

    // Create the SVG element
    this.svg = container.append('svg')
      .attr('width', this.width + this.margin.left + this.margin.right)
      .attr('height', this.height + this.margin.top + this.margin.bottom);

    // Create a group for the chart content, translated by the margin
    this.chartGroup = this.svg.append('g')
      .attr('transform', `translate(${this.margin.left},${this.margin.top})`);
  }

  // Abstract methods to be implemented by concrete chart classes
  public abstract render(): void;
  public abstract update(newData: T[]): void;
}
