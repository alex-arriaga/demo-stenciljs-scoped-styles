import { Component, State, h } from '@stencil/core'
import { TalksService } from '../../services/TalksService'
import { Talk } from '../../models/Talk'

@Component({
  tag: 'demo-event-agenda',
  styleUrl: 'demo-event-agenda.scss',
})
export class DemoEventAgenda {
  @State() talks: Array<Talk> = []
  @State() error = null
  @State() isLoaded = false

  componentDidLoad() {
    TalksService.getData().then(
      result => {
        this.isLoaded = true
        // Just showing two elements for simplicity of visualization of the rendered output
        this.talks = result.splice(0, 1)
      },
      // Note: it's important to handle errors here
      // instead of a catch() block so that we don't swallow
      // exceptions from actual bugs in components.
      error => {
        console.error('Error', error)
        this.isLoaded = false
        this.error = error
      },
    )
  }

  render() {
    if (this.error) {
      return <div>Error: {this.error.message}</div>
    } else if (!this.isLoaded) {
      return <demo-loader />
    } else {
      return (
        <section class="b-section b-section--agenda">
          <hr />

          <div class="row">
            <div class="col-12 col-sm-12 col-md-12 col-lg-6">
              <h3>
                Case 1 (<code>shadow: false</code>, <code>scoped: false</code>)
              </h3>
              <demo-event-agenda-no-shadow-non-scoped-item-list talks={this.talks}></demo-event-agenda-no-shadow-non-scoped-item-list>
            </div>
            <div class="col-12 col-sm-12 col-md-12 col-lg-6">
              This example:
              <ul>
                <li>Inherits styles from Bootstrap</li>
                <li>Inherits styles from Font Awesome</li>
                <li>
                  Inherits styles declared Stencil's
                  <a href="https://stenciljs.com/docs/styling#global-styles" target="_blank">
                    {' '}
                    "global styles"
                  </a>{' '}
                  (e. g. the white background in items)
                </li>
                <li>
                  Creates a <code>style</code> block in the <code>head</code>
                </li>
                <li>Doesn't add an extra CSS class for scoping the web component</li>
                <li>
                  Styles the web component with just <code>.demo-event-item</code>
                </li>
              </ul>
            </div>
          </div>

          <hr />

          <div class="row">
            <div class="col-12 col-sm-12 col-md-12 col-lg-6">
              <h3>
                Case 2 (<code>shadow: false</code>, <code>scoped: true</code>)
              </h3>
              <demo-event-agenda-no-shadow-scoped-item-list talks={this.talks}></demo-event-agenda-no-shadow-scoped-item-list>
            </div>
            <div class="col-12 col-sm-12 col-md-12 col-lg-6">
              This example:
              <ul>
                <li>Inherits styles from Bootstrap</li>
                <li>Inherits styles from Font Awesome</li>
                <li>
                  Inherits styles declared Stencil's
                  <a href="https://stenciljs.com/docs/styling#global-styles" target="_blank">
                    {' '}
                    "global styles"
                  </a>{' '}
                  (e. g. the white background in items)
                </li>
                <li>
                  Creates a <code>style</code> block in the <code>head</code>
                </li>
                <li>
                  <strong>Creates an extra CSS class</strong> for scoping the web component (see <code>`.demo-event-item.sc-demo-event-agenda-no-shadow-scoped-item-list`</code>)
                </li>
              </ul>
            </div>
          </div>

          <hr />

          <div class="row">
            <div class="col-12 col-sm-12 col-md-12 col-lg-6">
              <h3>
                Case 3 (<code>shadow: true</code>, <code>scoped: false</code>)
              </h3>
              <demo-event-agenda-shadow-non-scoped-item-list talks={this.talks}></demo-event-agenda-shadow-non-scoped-item-list>
            </div>
            <div class="col-12 col-sm-12 col-md-12 col-lg-6">
              This example:
              <ul>
                <li>
                  Does <strong>NOT</strong> inherit styles from Bootstrap
                </li>
                <li>
                  Does <strong>NOT</strong> inherit styles from Font Awesome
                </li>
                <li>
                  Does <strong>NOT</strong> inherit styles declared Stencil's
                  <a href="https://stenciljs.com/docs/styling#global-styles" target="_blank">
                    {' '}
                    "global styles"
                  </a>{' '}
                  (e. g. the white background in items, notice the background is the same color as the body's background)
                </li>
                <li>
                  Does <strong>NOT</strong> create a <code>style</code> block in the <code>head</code>
                </li>
                <li>
                  Does <strong>NOT</strong> create an extra CSS class for scoping the web component, because it is NOT needed at all with the Shadow DOM enabled!
                </li>
              </ul>
            </div>
          </div>

          <hr />

          <div class="row">
            <div class="col-12 col-sm-12 col-md-12 col-lg-6">
              <h3>
                Case 4 (<code>shadow: true</code>, <code>scoped: true</code>)
              </h3>
              Components cannot be "scoped" and "shadow" at the same time, they are mutually exclusive configurations.
            </div>
          </div>
        </section>
      )
    }
  }
}
