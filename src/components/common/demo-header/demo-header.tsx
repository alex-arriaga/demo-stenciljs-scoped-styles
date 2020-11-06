import { Component, h } from '@stencil/core'

@Component({
  tag: 'demo-header',
  styleUrl: 'demo-header.scss',
})
export class DemoHeader {
  render() {
    return (
      <header class="b-header">
        <nav class="navbar navbar-expand-md navbar-light navbar-laravel b-navigation-bar">
          <div class="container">
            <a href="/">
              <span class="b-nav-link">StencilJS Styling Demo</span>
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav ml-auto">
                <li class="nav-item">
                  <a href="https://github.com/alex-arriaga/demo-stenciljs-scoped-styles" target="_blank">
                    <i class="fa fa-github-alt" aria-hidden="true"></i>
                    <span class="b-nav-link sr-only">See repository</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    )
  }
}
