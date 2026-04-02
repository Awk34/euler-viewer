import * as d3 from 'd3';
import { BaseChart } from './base-chart';

/**
 * A D3.js chart component that displays a single, large, updatable number.
 * It features an animated transition when the number changes.
 */
export class NumberChart extends BaseChart<number> {
  private textElement!: d3.Selection<SVGTextElement, unknown, HTMLElement|null, undefined>;

  constructor(container: HTMLElement, initialValue: number) {
    // We wrap the single number in an array to conform to BaseChart's data structure.
    super(container, [initialValue]);
    this.render();
  }

  /**
   * Sets up the text element for the initial render.
   */
  public render(): void {
    // Center the text element in the chart area.
    this.textElement = this.chartGroup.append('text')
      .attr('text-anchor', 'middle')
      .attr('dominant-baseline', 'central')
      .attr('transform', `translate(${this.width / 2}, ${this.height / 2})`)
      .style('font-weight', 'bold')
      .style('fill', '#333');

    // Perform the initial drawing of the number.
    this.update(this.data);
  }

  /**
   * Updates the displayed number with a transition.
   * This method implements the abstract update from BaseChart.
   * @param newData An array containing the new number to display (uses the first element).
   */
  public update(newData: number[]): void {
    if (!newData || newData.length === 0) {
      this.textElement.text(''); // Clear text if no data
      return;
    }

    const oldNumber = this.data[0] ?? 0;
    const newNumber = newData[0];
    this.data = newData;

    // Animate the number change using a tween function.
    this.textElement.transition()
      .duration(2)
      .tween('text', () => {
        const interpolator = d3.interpolate(oldNumber, newNumber);
        return (t: number) => {
          // Use d3.format for nice formatting (e.g., commas for thousands).
          this.textElement.text(d3.format(',.0f')(interpolator(t)));
        };
      })
      .on('end', () => this.adjustFontSize()); // Adjust size after transition.

    this.adjustFontSize();
  }

  /**
   * Dynamically adjusts the font size of the number to fit the container width.
   */
  private adjustFontSize(): void {
    const textNode = this.textElement.node();
    if (!textNode) return;

    const padding = 20; // 10px padding on each side
    const availableWidth = this.width - padding;

    this.textElement.style('font-size', '100px'); // Set a large temp size
    const textWidth = textNode.getBBox().width;
    this.textElement.style('font-size', null); // Remove temp size

    if (textWidth <= 0) return;

    const optimalSize = 100 * (availableWidth / textWidth);
    const finalSize = Math.min(120, Math.max(24, optimalSize)); // Clamp size

    this.textElement.style('font-size', `${finalSize}px`);
  }
}
