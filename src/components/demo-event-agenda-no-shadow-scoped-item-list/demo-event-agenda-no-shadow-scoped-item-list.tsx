import { Component, Prop, h } from '@stencil/core'
import { DemoEventAgendaItem } from '../../functional-components/demo-event-agenda-item/demo-event-agenda-item'
import { Talk } from '../../models/Talk'

@Component({
  tag: 'demo-event-agenda-no-shadow-scoped-item-list',
  styleUrl: 'demo-event-agenda-no-shadow-scoped-item-list.scss',
  shadow: false,
  scoped: true,
})
export class DemoEventAgendaNoShadowScopedItemList {
  @Prop() talks: Talk[]

  render() {
    return (
      <div class="demo-event-agenda-no-shadow-scoped-item-list">
        <div class="alert alert-warning">This alert should include global (Bootstrap) styles!</div>
        {this.talks.map(talk => (
          <DemoEventAgendaItem talk={talk} />
        ))}
      </div>
    )
  }
}
