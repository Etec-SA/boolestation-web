import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const VerticalLogicTimeLine = () => {
  interface HistoryItem {
    title: string;
    subTitle: string;
    content: string;
    date: string;
  }

  const historyItems: HistoryItem[] = [
    { title: 'Aristóteles', subTitle: 'Grécia Antiga', content: 'Aristóteles cria sua teoria dos silogismos e seu "Órganon", a teoria da lógica.', date: '150 a.C' },
    { title: 'Aristóteles', subTitle: 'Grécia Antiga', content: 'Aristóteles cria sua teoria dos silogismos e seu "Órganon", a teoria da lógica.', date: '150 a.C' },
    { title: 'Aristóteles', subTitle: 'Grécia Antiga', content: 'Aristóteles cria sua teoria dos silogismos e seu "Órganon", a teoria da lógica.', date: '150 a.C' },
    { title: 'Aristóteles', subTitle: 'Grécia Antiga', content: 'Aristóteles cria sua teoria dos silogismos e seu "Órganon", a teoria da lógica.', date: '150 a.C' },
    { title: 'Aristóteles', subTitle: 'Grécia Antiga', content: 'Aristóteles cria sua teoria dos silogismos e seu "Órganon", a teoria da lógica.', date: '150 a.C' },
  ]

  return (
    <VerticalTimeline lineColor={'#f1f1f1'}>
      {
        historyItems.map((item, idx) => {
          let mainColor = idx % 2 === 0 ? '#3F6004' : '#9D0101';
          return (
            <VerticalTimelineElement
              key={idx}
              className='vertical-timeline-element--work'
              contentStyle={{ background: mainColor, color: '#fff' }}
              date={item.date}
              iconStyle={{ background: mainColor }}
            >
              <h3 className="vertical-timeline-element-title">{item.title}</h3>
              <h4 className="vertical-timeline-element-subtitle italic">{item.subTitle}</h4>
              <p>
                {item.content}
              </p>
            </VerticalTimelineElement>
          );
        })
      }
      <VerticalTimelineElement
        key={99}
        iconStyle={{ background: '#3f6911' }}
      />
    </VerticalTimeline >
  )
}

export default VerticalLogicTimeLine;
