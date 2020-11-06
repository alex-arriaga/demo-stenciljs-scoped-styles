import { FunctionalComponent, h } from '@stencil/core'
// import ImageUtils from '../../helpers/ImageUtils';
import DateUtils from '../../helpers/DateUtils'
import { Talk } from '../../models/Talk'

interface DemoEventAgendaItemProps {
  talk: Talk
}

const getNavigationURL = (talk: Talk) => `/program/talk/${talk.slug}`

export const DemoEventAgendaItem: FunctionalComponent<DemoEventAgendaItemProps> = ({ talk }) => {
  return (
    <article class="demo-event-item" key={talk.id}>
      <div class="demo-event-item-header__date">
        <span class="demo-event-item-header__time">
          {DateUtils.formatDate(talk.starts_at, 'YYYY-MM-DD HH:mm:ss', 'HH:mm')}
          &nbsp;-&nbsp;
          {DateUtils.formatDate(talk.ends_at, 'YYYY-MM-DD HH:mm:ss', 'HH:mm')}
        </span>
      </div>

      <div class="demo-event-item__body">
        <div>
          <a href={getNavigationURL(talk)}>{/*<img src={ImageUtils.fixImageURL(talk.thumbnail)} class="demo-event-item__image" />*/}</a>
        </div>
        <div>
          <span class="demo-event-item__place text-uppercase">{talk.room.name}</span>
          <a href={getNavigationURL(talk)}>
            <h4 class="demo-event-item__title">{talk.title}</h4>
          </a>
          <p>
            <strong>
              <i class="fa fa-microphone" aria-hidden="true"></i> Speaker:{' '}
            </strong>
            <span class="demo-event-item__speaker">{talk.speaker.name}</span>
          </p>
          <p class="demo-event-item__summary">{talk.summary}</p>
        </div>
      </div>
    </article>
  )
}
