import { Component, h } from '@stencil/core'

@Component({
  tag: 'demo-footer',
  styleUrl: 'demo-footer.scss',
})
export class DemoFooter {
  render() {
    return <footer class="b-footer mt-5 p-3"></footer>
  }
}
