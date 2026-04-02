import * as d3 from 'd3';
import { BaseChart } from './base-chart';

// A specific data structure for our bar chart
export interface BarChartData {
  name: string;
  value: number;
}

export class BarChart extends BaseChart<BarChartData> {
  private xScale!: d3.ScaleBand<string>;
  private yScale!: d3.ScaleLinear<number, number>;
  private xAxisGroup!: d3.Selection<SVGGElement, unknown, HTMLElement|null, undefined>;
  private yAxisGroup!: d3.Selection<SVGGElement, unknown, HTMLElement|null, undefined>;

  constructor(container: HTMLElement, initialData: BarChartData[]) {
    super(container, initialData);
    this.render(); // Perform the initial render
  }

  /**
   * Sets up the scales and axes for the initial render.
   */
  public render(): void {
    // 1. Setup Scales
    this.xScale = d3.scaleBand()
      .range([0, this.width])
      .padding(0.2);

    this.yScale = d3.scaleLinear()
      .range([this.height, 0]);

    // 2. Setup Axes
    this.xAxisGroup = this.chartGroup.append('g')
      .attr('class', 'x-axis')
      .attr('transform', `translate(0, ${this.height})`);

    this.yAxisGroup = this.chartGroup.append('g')
      .attr('class', 'y-axis');

    // 3. Initial drawing of the chart elements
    this.update(this.data);
  }

  /**
   * Handles data updates, re-rendering the chart.
   */
  public update(newData: BarChartData[]): void {
    this.data = newData;

    // 1. Update scale domains
    this.xScale.domain(this.data.map(d => d.name));
    this.yScale.domain([0, d3.max(this.data, d => d.value) ?? 0]);

    // 2. Update axes with a smooth transition
    this.xAxisGroup.transition().duration(750).call(d3.axisBottom(this.xScale));
    this.yAxisGroup.transition().duration(750).call(d3.axisLeft(this.yScale));

    // 3. D3 Data Join for the bars
    const bars = this.chartGroup.selectAll<SVGRectElement, BarChartData>('rect')
      .data(this.data, d => d.name); // A key function is crucial for object constancy

    // EXIT selection (remove old bars that are no longer in the data)
    bars.exit()
      .transition().duration(750)
      .attr('y', this.height)
      .attr('height', 0)
      .remove();

    // UPDATE selection (update existing bars)
    bars.transition().duration(750)
      .attr('x', d => this.xScale(d.name)!)
      .attr('y', d => this.yScale(d.value))
      .attr('width', this.xScale.bandwidth())
      .attr('height', d => this.height - this.yScale(d.value));

    // ENTER selection (add new bars for new data points)
    bars.enter().append('rect')
      .attr('x', d => this.xScale(d.name)!)
      .attr('width', this.xScale.bandwidth())
      .attr('fill', '#007bff')
      .attr('y', this.height) // Start new bars from the bottom
      .attr('height', 0)      // with zero height
      .transition().duration(750) // and transition them into place
      .attr('y', d => this.yScale(d.value))
      .attr('height', d => this.height - this.yScale(d.value));
  }
}
