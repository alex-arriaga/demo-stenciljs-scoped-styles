import { Component, h } from '@stencil/core'

@Component({
  tag: 'demo-loader',
  styleUrl: 'demo-loader.scss',
})
export class DemoLoader {
  render() {
    return (
      <div class="demo-loading">
        <div class="logo">Sweet!</div>
        <svg class="spinner" viewBox="25 25 50 50">
          <circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="2" stroke-miter-limit="10" />
        </svg>
      </div>
    )
  }
}
