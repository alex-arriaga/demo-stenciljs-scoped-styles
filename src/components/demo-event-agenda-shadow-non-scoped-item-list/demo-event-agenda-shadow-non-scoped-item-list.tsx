import { Component, Prop, h } from '@stencil/core'
import { DemoEventAgendaItem } from '../../functional-components/demo-event-agenda-item/demo-event-agenda-item'
import { Talk } from '../../models/Talk'

@Component({
  tag: 'demo-event-agenda-shadow-non-scoped-item-list',
  styleUrl: 'demo-event-agenda-shadow-non-scoped-item-list.scss',
  shadow: true,
  scoped: false,
})
export class DemoEventAgendaShadowNonScopedItemList {
  @Prop() talks: Talk[]

  render() {
    return (
      <div class="demo-event-agenda-shadow-non-scoped-item-list">
        <div class="alert alert-danger">
          This alert should <strong>NOT</strong> include global (Bootstrap) styles!
        </div>
        {this.talks.map(talk => (
          <DemoEventAgendaItem talk={talk} />
        ))}
      </div>
    )
  }
}
